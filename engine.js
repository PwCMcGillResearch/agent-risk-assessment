/* Pure assessment engine: no network, DOM, storage, or collection side effects. */
(function(root){'use strict';
const C=root.RISK_CONFIG,Q=Object.fromEntries(C.questions.map(q=>[q.id,q])),S=Object.fromEntries(C.survey.map(q=>[q.id,q]));
const facts=new Set([...Object.keys(Q),...Object.keys(C.deferred)]);
const value=(a,k)=>a[k]===undefined?null:a[k];
function evaluate(expr,a){
 if(expr===null||typeof expr==='boolean')return expr;
 if(typeof expr==='string'){if(Object.hasOwn(C.derived,expr))return evaluate(C.derived[expr],a);if(!facts.has(expr))throw Error('Unknown fact: '+expr);return value(a,expr);}
 const [op,items]=Object.entries(expr)[0];if(op==='not'){const v=evaluate(items,a);return v===null?null:!v;}
 const vs=items.map(x=>evaluate(x,a));if(op==='all')return vs.includes(false)?false:vs.includes(null)?null:true;
 if(op==='any')return vs.includes(true)?true:vs.includes(null)?null:false;throw Error('Invalid Boolean operator');
}
function leaves(expr){if(typeof expr==='string')return Object.hasOwn(C.derived,expr)?leaves(C.derived[expr]):[expr];if(!expr||typeof expr!=='object')return [];const [op,x]=Object.entries(expr)[0];return [...new Set(op==='not'?leaves(x):x.flatMap(leaves))];}
function expressionText(e){if(typeof e==='boolean')return e?'True':'False';if(typeof e==='string')return e;const [op,v]=Object.entries(e)[0];return op==='not'?'NOT ('+expressionText(v)+')':'('+v.map(expressionText).join(op==='all'?' AND ':' OR ')+')';}
function normalize(raw){const a={...raw},inferred={};for(let i=0;i<C.questions.length;i++){let change=false;for(const q of C.questions){if(value(a,q.id)===null&&evaluate(q.when,a)===false){a[q.id]=false;inferred[q.id]='Prerequisite is false: '+expressionText(q.when);change=true;}}if(!change)break;}return [a,inferred];}
function validate(raw){if(!raw||Array.isArray(raw)||typeof raw!=='object')throw Error('Answers must be an object.');for(const [k,v]of Object.entries(raw)){if(!facts.has(k))throw Error('Unknown fact: '+k);if(v!==null&&typeof v!=='boolean')throw Error('Use true, false, or null for '+k);}
 for(const q of C.questions)if(raw[q.id]===true&&evaluate(q.when,raw)===false)throw Error('Conflicting answer: '+q.text);
 return {...raw};}
function profileFromResponses(responses){if(!responses||typeof responses!=='object'||Array.isArray(responses))throw Error('Responses must be an object.');for(const k of Object.keys(responses))if(!Object.hasOwn(S,k))throw Error('Unknown question: '+k);
 const answers={},active={};for(const q of C.survey){const v=value(responses,q.id),choices=Array.isArray(v)?v:v===null?[]:[v];const valid=new Set(q.options.map(o=>o.id));
 if((q.type==='single'&&Array.isArray(v))||(q.type==='multi'&&v!==null&&!Array.isArray(v)))throw Error('Invalid selection format: '+q.title);
 if(choices.some(c=>typeof c!=='string'||!valid.has(c))||new Set(choices).size!==choices.length)throw Error('Invalid option: '+q.title);
 if(choices.includes(C.exclusive[q.id])&&choices.length>1)throw Error('Exclusive options cannot be combined: '+q.title);
 if(evaluate(q.when,normalize(answers)[0])===false)continue;if(Object.hasOwn(responses,q.id))active[q.id]=v;for(const f of q.facts)answers[f]=choices.length?false:null;
 for(const o of q.options)if(choices.includes(o.id))Object.assign(answers,o.facts);}
 validate(answers);return {schema_version:C.version,answers,responses:active};}
const priority=s=>s<=3?'Low':s<=6?'Medium':s<=9?'High':'Critical';
const status=v=>v===true?'Applicable':v===false?'Not applicable':'Uncertain';
const label=k=>Q[k]?.text||C.deferred[k];
function evidence(expr,a){return leaves(expr).sort().map(k=>({id:k,question:label(k),value:value(a,k)}));}
function controlResult(k,a){const c=C.controls[k],v=evaluate(c.condition,a),refs=leaves(c.condition);
 const irrelevant=refs.length>0&&refs.every(k=>Q[k]&&evaluate(Q[k].when,a)===false);
 const state=irrelevant?'Not applicable':v===true?'Reported present':v===false?'Gap reported':'Unknown';
 const next=state==='Reported present'?'Confirm coverage and effectiveness.':state==='Unknown'?'Verify whether this protection exists. '+c.action:state==='Not applicable'?'No action needed for this configuration.':c.action;
 return {...c,state,value:v,evidence:evidence(c.condition,a),next_action:next};}
function assess(payload,likelihood=C.likelihood){if(payload.profile)payload=payload.profile;if(payload.schema_version&&!['3.0',C.version].includes(payload.schema_version))throw Error('Unsupported assessment version.');if(payload.responses)payload=profileFromResponses(payload.responses);if(payload.schema_version&&!['3.0',C.version].includes(payload.schema_version))throw Error('Unsupported assessment version.');
 const raw=validate(payload.answers||payload),[a,inferred]=normalize(raw);validate(a);
 const risks=C.threats.map(t=>{let severity=t.severity,upper=severity,note='';const high=evaluate({any:['database_tool','code_tool','finance_tool']},a);
 if(t.id==='wrong_tool'){if(high===true){severity=3;upper=3;}else if(high===null){upper=3;note='Tool type is unknown; severity could be High.';}}
 const base=severity*likelihood[t.id];return {...t,severity,severity_label:C.severity_labels[severity],overall_likelihood:likelihood[t.id],likelihood_label:C.likelihood_labels[likelihood[t.id]],base_score:base,base_score_upper:upper*likelihood[t.id],priority:priority(base),applicability:status(evaluate(t.required,a)),condition_value:evaluate(t.required,a),severity_note:note,evidence:evidence(t.required,a),weakness_value:t.weakness===null?null:evaluate(t.weakness,a),controls:t.protections.map(k=>controlResult(k,a))};});
 const by=Object.fromEntries(risks.map(r=>[r.id,r]));const paths=C.paths.map(p=>{const causal=p.edges.filter(e=>e[1]!=='ENABLES'),nodes=Object.fromEntries(p.nodes.map(n=>[n.id,n]));const initiator=p.nodes[0].risk,outcome=nodes[causal.at(-1)[2]].risk,base=likelihood[initiator]*by[outcome].severity;
 return {...p,applicability:status(evaluate(p.required,a)),condition_value:evaluate(p.required,a),base_score:base,priority:priority(base),baseline_basis:{initiator,outcome,likelihood:likelihood[initiator],severity:by[outcome].severity},evidence:evidence(p.required,a),enabling_results:Object.entries(p.enabling).map(([condition,expr])=>({condition,value:evaluate(expr,a),evidence:evidence(expr,a)})),controls:p.protections.map(k=>controlResult(k,a))};});
 const sort=(x,y,key)=>Number(x.applicability==='Not applicable')-Number(y.applicability==='Not applicable')||y.base_score-x.base_score||(x[key]<y[key]?-1:x[key]>y[key]?1:0);
 risks.sort((x,y)=>sort(x,y,'name'));paths.sort((x,y)=>sort(x,y,'id'));
 const eligible=(payload.responses?C.survey:C.questions).filter(q=>evaluate(q.when,a)!==false);
 const known=eligible.filter(q=>payload.responses?value(payload.responses,q.id)!==null&&(!Array.isArray(payload.responses[q.id])||payload.responses[q.id].length>0):value(raw,q.id)!==null).length;
 return {schema_version:C.version,generated_at:new Date().toISOString(),profile:{schema_version:C.version,answers:raw,...(payload.responses?{responses:payload.responses}:{})},normalized_answers:a,inferred_facts:inferred,likelihood_configuration:{...likelihood},completeness:{known,eligible:eligible.length,percent:eligible.length?Math.round(1000*known/eligible.length)/10:100,deferred_unknown:Object.keys(C.deferred).filter(k=>value(raw,k)===null)},independent_risks:risks,risk_propagation_paths:paths,interpretation:C.interpretation,scope_notes:C.scope_notes};}
root.RiskEngine={evaluate,normalize,validate,profileFromResponses,assess,priority,status};
})(globalThis);

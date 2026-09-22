'use strict';
const C=globalThis.RISK_CONFIG,E=globalThis.RiskEngine,R=globalThis.RiskReport;
let responses={},sectionIndex=0,currentReport=null,dirty=false;
const $=id=>document.getElementById(id);
const esc=R.escape;
function notice(text,error=false){$('notice').textContent=text;$('notice').className=error?'error':'';}
function profile(){return E.profileFromResponses(responses);}
function activeSurvey(){const a=E.normalize(profile().answers)[0];return C.survey.filter(q=>E.evaluate(q.when,a)!==false);}
function go(index){sectionIndex=index;currentReport=null;$('results').hidden=true;$('questionnaire').hidden=false;render();window.scrollTo(0,0);$('main').focus({preventScroll:true});}
function render(){const section=C.sections[sectionIndex],active=activeSurvey();
 $('version').textContent='v'+C.version;$('section-label').textContent='Section '+(sectionIndex+1)+' of '+C.sections.length;
 $('section-title').textContent=section[1];$('section-description').textContent=section[2];$('intro').hidden=sectionIndex!==0;
 const known=active.filter(q=>responses[q.id]!=null&&(!Array.isArray(responses[q.id])||responses[q.id].length)).length;
 $('progress-label').textContent=known+' of '+active.length+' relevant questions answered';$('progress').value=100*known/Math.max(active.length,1);
 $('steps').innerHTML=C.sections.map((s,i)=>'<button type="button" class="step" data-step="'+i+'" '+(i===sectionIndex?'aria-current="step"':'')+'><span class="step-number">'+(i+1)+'</span>'+esc(s[1])+'</button>').join('');
 $('questions').innerHTML=active.filter(q=>q.section===section[0]).map(q=>{const v=responses[q.id],values=Array.isArray(v)?v:v==null?[]:[v];
 return '<fieldset><legend>'+esc(q.title)+'</legend><p class="hint">'+(q.type==='multi'?'Select all that apply. ':'Select one. ')+esc(q.help)+'</p><div class="options">'+q.options.map(o=>'<label class="choice" for="'+q.id+'-'+o.id+'"><input id="'+q.id+'-'+o.id+'" data-question="'+q.id+'" type="'+(q.type==='multi'?'checkbox':'radio')+'" name="'+q.id+'" value="'+o.id+'" '+(values.includes(o.id)?'checked':'')+'><span>'+esc(o.label)+'</span></label>').join('')+'</div><label class="unknown"><input id="'+q.id+'-unknown" data-question="'+q.id+'" type="'+(q.type==='multi'?'checkbox':'radio')+'" name="'+q.id+'" value="__unknown" '+(Object.hasOwn(responses,q.id)&&v===null?'checked':'')+'>Don’t know</label></fieldset>';
 }).join('')||'<p class="empty">No further questions apply in this section. Continue to the next section.</p>';
 $('back').disabled=sectionIndex===0;$('next').textContent=sectionIndex===C.sections.length-1?'View assessment':'Continue →';
}
$('steps').addEventListener('click',e=>{const b=e.target.closest('[data-step]');if(b)go(Number(b.dataset.step));});
$('questions').addEventListener('submit',e=>e.preventDefault());
$('questions').addEventListener('change',e=>{const input=e.target;if(!input.dataset.question)return;const q=C.survey.find(q=>q.id===input.dataset.question);const old={...responses};
 if(input.value==='__unknown')responses[q.id]=null;
 else if(q.type==='single')responses[q.id]=input.value;
 else{let values=Array.isArray(responses[q.id])?[...responses[q.id]]:[];if(input.checked){if(input.value===C.exclusive[q.id])values=[input.value];else values=[...values.filter(x=>x!==C.exclusive[q.id]),input.value];}else values=values.filter(x=>x!==input.value);responses[q.id]=values.length?values:null;}
 try{responses=profile().responses;dirty=true;notice('');render();$(input.id)?.focus({preventScroll:true});}catch(err){responses=old;notice(err.message,true);render();}
});
$('back').onclick=()=>go(Math.max(0,sectionIndex-1));
$('next').onclick=()=>{if(sectionIndex<C.sections.length-1){go(sectionIndex+1);return;}try{currentReport=E.assess(profile());$('report').innerHTML=R.body(currentReport);$('questionnaire').hidden=true;$('results').hidden=false;notice('Your assessment is ready. Download the report or JSON to keep a copy.');window.scrollTo(0,0);$('main').focus({preventScroll:true});}catch(err){notice(err.message,true);}};
$('edit').onclick=()=>go(sectionIndex);
function download(filename,data,type){const blob=new Blob([data],{type}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=filename;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);}
$('save').onclick=()=>{download('agent-assessment-progress.json',JSON.stringify({kind:'agent-risk-progress',schema_version:C.version,responses:profile().responses,section:sectionIndex},null,2),'application/json');dirty=false;notice('Progress downloaded. Use “Load assessment” to resume from that file.');};
$('load').onclick=()=>{$('file').value='';$('file').click();};
$('file').onchange=async()=>{const f=$('file').files[0];if(!f)return;try{if(f.size>2*1024*1024)throw Error('Choose an assessment JSON file smaller than 2 MB.');const data=JSON.parse(await f.text()),p=data.profile||data;
 if(p.schema_version&&p.schema_version!==C.version)throw Error('This file uses another questionnaire version. Use a version '+C.version+' saved assessment.');
 if(!p.responses)throw Error('Choose a saved mixed-format assessment or result file containing questionnaire responses.');
 const clean=E.profileFromResponses(p.responses);E.assess(clean);if(dirty&&!confirm('Replace the current unsaved answers with this file?'))return;
 responses=clean.responses;dirty=false;sectionIndex=Number.isInteger(data.section)?Math.max(0,Math.min(C.sections.length-1,data.section)):0;go(sectionIndex);notice('Assessment loaded. Review your answers or continue to the results.');
 }catch(err){notice('Could not load file: '+err.message,true);}};
function reset(){if(confirm('Clear this assessment? Download your progress first if you want to keep it.')){responses={};dirty=false;go(0);notice('Assessment cleared.');}}
$('reset').onclick=reset;$('reset-footer').onclick=reset;
$('download-html').onclick=()=>{if(currentReport)download('agentic-ai-risk-report.html',R.html(currentReport),'text/html;charset=utf-8');};
$('download-json').onclick=()=>{if(currentReport)download('agentic-ai-risk-report.json',JSON.stringify(currentReport,null,2),'application/json');};
$('print').onclick=()=>{const closed=[...$('report').querySelectorAll('details:not([open])')];closed.forEach(d=>d.open=true);const restore=()=>closed.forEach(d=>d.open=false);window.addEventListener('afterprint',restore,{once:true});window.print();};
window.addEventListener('beforeunload',e=>{if(dirty){e.preventDefault();e.returnValue='';}});
render();

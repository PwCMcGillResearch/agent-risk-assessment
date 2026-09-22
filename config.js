globalThis.RISK_CONFIG = {
  "version": "3.1",
  "sections": [
    [
      "purpose",
      "What the agent does",
      "We collect its intended role and possible consequences.",
      "Goal Understanding"
    ],
    [
      "users",
      "Who uses the agent",
      "We identify users and boundaries between people or organizations.",
      "End User / Governance"
    ],
    [
      "inputs",
      "Information entering the agent",
      "We identify where instructions and external content enter.",
      "End User / External Data"
    ],
    [
      "decisions",
      "Decision-making process",
      "We ask how goals become plans and how results are checked.",
      "Goal Understanding / Task Decomposition / Evaluation / Policy"
    ],
    [
      "tools",
      "Tools and tool selection",
      "Tools are capabilities such as searching records, sending email, or running code.",
      "Tool Selection / Policy / Tools"
    ],
    [
      "data",
      "Data access and exposure",
      "We ask what information is accessible and where it can go; do not provide the information itself.",
      "External Data / Tools / Result"
    ],
    [
      "architecture",
      "Agent architecture",
      "We identify delegation and connections to other agents or workflows.",
      "Agent Core / Evaluation / Tools"
    ],
    [
      "execution",
      "Execution and deployment",
      "We ask how actions run and what limits are enforced. A tool is a capability; execution is how it is run.",
      "Tools / Policy / System Level"
    ],
    [
      "monitoring",
      "Monitoring and review",
      "We distinguish recording activity, reviewing it, and acting on findings.",
      "Governance / all operational components"
    ],
    [
      "governance",
      "Governance",
      "We ask about responsibility, policies, and reviews. These differ from enforced runtime limits.",
      "Governance / Policy"
    ]
  ],
  "questions": [
    {
      "id": "business_tasks",
      "section": "purpose",
      "text": "Does the agent support work or services for an organization?",
      "help": "For example, customer support, research, coding, or internal administration.",
      "when": true,
      "component": "Goal Understanding"
    },
    {
      "id": "high_impact",
      "section": "purpose",
      "text": "Could an incorrect result cause significant financial, legal, health, or operational harm?",
      "help": "",
      "when": true,
      "component": "Goal Understanding"
    },
    {
      "id": "consequential_advice",
      "section": "purpose",
      "text": "Does the agent recommend decisions that a person may act on?",
      "help": "For example, advice about a payment, customer account, or business process.",
      "when": true,
      "component": "Goal Understanding"
    },
    {
      "id": "human_input",
      "section": "users",
      "text": "Can people give the agent instructions?",
      "help": "Includes developers, staff, customers, and the public.",
      "when": true,
      "component": "End User / Governance"
    },
    {
      "id": "external_users",
      "section": "users",
      "text": "Can people outside your organization use the agent?",
      "help": "",
      "when": "human_input",
      "component": "End User / Governance"
    },
    {
      "id": "multiple_scopes",
      "section": "users",
      "text": "Does it serve people or organizations whose information must remain separate?",
      "help": "For example, separate clients, departments, or customer accounts.",
      "when": true,
      "component": "End User / Governance"
    },
    {
      "id": "external_documents",
      "section": "inputs",
      "text": "Can the agent read uploaded files, webpages, emails, or other external content?",
      "help": "Content may contain instructions that the original user did not intend.",
      "when": true,
      "component": "End User / External Data"
    },
    {
      "id": "tool_content",
      "section": "inputs",
      "text": "Can the agent receive text or data returned by tools or external services?",
      "help": "For example, a search result or an API response.",
      "when": true,
      "component": "End User / External Data"
    },
    {
      "id": "instruction_isolation",
      "section": "inputs",
      "text": "Is external content kept separate from trusted instructions?",
      "help": "For example, documents are treated as evidence, not as commands.",
      "when": {
        "any": [
          "external_documents",
          "tool_content"
        ]
      },
      "component": "End User / External Data"
    },
    {
      "id": "input_guardrails",
      "section": "inputs",
      "text": "Are incoming requests checked for unsafe or suspicious instructions?",
      "help": "These checks reduce exposure; they do not guarantee prevention.",
      "when": true,
      "component": "End User / External Data"
    },
    {
      "id": "planning",
      "section": "decisions",
      "text": "Can the agent divide a request into multiple steps?",
      "help": "For example, find records, compare them, then prepare a response.",
      "when": true,
      "component": "Goal Understanding / Task Decomposition / Evaluation / Policy"
    },
    {
      "id": "replanning",
      "section": "decisions",
      "text": "Can it revise a plan or retry steps while working?",
      "help": "",
      "when": "planning",
      "component": "Goal Understanding / Task Decomposition / Evaluation / Policy"
    },
    {
      "id": "clarifies",
      "section": "decisions",
      "text": "Does it ask for clarification when the goal, target, or permission is unclear?",
      "help": "",
      "when": true,
      "component": "Goal Understanding / Task Decomposition / Evaluation / Policy"
    },
    {
      "id": "plan_preview",
      "section": "decisions",
      "text": "Can a person review the proposed steps before they run?",
      "help": "",
      "when": "planning",
      "component": "Goal Understanding / Task Decomposition / Evaluation / Policy"
    },
    {
      "id": "output_guardrails",
      "section": "decisions",
      "text": "Are responses checked for unsafe or unauthorized content before delivery?",
      "help": "",
      "when": true,
      "component": "Goal Understanding / Task Decomposition / Evaluation / Policy"
    },
    {
      "id": "result_check",
      "section": "decisions",
      "text": "Are results checked against the original request before the task is completed?",
      "help": "",
      "when": true,
      "component": "Goal Understanding / Task Decomposition / Evaluation / Policy"
    },
    {
      "id": "tools",
      "section": "tools",
      "text": "Can the agent use tools or connected services?",
      "help": "For example, search, databases, email, or code execution.",
      "when": true,
      "component": "Tool Selection / Policy / Tools"
    },
    {
      "id": "database_tool",
      "section": "tools",
      "text": "Can it use database tools?",
      "help": "",
      "when": "tools",
      "component": "Tool Selection / Policy / Tools"
    },
    {
      "id": "code_tool",
      "section": "tools",
      "text": "Can it run code or system commands?",
      "help": "",
      "when": "tools",
      "component": "Tool Selection / Policy / Tools"
    },
    {
      "id": "finance_tool",
      "section": "tools",
      "text": "Can it use payment or financial transaction tools?",
      "help": "",
      "when": "tools",
      "component": "Tool Selection / Policy / Tools"
    },
    {
      "id": "write_actions",
      "section": "tools",
      "text": "Can it change records, delete files, send messages, deploy changes, or take other external actions?",
      "help": "",
      "when": "tools",
      "component": "Tool Selection / Policy / Tools"
    },
    {
      "id": "tool_allowlist",
      "section": "tools",
      "text": "Are the available tools restricted to those approved for the current task or user?",
      "help": "",
      "when": "tools",
      "component": "Tool Selection / Policy / Tools"
    },
    {
      "id": "action_authorization",
      "section": "tools",
      "text": "Are proposed tool actions checked against the current user’s permissions and task rules before execution?",
      "help": "",
      "when": "tools",
      "component": "Tool Selection / Policy / Tools"
    },
    {
      "id": "human_approval",
      "section": "tools",
      "text": "Must a person approve every high-impact action before execution?",
      "help": "Answer No if only some such actions need approval.",
      "when": {
        "all": [
          "tools",
          {
            "any": [
              "write_actions",
              "code_tool",
              "finance_tool"
            ]
          }
        ]
      },
      "component": "Tool Selection / Policy / Tools"
    },
    {
      "id": "private_data",
      "section": "data",
      "text": "Can the agent access information that is not public?",
      "help": "For example, internal documents, personal records, source code, or credentials.",
      "when": true,
      "component": "External Data / Tools / Result"
    },
    {
      "id": "disclosure_route",
      "section": "data",
      "text": "Can retrieved information appear in responses, shared files, messages, or external requests?",
      "help": "This identifies an output route; it does not mean a leak has occurred.",
      "when": "private_data",
      "component": "External Data / Tools / Result"
    },
    {
      "id": "scoped_access",
      "section": "data",
      "text": "Is access checked against the requesting person’s role, organization, and permitted purpose?",
      "help": "",
      "when": "private_data",
      "component": "External Data / Tools / Result"
    },
    {
      "id": "broad_access",
      "section": "data",
      "text": "Does the agent have shared or broader access than the requesting person?",
      "help": "For example, one service account can read all client records.",
      "when": "private_data",
      "component": "External Data / Tools / Result"
    },
    {
      "id": "tenant_isolation",
      "section": "data",
      "text": "Are client or department boundaries enforced on every relevant retrieval or action?",
      "help": "",
      "when": {
        "all": [
          "private_data",
          "multiple_scopes"
        ]
      },
      "component": "External Data / Tools / Result"
    },
    {
      "id": "data_minimization",
      "section": "data",
      "text": "Does the agent retrieve and expose only the information needed for the task?",
      "help": "",
      "when": "private_data",
      "component": "External Data / Tools / Result"
    },
    {
      "id": "sensitive_filter",
      "section": "data",
      "text": "Are outputs checked for personal information, credentials, or other confidential content?",
      "help": "",
      "when": "private_data",
      "component": "External Data / Tools / Result"
    },
    {
      "id": "sensitive_training",
      "section": "data",
      "text": "Was sensitive information used to train or fine-tune the underlying model?",
      "help": "This concerns model training, not documents retrieved while answering. Ask the model provider if unsure.",
      "when": true,
      "component": "External Data / Tools / Result"
    },
    {
      "id": "isolated_execution",
      "section": "execution",
      "text": "Are risky code or tool actions run in a restricted environment?",
      "help": "For example, an isolated test environment with limited access.",
      "when": "dependency_execution",
      "component": "Tools / Policy / System Level"
    },
    {
      "id": "resource_limits",
      "section": "execution",
      "text": "Are enforceable time, token, cost, or request limits in place?",
      "help": "Written guidance alone is not an enforced limit.",
      "when": true,
      "component": "Tools / Policy / System Level"
    },
    {
      "id": "retry_limits",
      "section": "execution",
      "text": "Are retries, repeated calls, or agent delegation stopped after a defined limit?",
      "help": "",
      "when": {
        "any": [
          "replanning",
          "tools",
          "multiple_agents"
        ]
      },
      "component": "Tools / Policy / System Level"
    },
    {
      "id": "filesystem_limits",
      "section": "execution",
      "text": "Is file access restricted to approved files and folders?",
      "help": "",
      "when": "code_tool",
      "component": "Tools / Policy / System Level"
    },
    {
      "id": "network_limits",
      "section": "execution",
      "text": "Are outgoing network connections restricted to approved destinations?",
      "help": "",
      "when": "dependency_execution",
      "component": "Tools / Policy / System Level"
    },
    {
      "id": "least_privilege",
      "section": "execution",
      "text": "Do tool credentials allow only the actions and resources needed?",
      "help": "",
      "when": "tools",
      "component": "Tools / Policy / System Level"
    },
    {
      "id": "stop_recover",
      "section": "execution",
      "text": "Can an operator stop the agent and recover from unsafe changes?",
      "help": "For example, a kill switch plus backups or rollback.",
      "when": "dependency_execution",
      "component": "Tools / Policy / System Level"
    },
    {
      "id": "multiple_agents",
      "section": "architecture",
      "text": "Does the system contain more than one agent?",
      "help": "",
      "when": true,
      "component": "Agent Core / Evaluation / Tools"
    },
    {
      "id": "handoffs",
      "section": "architecture",
      "text": "Can one agent pass tasks, instructions, or results to another?",
      "help": "",
      "when": "multiple_agents",
      "component": "Agent Core / Evaluation / Tools"
    },
    {
      "id": "downstream",
      "section": "architecture",
      "text": "Can its output automatically trigger another system or workflow?",
      "help": "",
      "when": true,
      "component": "Agent Core / Evaluation / Tools"
    },
    {
      "id": "handoff_isolation",
      "section": "architecture",
      "text": "Does a receiving agent treat forwarded content as untrusted and re-check its permissions?",
      "help": "",
      "when": {
        "all": [
          "multiple_agents",
          "handoffs"
        ]
      },
      "component": "Agent Core / Evaluation / Tools"
    },
    {
      "id": "third_party",
      "section": "architecture",
      "text": "Does it depend on third-party models, libraries, plugins, tools, or services?",
      "help": "Include a hosted model even if the agent has no tools.",
      "when": true,
      "component": "Agent Core / Evaluation / Tools"
    },
    {
      "id": "component_execution",
      "section": "architecture",
      "text": "Can installed libraries or plugins run code in the agent’s hosting environment?",
      "help": "Include installation scripts and code run inside a component, even when the agent cannot choose a code tool.",
      "when": "third_party",
      "component": "Agent Core / Evaluation / Tools"
    },
    {
      "id": "dependency_integrity",
      "section": "architecture",
      "text": "Are dependencies pinned to reviewed versions and checked for authenticity or integrity?",
      "help": "",
      "when": "third_party",
      "component": "Agent Core / Evaluation / Tools"
    },
    {
      "id": "log_prompts",
      "section": "monitoring",
      "text": "Are user requests recorded?",
      "help": "Record enough for investigation while limiting sensitive content and retention.",
      "when": "human_input",
      "component": "Governance / all operational components"
    },
    {
      "id": "review_prompts",
      "section": "monitoring",
      "text": "Are user requests reviewed on a schedule by an assigned person?",
      "help": "Answer No if records are checked only after an incident.",
      "when": {
        "all": [
          "human_input",
          "log_prompts"
        ]
      },
      "component": "Governance / all operational components"
    },
    {
      "id": "alert_prompts",
      "section": "monitoring",
      "text": "Are user requests automatically checked for suspicious activity and routed to an assigned responder?",
      "help": "Creating a log without an alert or responder does not count.",
      "when": {
        "all": [
          "human_input",
          "log_prompts"
        ]
      },
      "component": "Governance / all operational components"
    },
    {
      "id": "log_responses",
      "section": "monitoring",
      "text": "Are agent responses recorded?",
      "help": "Record enough for investigation while limiting sensitive content and retention.",
      "when": true,
      "component": "Governance / all operational components"
    },
    {
      "id": "review_responses",
      "section": "monitoring",
      "text": "Are agent responses reviewed on a schedule by an assigned person?",
      "help": "Answer No if records are checked only after an incident.",
      "when": {
        "all": [
          true,
          "log_responses"
        ]
      },
      "component": "Governance / all operational components"
    },
    {
      "id": "alert_responses",
      "section": "monitoring",
      "text": "Are agent responses automatically checked for suspicious activity and routed to an assigned responder?",
      "help": "Creating a log without an alert or responder does not count.",
      "when": {
        "all": [
          true,
          "log_responses"
        ]
      },
      "component": "Governance / all operational components"
    },
    {
      "id": "log_tools",
      "section": "monitoring",
      "text": "Are tool calls and their outcomes recorded?",
      "help": "Record enough for investigation while limiting sensitive content and retention.",
      "when": "tools",
      "component": "Governance / all operational components"
    },
    {
      "id": "review_tools",
      "section": "monitoring",
      "text": "Are tool calls and their outcomes reviewed on a schedule by an assigned person?",
      "help": "Answer No if records are checked only after an incident.",
      "when": {
        "all": [
          "tools",
          "log_tools"
        ]
      },
      "component": "Governance / all operational components"
    },
    {
      "id": "alert_tools",
      "section": "monitoring",
      "text": "Are tool calls and their outcomes automatically checked for suspicious activity and routed to an assigned responder?",
      "help": "Creating a log without an alert or responder does not count.",
      "when": {
        "all": [
          "tools",
          "log_tools"
        ]
      },
      "component": "Governance / all operational components"
    },
    {
      "id": "log_data",
      "section": "monitoring",
      "text": "Are access to protected information recorded?",
      "help": "Record enough for investigation while limiting sensitive content and retention.",
      "when": "private_data",
      "component": "Governance / all operational components"
    },
    {
      "id": "review_data",
      "section": "monitoring",
      "text": "Are access to protected information reviewed on a schedule by an assigned person?",
      "help": "Answer No if records are checked only after an incident.",
      "when": {
        "all": [
          "private_data",
          "log_data"
        ]
      },
      "component": "Governance / all operational components"
    },
    {
      "id": "alert_data",
      "section": "monitoring",
      "text": "Are access to protected information automatically checked for suspicious activity and routed to an assigned responder?",
      "help": "Creating a log without an alert or responder does not count.",
      "when": {
        "all": [
          "private_data",
          "log_data"
        ]
      },
      "component": "Governance / all operational components"
    },
    {
      "id": "log_handoffs",
      "section": "monitoring",
      "text": "Are agent-to-agent handoffs recorded?",
      "help": "Record enough for investigation while limiting sensitive content and retention.",
      "when": {
        "all": [
          "multiple_agents",
          "handoffs"
        ]
      },
      "component": "Governance / all operational components"
    },
    {
      "id": "review_handoffs",
      "section": "monitoring",
      "text": "Are agent-to-agent handoffs reviewed on a schedule by an assigned person?",
      "help": "Answer No if records are checked only after an incident.",
      "when": {
        "all": [
          {
            "all": [
              "multiple_agents",
              "handoffs"
            ]
          },
          "log_handoffs"
        ]
      },
      "component": "Governance / all operational components"
    },
    {
      "id": "alert_handoffs",
      "section": "monitoring",
      "text": "Are agent-to-agent handoffs automatically checked for suspicious activity and routed to an assigned responder?",
      "help": "Creating a log without an alert or responder does not count.",
      "when": {
        "all": [
          {
            "all": [
              "multiple_agents",
              "handoffs"
            ]
          },
          "log_handoffs"
        ]
      },
      "component": "Governance / all operational components"
    },
    {
      "id": "owner",
      "section": "governance",
      "text": "Is a named person or team accountable for the agent?",
      "help": "",
      "when": true,
      "component": "Governance / Policy"
    },
    {
      "id": "use_policy",
      "section": "governance",
      "text": "Is there a documented policy defining acceptable use and prohibited actions?",
      "help": "",
      "when": true,
      "component": "Governance / Policy"
    },
    {
      "id": "access_review",
      "section": "governance",
      "text": "Are permissions reviewed regularly and when roles change?",
      "help": "",
      "when": {
        "any": [
          "tools",
          "private_data"
        ]
      },
      "component": "Governance / Policy"
    },
    {
      "id": "change_review",
      "section": "governance",
      "text": "Are model, tool, or dependency changes reviewed and tested before release?",
      "help": "",
      "when": "third_party",
      "component": "Governance / Policy"
    },
    {
      "id": "incident_response",
      "section": "governance",
      "text": "Is there a defined process for responding to unsafe behavior or security incidents?",
      "help": "",
      "when": true,
      "component": "Governance / Policy"
    }
  ],
  "survey": [
    {
      "id": "domains",
      "section": "purpose",
      "title": "What does the agent help with?",
      "type": "multi",
      "options": [
        {
          "id": "support",
          "label": "Customer support",
          "facts": {}
        },
        {
          "id": "knowledge",
          "label": "Internal knowledge and research",
          "facts": {}
        },
        {
          "id": "coding",
          "label": "Coding and software engineering",
          "facts": {}
        },
        {
          "id": "analysis",
          "label": "Data analysis",
          "facts": {}
        },
        {
          "id": "finance",
          "label": "Finance and payments",
          "facts": {}
        },
        {
          "id": "healthcare",
          "label": "Healthcare, legal, or HR",
          "facts": {}
        },
        {
          "id": "automation",
          "label": "Business workflow automation",
          "facts": {}
        },
        {
          "id": "other",
          "label": "Other",
          "facts": {}
        }
      ],
      "facts": [],
      "when": true,
      "help": "Select all that apply. This describes the system; it does not add points."
    },
    {
      "id": "impact",
      "section": "purpose",
      "title": "What could happen if the agent gets a task wrong?",
      "type": "single",
      "options": [
        {
          "id": "limited",
          "label": "Limited inconvenience; easily corrected",
          "facts": {
            "high_impact": false
          }
        },
        {
          "id": "significant",
          "label": "Significant financial, legal, health, or operational harm",
          "facts": {
            "high_impact": true
          }
        }
      ],
      "facts": [
        "high_impact"
      ],
      "when": true,
      "help": ""
    },
    {
      "id": "advice",
      "section": "purpose",
      "title": "What kind of help does the agent provide?",
      "type": "single",
      "options": [
        {
          "id": "information",
          "label": "Information or drafts only",
          "facts": {
            "consequential_advice": false
          }
        },
        {
          "id": "recommendations",
          "label": "Recommendations that people may act on",
          "facts": {
            "consequential_advice": true
          }
        },
        {
          "id": "both",
          "label": "Both information and recommendations",
          "facts": {
            "consequential_advice": true
          }
        }
      ],
      "facts": [
        "consequential_advice"
      ],
      "when": true,
      "help": ""
    },
    {
      "id": "users",
      "section": "users",
      "title": "Who can give the agent instructions?",
      "type": "multi",
      "options": [
        {
          "id": "developers",
          "label": "Developers or administrators",
          "facts": {
            "human_input": true
          }
        },
        {
          "id": "employees",
          "label": "Internal employees",
          "facts": {
            "human_input": true
          }
        },
        {
          "id": "customers",
          "label": "Customers or clients",
          "facts": {
            "human_input": true,
            "external_users": true
          }
        },
        {
          "id": "partners",
          "label": "External partners",
          "facts": {
            "human_input": true,
            "external_users": true
          }
        },
        {
          "id": "public",
          "label": "Public users",
          "facts": {
            "human_input": true,
            "external_users": true
          }
        },
        {
          "id": "none",
          "label": "No direct human instructions",
          "facts": {}
        }
      ],
      "facts": [
        "human_input",
        "external_users"
      ],
      "when": true,
      "help": ""
    },
    {
      "id": "multiple_scopes",
      "section": "users",
      "title": "Does it serve people or organizations whose information must remain separate?",
      "type": "single",
      "options": [
        {
          "id": "yes",
          "label": "Yes",
          "facts": {
            "multiple_scopes": true
          }
        },
        {
          "id": "no",
          "label": "No",
          "facts": {
            "multiple_scopes": false
          }
        }
      ],
      "facts": [
        "multiple_scopes"
      ],
      "when": true,
      "help": "For example, separate clients, departments, or customer accounts."
    },
    {
      "id": "input_sources",
      "section": "inputs",
      "title": "What information can enter the agent’s workflow?",
      "type": "multi",
      "options": [
        {
          "id": "direct",
          "label": "Direct instructions only",
          "facts": {}
        },
        {
          "id": "documents",
          "label": "Uploaded documents or images",
          "facts": {
            "external_documents": true
          }
        },
        {
          "id": "web",
          "label": "Webpages and online content",
          "facts": {
            "external_documents": true
          }
        },
        {
          "id": "messages",
          "label": "Emails, tickets, or messages",
          "facts": {
            "external_documents": true
          }
        },
        {
          "id": "tools",
          "label": "Tool or API responses",
          "facts": {
            "tool_content": true
          }
        }
      ],
      "facts": [
        "external_documents",
        "tool_content"
      ],
      "when": true,
      "help": "Select every available source. Select “Direct instructions only” by itself."
    },
    {
      "id": "instruction_isolation",
      "section": "inputs",
      "title": "Is external content kept separate from trusted instructions?",
      "type": "single",
      "options": [
        {
          "id": "yes",
          "label": "Yes",
          "facts": {
            "instruction_isolation": true
          }
        },
        {
          "id": "no",
          "label": "No",
          "facts": {
            "instruction_isolation": false
          }
        }
      ],
      "facts": [
        "instruction_isolation"
      ],
      "when": {
        "any": [
          "external_documents",
          "tool_content"
        ]
      },
      "help": "For example, documents are treated as evidence, not as commands."
    },
    {
      "id": "guardrails",
      "section": "inputs",
      "title": "Which content checks are in place?",
      "type": "multi",
      "options": [
        {
          "id": "input",
          "label": "Checks on incoming requests",
          "facts": {
            "input_guardrails": true
          }
        },
        {
          "id": "output",
          "label": "Checks on outgoing responses",
          "facts": {
            "output_guardrails": true
          }
        },
        {
          "id": "none",
          "label": "No content checks",
          "facts": {}
        }
      ],
      "facts": [
        "input_guardrails",
        "output_guardrails"
      ],
      "when": true,
      "help": "Checks may flag unsafe or unauthorized content. They do not guarantee prevention."
    },
    {
      "id": "planning_mode",
      "section": "decisions",
      "title": "How does the agent organize its work?",
      "type": "single",
      "options": [
        {
          "id": "single",
          "label": "Responds without a multi-step plan",
          "facts": {
            "planning": false,
            "replanning": false
          }
        },
        {
          "id": "plan",
          "label": "Creates a plan but does not revise or retry it",
          "facts": {
            "planning": true,
            "replanning": false
          }
        },
        {
          "id": "revise",
          "label": "Can revise plans or retry steps",
          "facts": {
            "planning": true,
            "replanning": true
          }
        }
      ],
      "facts": [
        "planning",
        "replanning"
      ],
      "when": true,
      "help": ""
    },
    {
      "id": "clarifies",
      "section": "decisions",
      "title": "Does it ask for clarification when the goal, target, or permission is unclear?",
      "type": "single",
      "options": [
        {
          "id": "yes",
          "label": "Yes",
          "facts": {
            "clarifies": true
          }
        },
        {
          "id": "no",
          "label": "No",
          "facts": {
            "clarifies": false
          }
        }
      ],
      "facts": [
        "clarifies"
      ],
      "when": true,
      "help": ""
    },
    {
      "id": "plan_preview",
      "section": "decisions",
      "title": "Can a person review the proposed steps before they run?",
      "type": "single",
      "options": [
        {
          "id": "yes",
          "label": "Yes",
          "facts": {
            "plan_preview": true
          }
        },
        {
          "id": "no",
          "label": "No",
          "facts": {
            "plan_preview": false
          }
        }
      ],
      "facts": [
        "plan_preview"
      ],
      "when": "planning",
      "help": ""
    },
    {
      "id": "result_check",
      "section": "decisions",
      "title": "Are results checked against the original request before the task is completed?",
      "type": "single",
      "options": [
        {
          "id": "yes",
          "label": "Yes",
          "facts": {
            "result_check": true
          }
        },
        {
          "id": "no",
          "label": "No",
          "facts": {
            "result_check": false
          }
        }
      ],
      "facts": [
        "result_check"
      ],
      "when": true,
      "help": ""
    },
    {
      "id": "tool_types",
      "section": "tools",
      "title": "Which tools can the agent use?",
      "type": "multi",
      "options": [
        {
          "id": "search",
          "label": "Search and retrieval",
          "facts": {
            "tools": true
          }
        },
        {
          "id": "database",
          "label": "Database tools",
          "facts": {
            "tools": true,
            "database_tool": true
          }
        },
        {
          "id": "messages",
          "label": "Email, calendar, or messaging",
          "facts": {
            "tools": true
          }
        },
        {
          "id": "files",
          "label": "File-system tools",
          "facts": {
            "tools": true
          }
        },
        {
          "id": "code",
          "label": "Code or shell execution",
          "facts": {
            "tools": true,
            "code_tool": true
          }
        },
        {
          "id": "finance",
          "label": "Payment or transaction tools",
          "facts": {
            "tools": true,
            "finance_tool": true
          }
        },
        {
          "id": "cloud",
          "label": "Cloud or deployment tools",
          "facts": {
            "tools": true
          }
        },
        {
          "id": "custom",
          "label": "Other tools or business APIs",
          "facts": {
            "tools": true
          }
        },
        {
          "id": "none",
          "label": "No tools",
          "facts": {}
        }
      ],
      "facts": [
        "tools",
        "database_tool",
        "code_tool",
        "finance_tool"
      ],
      "when": true,
      "help": ""
    },
    {
      "id": "permissions",
      "section": "tools",
      "title": "What actions can its tools perform?",
      "type": "multi",
      "options": [
        {
          "id": "read",
          "label": "Read or search only",
          "facts": {}
        },
        {
          "id": "create",
          "label": "Create or modify records",
          "facts": {
            "write_actions": true
          }
        },
        {
          "id": "delete",
          "label": "Delete information",
          "facts": {
            "write_actions": true
          }
        },
        {
          "id": "send",
          "label": "Send messages or publish content",
          "facts": {
            "write_actions": true
          }
        },
        {
          "id": "deploy",
          "label": "Change settings or deploy software",
          "facts": {
            "write_actions": true
          }
        },
        {
          "id": "other",
          "label": "Other actions with external effects",
          "facts": {
            "write_actions": true
          }
        }
      ],
      "facts": [
        "write_actions"
      ],
      "when": "tools",
      "help": "Select “Read or search only” by itself. Code and financial capabilities are captured in the tool question."
    },
    {
      "id": "tool_policies",
      "section": "tools",
      "title": "Which tool-use restrictions are enforced?",
      "type": "multi",
      "options": [
        {
          "id": "allowed",
          "label": "Only approved tools are available",
          "facts": {
            "tool_allowlist": true
          }
        },
        {
          "id": "authorization",
          "label": "Actions are checked against user permissions and task rules",
          "facts": {
            "action_authorization": true
          }
        },
        {
          "id": "none",
          "label": "Neither restriction",
          "facts": {}
        }
      ],
      "facts": [
        "tool_allowlist",
        "action_authorization"
      ],
      "when": "tools",
      "help": ""
    },
    {
      "id": "approval",
      "section": "tools",
      "title": "When does a person approve high-impact actions?",
      "type": "single",
      "options": [
        {
          "id": "always",
          "label": "Before every high-impact action",
          "facts": {
            "human_approval": true
          }
        },
        {
          "id": "selected",
          "label": "Only selected actions or above a threshold",
          "facts": {
            "human_approval": false
          }
        },
        {
          "id": "never",
          "label": "No approval is required",
          "facts": {
            "human_approval": false
          }
        }
      ],
      "facts": [
        "human_approval"
      ],
      "when": "can_execute",
      "help": "The full approval protection is present only when every high-impact action needs approval."
    },
    {
      "id": "data_types",
      "section": "data",
      "title": "What information can the agent access?",
      "type": "multi",
      "options": [
        {
          "id": "public",
          "label": "Public information only",
          "facts": {}
        },
        {
          "id": "internal",
          "label": "Internal business documents",
          "facts": {
            "private_data": true
          }
        },
        {
          "id": "personal",
          "label": "Customer or employee personal information",
          "facts": {
            "private_data": true
          }
        },
        {
          "id": "sensitive",
          "label": "Financial, health, legal, or HR records",
          "facts": {
            "private_data": true
          }
        },
        {
          "id": "code",
          "label": "Private source code or production data",
          "facts": {
            "private_data": true
          }
        },
        {
          "id": "secrets",
          "label": "Credentials, secrets, or API keys",
          "facts": {
            "private_data": true
          }
        }
      ],
      "facts": [
        "private_data"
      ],
      "when": true,
      "help": "Select categories only; do not enter the information itself."
    },
    {
      "id": "data_destinations",
      "section": "data",
      "title": "Where can retrieved information appear?",
      "type": "multi",
      "options": [
        {
          "id": "response",
          "label": "Responses shown to users",
          "facts": {
            "disclosure_route": true
          }
        },
        {
          "id": "files",
          "label": "Shared files or generated documents",
          "facts": {
            "disclosure_route": true
          }
        },
        {
          "id": "external",
          "label": "Messages, external requests, or connected systems",
          "facts": {
            "disclosure_route": true
          }
        },
        {
          "id": "none",
          "label": "It cannot leave the protected processing context",
          "facts": {}
        }
      ],
      "facts": [
        "disclosure_route"
      ],
      "when": "private_data",
      "help": ""
    },
    {
      "id": "access_model",
      "section": "data",
      "title": "How is access to protected information controlled?",
      "type": "multi",
      "options": [
        {
          "id": "scoped",
          "label": "Each request is checked against the person’s role and permitted scope",
          "facts": {
            "scoped_access": true
          }
        },
        {
          "id": "broad",
          "label": "The agent also uses shared or broader permissions",
          "facts": {
            "broad_access": true
          }
        },
        {
          "id": "none",
          "label": "No requester-specific checks or broader service permissions",
          "facts": {}
        }
      ],
      "facts": [
        "scoped_access",
        "broad_access"
      ],
      "when": "private_data",
      "help": "Both checks and broad service credentials can exist in the same system. Select both when relevant."
    },
    {
      "id": "tenant_isolation",
      "section": "data",
      "title": "Are client or department boundaries enforced on every relevant retrieval or action?",
      "type": "single",
      "options": [
        {
          "id": "yes",
          "label": "Yes",
          "facts": {
            "tenant_isolation": true
          }
        },
        {
          "id": "no",
          "label": "No",
          "facts": {
            "tenant_isolation": false
          }
        }
      ],
      "facts": [
        "tenant_isolation"
      ],
      "when": {
        "all": [
          "private_data",
          "multiple_scopes"
        ]
      },
      "help": ""
    },
    {
      "id": "data_minimization",
      "section": "data",
      "title": "Does the agent retrieve and expose only the information needed for the task?",
      "type": "single",
      "options": [
        {
          "id": "yes",
          "label": "Yes",
          "facts": {
            "data_minimization": true
          }
        },
        {
          "id": "no",
          "label": "No",
          "facts": {
            "data_minimization": false
          }
        }
      ],
      "facts": [
        "data_minimization"
      ],
      "when": "private_data",
      "help": ""
    },
    {
      "id": "sensitive_filter",
      "section": "data",
      "title": "Are outputs checked for personal information, credentials, or other confidential content?",
      "type": "single",
      "options": [
        {
          "id": "yes",
          "label": "Yes",
          "facts": {
            "sensitive_filter": true
          }
        },
        {
          "id": "no",
          "label": "No",
          "facts": {
            "sensitive_filter": false
          }
        }
      ],
      "facts": [
        "sensitive_filter"
      ],
      "when": "private_data",
      "help": ""
    },
    {
      "id": "sensitive_training",
      "section": "data",
      "title": "Was sensitive information used to train or fine-tune the underlying model?",
      "type": "single",
      "options": [
        {
          "id": "yes",
          "label": "Yes",
          "facts": {
            "sensitive_training": true
          }
        },
        {
          "id": "no",
          "label": "No",
          "facts": {
            "sensitive_training": false
          }
        }
      ],
      "facts": [
        "sensitive_training"
      ],
      "when": true,
      "help": "This concerns model training, not documents retrieved while answering. Ask the model provider if unsure."
    },
    {
      "id": "architecture_mode",
      "section": "architecture",
      "title": "How are agents and workflows connected?",
      "type": "multi",
      "options": [
        {
          "id": "single",
          "label": "One agent with no downstream workflow",
          "facts": {}
        },
        {
          "id": "multiple",
          "label": "Multiple agents",
          "facts": {
            "multiple_agents": true
          }
        },
        {
          "id": "handoffs",
          "label": "Agents pass tasks or results to other agents",
          "facts": {
            "multiple_agents": true,
            "handoffs": true
          }
        },
        {
          "id": "downstream",
          "label": "Outputs automatically trigger other systems",
          "facts": {
            "downstream": true
          }
        }
      ],
      "facts": [
        "multiple_agents",
        "handoffs",
        "downstream"
      ],
      "when": true,
      "help": ""
    },
    {
      "id": "handoff_isolation",
      "section": "architecture",
      "title": "Does a receiving agent treat forwarded content as untrusted and re-check its permissions?",
      "type": "single",
      "options": [
        {
          "id": "yes",
          "label": "Yes",
          "facts": {
            "handoff_isolation": true
          }
        },
        {
          "id": "no",
          "label": "No",
          "facts": {
            "handoff_isolation": false
          }
        }
      ],
      "facts": [
        "handoff_isolation"
      ],
      "when": {
        "all": [
          "multiple_agents",
          "handoffs"
        ]
      },
      "help": ""
    },
    {
      "id": "third_party",
      "section": "architecture",
      "title": "Does it depend on third-party models, libraries, plugins, tools, or services?",
      "type": "single",
      "options": [
        {
          "id": "yes",
          "label": "Yes",
          "facts": {
            "third_party": true
          }
        },
        {
          "id": "no",
          "label": "No",
          "facts": {
            "third_party": false
          }
        }
      ],
      "facts": [
        "third_party"
      ],
      "when": true,
      "help": "Include a hosted model even if the agent has no tools."
    },
    {
      "id": "component_execution",
      "section": "architecture",
      "title": "Can installed libraries or plugins run code in the agent’s hosting environment?",
      "type": "single",
      "options": [
        {
          "id": "yes",
          "label": "Yes",
          "facts": {
            "component_execution": true
          }
        },
        {
          "id": "no",
          "label": "No",
          "facts": {
            "component_execution": false
          }
        }
      ],
      "facts": [
        "component_execution"
      ],
      "when": "third_party",
      "help": "Include installation scripts and code run inside a component, even when the agent cannot choose a code tool."
    },
    {
      "id": "dependency_integrity",
      "section": "architecture",
      "title": "Are dependencies pinned to reviewed versions and checked for authenticity or integrity?",
      "type": "single",
      "options": [
        {
          "id": "yes",
          "label": "Yes",
          "facts": {
            "dependency_integrity": true
          }
        },
        {
          "id": "no",
          "label": "No",
          "facts": {
            "dependency_integrity": false
          }
        }
      ],
      "facts": [
        "dependency_integrity"
      ],
      "when": "third_party",
      "help": ""
    },
    {
      "id": "isolated_execution",
      "section": "execution",
      "title": "Are risky code or tool actions run in a restricted environment?",
      "type": "single",
      "options": [
        {
          "id": "yes",
          "label": "Yes",
          "facts": {
            "isolated_execution": true
          }
        },
        {
          "id": "no",
          "label": "No",
          "facts": {
            "isolated_execution": false
          }
        }
      ],
      "facts": [
        "isolated_execution"
      ],
      "when": "dependency_execution",
      "help": "For example, an isolated test environment with limited access."
    },
    {
      "id": "resource_limits",
      "section": "execution",
      "title": "Are enforceable time, token, cost, or request limits in place?",
      "type": "single",
      "options": [
        {
          "id": "yes",
          "label": "Yes",
          "facts": {
            "resource_limits": true
          }
        },
        {
          "id": "no",
          "label": "No",
          "facts": {
            "resource_limits": false
          }
        }
      ],
      "facts": [
        "resource_limits"
      ],
      "when": true,
      "help": "Written guidance alone is not an enforced limit."
    },
    {
      "id": "retry_limits",
      "section": "execution",
      "title": "Are retries, repeated calls, or agent delegation stopped after a defined limit?",
      "type": "single",
      "options": [
        {
          "id": "yes",
          "label": "Yes",
          "facts": {
            "retry_limits": true
          }
        },
        {
          "id": "no",
          "label": "No",
          "facts": {
            "retry_limits": false
          }
        }
      ],
      "facts": [
        "retry_limits"
      ],
      "when": {
        "any": [
          "replanning",
          "tools",
          "multiple_agents"
        ]
      },
      "help": ""
    },
    {
      "id": "filesystem_limits",
      "section": "execution",
      "title": "Is file access restricted to approved files and folders?",
      "type": "single",
      "options": [
        {
          "id": "yes",
          "label": "Yes",
          "facts": {
            "filesystem_limits": true
          }
        },
        {
          "id": "no",
          "label": "No",
          "facts": {
            "filesystem_limits": false
          }
        }
      ],
      "facts": [
        "filesystem_limits"
      ],
      "when": "code_tool",
      "help": ""
    },
    {
      "id": "network_limits",
      "section": "execution",
      "title": "Are outgoing network connections restricted to approved destinations?",
      "type": "single",
      "options": [
        {
          "id": "yes",
          "label": "Yes",
          "facts": {
            "network_limits": true
          }
        },
        {
          "id": "no",
          "label": "No",
          "facts": {
            "network_limits": false
          }
        }
      ],
      "facts": [
        "network_limits"
      ],
      "when": "dependency_execution",
      "help": ""
    },
    {
      "id": "least_privilege",
      "section": "execution",
      "title": "Do tool credentials allow only the actions and resources needed?",
      "type": "single",
      "options": [
        {
          "id": "yes",
          "label": "Yes",
          "facts": {
            "least_privilege": true
          }
        },
        {
          "id": "no",
          "label": "No",
          "facts": {
            "least_privilege": false
          }
        }
      ],
      "facts": [
        "least_privilege"
      ],
      "when": "tools",
      "help": ""
    },
    {
      "id": "stop_recover",
      "section": "execution",
      "title": "Can an operator stop the agent and recover from unsafe changes?",
      "type": "single",
      "options": [
        {
          "id": "yes",
          "label": "Yes",
          "facts": {
            "stop_recover": true
          }
        },
        {
          "id": "no",
          "label": "No",
          "facts": {
            "stop_recover": false
          }
        }
      ],
      "facts": [
        "stop_recover"
      ],
      "when": "dependency_execution",
      "help": "For example, a kill switch plus backups or rollback."
    },
    {
      "id": "monitor_prompts",
      "section": "monitoring",
      "title": "How are user requests monitored?",
      "type": "single",
      "options": [
        {
          "id": "none",
          "label": "Not recorded",
          "facts": {
            "log_prompts": false,
            "review_prompts": false,
            "alert_prompts": false
          }
        },
        {
          "id": "record",
          "label": "Recorded, without routine review",
          "facts": {
            "log_prompts": true,
            "review_prompts": false,
            "alert_prompts": false
          }
        },
        {
          "id": "incident",
          "label": "Reviewed only after an incident",
          "facts": {
            "log_prompts": true,
            "review_prompts": false,
            "alert_prompts": false
          }
        },
        {
          "id": "human",
          "label": "Recorded and reviewed on a schedule by an assigned person",
          "facts": {
            "log_prompts": true,
            "review_prompts": true,
            "alert_prompts": false
          }
        },
        {
          "id": "auto",
          "label": "Recorded and automatically checked, with alerts routed to a responder",
          "facts": {
            "log_prompts": true,
            "review_prompts": false,
            "alert_prompts": true
          }
        },
        {
          "id": "both",
          "label": "Both scheduled human review and routed automated alerts",
          "facts": {
            "log_prompts": true,
            "review_prompts": true,
            "alert_prompts": true
          }
        }
      ],
      "facts": [
        "log_prompts",
        "review_prompts",
        "alert_prompts"
      ],
      "when": "human_input",
      "help": ""
    },
    {
      "id": "monitor_responses",
      "section": "monitoring",
      "title": "How are agent responses monitored?",
      "type": "single",
      "options": [
        {
          "id": "none",
          "label": "Not recorded",
          "facts": {
            "log_responses": false,
            "review_responses": false,
            "alert_responses": false
          }
        },
        {
          "id": "record",
          "label": "Recorded, without routine review",
          "facts": {
            "log_responses": true,
            "review_responses": false,
            "alert_responses": false
          }
        },
        {
          "id": "incident",
          "label": "Reviewed only after an incident",
          "facts": {
            "log_responses": true,
            "review_responses": false,
            "alert_responses": false
          }
        },
        {
          "id": "human",
          "label": "Recorded and reviewed on a schedule by an assigned person",
          "facts": {
            "log_responses": true,
            "review_responses": true,
            "alert_responses": false
          }
        },
        {
          "id": "auto",
          "label": "Recorded and automatically checked, with alerts routed to a responder",
          "facts": {
            "log_responses": true,
            "review_responses": false,
            "alert_responses": true
          }
        },
        {
          "id": "both",
          "label": "Both scheduled human review and routed automated alerts",
          "facts": {
            "log_responses": true,
            "review_responses": true,
            "alert_responses": true
          }
        }
      ],
      "facts": [
        "log_responses",
        "review_responses",
        "alert_responses"
      ],
      "when": true,
      "help": ""
    },
    {
      "id": "monitor_tools",
      "section": "monitoring",
      "title": "How are tool calls and their outcomes monitored?",
      "type": "single",
      "options": [
        {
          "id": "none",
          "label": "Not recorded",
          "facts": {
            "log_tools": false,
            "review_tools": false,
            "alert_tools": false
          }
        },
        {
          "id": "record",
          "label": "Recorded, without routine review",
          "facts": {
            "log_tools": true,
            "review_tools": false,
            "alert_tools": false
          }
        },
        {
          "id": "incident",
          "label": "Reviewed only after an incident",
          "facts": {
            "log_tools": true,
            "review_tools": false,
            "alert_tools": false
          }
        },
        {
          "id": "human",
          "label": "Recorded and reviewed on a schedule by an assigned person",
          "facts": {
            "log_tools": true,
            "review_tools": true,
            "alert_tools": false
          }
        },
        {
          "id": "auto",
          "label": "Recorded and automatically checked, with alerts routed to a responder",
          "facts": {
            "log_tools": true,
            "review_tools": false,
            "alert_tools": true
          }
        },
        {
          "id": "both",
          "label": "Both scheduled human review and routed automated alerts",
          "facts": {
            "log_tools": true,
            "review_tools": true,
            "alert_tools": true
          }
        }
      ],
      "facts": [
        "log_tools",
        "review_tools",
        "alert_tools"
      ],
      "when": "tools",
      "help": ""
    },
    {
      "id": "monitor_data",
      "section": "monitoring",
      "title": "How are access to protected information monitored?",
      "type": "single",
      "options": [
        {
          "id": "none",
          "label": "Not recorded",
          "facts": {
            "log_data": false,
            "review_data": false,
            "alert_data": false
          }
        },
        {
          "id": "record",
          "label": "Recorded, without routine review",
          "facts": {
            "log_data": true,
            "review_data": false,
            "alert_data": false
          }
        },
        {
          "id": "incident",
          "label": "Reviewed only after an incident",
          "facts": {
            "log_data": true,
            "review_data": false,
            "alert_data": false
          }
        },
        {
          "id": "human",
          "label": "Recorded and reviewed on a schedule by an assigned person",
          "facts": {
            "log_data": true,
            "review_data": true,
            "alert_data": false
          }
        },
        {
          "id": "auto",
          "label": "Recorded and automatically checked, with alerts routed to a responder",
          "facts": {
            "log_data": true,
            "review_data": false,
            "alert_data": true
          }
        },
        {
          "id": "both",
          "label": "Both scheduled human review and routed automated alerts",
          "facts": {
            "log_data": true,
            "review_data": true,
            "alert_data": true
          }
        }
      ],
      "facts": [
        "log_data",
        "review_data",
        "alert_data"
      ],
      "when": "private_data",
      "help": ""
    },
    {
      "id": "monitor_handoffs",
      "section": "monitoring",
      "title": "How are agent-to-agent handoffs monitored?",
      "type": "single",
      "options": [
        {
          "id": "none",
          "label": "Not recorded",
          "facts": {
            "log_handoffs": false,
            "review_handoffs": false,
            "alert_handoffs": false
          }
        },
        {
          "id": "record",
          "label": "Recorded, without routine review",
          "facts": {
            "log_handoffs": true,
            "review_handoffs": false,
            "alert_handoffs": false
          }
        },
        {
          "id": "incident",
          "label": "Reviewed only after an incident",
          "facts": {
            "log_handoffs": true,
            "review_handoffs": false,
            "alert_handoffs": false
          }
        },
        {
          "id": "human",
          "label": "Recorded and reviewed on a schedule by an assigned person",
          "facts": {
            "log_handoffs": true,
            "review_handoffs": true,
            "alert_handoffs": false
          }
        },
        {
          "id": "auto",
          "label": "Recorded and automatically checked, with alerts routed to a responder",
          "facts": {
            "log_handoffs": true,
            "review_handoffs": false,
            "alert_handoffs": true
          }
        },
        {
          "id": "both",
          "label": "Both scheduled human review and routed automated alerts",
          "facts": {
            "log_handoffs": true,
            "review_handoffs": true,
            "alert_handoffs": true
          }
        }
      ],
      "facts": [
        "log_handoffs",
        "review_handoffs",
        "alert_handoffs"
      ],
      "when": {
        "all": [
          "multiple_agents",
          "handoffs"
        ]
      },
      "help": ""
    },
    {
      "id": "owner",
      "section": "governance",
      "title": "Is a named person or team accountable for the agent?",
      "type": "single",
      "options": [
        {
          "id": "yes",
          "label": "Yes",
          "facts": {
            "owner": true
          }
        },
        {
          "id": "no",
          "label": "No",
          "facts": {
            "owner": false
          }
        }
      ],
      "facts": [
        "owner"
      ],
      "when": true,
      "help": ""
    },
    {
      "id": "use_policy",
      "section": "governance",
      "title": "Is there a documented policy defining acceptable use and prohibited actions?",
      "type": "single",
      "options": [
        {
          "id": "yes",
          "label": "Yes",
          "facts": {
            "use_policy": true
          }
        },
        {
          "id": "no",
          "label": "No",
          "facts": {
            "use_policy": false
          }
        }
      ],
      "facts": [
        "use_policy"
      ],
      "when": true,
      "help": ""
    },
    {
      "id": "access_review",
      "section": "governance",
      "title": "Are permissions reviewed regularly and when roles change?",
      "type": "single",
      "options": [
        {
          "id": "yes",
          "label": "Yes",
          "facts": {
            "access_review": true
          }
        },
        {
          "id": "no",
          "label": "No",
          "facts": {
            "access_review": false
          }
        }
      ],
      "facts": [
        "access_review"
      ],
      "when": {
        "any": [
          "tools",
          "private_data"
        ]
      },
      "help": ""
    },
    {
      "id": "change_review",
      "section": "governance",
      "title": "Are model, tool, or dependency changes reviewed and tested before release?",
      "type": "single",
      "options": [
        {
          "id": "yes",
          "label": "Yes",
          "facts": {
            "change_review": true
          }
        },
        {
          "id": "no",
          "label": "No",
          "facts": {
            "change_review": false
          }
        }
      ],
      "facts": [
        "change_review"
      ],
      "when": "third_party",
      "help": ""
    },
    {
      "id": "incident_response",
      "section": "governance",
      "title": "Is there a defined process for responding to unsafe behavior or security incidents?",
      "type": "single",
      "options": [
        {
          "id": "yes",
          "label": "Yes",
          "facts": {
            "incident_response": true
          }
        },
        {
          "id": "no",
          "label": "No",
          "facts": {
            "incident_response": false
          }
        }
      ],
      "facts": [
        "incident_response"
      ],
      "when": true,
      "help": ""
    }
  ],
  "exclusive": {
    "users": "none",
    "input_sources": "direct",
    "guardrails": "none",
    "tool_types": "none",
    "permissions": "read",
    "tool_policies": "none",
    "data_types": "public",
    "data_destinations": "none",
    "access_model": "none",
    "architecture_mode": "single"
  },
  "deferred": {
    "persistent_memory": "Uses persistent or retrieved agent memory",
    "memory_writable": "Stored memory can be written or modified",
    "memory_influences": "Retrieved memory can influence subsequent actions",
    "memory_rollback": "Memory can be restored to a trusted checkpoint",
    "training_dp": "Differential privacy is applied during sensitive model training"
  },
  "derived": {
    "input_route": {
      "any": [
        "human_input",
        "external_documents",
        "tool_content"
      ]
    },
    "can_execute": {
      "any": [
        "write_actions",
        "code_tool",
        "finance_tool"
      ]
    },
    "consequential": {
      "any": [
        "can_execute",
        "consequential_advice",
        "high_impact"
      ]
    },
    "dependency_execution": {
      "any": [
        "can_execute",
        "component_execution"
      ]
    },
    "containment_capability": {
      "any": [
        "code_tool",
        "write_actions",
        "component_execution"
      ]
    },
    "multi_route": {
      "all": [
        "multiple_agents",
        "handoffs"
      ]
    },
    "monitoring_complete": {
      "all": [
        {
          "any": [
            {
              "not": "human_input"
            },
            {
              "all": [
                "log_prompts",
                {
                  "any": [
                    "review_prompts",
                    "alert_prompts"
                  ]
                }
              ]
            }
          ]
        },
        {
          "any": [
            {
              "not": true
            },
            {
              "all": [
                "log_responses",
                {
                  "any": [
                    "review_responses",
                    "alert_responses"
                  ]
                }
              ]
            }
          ]
        },
        {
          "any": [
            {
              "not": "tools"
            },
            {
              "all": [
                "log_tools",
                {
                  "any": [
                    "review_tools",
                    "alert_tools"
                  ]
                }
              ]
            }
          ]
        },
        {
          "any": [
            {
              "not": "private_data"
            },
            {
              "all": [
                "log_data",
                {
                  "any": [
                    "review_data",
                    "alert_data"
                  ]
                }
              ]
            }
          ]
        },
        {
          "any": [
            {
              "not": {
                "all": [
                  "multiple_agents",
                  "handoffs"
                ]
              }
            },
            {
              "all": [
                "log_handoffs",
                {
                  "any": [
                    "review_handoffs",
                    "alert_handoffs"
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  },
  "controls": {
    "isolate": {
      "id": "isolate",
      "title": "Instruction isolation",
      "condition": "instruction_isolation",
      "action": "Separate trusted instructions from external documents and tool-returned content.",
      "component": "External Data / Agent Core",
      "owner": "Agent developer",
      "source": "threat.pdf"
    },
    "guard": {
      "id": "guard",
      "title": "Input and output guardrails",
      "condition": {
        "all": [
          "input_guardrails",
          "output_guardrails"
        ]
      },
      "action": "Check incoming requests and outgoing responses for unsafe or unauthorized content; test bypass cases.",
      "component": "End User / Result",
      "owner": "Agent developer / security team",
      "source": "threat.pdf"
    },
    "clarify": {
      "id": "clarify",
      "title": "Clarify intent",
      "condition": "clarifies",
      "action": "Ask the user to resolve uncertain goals, targets, recipients, or constraints.",
      "component": "Goal Understanding",
      "owner": "Product owner / agent developer",
      "source": "threat.pdf; operationalized as clarification and concise plan explanations"
    },
    "plan": {
      "id": "plan",
      "title": "Plan before execution",
      "condition": "plan_preview",
      "action": "Show the planned actions for review before execution.",
      "component": "Task Decomposition",
      "owner": "Agent developer",
      "source": "threat.pdf"
    },
    "approval": {
      "id": "approval",
      "title": "Human approval",
      "condition": "human_approval",
      "action": "Require approval before high-impact actions such as deletion, payment, deployment, or sending.",
      "component": "Policy",
      "owner": "System owner / agent developer",
      "source": "threat.pdf"
    },
    "access": {
      "id": "access",
      "title": "Role and context based access",
      "condition": "scoped_access",
      "action": "Enforce requester-specific access using roles, purpose, resource sensitivity, and context.",
      "component": "Policy / Tools",
      "owner": "Identity and access administrator",
      "source": "threat.pdf"
    },
    "tenant": {
      "id": "tenant",
      "title": "Tenant boundary enforcement",
      "condition": "tenant_isolation",
      "action": "Enforce the requesting tenant or department scope at each retrieval and action.",
      "component": "Policy / Tools",
      "owner": "Identity and access administrator",
      "source": "attack_chain.pdf RPP-06; implementation mapping"
    },
    "allowlist": {
      "id": "allowlist",
      "title": "Approved tools and tool-use policy",
      "condition": {
        "all": [
          "tool_allowlist",
          "action_authorization"
        ]
      },
      "action": "Limit tools to approved capabilities and enforce action rules before invocation.",
      "component": "Tool Selection / Policy",
      "owner": "Agent developer",
      "source": "threat.pdf"
    },
    "privilege": {
      "id": "privilege",
      "title": "Least privilege and scoped credentials",
      "condition": "least_privilege",
      "action": "Use narrowly scoped, expiring tool credentials with only required permissions.",
      "component": "Policy / Tools",
      "owner": "System administrator",
      "source": "threat.pdf"
    },
    "sandbox": {
      "id": "sandbox",
      "title": "Isolated execution",
      "condition": "isolated_execution",
      "action": "Run risky actions in an isolated environment with restricted access.",
      "component": "Tools / System Level",
      "owner": "Platform engineer",
      "source": "threat.pdf"
    },
    "files": {
      "id": "files",
      "title": "File-system restrictions",
      "condition": "filesystem_limits",
      "action": "Enforce access to approved files and directories at the operating-system boundary.",
      "component": "Tools / System Level",
      "owner": "Platform engineer",
      "source": "threat.pdf"
    },
    "limits": {
      "id": "limits",
      "title": "Runtime budgets",
      "condition": "resource_limits",
      "action": "Enforce time, token, cost, or request budgets per task and user.",
      "component": "Tools / Evaluation",
      "owner": "Platform engineer",
      "source": "threat.pdf"
    },
    "retry": {
      "id": "retry",
      "title": "Retry and delegation limits",
      "condition": "retry_limits",
      "action": "Bound retries and delegation and stop cycles that make no progress.",
      "component": "Task Decomposition / Evaluation",
      "owner": "Agent developer",
      "source": "attack_chain.pdf RPP-09; implementation mapping"
    },
    "minimize": {
      "id": "minimize",
      "title": "Data minimization",
      "condition": "data_minimization",
      "action": "Retrieve and disclose only the information needed for the authorized task.",
      "component": "Tools / Result",
      "owner": "Data owner / agent developer",
      "source": "threat.pdf"
    },
    "detect": {
      "id": "detect",
      "title": "Sensitive data detection",
      "condition": "sensitive_filter",
      "action": "Check outgoing content for personal data, credentials, secrets, and confidential information.",
      "component": "Result",
      "owner": "Security team",
      "source": "threat.pdf"
    },
    "dependency": {
      "id": "dependency",
      "title": "Dependency pinning and integrity",
      "condition": "dependency_integrity",
      "action": "Pin reviewed versions and verify package signatures or integrity before use.",
      "component": "External Data / Tools",
      "owner": "Developer / supply-chain owner",
      "source": "threat.pdf"
    },
    "updates": {
      "id": "updates",
      "title": "Review dependency changes",
      "condition": "change_review",
      "action": "Review and test model and tool updates before release.",
      "component": "Governance",
      "owner": "System owner",
      "source": "Implementation control supporting Dependency Compromise"
    },
    "monitor": {
      "id": "monitor",
      "title": "Reviewed activity records",
      "condition": "monitoring_complete",
      "action": "Record relevant activity and assign scheduled review or automated checks with a responder; minimize sensitive retention.",
      "component": "Governance",
      "owner": "Operations / security team",
      "source": "threat.pdf"
    },
    "accountability": {
      "id": "accountability",
      "title": "Accountable ownership",
      "condition": "owner",
      "action": "Assign a named owner responsible for review and response.",
      "component": "Governance",
      "owner": "Organization leadership",
      "source": "threat.pdf"
    },
    "handoff": {
      "id": "handoff",
      "title": "Re-check delegated content",
      "condition": "handoff_isolation",
      "action": "Preserve untrusted-content boundaries and re-check authorization at the receiving agent.",
      "component": "Agent Core / Policy",
      "owner": "Multi-agent developer",
      "source": "attack_chain.pdf RPP-02A; implementation mapping"
    },
    "memory": {
      "id": "memory",
      "title": "Memory rollback",
      "condition": "memory_rollback",
      "action": "Restore poisoned memory to a trusted checkpoint and check affected tasks.",
      "component": "Deployment-specific memory",
      "owner": "Agent developer",
      "source": "threat.pdf"
    },
    "dp": {
      "id": "dp",
      "title": "Differential privacy in training",
      "condition": "training_dp",
      "action": "Ask the model provider or training team about differential privacy for sensitive training data.",
      "component": "Model training / Governance",
      "owner": "Model provider / training team",
      "source": "threat.pdf"
    },
    "recover": {
      "id": "recover",
      "title": "Stop and recover",
      "condition": "stop_recover",
      "action": "Provide an operator stop mechanism and a recovery process for unsafe changes.",
      "component": "Tools / Governance",
      "owner": "Platform engineer",
      "source": "Implementation control supporting containment and recovery"
    },
    "network": {
      "id": "network",
      "title": "Network restrictions",
      "condition": "network_limits",
      "action": "Restrict outbound destinations and inspect unauthorized network attempts.",
      "component": "Tools / System Level",
      "owner": "Platform engineer",
      "source": "Implementation control supporting containment"
    },
    "policy": {
      "id": "policy",
      "title": "Acceptable-use policy",
      "condition": "use_policy",
      "action": "Define permitted uses, prohibited actions, and escalation rules.",
      "component": "Governance / Policy",
      "owner": "System owner",
      "source": "Implementation governance control"
    },
    "access_review": {
      "id": "access_review",
      "title": "Access review",
      "condition": "access_review",
      "action": "Review permissions on a schedule and after changes in role or scope.",
      "component": "Governance",
      "owner": "Identity and access administrator",
      "source": "Implementation governance control"
    },
    "incident": {
      "id": "incident",
      "title": "Incident response",
      "condition": "incident_response",
      "action": "Define who investigates, contains, and recovers from unsafe or unauthorized behavior.",
      "component": "Governance",
      "owner": "Operations / security team",
      "source": "Implementation governance control"
    },
    "evaluate": {
      "id": "evaluate",
      "title": "Check task results",
      "condition": "result_check",
      "action": "Check results against the original objective and constraints before completion.",
      "component": "Evaluation",
      "owner": "Agent developer",
      "source": "Implementation workflow control"
    }
  },
  "threats": [
    {
      "id": "prompt_injection",
      "name": "Prompt Injection",
      "severity": 3,
      "category": "Input & Control Manipulation",
      "workflow_mapping": {
        "entry": [
          "End User",
          "External Data"
        ]
      },
      "definition": "Malicious instructions in direct input or external content manipulate the agent away from intended instructions.",
      "required": "input_route",
      "protections": [
        "isolate",
        "guard",
        "allowlist",
        "monitor"
      ],
      "weakness": null
    },
    {
      "id": "ambiguous_input",
      "name": "Ambiguous/Harmful Input",
      "severity": 1,
      "category": "Input & Control Manipulation",
      "workflow_mapping": {
        "entry": [
          "End User"
        ]
      },
      "definition": "Input has multiple possible interpretations, including unsafe interpretations that the agent may adopt.",
      "required": "human_input",
      "protections": [
        "clarify",
        "guard",
        "policy"
      ],
      "weakness": null
    },
    {
      "id": "memory_poisoning",
      "name": "Agent Memory Poisoning",
      "severity": 3,
      "category": "Execution & Resource Risks",
      "workflow_mapping": {
        "entry": [
          "External Data",
          "End User"
        ]
      },
      "definition": "False or malicious information corrupts stored memory and influences later decisions or actions.",
      "required": {
        "all": [
          "persistent_memory",
          "memory_writable",
          "memory_influences"
        ]
      },
      "protections": [
        "memory"
      ],
      "weakness": null
    },
    {
      "id": "access_misconfiguration",
      "name": "Misconfiguration of Access",
      "severity": 3,
      "category": "Governance & Access Weakness",
      "workflow_mapping": {
        "entry": [
          "Governance"
        ]
      },
      "definition": "Incorrect identity, authorization, credentials, or permission settings grant inappropriate access.",
      "required": {
        "any": [
          "tools",
          "private_data"
        ]
      },
      "protections": [
        "access",
        "privilege",
        "access_review"
      ],
      "weakness": {
        "any": [
          "broad_access",
          {
            "not": "scoped_access"
          }
        ]
      }
    },
    {
      "id": "lack_of_monitoring",
      "name": "Lack of Monitoring",
      "severity": 3,
      "category": "Governance & Access Weakness",
      "workflow_mapping": {
        "appearance": [
          "Governance"
        ]
      },
      "definition": "Inadequate recording and review prevents timely detection of unsafe behavior or violations.",
      "required": true,
      "protections": [
        "monitor",
        "accountability",
        "incident"
      ],
      "weakness": {
        "not": "monitoring_complete"
      }
    },
    {
      "id": "containment_failure",
      "name": "Sandbox Escape / Containment Failure",
      "severity": 3,
      "category": "Isolation & Boundary Failures",
      "workflow_mapping": {
        "entry": [
          "System Level"
        ]
      },
      "definition": "Agent actions or executed code exceed the intended isolation boundary.",
      "required": "containment_capability",
      "protections": [
        "files",
        "privilege",
        "sandbox",
        "network",
        "recover"
      ],
      "weakness": null
    },
    {
      "id": "resource_exhaustion",
      "name": "Resource Exhaustion / Unbounded Recursive Execution",
      "severity": 1,
      "category": "Execution & Resource Risks",
      "workflow_mapping": {
        "appearance": [
          "System Level"
        ]
      },
      "definition": "Execution consumes excessive resources, including through retries, loops, or recursive delegation.",
      "required": true,
      "protections": [
        "limits",
        "retry",
        "recover"
      ],
      "weakness": null
    },
    {
      "id": "goal_misinterpretation",
      "name": "Goal Misinterpretation",
      "severity": 2,
      "category": "Input & Control Manipulation",
      "workflow_mapping": {
        "appearance": [
          "Goal Understanding"
        ]
      },
      "definition": "The agent incorrectly infers the intended objective, constraints, or priorities.",
      "required": "input_route",
      "protections": [
        "clarify",
        "plan",
        "approval",
        "evaluate"
      ],
      "weakness": null
    },
    {
      "id": "wrong_decomposition",
      "name": "Wrong Task Decomposition",
      "severity": 1,
      "category": "Input & Control Manipulation",
      "workflow_mapping": {
        "appearance": [
          "Task Decomposition"
        ]
      },
      "definition": "The agent divides a goal into incomplete, unnecessary, infeasible, or incorrectly connected subtasks.",
      "required": "planning",
      "protections": [
        "plan",
        "approval",
        "evaluate",
        "retry"
      ],
      "weakness": null
    },
    {
      "id": "wrong_tool",
      "name": "Wrong Tool Selection",
      "severity": 2,
      "category": "Input & Control Manipulation",
      "workflow_mapping": {
        "appearance": [
          "Tool Selection"
        ]
      },
      "definition": "The selected tool does not match the task’s requirements, constraints, or acceptable side effects.",
      "required": "tools",
      "protections": [
        "allowlist",
        "plan",
        "approval"
      ],
      "weakness": null
    },
    {
      "id": "harmful_execution",
      "name": "Harmful Execution",
      "severity": 3,
      "category": "Input & Control Manipulation",
      "workflow_mapping": {
        "appearance": [
          "Tools"
        ]
      },
      "definition": "The agent or a component acting on its behalf performs an action that causes or could cause damage, unauthorized access, or other unsafe outcomes.",
      "required": "dependency_execution",
      "protections": [
        "privilege",
        "sandbox",
        "approval",
        "recover"
      ],
      "weakness": null
    },
    {
      "id": "data_exposure",
      "name": "Data Exposure",
      "severity": 3,
      "category": "Input & Control Manipulation",
      "workflow_mapping": {
        "appearance": [
          "Tools"
        ]
      },
      "definition": "Sensitive information becomes accessible to an unauthorized party through outputs, interactions, or infrastructure.",
      "required": {
        "all": [
          "private_data",
          "disclosure_route"
        ]
      },
      "protections": [
        "minimize",
        "detect",
        "access",
        "tenant"
      ],
      "weakness": null
    },
    {
      "id": "dependency_compromise",
      "name": "Dependency Compromise",
      "severity": 2,
      "category": "Governance & Access Weakness",
      "workflow_mapping": {
        "appearance": [
          "Tool Selection",
          "Tools"
        ]
      },
      "definition": "A malicious, tampered-with, or exploited component introduces unauthorized behavior into the workflow.",
      "required": "third_party",
      "protections": [
        "dependency",
        "updates"
      ],
      "weakness": null
    },
    {
      "id": "training_leakage",
      "name": "Training Data Leakage",
      "severity": 3,
      "category": "Execution & Resource Risks",
      "workflow_mapping": {
        "appearance": [
          "Tools"
        ]
      },
      "definition": "The model reveals sensitive information learned during pretraining or fine-tuning.",
      "required": "sensitive_training",
      "protections": [
        "dp",
        "detect"
      ],
      "weakness": null
    }
  ],
  "paths": [
    {
      "id": "RPP-01",
      "type": "Adversarial",
      "nodes": [
        {
          "id": "injection",
          "risk": "prompt_injection",
          "label": null
        },
        {
          "id": "exposure",
          "risk": "data_exposure",
          "label": null
        },
        {
          "id": "access",
          "risk": "access_misconfiguration",
          "label": null
        }
      ],
      "edges": [
        [
          "injection",
          "INDUCES",
          "exposure"
        ],
        [
          "access",
          "ENABLES",
          "exposure"
        ]
      ],
      "required": {
        "all": [
          "input_route",
          "tools",
          "private_data",
          "disclosure_route"
        ]
      },
      "enabling": {
        "Broad access": "broad_access"
      },
      "protections": [
        "isolate",
        "access",
        "allowlist",
        "minimize",
        "detect"
      ],
      "workflow": [
        "End User / External Data",
        "Goal Understanding",
        "Tool Selection",
        "Policy",
        "Tools",
        "Result"
      ],
      "scenario": "An injected instruction induces disclosure through a connected tool; excessive access can enable the disclosure.",
      "source_note": ""
    },
    {
      "id": "RPP-02",
      "type": "Adversarial",
      "nodes": [
        {
          "id": "injection",
          "risk": "prompt_injection",
          "label": null
        },
        {
          "id": "execution",
          "risk": "harmful_execution",
          "label": null
        }
      ],
      "edges": [
        [
          "injection",
          "INDUCES",
          "execution"
        ]
      ],
      "required": {
        "all": [
          "input_route",
          "can_execute"
        ]
      },
      "enabling": {},
      "protections": [
        "isolate",
        "guard",
        "allowlist",
        "approval",
        "privilege"
      ],
      "workflow": [
        "End User / External Data",
        "Goal Understanding",
        "Tool Selection",
        "Policy",
        "Tools",
        "Result"
      ],
      "scenario": "Injected instructions cause an unauthorized or unsafe action.",
      "source_note": "Execution route assessed here; advice-only harm requires a separate outcome definition."
    },
    {
      "id": "RPP-02A",
      "type": "Adversarial",
      "nodes": [
        {
          "id": "agent_a",
          "risk": "prompt_injection",
          "label": "Prompt Injection — Agent A"
        },
        {
          "id": "agent_b",
          "risk": "prompt_injection",
          "label": "Prompt Injection — Agent B"
        },
        {
          "id": "execution_b",
          "risk": "harmful_execution",
          "label": "Harmful Execution — Agent B"
        }
      ],
      "edges": [
        [
          "agent_a",
          "PROPAGATES",
          "agent_b"
        ],
        [
          "agent_b",
          "INDUCES",
          "execution_b"
        ]
      ],
      "required": {
        "all": [
          "input_route",
          "multi_route",
          "can_execute"
        ]
      },
      "enabling": {
        "Unisolated handoff": {
          "not": "handoff_isolation"
        }
      },
      "protections": [
        "handoff",
        "isolate",
        "allowlist",
        "approval",
        "monitor"
      ],
      "workflow": [
        "External Data",
        "Agent A Goal Understanding",
        "Agent A Delegation",
        "Agent B Goal Understanding",
        "Agent B Tool Selection",
        "Tools / Result"
      ],
      "scenario": "Injected content passes through a handoff and influences a receiving agent’s actions.",
      "source_note": "System-level answers establish possible capability; verify that the receiving agent itself has the relevant execution permission."
    },
    {
      "id": "RPP-03",
      "type": "Adversarial",
      "nodes": [
        {
          "id": "memory",
          "risk": "memory_poisoning",
          "label": null
        },
        {
          "id": "execution",
          "risk": "harmful_execution",
          "label": null
        }
      ],
      "edges": [
        [
          "memory",
          "INDUCES",
          "execution"
        ]
      ],
      "required": {
        "all": [
          "persistent_memory",
          "memory_writable",
          "memory_influences",
          "can_execute"
        ]
      },
      "enabling": {},
      "protections": [
        "memory",
        "approval",
        "privilege"
      ],
      "workflow": [
        "Deployment-specific memory",
        "Goal Understanding",
        "Task Decomposition",
        "Tool Selection",
        "Tools / Result"
      ],
      "scenario": "Poisoned stored information is retrieved and used to guide a harmful action.",
      "source_note": "Memory section is deferred; unanswered memory conditions remain unknown."
    },
    {
      "id": "RPP-04",
      "type": "Adversarial",
      "nodes": [
        {
          "id": "dependency",
          "risk": "dependency_compromise",
          "label": null
        },
        {
          "id": "execution",
          "risk": "harmful_execution",
          "label": null
        }
      ],
      "edges": [
        [
          "dependency",
          "INDUCES",
          "execution"
        ]
      ],
      "required": {
        "all": [
          "third_party",
          "dependency_execution"
        ]
      },
      "enabling": {},
      "protections": [
        "dependency",
        "updates",
        "privilege",
        "sandbox"
      ],
      "workflow": [
        "External Data",
        "Agent Core / Tool Selection / Tools",
        "Result"
      ],
      "scenario": "A compromised component causes an unsafe operation when loaded or invoked.",
      "source_note": "Uses section ID RPP-04; source figure caption retains RPP-05."
    },
    {
      "id": "RPP-06",
      "type": "Configuration-induced",
      "nodes": [
        {
          "id": "access",
          "risk": "access_misconfiguration",
          "label": null
        },
        {
          "id": "boundary",
          "risk": null,
          "label": "Cross-Tenant Isolation Failure"
        },
        {
          "id": "exposure",
          "risk": "data_exposure",
          "label": null
        }
      ],
      "edges": [
        [
          "access",
          "ENABLES",
          "boundary"
        ],
        [
          "boundary",
          "INDUCES",
          "exposure"
        ]
      ],
      "required": {
        "all": [
          "multiple_scopes",
          "private_data",
          "disclosure_route"
        ]
      },
      "enabling": {
        "Broad access": "broad_access",
        "Boundary enforcement absent": {
          "not": "tenant_isolation"
        }
      },
      "protections": [
        "access",
        "tenant",
        "minimize",
        "detect"
      ],
      "workflow": [
        "Governance",
        "Deployment-specific storage / retrieval"
      ],
      "scenario": "Incorrect access scope allows protected information to cross a client or department boundary.",
      "source_note": "Cross-Tenant Isolation Failure is a path condition, with no invented standalone score. Storage/retrieval generalizes the source memory mapping; confirm the deployment mechanism."
    },
    {
      "id": "RPP-07",
      "type": "Accidental or ambiguity-induced",
      "nodes": [
        {
          "id": "input",
          "risk": "ambiguous_input",
          "label": null
        },
        {
          "id": "goal",
          "risk": "goal_misinterpretation",
          "label": null
        },
        {
          "id": "execution",
          "risk": "harmful_execution",
          "label": null
        }
      ],
      "edges": [
        [
          "input",
          "INDUCES",
          "goal"
        ],
        [
          "goal",
          "INDUCES",
          "execution"
        ]
      ],
      "required": {
        "all": [
          "human_input",
          "can_execute"
        ]
      },
      "enabling": {
        "No clarification": {
          "not": "clarifies"
        }
      },
      "protections": [
        "clarify",
        "plan",
        "approval"
      ],
      "workflow": [
        "End User",
        "Goal Understanding",
        "Task Decomposition",
        "Tool Selection",
        "Tools / Result"
      ],
      "scenario": "An ambiguous instruction is interpreted incorrectly and leads to an unsafe action.",
      "source_note": ""
    },
    {
      "id": "RPP-08",
      "type": "Reasoning-induced",
      "nodes": [
        {
          "id": "goal",
          "risk": "goal_misinterpretation",
          "label": null
        },
        {
          "id": "tool",
          "risk": "wrong_tool",
          "label": null
        },
        {
          "id": "execution",
          "risk": "harmful_execution",
          "label": null
        }
      ],
      "edges": [
        [
          "goal",
          "INDUCES",
          "tool"
        ],
        [
          "tool",
          "INDUCES",
          "execution"
        ]
      ],
      "required": {
        "all": [
          "input_route",
          "tools",
          "can_execute"
        ]
      },
      "enabling": {},
      "protections": [
        "clarify",
        "allowlist",
        "plan",
        "approval"
      ],
      "workflow": [
        "Goal Understanding",
        "Task Decomposition",
        "Tool Selection",
        "Tools",
        "Result"
      ],
      "scenario": "A misunderstood objective leads to the wrong tool and an unsafe action.",
      "source_note": "Formal edges reconstructed from the operational description; formal-chain section is empty in source."
    },
    {
      "id": "RPP-09",
      "type": "Accidental inducible",
      "nodes": [
        {
          "id": "plan",
          "risk": "wrong_decomposition",
          "label": null
        },
        {
          "id": "resource",
          "risk": "resource_exhaustion",
          "label": null
        }
      ],
      "edges": [
        [
          "plan",
          "INDUCES",
          "resource"
        ]
      ],
      "required": {
        "all": [
          "planning",
          {
            "any": [
              "replanning",
              "tools",
              "multi_route"
            ]
          }
        ]
      },
      "enabling": {
        "No retry bounds": {
          "not": "retry_limits"
        },
        "No runtime limits": {
          "not": "resource_limits"
        }
      },
      "protections": [
        "plan",
        "limits",
        "retry",
        "recover",
        "monitor"
      ],
      "workflow": [
        "Goal Understanding",
        "Task Decomposition",
        "Tool Selection",
        "Tools",
        "Evaluation",
        "Task Decomposition"
      ],
      "scenario": "An incorrect task breakdown creates repeated calls or recursive work that exhausts resources.",
      "source_note": "The source explicitly marks supporting evidence as insufficient and under review."
    }
  ],
  "likelihood": {
    "prompt_injection": 3,
    "ambiguous_input": 3,
    "memory_poisoning": 2,
    "access_misconfiguration": 2,
    "lack_of_monitoring": 2,
    "containment_failure": 1,
    "resource_exhaustion": 2,
    "goal_misinterpretation": 3,
    "wrong_decomposition": 3,
    "wrong_tool": 3,
    "harmful_execution": 2,
    "data_exposure": 2,
    "dependency_compromise": 2,
    "training_leakage": 2
  },
  "severity_labels": {
    "1": "Low",
    "2": "Medium",
    "3": "High",
    "4": "Critical"
  },
  "likelihood_labels": {
    "1": "Low",
    "2": "Medium",
    "3": "High"
  },
  "interpretation": "Scores rank baseline concern; they are not incident probabilities or measured residual risk. Unknown answers are not No. Applicability establishes capability, not evidence of an incident. Reported protections require verification.",
  "scope_notes": [
    "Memory structure and access questions are deferred. Memory-specific facts remain unknown unless supplied in JSON.",
    "Multi-agent capability is assessed at system level; verify receiving-agent permissions for RPP-02A.",
    "RPP-08 edges are inferred from its operational description. RPP-09 evidence is marked insufficient in the source.",
    "Training data leakage is limited to pretraining/fine-tuning; retrieved-memory exposure is assessed separately.",
    "Execution paths require action capability; advice-only harm is outside these execution routes.",
    "RPP applicability uses capability prerequisites. Controls are evaluated separately and are not treated as proof that a route is impossible."
  ]
};

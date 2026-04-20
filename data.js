// ============================================================
// FRESHSTACK PLATFORM LEARNING PATH
// 30-day V1 sprint mode + long-term reference
// Each module: id, title, desc, week, hours, sprintEssential, resources, exercise
// ============================================================

const SPRINT_META = {
  deadline: "30 days",
  goal: "v1 CEO Command Bot built on FreshStack's own stack — ready for month 2 outreach",
  laraCapacity: "Full-time (~8h/day)",
  bapCapacity: "Half-time (~4h/day — Stratosphere in parallel)",
  decisions: [
    "FreshStack is its own first client (own data, own demo footage)",
    "Slack as the v1 messaging platform",
    "5 intents locked by day 10 — no additions in weeks 2-4",
    "Sonnet 4.5 for all intents (multi-model routing deferred to month 3)",
    "No custom MCP servers in v1 — use Notion's existing MCP + REST for others"
  ],
  v1Intents: [
    "Pipeline query (Notion CRM)",
    "Today's calendar + conflicts",
    "Urgent email scan (read-only)",
    "Overdue task check (Notion)",
    "Create task with confirmation (write action — the safety gate demo)"
  ]
};

const LEARNING_PATH = {

  shared: {
    phases: [
      {
        id: "s1",
        label: "// PHASE S1",
        title: "How the CEO Bot actually works",
        time: "6-8 hours · Week 1",
        week: 1,
        objective: "Both founders can explain the architecture in plain English. Skim, don't deep-dive — you've already done the thinking. This is about fluency.",
        modules: [
          {
            id: "s1-1",
            title: "Walk through the 5 layers of the architecture",
            desc: "Interface, Orchestration, Intelligence, Integration, Infrastructure. Explain what each layer does, what FreshStack owns vs what the client brings, and why the orchestration layer is our IP.",
            hours: 2, week: 1, sprintEssential: true,
            resources: [
              { type: "INTERNAL", label: "CEO Command Bot Notion page", url: "https://www.notion.so/344d7fcf5f0481d8bb63feb8c7d0f96c" },
              { type: "INTERNAL", label: "Architecture infographic (SVG)", url: "#" }
            ],
            exercise: "Without looking at the diagram, draw the 5 layers on paper and label what lives in each. Compare."
          },
          {
            id: "s1-2",
            title: "Understand why Supabase exists",
            desc: "Supabase is the piece the old whiteboard was missing. Without it the bot can't be multi-tenant. Understand what it stores and why removing it breaks everything.",
            hours: 1, week: 1, sprintEssential: true,
            resources: [
              { type: "READ", label: "Supabase — what it is and why", url: "https://supabase.com/docs/guides/getting-started/architecture" }
            ],
            exercise: "Write one paragraph explaining to a non-technical prospect why 'we use Supabase' matters. No jargon."
          },
          {
            id: "s1-3",
            title: "Read vs write confirmation flow",
            desc: "Reads auto-execute. Writes require CEO approval. The single biggest safety feature and the sentence that closes deals.",
            hours: 1, week: 1, sprintEssential: true,
            resources: [
              { type: "INTERNAL", label: "Confirmation Gateway — Layer 2 of architecture", url: "#" }
            ],
            exercise: "Write 3 example intents: one pure read, one pure write, one ambiguous. Decide which bucket the ambiguous one goes in and justify."
          },
          {
            id: "s1-4",
            title: "Why Sonnet 4.5 for v1 (multi-model routing deferred)",
            desc: "v1 uses Sonnet 4.5 for everything. The Haiku/Sonnet/Opus split is a month 3 cost optimisation once you have usage data. Understand why this is the right call now.",
            hours: 1, week: 1, sprintEssential: true,
            resources: [
              { type: "READ", label: "Claude model comparison", url: "https://docs.claude.com/en/docs/about-claude/models/overview" }
            ],
            exercise: "Write the one-line answer to 'why not use Haiku to save money?' for when a prospect asks in month 2."
          }
        ]
      },
      {
        id: "s2",
        label: "// PHASE S2",
        title: "Vocabulary of LLM-powered products",
        time: "3-4 hours · Week 1",
        week: 1,
        objective: "Use these terms correctly in discovery calls. Getting them wrong kills credibility.",
        modules: [
          {
            id: "s2-1",
            title: "Tool use / function calling",
            desc: "How Claude calls external systems. The mechanism behind every integration. If you can't explain this, you can't explain the product.",
            hours: 1, week: 1, sprintEssential: true,
            resources: [
              { type: "COURSE", label: "Anthropic Academy — Tool Use with Claude", url: "https://anthropic.skilljar.com/" }
            ],
            exercise: "Explain tool use to each other in under 60 seconds. Plain English only."
          },
          {
            id: "s2-2",
            title: "System prompt and context window",
            desc: "System prompt = per-client instructions (our IP). Context window = how much the bot can see at once, affects cost. Both come up in discovery.",
            hours: 1, week: 1, sprintEssential: true,
            resources: [
              { type: "DOCS", label: "Anthropic — System prompts", url: "https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/system-prompts" }
            ],
            exercise: "Write a one-line definition of each, then a one-paragraph explanation a prospect would understand."
          },
          {
            id: "s2-3",
            title: "MCP (Model Context Protocol) in plain English",
            desc: "USB for AI — a standard way for Claude to connect to tools without custom integration code for every one. We use existing MCP servers (Notion has one) and REST for the rest. Custom MCP servers are a month 3 project.",
            hours: 1, week: 1, sprintEssential: true,
            resources: [
              { type: "DOCS", label: "Model Context Protocol introduction", url: "https://modelcontextprotocol.io/introduction" }
            ],
            exercise: "Check which v1 tools have official MCP servers (Notion, Slack, Gmail/Outlook, Google Calendar/Outlook Calendar). Document which do and which need REST."
          }
        ]
      },
      {
        id: "s3",
        label: "// PHASE S3",
        title: "Scope discipline — platform boundaries",
        time: "3-5 hours · Week 2",
        week: 2,
        objective: "Instantly tell when a prospect is in scope, out of scope, or asking for bespoke. The biggest protection against repeating R3ACH/Stratosphere in month 2.",
        modules: [
          {
            id: "s3-1",
            title: "The V1 scope definition — memorise it",
            desc: "3 tools (CRM + Email + Calendar). Slack only. 5 intents locked. Multi-workspace tools scoped to 3 workspaces max. Know this cold before month 2 outreach.",
            hours: 1, week: 2, sprintEssential: true,
            resources: [
              { type: "INTERNAL", label: "CEO Command Bot — External Tools & Prerequisites", url: "https://www.notion.so/344d7fcf5f0481d8bb63feb8c7d0f96c" }
            ],
            exercise: "Without looking at Notion, list from memory: the 3 v1 categories, Phase 2 categories in priority order, and the 5 v1 intents."
          },
          {
            id: "s3-2",
            title: "Exclusions and productisation guardrails",
            desc: "What the bot explicitly doesn't do. Plus FreshStack-side guardrails that stop bespoke drift during delivery.",
            hours: 1, week: 2, sprintEssential: true,
            resources: [
              { type: "INTERNAL", label: "CEO Command Bot — Exclusions property", url: "https://www.notion.so/344d7fcf5f0481d8bb63feb8c7d0f96c" }
            ],
            exercise: "Role-play a discovery call where the prospect asks for something out of scope. Practice the exact language for qualifying out vs scoping to Phase 2."
          },
          {
            id: "s3-3",
            title: "Qualify-in vs qualify-out signals",
            desc: "Read signals fast. Qualify in: 10-200 staff, 3+ tools, CEO is the buyer, API access available. Qualify out: <10 or >200 staff, enterprise security, bespoke transformation ask.",
            hours: 2, week: 2, sprintEssential: true,
            resources: [
              { type: "INTERNAL", label: "FreshStack ICP (Strategy doc)", url: "https://www.notion.so/33bd7fcf5f04816db5f7feb4f9feff1c" }
            ],
            exercise: "Write 5 two-line prospect descriptions. For each, decide qualify-in, qualify-out, or Phase 2-only. Justify in one sentence each."
          }
        ]
      },
      {
        id: "s4",
        label: "// PHASE S4",
        title: "Competitive positioning and moat",
        time: "2-3 hours · Week 1",
        week: 1,
        objective: "Articulate the moat in one sentence. Defend against the 3 main competitive threats.",
        modules: [
          {
            id: "s4-1",
            title: "The one-sentence moat",
            desc: "Tool-agnostic + self-hosted orchestration (our IP) + multi-tenant SMB economics. Drill until both of you say it the same way.",
            hours: 1, week: 1, sprintEssential: true,
            resources: [
              { type: "INTERNAL", label: "Market Signal & competition assessment", url: "https://www.notion.so/344d7fcf5f0481d8bb63feb8c7d0f96c" }
            ],
            exercise: "Write the moat sentence. Show it to the other. Iterate until you both say it within 10 words."
          },
          {
            id: "s4-2",
            title: "vs ChatGPT / Gemini / generic AI",
            desc: "Generic assistants lack persistent tool integration and per-client context. Know the 3 things we do that they can't.",
            hours: 1, week: 1, sprintEssential: true,
            resources: [],
            exercise: "Prepare the 60-second answer to 'why not just use ChatGPT?'"
          },
          {
            id: "s4-3",
            title: "vs DIY n8n/Make and vs enterprise platforms",
            desc: "Two more objections you'll hit. Prep the answers now so you're not improvising them in a live call.",
            hours: 1, week: 1, sprintEssential: true,
            resources: [
              { type: "READ", label: "Moveworks overview (competitor context)", url: "https://www.moveworks.com/" }
            ],
            exercise: "Prepare 60-second answers to both: 'why not build this in n8n ourselves?' and 'what about Moveworks / Copilot Studio?'"
          }
        ]
      }
    ]
  },

  lara: {
    phases: [
      {
        id: "l1",
        label: "// PHASE L1",
        title: "Scaffolding — TypeScript + Railway + Supabase + Slack + Claude",
        time: "Week 1 · ~20 hours",
        week: 1,
        objective: "Plumbing working end-to-end. Slack message → webhook → orchestration service → Supabase → Claude → back to Slack. No tools yet. Learn by building, not by reading.",
        modules: [
          {
            id: "l1-1",
            title: "TypeScript project + Railway deployment",
            desc: "Orchestration service as a TypeScript project. Deploy to Railway with a health-check endpoint. Use Claude Code for anything you don't know — your job is to ship, not to master TS academically.",
            hours: 4, week: 1, sprintEssential: true,
            resources: [
              { type: "DOCS", label: "Railway deployment quickstart", url: "https://docs.railway.com/quick-start" },
              { type: "DOCS", label: "TypeScript handbook (reference)", url: "https://www.typescriptlang.org/docs/handbook/intro.html" }
            ],
            exercise: "Health-check endpoint live on Railway. 200 OK with JSON response. Committed to private GitHub repo."
          },
          {
            id: "l1-2",
            title: "Supabase schema for v1",
            desc: "Schema: clients, client_configs, client_credentials, conversation_history, scheduled_tasks. Skip full RLS for now — you're the only tenant. Add RLS in week 3.",
            hours: 4, week: 1, sprintEssential: true,
            resources: [
              { type: "DOCS", label: "Supabase getting started", url: "https://supabase.com/docs/guides/getting-started" }
            ],
            exercise: "Schema deployed. Insert one test row per table via the Supabase UI to verify relationships."
          },
          {
            id: "l1-3",
            title: "Slack bot setup + webhook receiver",
            desc: "Create a Slack app, add a bot user, subscribe to message events, point the webhook at your Railway URL. Message to bot → hits service → logs it → posts back 'received'.",
            hours: 6, week: 1, sprintEssential: true,
            resources: [
              { type: "DOCS", label: "Slack — Building your first bot", url: "https://api.slack.com/tutorials/tracks/getting-a-token" },
              { type: "DOCS", label: "Slack events API", url: "https://api.slack.com/apis/events-api" }
            ],
            exercise: "DM your bot in Slack. See it appear in Railway logs. See the bot reply 'received' in Slack."
          },
          {
            id: "l1-4",
            title: "Claude API — first tool-less response",
            desc: "Wire Claude into orchestration. Slack message → Claude API call → response back to Slack. Still no tools — just proving the intelligence layer works.",
            hours: 6, week: 1, sprintEssential: true,
            resources: [
              { type: "DOCS", label: "Anthropic API getting started", url: "https://docs.claude.com/en/docs/get-started" },
              { type: "DOCS", label: "Messages API reference", url: "https://docs.claude.com/en/api/messages" }
            ],
            exercise: "Message the bot 'hello'. Get a real Claude response. Check token usage in the Anthropic console."
          }
        ]
      },
      {
        id: "l2",
        label: "// PHASE L2",
        title: "Tool integrations — Notion, Calendar, Email",
        time: "Week 2 · ~40 hours",
        week: 2,
        objective: "By day 14: all 3 tools connected, 5 intents working, confirmation flow live on at least one write action. This week proves the concept.",
        modules: [
          {
            id: "l2-1",
            title: "Notion integration via existing MCP server",
            desc: "Official Notion MCP server. Connect to FreshStack's Notion. Claude reads from pipeline and task databases. Where MCP stops being abstract.",
            hours: 8, week: 2, sprintEssential: true,
            resources: [
              { type: "DOCS", label: "Notion MCP server", url: "https://developers.notion.com/docs/mcp" },
              { type: "DOCS", label: "Anthropic tool use overview", url: "https://docs.claude.com/en/docs/agents-and-tools/tool-use/overview" }
            ],
            exercise: "Two intents live: 'what's in my pipeline' and 'what's overdue'. Both answered from FreshStack's real Notion data."
          },
          {
            id: "l2-2",
            title: "Lock the 5 v1 intents in writing — day 10 gate",
            desc: "Before going further, document the 5 intents v1 will handle. Description, expected inputs, expected outputs, example phrasings. No additions after this.",
            hours: 3, week: 2, sprintEssential: true,
            resources: [
              { type: "INTERNAL", label: "CEO Command Bot — v1 intent set", url: "https://www.notion.so/344d7fcf5f0481d8bb63feb8c7d0f96c" }
            ],
            exercise: "Intent spec in Notion. Bap confirms each is demo-able in 30 seconds. If not, rewrite."
          },
          {
            id: "l2-3",
            title: "Calendar integration (Google Calendar or Outlook)",
            desc: "Whichever FreshStack uses. OAuth flow is the hard part — expect a day of frustration. 'What's on my calendar today' and 'any conflicts tomorrow' both work.",
            hours: 10, week: 2, sprintEssential: true,
            resources: [
              { type: "READ", label: "OAuth 2.0 simplified", url: "https://aaronparecki.com/oauth-2-simplified/" },
              { type: "DOCS", label: "Google Calendar API quickstart", url: "https://developers.google.com/workspace/calendar/api/quickstart/nodejs" }
            ],
            exercise: "OAuth flow completed, tokens stored in Supabase, calendar intent working end-to-end."
          },
          {
            id: "l2-4",
            title: "Email integration — read-only for v1",
            desc: "Same OAuth pattern as calendar. Read inbox, search urgent threads, summarise. Write actions (drafting replies) deferred to month 2.",
            hours: 8, week: 2, sprintEssential: true,
            resources: [
              { type: "DOCS", label: "Gmail API quickstart", url: "https://developers.google.com/workspace/gmail/api/quickstart/nodejs" }
            ],
            exercise: "'Any urgent emails' intent working. Returns short summary of top 3 unread threads marked important."
          },
          {
            id: "l2-5",
            title: "Confirmation flow for one write action — the safety gate demo",
            desc: "'Create a task for Bap to review the proposal.' Bot drafts the task, posts a Slack message with ✓ and ✗ buttons. Only creates the task on ✓. This one flow sells the product.",
            hours: 8, week: 2, sprintEssential: true,
            resources: [
              { type: "DOCS", label: "Slack Block Kit — interactive buttons", url: "https://api.slack.com/block-kit/interactive-components" }
            ],
            exercise: "End-to-end flow works. Record a 30-second screen capture — this is your demo footage."
          }
        ]
      },
      {
        id: "l3",
        label: "// PHASE L3",
        title: "Production hardening — reliability under real use",
        time: "Week 3 · ~40 hours",
        week: 3,
        objective: "The R3ACH lesson operationalised. Errors surface, retries work, writes are idempotent, and the system survives deliberate breakage. This week is the difference between 'it works when I test it' and 'it works at 3am.'",
        modules: [
          {
            id: "l3-1",
            title: "Error handling + retries + idempotency",
            desc: "Wrap every API call in try/catch. Exponential backoff on transient failures. Idempotency keys on writes so retries don't create duplicates.",
            hours: 8, week: 3, sprintEssential: true,
            resources: [
              { type: "READ", label: "AWS — exponential backoff and jitter", url: "https://aws.amazon.com/blogs/architecture/exponential-backoff-and-jitter/" },
              { type: "READ", label: "Stripe — idempotency in APIs", url: "https://stripe.com/blog/idempotency" }
            ],
            exercise: "Deliberately break things: kill the Notion API mid-request, send the same write intent twice in 2 seconds, trigger a rate limit. System should recover cleanly in all 3 cases."
          },
          {
            id: "l3-2",
            title: "Sentry + Slack alerting — your v1 observability",
            desc: "Sentry catches errors. Slack webhook posts critical ones to #freshstack-alerts. This is observability for v1 — enough to know when the bot is broken, not enterprise tracing.",
            hours: 4, week: 3, sprintEssential: true,
            resources: [
              { type: "DOCS", label: "Sentry for Node.js", url: "https://docs.sentry.io/platforms/javascript/guides/node/" },
              { type: "DOCS", label: "Slack incoming webhooks", url: "https://api.slack.com/messaging/webhooks" }
            ],
            exercise: "Trigger 3 types of failure deliberately. All 3 appear in Slack within 10 seconds with enough context to debug without reproducing."
          },
          {
            id: "l3-3",
            title: "Multi-tenant foundations — RLS + encrypted credentials",
            desc: "Build the multi-tenant pattern now even though you're the only tenant. Supabase RLS on every table. Encrypted credential storage via Supabase Vault. Client 2 doesn't require a rebuild.",
            hours: 10, week: 3, sprintEssential: true,
            resources: [
              { type: "DOCS", label: "Supabase Row Level Security", url: "https://supabase.com/docs/guides/database/postgres/row-level-security" },
              { type: "DOCS", label: "Supabase Vault", url: "https://supabase.com/docs/guides/database/vault" }
            ],
            exercise: "Create a second test tenant. Write a test proving tenant A cannot read tenant B's credentials or conversation history under any query."
          },
          {
            id: "l3-4",
            title: "System prompt engineering for the 5 v1 intents",
            desc: "Tighten each intent. XML tags, explicit tool descriptions, few-shot examples, explicit failure modes. Version the prompts — keep old ones when you change them.",
            hours: 8, week: 3, sprintEssential: true,
            resources: [
              { type: "DOCS", label: "Use XML tags to structure prompts", url: "https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/use-xml-tags" },
              { type: "DOCS", label: "Anthropic prompt engineering overview", url: "https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/overview" }
            ],
            exercise: "Run each intent 3-5 times with real FreshStack data. Note inconsistencies. Fix prompts. Re-run until stable."
          },
          {
            id: "l3-5",
            title: "Basic eval set — 10-15 test cases",
            desc: "Test cases that assert expected tool calls and response patterns for each intent. Pass rate becomes your ship-readiness metric. Full CI/CD eval gates deferred to month 2.",
            hours: 6, week: 3, sprintEssential: true,
            resources: [
              { type: "DOCS", label: "Anthropic — Evaluations", url: "https://docs.claude.com/en/docs/build-with-claude/develop-tests" }
            ],
            exercise: "Eval set written. Current pass rate measured. Anything under 90% gets fixed before week 4."
          }
        ]
      },
      {
        id: "l4",
        label: "// PHASE L4",
        title: "Polish, demo, handover",
        time: "Week 4 · ~40 hours",
        week: 4,
        objective: "Use the bot as FreshStack's CEO. Capture demo footage. Document the system. Stop building, start polishing.",
        modules: [
          {
            id: "l4-1",
            title: "Dogfood — use the bot daily",
            desc: "You are the CEO. Use the bot every day as if you were a paying client. Log every annoyance. Fix them.",
            hours: 10, week: 4, sprintEssential: true,
            resources: [],
            exercise: "Running 'annoyances' log. Each closed before day 30 or explicitly deferred to month 2 with a reason."
          },
          {
            id: "l4-2",
            title: "Record the demo video",
            desc: "90-second screen recording. 3 intents including the confirmation flow. Clean audio. Anchors every month 2 outreach message.",
            hours: 6, week: 4, sprintEssential: true,
            resources: [
              { type: "TOOL", label: "Loom (simple screen recording)", url: "https://loom.com" },
              { type: "TOOL", label: "Screen Studio (polished)", url: "https://screen.studio" }
            ],
            exercise: "Demo at 90s or under. Bap reviews. If he wouldn't show it to a prospect, re-record."
          },
          {
            id: "l4-3",
            title: "Handover doc + runbook",
            desc: "If something breaks at 3am, what do you do? Write it down. Common failures, how to check logs, how to roll back, how to manually handle OAuth refresh when it expires.",
            hours: 8, week: 4, sprintEssential: true,
            resources: [
              { type: "INTERNAL", label: "FreshStack handover system (from March 2026)", url: "#" }
            ],
            exercise: "Runbook written. Bap reads it. If he can't follow it step-by-step during a simulated incident, rewrite."
          },
          {
            id: "l4-4",
            title: "Lock v1 — no more changes",
            desc: "Second pass on evals. Fix what's still failing. Then stop. Don't touch prompts, don't add intents, don't refactor. Month 2 is when scope can change again.",
            hours: 6, week: 4, sprintEssential: true,
            resources: [],
            exercise: "Eval pass rate at 95%+. Git tag v1.0.0. Railway deploy pinned to that tag."
          },
          {
            id: "l4-5",
            title: "Buffer — something has gone wrong",
            desc: "Week 4 always has a surprise. OAuth token expires, Railway hiccup, Notion schema change breaks an intent. Budget 10 hours you hope you don't need.",
            hours: 10, week: 4, sprintEssential: true,
            resources: [],
            exercise: "If you don't use these hours, spend them drafting the first month 2 outreach message with Bap."
          }
        ]
      },
      {
        id: "l5",
        label: "// POST-LAUNCH",
        title: "What Lara explicitly skips in the 30-day sprint",
        time: "Month 2-3 — not now",
        week: 0,
        objective: "Real things that matter for a platform business — not on the v1 critical path. Listed so you don't forget they exist.",
        modules: [
          {
            id: "l5-1",
            title: "Multi-model routing (Haiku/Sonnet/Opus split)",
            desc: "70/20/10 cost optimisation. Needs real usage data before it can be tuned sensibly. Month 3 once you have 2-3 clients.",
            hours: 12, week: 0, sprintEssential: false,
            resources: [
              { type: "DOCS", label: "Claude model selection guide", url: "https://docs.claude.com/en/docs/about-claude/models/overview" }
            ],
            exercise: "After 30 days of v1 usage, measure actual token spend per intent. Design the router from real data."
          },
          {
            id: "l5-2",
            title: "Building custom MCP servers",
            desc: "GoHighLevel has no MCP server. Neither do several Phase 2 tools. Month 3 task once a client needs something that doesn't exist yet.",
            hours: 20, week: 0, sprintEssential: false,
            resources: [
              { type: "DOCS", label: "MCP — Build a server", url: "https://modelcontextprotocol.io/docs/develop/build-server" }
            ],
            exercise: "Build a GoHighLevel MCP server in month 3 when the first GHL client signs."
          },
          {
            id: "l5-3",
            title: "CI/CD with eval gates",
            desc: "GitHub Actions that run the eval set on every PR and block merge if pass rate drops. Useful once prompts are being changed frequently. Month 2 task.",
            hours: 8, week: 0, sprintEssential: false,
            resources: [
              { type: "DOCS", label: "GitHub Actions — CI for Node", url: "https://docs.github.com/en/actions/how-tos/writing-workflows" }
            ],
            exercise: "Set up in month 2 before the second client onboards."
          },
          {
            id: "l5-4",
            title: "Per-tenant rate limiting",
            desc: "Stops one client's runaway usage from degrading service for others. Not a concern at 1 tenant. Essential at 3+.",
            hours: 6, week: 0, sprintEssential: false,
            resources: [
              { type: "READ", label: "Stripe — rate limiting strategy", url: "https://stripe.com/blog/rate-limiters" }
            ],
            exercise: "Implement before the 3rd client onboards."
          },
          {
            id: "l5-5",
            title: "Incident response playbook",
            desc: "Formal severity levels, response procedures, client communication templates, post-mortem format. Month 2 once the first paying client is live.",
            hours: 4, week: 0, sprintEssential: false,
            resources: [
              { type: "READ", label: "Google SRE — incident response", url: "https://sre.google/sre-book/managing-incidents/" }
            ],
            exercise: "Write the one-page playbook when client 1 signs."
          }
        ]
      }
    ]
  },

  bap: {
    phases: [
      {
        id: "b1",
        label: "// PHASE B1",
        title: "Shadow Lara's build — learn by watching",
        time: "Week 1 · ~25 hours",
        week: 1,
        objective: "Fastest path to technical fluency: watch Lara build, ask questions in real time. Lara gets a rubber duck. You get a live tutor.",
        modules: [
          {
            id: "b1-1",
            title: "Architecture literacy — sit with Lara while she scaffolds",
            desc: "Days 3-5 shadow Lara (in person or screen share) while she builds the scaffolding. Ask why every decision is being made. You'll absorb more in 6 hours than reading docs for 6.",
            hours: 8, week: 1, sprintEssential: true,
            resources: [
              { type: "INTERNAL", label: "Architecture infographic", url: "#" }
            ],
            exercise: "End of week 1, explain each of the 5 architecture layers in 30 seconds to Lara. She scores you. Redo until green."
          },
          {
            id: "b1-2",
            title: "LLM vocabulary — memorise the terms",
            desc: "Tool use, system prompt, context window, MCP, rate limiting. You don't need to use them constantly — you need to not misuse them when a prospect does.",
            hours: 4, week: 1, sprintEssential: true,
            resources: [
              { type: "COURSE", label: "Anthropic Academy — Claude 101", url: "https://anthropic.skilljar.com/" }
            ],
            exercise: "Lara quizzes you on 10 terms. Any wrong answers get rewritten in your own words until they stick."
          },
          {
            id: "b1-3",
            title: "Security talking points — OAuth, encryption, data ownership",
            desc: "The single most common objection from 50+ staff SMBs. Know what to say about OAuth, encryption, what happens if the contract ends. Back it with facts.",
            hours: 6, week: 1, sprintEssential: true,
            resources: [
              { type: "INTERNAL", label: "CEO Bot — Prerequisites & IP boundary", url: "https://www.notion.so/344d7fcf5f0481d8bb63feb8c7d0f96c" },
              { type: "READ", label: "OAuth 2.0 simplified", url: "https://aaronparecki.com/oauth-2-simplified/" }
            ],
            exercise: "3-point security talk track drafted. Lara stress-tests. If she spots anything wrong, fix it."
          },
          {
            id: "b1-4",
            title: "Draft the moat sentence",
            desc: "First draft of the moat sentence that month 2 outreach hangs off. It'll evolve — but draft now so you're iterating, not starting from zero in week 3.",
            hours: 4, week: 1, sprintEssential: true,
            resources: [
              { type: "INTERNAL", label: "Market Signal assessment", url: "https://www.notion.so/344d7fcf5f0481d8bb63feb8c7d0f96c" }
            ],
            exercise: "Write v1. Lara reads. Argue about it. Rewrite."
          },
          {
            id: "b1-5",
            title: "Scope boundaries — the R3ACH lesson",
            desc: "Review the R3ACH and Stratosphere retrospectives. Know specifically what went wrong, when, and what language would have stopped it earlier.",
            hours: 3, week: 1, sprintEssential: true,
            resources: [
              { type: "INTERNAL", label: "R3ACH / Stratosphere strategy retrospective", url: "#" }
            ],
            exercise: "List 5 moments in R3ACH delivery where you should have said 'out of scope.' Write the exact sentence you'd say now."
          }
        ]
      },
      {
        id: "b2",
        label: "// PHASE B2",
        title: "Discovery framework — prep for month 2",
        time: "Week 2 · ~25 hours",
        week: 2,
        objective: "Can't run discovery calls yet (no product). But prepare the framework, scripts, and qualifying language so week 1 of month 2 is ready to sell.",
        modules: [
          {
            id: "b2-1",
            title: "The 5-question discovery framework",
            desc: "Write the 5 questions every discovery call must answer. Staff count, tool stack, current pain, budget range, decision process. Same 5 every time = comparable signal.",
            hours: 5, week: 2, sprintEssential: true,
            resources: [
              { type: "READ", label: "SPIN selling overview", url: "https://www.hubspot.com/sales/spin-selling-the-ultimate-guide" }
            ],
            exercise: "5 questions written. Roleplay with Lara as a prospect. Iterate."
          },
          {
            id: "b2-2",
            title: "Tool shortlist confirmation one-pager",
            desc: "Before quoting, get the client to commit to their 3 V1 tools in writing. Includes: chosen tools, messaging platform, intent list, what's explicitly not included.",
            hours: 5, week: 2, sprintEssential: true,
            resources: [
              { type: "INTERNAL", label: "V1 tool shortlist — CEO Bot page", url: "https://www.notion.so/344d7fcf5f0481d8bb63feb8c7d0f96c" }
            ],
            exercise: "One-pager template-ready. Every month 2 proposal uses this before a price is quoted."
          },
          {
            id: "b2-3",
            title: "Bespoke-drift phrases and redirect language",
            desc: "'What if we also wanted...', 'In our case we do X differently...', 'Can it also handle...' Prep the redirect for each.",
            hours: 4, week: 2, sprintEssential: true,
            resources: [
              { type: "INTERNAL", label: "R3ACH retrospective — scope creep moments", url: "#" }
            ],
            exercise: "10 bespoke-drift phrases from R3ACH and Stratosphere. Redirect response for each."
          },
          {
            id: "b2-4",
            title: "Qualify-out language — three templates",
            desc: "Too small, too enterprise, too bespoke. Each under 100 words. Keeps door open for Phase 2 or referrals.",
            hours: 4, week: 2, sprintEssential: true,
            resources: [
              { type: "INTERNAL", label: "Philex qualify-out example", url: "#" }
            ],
            exercise: "3 templates written. Each tested by imagining sending it to a real past conversation."
          },
          {
            id: "b2-5",
            title: "Prospect list for month 2",
            desc: "Initial outreach list. 30-50 names across ICP verticals. Prioritise marketing agencies and e-commerce where you have warm intros.",
            hours: 7, week: 2, sprintEssential: true,
            resources: [
              { type: "INTERNAL", label: "FreshStack ICP definition", url: "https://www.notion.so/33bd7fcf5f04816db5f7feb4f9feff1c" }
            ],
            exercise: "30-50 prospects: name, company, vertical, tool stack (if known), warmth, suggested first-line."
          }
        ]
      },
      {
        id: "b3",
        label: "// PHASE B3",
        title: "Pricing logic + demo practice",
        time: "Week 3 · ~25 hours",
        week: 3,
        objective: "By end of week 3 you can deliver the v1 demo in 2:30 and defend the price without flinching.",
        modules: [
          {
            id: "b3-1",
            title: "Indicative vs validated pricing",
            desc: "$5.5K-$7.5K indicative. When to hold the line, when to flex, what data makes it 'validated'.",
            hours: 4, week: 3, sprintEssential: true,
            resources: [
              { type: "INTERNAL", label: "CEO Bot — Price Est. property", url: "https://www.notion.so/344d7fcf5f0481d8bb63feb8c7d0f96c" }
            ],
            exercise: "Roleplay: prospect pushes back on price. 3 responses — hold firm, flex on scope, walk away."
          },
          {
            id: "b3-2",
            title: "Maintenance ratio — why 20-30%",
            desc: "Defend the ratio with math, not vibes. Cost-to-serve per client, API overhead, margin.",
            hours: 3, week: 3, sprintEssential: true,
            resources: [
              { type: "INTERNAL", label: "Maintenance notes — CEO Bot & Health Monitor", url: "#" }
            ],
            exercise: "60-second answer rehearsed. Delivered to Lara playing sceptical prospect. Revise."
          },
          {
            id: "b3-3",
            title: "Phase 2 add-on sale logic",
            desc: "Plant the Phase 2 seed in the v1 sale without undercutting v1. How to mention Phase 2 so prospects buy now rather than wait.",
            hours: 4, week: 3, sprintEssential: true,
            resources: [
              { type: "INTERNAL", label: "Phase 2 Tool Expansions page", url: "https://www.notion.so/348d7fcf5f04819c971adc1e0becdecc" }
            ],
            exercise: "Draft the 'roadmap' paragraph every v1 proposal includes. V1 scope, Phase 2, expected month 3/6/12 expansion."
          },
          {
            id: "b3-4",
            title: "Practice the demo — target 2:30 runtime",
            desc: "Lara finishes the demo in week 4. You start practicing with her prototype in week 3. 10 run-throughs. Record yourself.",
            hours: 10, week: 3, sprintEssential: true,
            resources: [],
            exercise: "Recording #10 reviewed by Lara. If she'd buy it, you're ready."
          },
          {
            id: "b3-5",
            title: "First-contact message templates",
            desc: "Cold outreach, warm intro, follow-up sequence. Each under 150 words. A/B-ready from day 1 of month 2.",
            hours: 4, week: 3, sprintEssential: true,
            resources: [],
            exercise: "3 templates written. Lara reviews. If any feels desperate or salesy, rewrite."
          }
        ]
      },
      {
        id: "b4",
        label: "// PHASE B4",
        title: "Month 2 prep — day 31 ready",
        time: "Week 4 · ~25 hours",
        week: 4,
        objective: "Day 31, the switch flips from 'build mode' to 'sell mode' with zero transition cost.",
        modules: [
          {
            id: "b4-1",
            title: "Website copy for CEO Bot v1",
            desc: "Website currently has no product. Write the v1 product page: hero, problem, solution, demo video, pricing, 'book a discovery call' CTA.",
            hours: 8, week: 4, sprintEssential: true,
            resources: [
              { type: "INTERNAL", label: "CEO Bot Notion page (source)", url: "https://www.notion.so/344d7fcf5f0481d8bb63feb8c7d0f96c" },
              { type: "INTERNAL", label: "Website v2 brand system", url: "#" }
            ],
            exercise: "Copy written. Lara reviews. Any claim that can't be backed by what v1 actually does, rewrite."
          },
          {
            id: "b4-2",
            title: "Book the first 5 discovery calls",
            desc: "Don't wait for day 31. Book calls for the first week of month 2 now. From your B2.5 list. Clear calendar slots.",
            hours: 6, week: 4, sprintEssential: true,
            resources: [],
            exercise: "5 discovery calls booked in the first week of month 2. If you can't get 5, the list or the message needs work."
          },
          {
            id: "b4-3",
            title: "Proposal template",
            desc: "Based on existing proposal format but specific to CEO Bot v1. Scope, timeline, pricing, exclusions, payment terms, roadmap paragraph.",
            hours: 5, week: 4, sprintEssential: true,
            resources: [],
            exercise: "Template written. Filled in for a hypothetical prospect. Lara reviews. If it reads as a contract not a sales doc, rewrite."
          },
          {
            id: "b4-4",
            title: "Full demo + discovery simulation with Lara",
            desc: "End of week 4. Final rehearsal. Lara plays a prospect. You run the full flow: discovery questions → demo → scope confirmation → price. 45 minutes total.",
            hours: 6, week: 4, sprintEssential: true,
            resources: [],
            exercise: "Rehearsal complete. Debrief: weakest part? Fix in the last 2 days before month 2."
          }
        ]
      },
      {
        id: "b5",
        label: "// POST-LAUNCH",
        title: "What Bap explicitly skips in the 30-day sprint",
        time: "Month 2-3 — not now",
        week: 0,
        objective: "Strategic literacy that matters for a platform CRO but isn't on the v1 critical path. Revisit once real pipeline data exists.",
        modules: [
          {
            id: "b5-1",
            title: "Unit economics modelling (CAC, LTV, gross margin)",
            desc: "Needs real data. After 3 discovery calls and 1 closed client, model the actuals. Before that, it's guessing.",
            hours: 6, week: 0, sprintEssential: false,
            resources: [
              { type: "READ", label: "SaaS unit economics primer", url: "https://www.profitwell.com/recur/all/saas-unit-economics" }
            ],
            exercise: "Build the model in month 2 once the first 3 calls are done."
          },
          {
            id: "b5-2",
            title: "Net Revenue Retention tracking",
            desc: "The 20-40% expansion-revenue benchmark. Meaningless until 3+ clients. Set up tracking in month 3.",
            hours: 3, week: 0, sprintEssential: false,
            resources: [],
            exercise: "Set up when client 3 signs."
          },
          {
            id: "b5-3",
            title: "Quarterly qualify-out target",
            desc: "Track how many prospects you say no to. Low numbers = still too loose. Set target after month 2 when you have a baseline.",
            hours: 2, week: 0, sprintEssential: false,
            resources: [],
            exercise: "Set Q2 target once month 2 pipeline is real."
          },
          {
            id: "b5-4",
            title: "The full FreshStack narrative",
            desc: "The 2-paragraph story that anchors everything external. Week 4 has a first draft. Month 2 has the lived-in version once you've pitched it 20 times.",
            hours: 4, week: 0, sprintEssential: false,
            resources: [],
            exercise: "Finalise in month 2 after 10+ discovery calls."
          }
        ]
      }
    ]
  }
};

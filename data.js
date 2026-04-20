// ============================================================
// FRESHSTACK PLATFORM LEARNING PATH
// 30-day V1 sprint mode + long-term reference
// Build approach: Claude Code is the primary code-writing tool.
// Lara directs, reviews, tests, judges. Bap shadows and sells.
// ============================================================

const SPRINT_META = {
  deadline: "30 days",
  goal: "v1 CEO Command Bot built on FreshStack's own stack — ready for month 2 outreach",
  laraCapacity: "Full-time (~8h/day) · directing Claude Code + reviewing + testing",
  bapCapacity: "Half-time (~4h/day — Stratosphere in parallel)",
  decisions: [
    "FreshStack is its own first client (own data, own demo footage)",
    "Slack as the v1 messaging platform",
    "5 intents locked by day 10 — no additions in weeks 2-4",
    "Sonnet 4.5 for all intents (multi-model routing deferred to month 3)",
    "No custom MCP servers in v1 — use Notion's existing MCP + REST for others",
    "Claude Code is the primary build tool — Lara is tech lead, not solo developer"
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
        id: "l0",
        label: "// PHASE L0",
        title: "Claude Code as primary build tool — discipline before speed",
        time: "Days 1-3 · ~15 hours",
        week: 1,
        objective: "Before writing a line of CEO Bot code, learn to direct Claude Code like a tech lead directs a senior developer. The productivity gain is huge — but only if you review output rigorously. 'AI wrote it, ship it' is how you end up with a v1 that breaks in production and you can't debug.",
        modules: [
          {
            id: "l0-1",
            title: "Set up the ceo-bot repo with CLAUDE.md scaffolding",
            desc: "New private repo `freshstack-ai/ceo-bot`. Root `CLAUDE.md` with architecture overview, coding conventions, what NOT to build in v1, and the handover discipline you already use. This is the memory Claude Code reads on every session.",
            hours: 3, week: 1, sprintEssential: true,
            resources: [
              { type: "DOCS", label: "Claude Code — CLAUDE.md best practices", url: "https://docs.claude.com/en/docs/claude-code/memory" },
              { type: "INTERNAL", label: "FreshStack existing CLAUDE.md pattern (freshstack-claude repo)", url: "#" }
            ],
            exercise: "Root CLAUDE.md committed. Covers: architecture, stack decisions (TS, Railway, Supabase, Slack), what's in v1 scope, what's deferred, coding standards (file size limits, test requirements, no secrets in code)."
          },
          {
            id: "l0-2",
            title: "Skills folder — reusable context for Claude Code",
            desc: "Scaffold `skills/` with one markdown file per major build domain. Each skill file captures the patterns, libraries, and gotchas for that area. Claude Code reads these on demand to avoid reinventing the wheel every prompt.",
            hours: 3, week: 1, sprintEssential: true,
            resources: [
              { type: "INTERNAL", label: "FreshStack skills pattern (brief.md, handover.md)", url: "#" }
            ],
            exercise: "Scaffolded (empty) skill files: typescript-orchestration.md, supabase-multi-tenant.md, slack-bot-handlers.md, oauth-flows.md, claude-api-tool-use.md, error-handling.md, mcp-integration.md. Each gets populated as you hit that area of the build."
          },
          {
            id: "l0-3",
            title: "Prompting Claude Code — the tech-lead pattern",
            desc: "Different from chat prompting. Tech-lead prompts specify: what to build, what NOT to build (constraints), quality bar (tests, error handling), and review criteria. Vague prompts produce vague code that sort-of works and breaks later.",
            hours: 3, week: 1, sprintEssential: true,
            resources: [
              { type: "DOCS", label: "Claude Code — effective prompting", url: "https://docs.claude.com/en/docs/claude-code/overview" },
              { type: "READ", label: "Anthropic — prompt engineering overview", url: "https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/overview" }
            ],
            exercise: "Write 3 example 'tech-lead prompts' for build tasks you'll hit: webhook receiver, OAuth flow, idempotent write handler. Each must specify scope, constraints, test requirements, and review criteria. Use these as templates all sprint."
          },
          {
            id: "l0-4",
            title: "Code review discipline — catching confident wrongness",
            desc: "Claude Code is confidently wrong more often than you'd think — especially on security, multi-tenancy, and error handling. Rule: every output is read line-by-line before merging. If you don't understand a line, ask Claude Code to explain before accepting. No shipping what you don't understand.",
            hours: 3, week: 1, sprintEssential: true,
            resources: [
              { type: "READ", label: "Common AI code-generation failure modes", url: "https://www.latent.space/p/ai-engineer" }
            ],
            exercise: "Ask Claude Code to implement a dummy OAuth flow. Review line-by-line. Find at least 2 things you'd change or question. Write the review as if commenting on a junior dev's PR. This is the muscle you use all sprint."
          },
          {
            id: "l0-5",
            title: "Where Claude Code fails — human-only work",
            desc: "5 things Claude Code shouldn't do alone: (1) define the 5 intents, (2) write production system prompts for your bot, (3) evaluate whether outputs are useful, (4) make ambiguous architectural calls, (5) sign off on security. Know these cold so you don't accidentally delegate them.",
            hours: 3, week: 1, sprintEssential: true,
            resources: [],
            exercise: "Write a one-pager 'Lara-only work' list in CLAUDE.md. Anyone (you, Bap, future hire) reading the repo knows immediately what NOT to delegate to Claude Code."
          }
        ]
      },
      {
        id: "l1",
        label: "// PHASE L1",
        title: "Scaffolding — directing Claude Code to build the foundation",
        time: "Days 4-7 · ~20 hours",
        week: 1,
        objective: "Slack message → webhook → orchestration → Supabase → Claude → Slack. Claude Code writes most of the code. You direct, review, test. By end of week 1 the plumbing works end-to-end.",
        modules: [
          {
            id: "l1-1",
            title: "Direct Claude Code to scaffold the TypeScript project + Railway deploy",
            desc: "Prompt should specify: TypeScript strict mode, Express or Fastify, health-check endpoint, Railway-ready config, .env.example with all required vars documented, .gitignore enforced. Claude Code writes the scaffold; you review; you deploy.",
            hours: 4, week: 1, sprintEssential: true,
            resources: [
              { type: "DOCS", label: "Railway deployment quickstart", url: "https://docs.railway.com/quick-start" },
              { type: "DOCS", label: "Fastify (fast, simple Node server)", url: "https://fastify.dev/docs/latest/Guides/Getting-Started/" }
            ],
            exercise: "Health-check endpoint returning 200 OK + JSON. Review: no hardcoded secrets, all config via env, clean folder structure, basic README. Commit with a human-written commit message describing what changed and why."
          },
          {
            id: "l1-2",
            title: "Direct Claude Code to generate Supabase schema v1",
            desc: "Prompt: 5 tables (clients, client_configs, client_credentials, conversation_history, scheduled_tasks) with tenant_id column, appropriate indexes, foreign keys. Skip RLS policies for now (week 3 task). Claude Code writes migration SQL; you review; you apply via Supabase dashboard.",
            hours: 3, week: 1, sprintEssential: true,
            resources: [
              { type: "DOCS", label: "Supabase SQL editor", url: "https://supabase.com/docs/guides/database/overview" }
            ],
            exercise: "Migration SQL reviewed. Schema deployed. Manually insert one test row per table. Verify foreign keys are enforced (try an invalid one — it should fail)."
          },
          {
            id: "l1-3",
            title: "Direct Claude Code to build the Slack webhook receiver",
            desc: "Prompt: Slack signature verification, event dispatcher (handle message.im events only for v1), post-back helper using bot token. Security-sensitive — review carefully. Signature verification is where Claude Code sometimes takes shortcuts.",
            hours: 6, week: 1, sprintEssential: true,
            resources: [
              { type: "DOCS", label: "Slack — verifying requests", url: "https://api.slack.com/authentication/verifying-requests-from-slack" },
              { type: "DOCS", label: "Slack events API", url: "https://api.slack.com/apis/events-api" }
            ],
            exercise: "DM bot in Slack → event appears in Railway logs → bot replies 'received'. Test with a deliberately bad signature — it should reject. Populate skills/slack-bot-handlers.md with any gotchas you hit."
          },
          {
            id: "l1-4",
            title: "Direct Claude Code to wire Claude API in (tool-less)",
            desc: "Prompt: Anthropic SDK integration, per-message Claude call, system prompt pulled from Supabase client_configs table. No tools yet. Handle rate limits + timeouts. Claude Code drafts; you review the timeout and retry behaviour specifically.",
            hours: 4, week: 1, sprintEssential: true,
            resources: [
              { type: "DOCS", label: "Anthropic API getting started", url: "https://docs.claude.com/en/docs/get-started" },
              { type: "DOCS", label: "Anthropic TypeScript SDK", url: "https://github.com/anthropics/anthropic-sdk-typescript" }
            ],
            exercise: "DM 'hello' → real Claude response in Slack. Token usage visible in Anthropic console. Populate skills/claude-api-tool-use.md."
          },
          {
            id: "l1-5",
            title: "End-of-week review — what Claude Code did vs what you touched",
            desc: "End of day 7, review every file in the repo. Flag anything you couldn't explain to Bap. Fix those understanding gaps before week 2 — they become 3am incidents in month 2 otherwise.",
            hours: 3, week: 1, sprintEssential: true,
            resources: [],
            exercise: "List every file, mark as 'fully understand' or 'need to revisit'. Nothing stays 'need to revisit' past end of week 1."
          }
        ]
      },
      {
        id: "l2",
        label: "// PHASE L2",
        title: "Tool integrations — 5 intents live, confirmation flow working",
        time: "Week 2 · ~40 hours",
        week: 2,
        objective: "By day 14: 3 tools connected, 5 intents working, confirmation flow live. Claude Code does the integration plumbing. You do the intent design and system prompts — those are not delegatable.",
        modules: [
          {
            id: "l2-1",
            title: "Direct Claude Code to integrate Notion via existing MCP server",
            desc: "Prompt: connect to the official Notion MCP server, map pipeline + tasks databases to tool definitions, handle the MCP connection lifecycle. You pre-configure which Notion databases to expose — that's the scope decision, not Claude Code's.",
            hours: 6, week: 2, sprintEssential: true,
            resources: [
              { type: "DOCS", label: "Notion MCP server", url: "https://developers.notion.com/docs/mcp" },
              { type: "DOCS", label: "Anthropic tool use with MCP", url: "https://docs.claude.com/en/docs/agents-and-tools/tool-use/overview" }
            ],
            exercise: "Two intents live: 'what's in my pipeline' + 'what's overdue'. Both answered from real FreshStack Notion data. Populate skills/mcp-integration.md with anything learned."
          },
          {
            id: "l2-2",
            title: "Lock the 5 v1 intents — DO NOT delegate this to Claude Code",
            desc: "Day 10 gate. Intent spec is product judgement, not code generation. Write it yourself. Each intent: description, expected inputs, expected outputs, example phrasings, tool calls involved. Bap confirms each is demo-able in 30 seconds.",
            hours: 3, week: 2, sprintEssential: true,
            resources: [
              { type: "INTERNAL", label: "CEO Command Bot — v1 intent set", url: "https://www.notion.so/344d7fcf5f0481d8bb63feb8c7d0f96c" }
            ],
            exercise: "Intent spec in Notion, written by Lara, not Claude Code. Bap confirms each is demo-able in 30s. If any isn't, rewrite or drop. No additions after day 10."
          },
          {
            id: "l2-3",
            title: "Direct Claude Code to build the Calendar OAuth + integration",
            desc: "Prompt: Google or Outlook OAuth 2.0 flow, token storage in Supabase (encrypted — flag this), token refresh handling, read-only calendar scope. Security-sensitive. Review the token storage especially — Claude Code has been known to store tokens plaintext.",
            hours: 8, week: 2, sprintEssential: true,
            resources: [
              { type: "READ", label: "OAuth 2.0 simplified", url: "https://aaronparecki.com/oauth-2-simplified/" },
              { type: "DOCS", label: "Google Calendar API quickstart", url: "https://developers.google.com/workspace/calendar/api/quickstart/nodejs" }
            ],
            exercise: "OAuth flow completed, tokens stored encrypted, calendar intent working. Verify: open the Supabase table — you should see encrypted blobs, not JWTs. If you see JWTs, reject the code and redirect Claude Code. Populate skills/oauth-flows.md."
          },
          {
            id: "l2-4",
            title: "Direct Claude Code to build the Email read-only integration",
            desc: "Same OAuth pattern as calendar. Read-only scope — important. If Claude Code suggests adding send/modify scopes 'for future use', reject. v1 is read-only. Scope creep in API permissions is a security risk.",
            hours: 6, week: 2, sprintEssential: true,
            resources: [
              { type: "DOCS", label: "Gmail API quickstart", url: "https://developers.google.com/workspace/gmail/api/quickstart/nodejs" }
            ],
            exercise: "'Any urgent emails' intent working. Returns top 3 unread important threads. Verify OAuth scope is read-only in the Google Cloud Console — not 'readonly + send for future flexibility'."
          },
          {
            id: "l2-5",
            title: "Confirmation flow — Lara designs UX, Claude Code builds it",
            desc: "Slack Block Kit with ✓/✗ buttons. UX design is yours — what does the message say, how is the action summarised, what happens on cancel. Claude Code writes the Block Kit JSON and handler logic.",
            hours: 7, week: 2, sprintEssential: true,
            resources: [
              { type: "DOCS", label: "Slack Block Kit — interactive buttons", url: "https://api.slack.com/block-kit/interactive-components" },
              { type: "TOOL", label: "Slack Block Kit Builder (UI design)", url: "https://app.slack.com/block-kit-builder" }
            ],
            exercise: "Design UX first (sketch on paper or Block Kit Builder). Then Claude Code implements. End-to-end works: draft → buttons → confirm → task in Notion. 30-second screen capture."
          },
          {
            id: "l2-6",
            title: "System prompts for the 5 intents — LARA ONLY",
            desc: "This is NOT a Claude Code task. Production system prompts for tool-use systems need human judgement about Claude Bot's persona, tool-use decisions, failure modes, and tone. Claude Code will write mediocre prompts that demo-look-fine and break at the edges.",
            hours: 10, week: 2, sprintEssential: true,
            resources: [
              { type: "DOCS", label: "Anthropic — Prompt engineering overview", url: "https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/overview" },
              { type: "DOCS", label: "Use XML tags to structure prompts", url: "https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/use-xml-tags" }
            ],
            exercise: "Each of the 5 intents has a system prompt written by Lara. Tested 3-5 times with real FreshStack data. Version them — keep old prompts when you change them."
          }
        ]
      },
      {
        id: "l3",
        label: "// PHASE L3",
        title: "Production hardening — review discipline matters most here",
        time: "Week 3 · ~40 hours",
        week: 3,
        objective: "Error handling, alerting, RLS, evals. Claude Code writes most of this. Your review discipline is critical — security code is where AI fails worst. This week separates 'works in dev' from 'works at 3am.'",
        modules: [
          {
            id: "l3-1",
            title: "Direct Claude Code to add error handling, retries, idempotency",
            desc: "Prompt: wrap every external API call, exponential backoff with jitter on 5xx/429, idempotency keys on writes stored in Supabase. Review: is the retry cap sane? Is the backoff actually exponential? Are idempotency keys genuinely unique? Claude Code sometimes uses timestamps which collide.",
            hours: 6, week: 3, sprintEssential: true,
            resources: [
              { type: "READ", label: "AWS — exponential backoff and jitter", url: "https://aws.amazon.com/blogs/architecture/exponential-backoff-and-jitter/" },
              { type: "READ", label: "Stripe — idempotency in APIs", url: "https://stripe.com/blog/idempotency" }
            ],
            exercise: "Deliberately break: kill Notion mid-request, send same write twice in 2s, trigger rate limit. All 3 recover cleanly. Populate skills/error-handling.md."
          },
          {
            id: "l3-2",
            title: "Direct Claude Code to add Sentry + Slack alerting",
            desc: "Prompt: Sentry for error capture, Slack incoming webhook for critical alerts to #freshstack-alerts, structured logging throughout. Review: are errors actually being captured? Is the alert threshold right (or will it spam you)? Test by deliberately breaking things.",
            hours: 4, week: 3, sprintEssential: true,
            resources: [
              { type: "DOCS", label: "Sentry for Node.js", url: "https://docs.sentry.io/platforms/javascript/guides/node/" },
              { type: "DOCS", label: "Slack incoming webhooks", url: "https://api.slack.com/messaging/webhooks" }
            ],
            exercise: "Trigger 3 failure types deliberately. All 3 show in #freshstack-alerts within 10s with enough context to debug without reproducing."
          },
          {
            id: "l3-3",
            title: "Direct Claude Code to implement RLS — REVIEW EVERY POLICY",
            desc: "RLS is where AI fails hardest and the failure is invisible. Claude Code writes policies that compile and seem to work but may not actually enforce isolation under all query shapes. Every policy gets manually tested with a second tenant.",
            hours: 10, week: 3, sprintEssential: true,
            resources: [
              { type: "DOCS", label: "Supabase Row Level Security", url: "https://supabase.com/docs/guides/database/postgres/row-level-security" },
              { type: "DOCS", label: "Supabase Vault (credential encryption)", url: "https://supabase.com/docs/guides/database/vault" }
            ],
            exercise: "Create tenant B in Supabase. Write a test that queries every table AS TENANT A trying to read tenant B's data. Every query returns empty/denied. If any leak exists, stop and redo the policy with Claude Code. Populate skills/supabase-multi-tenant.md."
          },
          {
            id: "l3-4",
            title: "System prompt engineering — second pass",
            desc: "Another Lara-only task. Run each intent 5-10 times with real data, track inconsistencies, tighten prompts. Claude Code can help you draft variations but you decide which version ships.",
            hours: 8, week: 3, sprintEssential: true,
            resources: [
              { type: "DOCS", label: "Anthropic — prompt engineering overview", url: "https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/overview" }
            ],
            exercise: "Each intent now handles 10+ realistic variations of input consistently. Note the ones that still fail — they go into the eval set in L3-5."
          },
          {
            id: "l3-5",
            title: "Direct Claude Code to build the eval harness + test cases",
            desc: "Prompt: test runner that sends N intents to the bot, captures response + tool calls, compares against expected patterns, outputs pass/fail. 10-15 test cases — you write the cases (product judgement), Claude Code writes the runner.",
            hours: 6, week: 3, sprintEssential: true,
            resources: [
              { type: "DOCS", label: "Anthropic — Evaluations", url: "https://docs.claude.com/en/docs/build-with-claude/develop-tests" }
            ],
            exercise: "Eval harness runs with one command. 10-15 test cases. Current pass rate measured. Anything under 90% gets fixed before week 4."
          },
          {
            id: "l3-6",
            title: "Security review — the gate before week 4",
            desc: "Final security review of everything Claude Code wrote: credential storage, OAuth scopes, RLS policies, Slack signature verification, API rate limits. Block out 2 hours for this — it's not optional. Sign off in writing in CLAUDE.md.",
            hours: 3, week: 3, sprintEssential: true,
            resources: [
              { type: "READ", label: "OWASP Top 10 (quick reference)", url: "https://owasp.org/www-project-top-ten/" }
            ],
            exercise: "Security checklist in CLAUDE.md: each item ticked or flagged. No unresolved flags going into week 4."
          }
        ]
      },
      {
        id: "l4",
        label: "// PHASE L4",
        title: "Polish, demo, handover — Lara-heavy week",
        time: "Week 4 · ~40 hours",
        week: 4,
        objective: "Claude Code steps back. You dogfood, record the demo, write the runbook. This week is about polish and judgement, not code volume.",
        modules: [
          {
            id: "l4-1",
            title: "Dogfood — use the bot daily as FreshStack's CEO",
            desc: "Not a Claude Code task. You use the bot. You feel the friction. You write down what's annoying. The 10% of issues that only appear in real use surface this week.",
            hours: 10, week: 4, sprintEssential: true,
            resources: [],
            exercise: "Running annoyances log. Each closed before day 30 or explicitly deferred to month 2 with a reason."
          },
          {
            id: "l4-2",
            title: "Record the demo video — Lara's screen, Lara's data",
            desc: "90-second screen recording. 3 intents including the confirmation flow. Real FreshStack Notion, real calendar, real inbox. Clean audio. Anchors every month 2 outreach message.",
            hours: 6, week: 4, sprintEssential: true,
            resources: [
              { type: "TOOL", label: "Loom (simple screen recording)", url: "https://loom.com" },
              { type: "TOOL", label: "Screen Studio (polished)", url: "https://screen.studio" }
            ],
            exercise: "Demo at 90s or under. Bap reviews. If he wouldn't show it to a prospect, re-record."
          },
          {
            id: "l4-3",
            title: "Direct Claude Code to draft the runbook — then rewrite it",
            desc: "Claude Code drafts a runbook based on the repo. It'll be generic. You rewrite it with the specifics of how FreshStack handles incidents — who does what, how to check Railway, how to force-refresh OAuth, how to roll back a deploy. Bap reads it and if he can't follow it, rewrite.",
            hours: 6, week: 4, sprintEssential: true,
            resources: [
              { type: "INTERNAL", label: "FreshStack handover system (March 2026)", url: "#" }
            ],
            exercise: "Runbook written. Bap simulates an incident using only the runbook. If he gets stuck, rewrite the step he got stuck on."
          },
          {
            id: "l4-4",
            title: "Lock v1 — CLAUDE.md gets frozen, tag the release",
            desc: "Second pass on evals (Claude Code can help fix failures). Pass rate ≥95%. Update CLAUDE.md with 'v1 locked' note and the exact scope. Git tag v1.0.0. Railway pinned to the tag. Stop building.",
            hours: 6, week: 4, sprintEssential: true,
            resources: [],
            exercise: "Eval pass rate ≥95%. git tag v1.0.0. CLAUDE.md updated with frozen v1 scope. Railway pinned."
          },
          {
            id: "l4-5",
            title: "Buffer — something always goes wrong",
            desc: "Budget 10 hours for unplanned work. OAuth token will expire. Railway will hiccup. Notion schema will change. If you don't need the time, draft month 2 outreach with Bap.",
            hours: 10, week: 4, sprintEssential: true,
            resources: [],
            exercise: "If unused, first draft of month 2 outreach message written with Bap."
          },
          {
            id: "l4-6",
            title: "Populate all skill files with what you learned",
            desc: "By end of week 4, every skill file in `skills/` has real learnings — not empty scaffolds. This is the repo's memory for month 2 and client 2. If you skip this, you'll re-learn everything next time.",
            hours: 2, week: 4, sprintEssential: true,
            resources: [],
            exercise: "Every skill file has at least 3 real lessons from the sprint. Review each one — would Future You thank Past You for writing this?"
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
            exercise: "After 30 days of v1 usage, measure actual token spend per intent. Design the router from real data. Direct Claude Code to implement once you know the rules."
          },
          {
            id: "l5-2",
            title: "Building custom MCP servers",
            desc: "GoHighLevel has no MCP server. Neither do several Phase 2 tools. Month 3 task once a client needs something that doesn't exist yet.",
            hours: 20, week: 0, sprintEssential: false,
            resources: [
              { type: "DOCS", label: "MCP — Build a server", url: "https://modelcontextprotocol.io/docs/develop/build-server" }
            ],
            exercise: "Build a GoHighLevel MCP server in month 3 when the first GHL client signs. Direct Claude Code with a very tight prompt — MCP spec compliance matters and drift is easy."
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
          },
          {
            id: "l5-6",
            title: "Deeper TypeScript fundamentals (when you have time)",
            desc: "The sprint used Claude Code for most TS. Over time, fill in the gaps: generics, async patterns at depth, type-level programming. Makes you a better reviewer, not a faster shipper. Month 2-3 when there's breathing room.",
            hours: 20, week: 0, sprintEssential: false,
            resources: [
              { type: "DOCS", label: "TypeScript handbook", url: "https://www.typescriptlang.org/docs/handbook/intro.html" },
              { type: "COURSE", label: "Matt Pocock — Total TypeScript", url: "https://www.totaltypescript.com/" }
            ],
            exercise: "After v1 ships, read the TS handbook properly. Revisit code you wrote during sprint and identify places you'd write it differently."
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
        objective: "Fastest path to technical fluency: watch Lara direct Claude Code, ask questions in real time. You'll learn more in 6 hours of pair time than 6 hours of docs. Bonus: you see exactly what Claude Code can and can't do, which matters in month 2 discovery calls when prospects ask 'how did you build it?'",
        modules: [
          {
            id: "b1-1",
            title: "Shadow Lara while she scaffolds (days 4-7)",
            desc: "Lara is directing Claude Code on the foundation. You sit in. Ask why every decision is being made. Specifically watch: how Lara catches Claude Code's mistakes, when she accepts output vs redirects.",
            hours: 8, week: 1, sprintEssential: true,
            resources: [
              { type: "INTERNAL", label: "Architecture infographic", url: "#" }
            ],
            exercise: "End of week 1, explain each of the 5 architecture layers in 30s to Lara. Also explain the 'Claude Code as senior dev, Lara as tech lead' model — you'll use this in month 2 when prospects ask about the build."
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
            desc: "The single most common objection from 50+ staff SMBs. Know what to say about OAuth, encryption, what happens if the contract ends. Back it with facts — and with the specific security review Lara does during the sprint.",
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
            desc: "First draft of the moat sentence. Include the 'Claude Code lets us ship faster than competitors' angle if it's genuinely true by end of week 1 — if not, leave it out. No narrative claims without evidence.",
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

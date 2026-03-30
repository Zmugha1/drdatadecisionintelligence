import { C } from "../styles/colors";

export const JOBS = [
  {
    id: "prep",
    badge: "Coach / Consultant",
    job: "Show up prepared for every client session",
    below:
      "Manually reviewing notes, re-reading documents, rebuilding context before every call. 45+ minutes every time.",
    inside:
      "AI surfaces everything about this client in 90 seconds. You decide what it means and what to do.",
    above:
      "Reading the AI brief without asking what it might have missed or gotten wrong.",
    voiceQ:
      "What do you always look for when preparing? What would immediately tell you something is off?",
    exceptionEx:
      "When spouse alignment is unknown after Session 2 — hold at NURTURE regardless of all readiness scores. The AI always wants to PUSH because the numbers look good. I know the marriage question must be resolved first.",
  },
  {
    id: "recommendation",
    badge: "Financial Advisor",
    job: "Build a client recommendation in my voice",
    below:
      "Writing reports from scratch. Formatting the same structure every single time. Starting from a blank page.",
    inside:
      "AI drafts the structure and pulls the data. You inject the judgment: what does this mean for THIS client.",
    above:
      "Sending the AI-drafted recommendation without checking whether the reasoning reflects your actual thinking.",
    voiceQ:
      "What makes your best recommendation different from a generic one? What do you always say that no template would?",
    exceptionEx:
      "When a client has had a major life event in the last 90 days — ignore the model score and hold. The data does not know what happened. I do.",
  },
  {
    id: "followup",
    badge: "Any Professional",
    job: "Follow up consistently without it feeling like chasing",
    below:
      "Manually remembering who to call, when, and what to say. Drafting every message from scratch.",
    inside:
      "AI identifies who needs contact based on signals. Drafts the message. You review and send.",
    above:
      "Letting AI send messages on your behalf without reviewing tone and context first.",
    voiceQ:
      "When you follow up well, what do you say that makes the person feel remembered — not just pinged?",
    exceptionEx:
      "When a client went quiet after a difficult conversation — do not send the standard re-engagement message. That will close the door permanently. I need to call.",
  },
  {
    id: "revenue",
    badge: "Small Business Owner",
    job: "Know where my revenue stands without building a report",
    below:
      "Pulling numbers from multiple places manually. Building the same report every week from scratch.",
    inside:
      "AI shows the number the moment you open the dashboard. You decide what to do about it.",
    above:
      "Acting on the AI revenue number without verifying the data it was built from.",
    voiceQ:
      "When you look at revenue, what are the two or three numbers that immediately tell you whether you are on track?",
    exceptionEx:
      "When two large deals are pending close — the projection number is unreliable. Do not trust it until both decisions are made. Flag for manual review.",
  },
  {
    id: "risk",
    badge: "Service Professional",
    job: "Never miss a signal that a client relationship is at risk",
    below:
      "Relying on memory and intuition to notice when something has shifted. Catching it too late.",
    inside:
      "AI surfaces the flag. You decide whether it is a signal or noise — and what to do about it.",
    above:
      "Acting on AI's risk assessment without your own read of the situation first.",
    voiceQ:
      "What is the earliest signal you have noticed that a client was about to disengage — before they said anything?",
    exceptionEx:
      "When the flag is engagement drop after a referral was given — this is not a risk signal. This is normal. Do not surface it as an alert.",
  },
  {
    id: "voice",
    badge: "Knowledge Worker",
    job: "Draft everything in my voice, not generic AI language",
    below:
      "Writing everything from scratch because AI outputs always sound wrong and need complete rewrites.",
    inside:
      "AI drafts in your voice because you taught it how you think. You refine the judgment layer.",
    above:
      "Sending AI drafts without reading them for tone, accuracy, and whether they sound like you.",
    voiceQ:
      "What is a phrase or sentence structure you use that is unmistakably yours — that no generic AI would produce?",
    exceptionEx:
      "When writing to a long-term client — drop all formality. The AI default is too formal. These people know me. I write to them the way I talk.",
  },
];

export const FIVE = [
  { n: "01", name: "THE VOICE", desc: "What does this job sound like when done right?", stz: "Prompts / Layer 1", color: C.teal },
  { n: "02", name: "THE STEPS", desc: "What are the named operations inside this job?", stz: "Skills / Layer 2", color: C.coral },
  { n: "03", name: "THE FLOW", desc: "What triggers this job and what runs in what order?", stz: "Agents / Layer 3", color: C.navy },
  { n: "04", name: "THE BOUNDARY", desc: "What do you approve before the job is done?", stz: "Contracts / Layer 4", color: C.amber },
  { n: "05", name: "THE LOOP", desc: "How does this job get better every time it runs?", stz: "Evaluation / Layer 5", color: C.slate },
];

export const QS = [
  {
    q: "Think about the job of preparing for an important meeting or client session. How does it happen right now?",
    opts: [
      { t: "AI prepares everything automatically — I just open it", i: 2 },
      { t: "I use AI to help, but I still do most of the work manually", b: 1 },
      { t: "I do it manually from scratch every time", b: 2 },
      { t: "I usually wing it or skip preparation entirely", b: 3 },
    ],
  },
  {
    q: "When AI produces an output for a job you need done — how often do you check whether it actually did the job right?",
    opts: [
      { t: "Always — I interrogate every output before acting on it", i: 1 },
      { t: "Most of the time — I skim it then usually accept", a: 1 },
      { t: "Sometimes — only if something looks obviously off", a: 1 },
      { t: "Rarely — if it looks plausible I move on", a: 3 },
    ],
  },
  {
    q: "When AI does a job for you, does the result sound like YOU — your reasoning, your voice, your standard?",
    opts: [
      { t: "Yes — I have built prompts that capture how I think", i: 2 },
      { t: "Sometimes — when I put real effort into the request", b: 1 },
      { t: "Rarely — it usually sounds like generic AI", b: 2 },
      { t: "I have never thought to make it sound like me", b: 3 },
    ],
  },
  {
    q: "How clearly have you defined what 'done right' looks like for the jobs you hire AI to do?",
    opts: [
      { t: "Very clearly — I have written down what good output looks like", i: 2 },
      { t: "Somewhat — it is in my head but not documented", b: 1 },
      { t: "Not really — I know it when I see it but have not defined it", b: 2 },
      { t: "I have not thought about it this way before", b: 2 },
    ],
  },
  {
    q: "Is there a clear line in your work between what AI handles and what only YOU can decide?",
    opts: [
      { t: "Yes — I have drawn that line and AI respects it", i: 2 },
      { t: "Roughly — I have a sense of it but it is not written down", b: 1 },
      { t: "Not really — it depends on how I feel that day", a: 1 },
      { t: "I have not thought about where that line should be", b: 2 },
    ],
  },
  {
    q: "When you correct an AI output — what do you do with that correction?",
    opts: [
      { t: "I log it so the AI learns not to make that mistake again", i: 2 },
      { t: "I fix it this time but do not record the correction", b: 1 },
      { t: "I redo the whole thing myself from scratch", b: 2 },
      { t: "I rarely correct — I usually just accept or ignore", a: 2 },
    ],
  },
  {
    q: "How much time each week do you spend on tasks you know an AI could be doing for you?",
    opts: [
      { t: "Very little — AI handles most routine work for me", i: 1 },
      { t: "About 1–2 hours I wish I could hand off", b: 1 },
      { t: "About half a day of work that should not require me", b: 2 },
      { t: "A significant part of my week — I do too much manually", b: 3 },
    ],
  },
  {
    q: "How would you honestly describe your current relationship with AI tools?",
    opts: [
      { t: "Strategic — AI does execution, I supply judgment", i: 2 },
      { t: "Growing — I use them but have not fully integrated them yet", b: 1 },
      { t: "Dependent — I rely heavily but do not always verify the output", a: 2 },
      { t: "Avoidant — I have not made AI a real part of my practice yet", b: 3 },
    ],
  },
];

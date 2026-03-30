import { C } from "../styles/colors";

export const TLO = {
  text: "Upon completing Working in the Zone, the learner will build a personal Zone System for at least one recurring professional job — defining the Voice, Steps, Flow, Boundary, and Loop — that enables AI to execute that job at the learner's expert level with documented governance and measurable reduction in below-Zone time.",
  keyPhrase: "build a personal Zone System",
};

/** Learner-facing framing on Zone System page (matches instructional design prompt). */
export const TLO_ZONE_FRAMING =
  "Build a personal Zone System for at least one recurring professional job — defining the Voice, Steps, Flow, Boundary, and Loop — that enables AI to execute that job at your expert level with documented governance and measurable reduction in below-Zone time.";

export const PROGRAM_OBJECTIVES = [
  {
    id: "PO1",
    verb: "Classify",
    text: "current AI use patterns as Below, Inside, or Above the Zone for at least three recurring jobs in their practice",
    bloom: "Remember/Understand",
  },
  {
    id: "PO2",
    verb: "Construct",
    text: "a four-part Voice for a selected job that transfers their reasoning, criteria, output standard, and exception logic to any AI system",
    bloom: "Apply",
  },
  {
    id: "PO3",
    verb: "Define",
    text: "the five things required to run any job at expert level: the Voice, the Steps, the Flow, the Boundary, and the Loop",
    bloom: "Apply",
  },
  {
    id: "PO4",
    verb: "Apply",
    text: "the Jobs to Be Done framework to diagnose which professional jobs are candidates for Zone System design",
    bloom: "Apply/Analyze",
  },
  {
    id: "PO5",
    verb: "Evaluate",
    text: "AI outputs against their own defined quality criteria before acting on them",
    bloom: "Evaluate",
  },
  {
    id: "PO6",
    verb: "Govern",
    text: "every job in their Zone System through a documented audit trail that makes every decision traceable and explainable",
    bloom: "Create",
  },
];

export const MODULE_OBJECTIVES = {
  diagnostic: {
    num: "00",
    title: "Zone Diagnostic",
    objs: [
      { verb: "Assess", text: "current Zone position across eight dimensions of AI use" },
      { verb: "Interpret", text: "a personalized Zone profile including estimated below-Zone time cost and expertise leak risk" },
    ],
    assessment: "Zone Diagnostic score — pre-baseline across 8 dimensions",
    artifact: "Zone position profile + estimated weekly below-Zone hours",
    isKeyArtifact: true,
  },
  module1: {
    num: "01",
    title: "The Job and the Zone",
    objs: [
      { verb: "Distinguish", text: "between Below, Inside, and Above the Zone on a specific self-selected job" },
      { verb: "Select", text: "one recurring professional job for Zone System development using the JTBD classification framework" },
      { verb: "Evaluate", text: "their current Zone position on that job with honest self-assessment" },
    ],
    assessment: "Zone self-assessment rated against observer-validated Zone descriptions for selected job",
    artifact: "Selected job + Zone position declaration",
    isKeyArtifact: true,
  },
  module2: {
    num: "02",
    title: "The Voice",
    objs: [
      { verb: "Construct", text: "a four-field Voice document (Context, Reasoning, Done Right, Done Wrong) for their selected job" },
      { verb: "Document", text: "at least one exception — a situation where the obvious AI output would be wrong and why" },
      { verb: "Demonstrate", text: "the difference between a generic AI request and a judgment-transfer prompt by comparing outputs" },
    ],
    assessment: "Voice Builder output evaluated against four-field completeness and exception quality rubric",
    artifact: "Voice document — the capstone artifact of the first build",
    isKeyArtifact: true,
  },
  module3: {
    num: "03",
    title: "The Steps",
    objs: [
      { verb: "Decompose", text: "a selected job into discrete, named operations with defined inputs, outputs, and quality criteria" },
      { verb: "Distinguish", text: "between steps that can be fully automated and steps that require human judgment injection" },
    ],
    assessment: "Steps card: named operations with defined inputs, outputs, and quality criteria",
    artifact: "Steps card for selected job",
    isKeyArtifact: false,
  },
  module4: {
    num: "04",
    title: "The Flow + The Boundary",
    objs: [
      { verb: "Design", text: "a trigger-to-output workflow sequence for their selected job" },
      { verb: "Specify", text: "approval gates — the exact points where human sign-off is required before the job continues" },
      { verb: "Define", text: "confidence thresholds: at what level AI acts automatically vs. surfaces for human review" },
    ],
    assessment: "Flow diagram + Boundary document: workflow sequence and approval gates",
    artifact: "Workflow map + human-AI boundary specification",
    isKeyArtifact: false,
  },
  module5: {
    num: "05",
    title: "The Loop + Governance",
    objs: [
      { verb: "Apply", text: "a correction mode decision — fix once, retrain, or flag — to at least three AI output corrections" },
      { verb: "Construct", text: "a personal evaluation rubric for their selected job" },
      { verb: "Audit", text: "a completed job run by tracing every decision back to its source reasoning" },
    ],
    assessment: "Correction log: three correction decisions with mode selection and pattern notes",
    artifact: "Evaluation rubric + governance audit trail",
    isKeyArtifact: false,
  },
  module6: {
    num: "06",
    title: "Zone System Assembly",
    objs: [
      { verb: "Synthesize", text: "all five things into a complete, portable Zone System document for their selected job" },
      { verb: "Articulate", text: "their personal Zone Signal — one sentence describing what working inside the Zone feels like" },
      { verb: "Plan", text: "their 5-day implementation sprint with specific daily actions" },
    ],
    assessment: "Complete Zone System document = capstone assessment. Completion = Zone System in active use.",
    artifact: "Zone System v1.0 — portable, exportable, deployable",
    isKeyArtifact: true,
  },
};

export const KIRKPATRICK = [
  {
    level: 1,
    name: "Reaction",
    measures: "Did the learner find it relevant and credible?",
    where: "Post-module reflection prompts + Zone Signal entry in Module 06",
    color: C.teal100,
    textColor: C.navy,
  },
  {
    level: 2,
    name: "Learning",
    measures: "Can the learner classify, construct, evaluate?",
    where: "Module assessments + Voice Builder output + Zone self-assessment",
    color: C.teal100,
    textColor: C.navy,
  },
  {
    level: 3,
    name: "Behavior",
    measures: "Are they actually using the Voice and Zone System at work?",
    where: "5-day implementation sprint + 30-day follow-up check-in prompt",
    color: C.coral,
    textColor: C.white,
  },
  {
    level: 4,
    name: "Results",
    measures: "Did below-Zone time actually decrease?",
    where: "Pre/post diagnostic score comparison — same 8 questions, measurable delta",
    color: C.coral,
    textColor: C.white,
  },
];

export const ASSESSMENT_MODULE_KEYS = ["diagnostic", "module1", "module2", "module3", "module4", "module5", "module6"];

export const ASSESSMENT_BADGES = ["M00", "M01", "M02", "M03", "M04", "M05", "M06"];

export function getAssessmentRows() {
  return ASSESSMENT_MODULE_KEYS.map((key, i) => ({
    ...MODULE_OBJECTIVES[key],
    badge: ASSESSMENT_BADGES[i],
  }));
}

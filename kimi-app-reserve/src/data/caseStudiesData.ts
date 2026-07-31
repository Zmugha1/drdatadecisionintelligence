/**
 * Case study content and nav. Add entries to CASE_STUDIES, CASE_STUDY_ORDER, and
 * CASE_STUDY_NAV when publishing real client stories.
 */
export type Stat = { value: string; label: string };

export type DemoStep = { title: string; body: string };

export type CaseStudyDef = {
  page: string;
  navLabel: string;
  tag: string;
  org: string;
  headline: string;
  /** One-line outcome highlight (matches legacy card “result” line from the export). */
  resultHighlight: string;
  clientQuote: string;
  stats: Stat[];
  demoTitle: string;
  demoSubtitle: string;
  demoCounter?: string;
  demoSteps: DemoStep[];
  /** 'dark' = navy panel + progress; 'metrics' = Austin-style */
  demoVariant: 'dark' | 'metrics' | 'pipeline' | 'health' | 'governance';
  challenge: string;
  solution: string;
  results: string[];
};

/** Detail-page links for the nav dropdown. Empty until real case studies are published. */
export const CASE_STUDY_NAV: { page: string; label: string }[] = [];

export const CASE_STUDIES_INDEX_INTRO =
  'Client stories from Dr. Data engagements. New case studies are being added as client work goes live.';

export const CASE_STUDIES: Record<string, CaseStudyDef> = {};

export const CASE_STUDY_ORDER: string[] = [];

export function getCaseStudy(page: string): CaseStudyDef | undefined {
  return CASE_STUDIES[page];
}

export type ExamLink = {
  slug: string;
  shortName: string;
  anchor: string;
  available: boolean;
};

/**
 * Shared exam catalog used by the homepage cards and (later) tool-page
 * cross-links. Only SAT is routed to a real page in this first delivery.
 */
export const EXAMS: ExamLink[] = [
  {
    slug: "sat-score-calculator",
    shortName: "SAT",
    anchor: "SAT Score Calculator",
    available: true,
  },
  {
    slug: "act-score-calculator",
    shortName: "ACT",
    anchor: "ACT Score Calculator",
    available: false,
  },
  {
    slug: "ap-score-calculator",
    shortName: "AP",
    anchor: "AP Score Calculator",
    available: false,
  },
  {
    slug: "lsat-score-calculator",
    shortName: "LSAT",
    anchor: "LSAT Score Calculator",
    available: false,
  },
  {
    slug: "mcat-score-calculator",
    shortName: "MCAT",
    anchor: "MCAT Score Calculator",
    available: false,
  },
  {
    slug: "psat-score-calculator",
    shortName: "PSAT",
    anchor: "PSAT Score Calculator",
    available: false,
  },
];

export function examHref(exam: ExamLink): string {
  return exam.available ? `/${exam.slug}` : "#";
}

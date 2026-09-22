export type FaqItem = {
  question: string;
  answer: string;
};

export const HOME_FAQS: FaqItem[] = [
  {
    question: "What does a test score calculator do?",
    answer:
      "A test score calculator takes the number of questions you answered correctly (the raw score) and maps it to the scaled score that schools and programs publish in their ranges. You use it after a practice test or an unofficial tally so you can compare your result with typical admission or scholarship benchmarks.",
  },
  {
    question: "What is the difference between a raw score and a scaled score?",
    answer:
      "A raw score is a count of correct answers, sometimes adjusted by a simple rule such as omitting unanswered items. A scaled score is the reported number on a fixed range—for example 400–1600 on the SAT—so that forms of different difficulty can be compared. Conversion tables published by each testing organization define that mapping.",
  },
  {
    question: "Which exams can I convert on this site?",
    answer:
      "This site is built to convert raw scores to scaled scores for the SAT, ACT, AP, LSAT, MCAT, and PSAT. Open the calculator for the exam you took, enter the raw section totals, and read the scaled section scores and composite where that exam reports one.",
  },
  {
    question: "Are these results the same as an official score report?",
    answer:
      "No. The calculators apply publicly described raw-to-scaled mappings so you can estimate a result. An official report from the organization that administered the test remains the only score schools should treat as final. Tables can also differ slightly across test dates.",
  },
];

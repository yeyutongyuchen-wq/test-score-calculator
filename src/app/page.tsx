import type { Metadata } from "next";
import ExamCardGrid from "@/components/ExamCardGrid";
import FaqList from "@/components/FaqList";
import JsonLd from "@/components/JsonLd";
import { HOME_FAQS } from "@/data/faq/home";
import {
  HOME_DESCRIPTION,
  HOME_TITLE,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";

export const metadata: Metadata = {
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_US",
  },
};

const webApplicationLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: SITE_NAME,
  url: SITE_URL,
  description: HOME_DESCRIPTION,
  applicationCategory: "EducationalApplication",
  operatingSystem: "Any",
  inLanguage: "en-US",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

const faqPageLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: HOME_FAQS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function HomePage() {
  return (
    <article className="wrap page-article">
      <JsonLd data={webApplicationLd} />
      <JsonLd data={faqPageLd} />

      <h1>Test Score Calculator</h1>

      <p>
        A test score calculator converts the number of questions you answered
        correctly into the scaled score that colleges, graduate programs, and
        scholarship boards actually compare. Enter a raw section total after a
        practice test or an unofficial tally, and the matching calculator
        returns the scaled result on that exam&apos;s published range. Students,
        parents, and counselors use it to turn a count of correct answers into a
        number they can read against admission ranges and score benchmarks
        before an official report arrives.
      </p>

      <ExamCardGrid />

      <section aria-labelledby="scaled-score-heading">
        <h2 id="scaled-score-heading">
          What a scaled score is, and why raw scores are converted
        </h2>
        <p>
          A raw score is a count of correct answers. Schools do not file that
          count. Each testing organization places results on a fixed scale so a
          harder form and an easier form can be compared. The number on that
          scale is the scaled score.
        </p>
        <p>
          Conversion exists because no two sittings are identical. Equating uses
          research sections and historical data to produce a table for that
          date. A modest raw total on a harder form can still map to a
          competitive scaled result; the same raw total on an easier form may
          map lower. A test score calculator reads those public tables and
          returns the scaled number you would expect on a report.
        </p>
        <p>
          That step matters for planning. Cut scores, percentiles, and program
          medians are stated in scaled units. Converting after a practice test
          shows whether a result already sits inside a target range and how to
          split remaining study time. The tools on this site perform the
          raw-to-scaled lookup and stop there.
        </p>
      </section>

      <FaqList items={HOME_FAQS} />
    </article>
  );
}

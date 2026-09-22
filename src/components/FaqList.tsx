import type { FaqItem } from "@/data/faq/home";

type FaqListProps = {
  items: FaqItem[];
};

export default function FaqList({ items }: FaqListProps) {
  return (
    <section className="faq-section" aria-labelledby="faq-heading">
      <h2 id="faq-heading">Frequently asked questions</h2>
      <dl className="faq-list">
        {items.map((item) => (
          <div key={item.question} className="faq-item">
            <dt>{item.question}</dt>
            <dd>{item.answer}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

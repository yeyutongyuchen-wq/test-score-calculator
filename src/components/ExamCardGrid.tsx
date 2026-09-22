import { EXAMS, examHref } from "@/data/exams";

export default function ExamCardGrid() {
  return (
    <section className="exam-section" aria-labelledby="choose-exam-heading">
      <h2 id="choose-exam-heading">Choose your exam</h2>
      <ul className="exam-grid">
        {EXAMS.map((exam) => (
          <li key={exam.slug} className="exam-card">
            <a href={examHref(exam)}>{exam.anchor}</a>
            {!exam.available ? (
              <p className="exam-card-status">Coming next</p>
            ) : (
              <p className="exam-card-status">Available now</p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

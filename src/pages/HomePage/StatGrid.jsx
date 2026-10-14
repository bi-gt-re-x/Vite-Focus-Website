import { formatClockBasedOnTime } from "../../utils/time";

export function StatGrid({ pomodoros, cardsReviewed, focusToday }) {
  return (
    <>
      <section className="stat-grid">
        <article className="stat-tile">
          <span className="stat-tile__label">Focus today</span>
          <span className="stat-tile__value">{formatClockBasedOnTime(focusToday)}</span>
          <span className="stat-tile__delta stat-tile__delta--up">
            ▲ 35m vs yesterday
          </span>
        </article>

        <article className="stat-tile">
          <span className="stat-tile__label">Pomodoros</span>
          <span className="stat-tile__value">{pomodoros}</span>
          <span className="stat-tile__delta muted">Goal: 8</span>
        </article>

        <article className="stat-tile">
          <span className="stat-tile__label">Cards reviewed</span>
          <span className="stat-tile__value">{cardsReviewed}</span>
          <span className="stat-tile__delta stat-tile__delta--up">
            ▲ 12 vs yesterday
          </span>
        </article>

        <article className="stat-tile">
          <span className="stat-tile__label">Accuracy</span>
          <span className="stat-tile__value">81%</span>
          <span className="stat-tile__delta stat-tile__delta--down">
            ▼ 4% this week
          </span>
        </article>
      </section>
    </>
  );
}

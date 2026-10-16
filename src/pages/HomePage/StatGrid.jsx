import { formatClockBasedOnTime } from "../../utils/time";

export function StatGrid({ pomodoros, cardsReviewed, focusToday, accuracy }) {
  return (
    <>
      <section className="stat-grid">
        <article className="stat-tile">
          <span className="stat-tile__label">Focus today</span>
          <span className="stat-tile__value">{formatClockBasedOnTime(focusToday)}</span>
          <span className="stat-tile__delta stat-tile__delta--up">
            ▲ Going up this week!
          </span>
        </article>

        <article className="stat-tile">
          <span className="stat-tile__label">Pomodoros</span>
          <span className="stat-tile__value">{pomodoros}</span>
          <span className="stat-tile__delta muted">Goal: 15</span>
        </article>

        <article className="stat-tile">
          <span className="stat-tile__label">Cards reviewed</span>
          <span className="stat-tile__value">{cardsReviewed}</span>
          <span className="stat-tile__delta stat-tile__delta--up">
            ▲ Review more
          </span>
        </article>

        <article className="stat-tile">
          <span className="stat-tile__label">Accuracy</span>
          <span className="stat-tile__value">{accuracy}%</span>
          <span className="stat-tile__delta stat-tile__delta--up">
            Very nice
          </span>
        </article>
      </section>
    </>
  );
}

import { Link } from "react-router-dom";
import SideBar from "../components/SideBar.jsx";

export default function StatsPage({ activeLink }) {
  return (
    <div className="app" data-collapsed="false">
      {<SideBar activeStudyLink={activeLink} />}

      <div className="app__main">
        <header className="topbar">
          <h1 className="topbar__title">Stats</h1>

          <div className="topbar__actions">
            <div className="topbar__mini-timer" data-running="true">
              <span className="topbar__mini-dot"></span>
              <span>18:42</span>
            </div>

            <button
              className="btn btn--ghost btn--icon tooltip"
              data-tip="Toggle theme"
              aria-label="Toggle theme"
            >
              🌙
            </button>
          </div>
        </header>

        <main className="content">
          <div className="page-header">
            <div className="page-header__row">
              <div>
                <p className="eyebrow">Last 12 weeks</p>
                <h2 className="page-title">Your progress</h2>
              </div>

              <div className="tabs">
                <button className="tab">Week</button>
                <button className="tab tab--active">Month</button>
                <button className="tab">All time</button>
              </div>
            </div>
          </div>

          <section className="stats-grid">
            <article className="stat-tile">
              <span className="stat-tile__label">Total focus</span>
              <span className="stat-tile__value">41h</span>
              <span className="stat-tile__delta stat-tile__delta--up">
                ▲ 6h this month
              </span>
            </article>

            <article className="stat-tile">
              <span className="stat-tile__label">Pomodoros</span>
              <span className="stat-tile__value">98</span>
              <span className="stat-tile__delta muted">
                avg 4.2 / day
              </span>
            </article>

            <article className="stat-tile">
              <span className="stat-tile__label">Cards reviewed</span>
              <span className="stat-tile__value">1,204</span>
              <span className="stat-tile__delta stat-tile__delta--up">
                ▲ 180 this month
              </span>
            </article>

            <article className="stat-tile">
              <span className="stat-tile__label">Longest streak</span>
              <span className="stat-tile__value">14</span>
              <span className="stat-tile__delta muted">
                current: 7 days
              </span>
            </article>
          </section>

          <article className="card">
            <div className="card__header">
              <h3 className="card__title">Study heatmap</h3>

              <div className="heatmap-legend">
                <span>Less</span>
                <span className="heatmap__cell"></span>
                <span className="heatmap__cell" data-level="1"></span>
                <span className="heatmap__cell" data-level="2"></span>
                <span className="heatmap__cell" data-level="3"></span>
                <span className="heatmap__cell" data-level="4"></span>
                <span>More</span>
              </div>
            </div>

            <div className="heatmap">
              {Array.from({ length: 84 }, (_, i) => {
                const levels = [0, 1, 2, 3, 4, 0, 0];
                const level = levels[i % levels.length];
                const minutes = level * 32;

                return (
                  <div
                    key={i}
                    className="heatmap__cell"
                    data-level={level}
                    title={`${minutes} min`}
                  />
                );
              })}
            </div>
          </article>

          <section className="home-grid">
            <article className="card">
              <div className="card__header">
                <h3 className="card__title">Focus minutes per day</h3>
                <span className="badge">This week</span>
              </div>

              <div className="bar-chart">
                {[
                  ["Mon", 45],
                  ["Tue", 70],
                  ["Wed", 30],
                  ["Thu", 90],
                  ["Fri", 100],
                  ["Sat", 25],
                  ["Sun", 55],
                ].map(([day, value]) => (
                  <div className="bar-chart__col" key={day}>
                    <div
                      className="bar-chart__bar"
                      style={{ "--value": value }}
                      title={`${value} min`}
                    />
                    <span className="bar-chart__label">{day}</span>
                  </div>
                ))}
              </div>
            </article>

            <article className="card">
              <div className="card__header">
                <h3 className="card__title">Accuracy by deck</h3>
              </div>

              {[
                ["CSS & Layout", 88],
                ["JavaScript", 72],
                ["Git & Tooling", 63],
                ["React", 54],
                ["Web APIs", 41],
                ["CS Foundations", 0],
              ].map(([name, percentage]) => (
                <div className="rank-row" key={name}>
                  <span className="rank-row__name">{name}</span>

                  <span className="progress">
                    <span
                      className="progress__bar"
                      style={{
                        width: `${percentage}%`,
                        display: "block",
                        height: "100%",
                      }}
                    />
                  </span>

                  <span className="rank-row__value">
                    {percentage === 0 ? "—" : `${percentage}%`}
                  </span>
                </div>
              ))}
            </article>
          </section>

          <section className="home-grid">
            <article
              className="card center"
              style={{
                gap: "var(--sp-4)",
                flexDirection: "column",
                display: "flex",
                alignItems: "center",
              }}
            >
              <h3 className="card__title">Overall retention</h3>

              <div className="donut" style={{ "--pct": 76 }}>
                <span className="donut__label">76%</span>
              </div>

              <p
                className="muted text-center"
                style={{ fontSize: "var(--text-sm)" }}
              >
                Cards you answered Good or Easy on the first attempt.
              </p>
            </article>

            <article className="card">
              <div className="card__header">
                <h3 className="card__title">Hardest cards</h3>
              </div>

              <div className="activity-list">
                <div className="activity-item">
                  <span className="badge badge--hard">Hard</span>
                  Why does useEffect run twice in dev?
                  <span className="activity-item__time">5 misses</span>
                </div>

                <div className="activity-item">
                  <span className="badge badge--hard">Hard</span>
                  What creates a new stacking context?
                  <span className="activity-item__time">4 misses</span>
                </div>

                <div className="activity-item">
                  <span className="badge badge--hard">Hard</span>
                  What is a stale closure in React?
                  <span className="activity-item__time">4 misses</span>
                </div>

                <div className="activity-item">
                  <span className="badge badge--medium">Medium</span>
                  preventDefault vs stopPropagation?
                  <span className="activity-item__time">3 misses</span>
                </div>
              </div>

              <div className="card__footer">
                <button className="btn btn--primary btn--sm">
                  Drill these 4 cards
                </button>
              </div>
            </article>
          </section>
        </main>
      </div>
    </div>
  );
}
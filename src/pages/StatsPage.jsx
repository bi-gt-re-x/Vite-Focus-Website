import { Link } from "react-router-dom";
import SideBar from "../components/layout/SideBar.jsx";
import Topbar from "../components/layout/Topbar.jsx";

// Everything on this page is hardcoded for phase 1. In phase 4 these arrays
// get derived from ProgressContext — the shape is what matters now.

// The one-line summary of the last 12 weeks. Supporting evidence for the
// verdict above it, not the headline.
const RECEIPTS = [
  { label: "focused", value: "41h" },
  { label: "rounds", value: "98" },
  { label: "recall", value: "76%" },
  { label: "day streak", value: "7" },
];

// The point of the page: what to do next, hardest-hitting first.
const PLAN = [
  {
    id: "react-first",
    impact: "Biggest win",
    impactVariant: "badge--accent",
    title: "Put React first for your next three sessions",
    evidence: "54% recall · 8 cards due",
    why:
      "It is your weakest deck and the one you open least. Leading with it while you are fresh is worth more than another hour spread evenly.",
    action: { label: "Study React", to: "/study" },
  },
  {
    id: "defend-wednesday",
    impact: "Quick win",
    impactVariant: "badge--success",
    title: "Defend one 25-minute block on Wednesday",
    evidence: "30 min Wed vs 100 min Fri",
    why:
      "Your week does not end badly, it starts badly. Wednesday is where the dip begins and Thursday spends the rest of the week catching up.",
    action: { label: "Set up the block", to: "/timer" },
  },
  {
    id: "small-start",
    impact: "Habit",
    impactVariant: "badge--warning",
    title: "Open CS Foundations at five cards, not twenty-five",
    evidence: "0 reviews in 12 weeks",
    why:
      "The deck has sat untouched since you added it. A five-card first session is small enough that you will actually finish it.",
    action: { label: "Open the deck", to: "/decks" },
  },
];

// Say what is going right, and say what to keep doing about it.
const WINS = [
  {
    id: "streak",
    title: "The streak is real",
    note: "Seven days running, fourteen at your best. Keep the floor at one round on bad days.",
  },
  {
    id: "css-done",
    title: "CSS is finished learning",
    note: "88% recall. Drop it to one review a week and spend the time on React.",
  },
  {
    id: "finish-rate",
    title: "You finish what you start",
    note: "Almost every round you begin runs to the chime. That is the hard part, and it is already handled.",
  },
];

// `flagged` marks the day the advice is about, so the chart argues the same
// point the text does. A quiet Saturday is not a problem; a quiet Wednesday is.
const WEEK = [
  { label: "Mon", value: 45 },
  { label: "Tue", value: 70 },
  { label: "Wed", value: 30, flagged: true },
  { label: "Thu", value: 90 },
  { label: "Fri", value: 100 },
  { label: "Sat", value: 25 },
  { label: "Sun", value: 55 },
];

const DECK_RECALL = [
  { name: "CSS & Layout", percentage: 88 },
  { name: "JavaScript", percentage: 72 },
  { name: "Git & Tooling", percentage: 63 },
  { name: "React", percentage: 54 },
  { name: "Web APIs", percentage: 41 },
  { name: "CS Foundations", percentage: 0 },
];

const LEAKS = [
  { id: "effect-twice", level: "Hard", question: "Why does useEffect run twice in dev?", misses: 5 },
  { id: "stacking", level: "Hard", question: "What creates a new stacking context?", misses: 4 },
  { id: "stale-closure", level: "Hard", question: "What is a stale closure in React?", misses: 4 },
  { id: "prevent-default", level: "Medium", question: "preventDefault vs stopPropagation?", misses: 3 },
];

export default function StatsPage({ activeLink }) {
  return (
    <div className="app" data-collapsed="false">
      {<SideBar activeStudyLink={activeLink} />}

      <div className="app__main">
        {<Topbar title="Stats" />}

        <main className="content">
          <div className="page-header">
            <div className="page-header__row">
              <div>
                <p className="eyebrow">Last 12 weeks</p>
                <h2 className="page-title">Where to put your next hour</h2>
              </div>

              <div className="tabs">
                <button className="tab">Week</button>
                <button className="tab tab--active">Month</button>
                <button className="tab">All time</button>
              </div>
            </div>
          </div>

          <section className="coach">
            <span className="badge badge--accent badge--dot">This week's read</span>

            <h3 className="coach__verdict">
              The hours are there. The mix is wrong.
            </h3>

            <p className="coach__read">
              You keep reviewing the deck you already know and skipping the two
              you don't — CSS is at 88% and still getting your best slots, while
              React and Web APIs sit under 55%. Nothing here says study more. It
              says spend the same hour somewhere else.
            </p>

            <div className="coach__actions">
              <Link className="btn btn--primary btn--lg" to="/study">
                Start with React
              </Link>
              <Link className="btn btn--secondary btn--lg" to="/timer">
                Run a 25-minute round
              </Link>
            </div>

            <ul className="coach__receipts">
              {RECEIPTS.map((receipt) => (
                <li className="coach__receipt" key={receipt.label}>
                  <strong>{receipt.value}</strong> {receipt.label}
                </li>
              ))}
            </ul>
          </section>

          <article className="card">
            <div className="card__header">
              <h3 className="card__title">Do these three things</h3>
              <span className="muted plan-list__hint">In this order</span>
            </div>

            <ol className="plan-list">
              {PLAN.map((item, index) => (
                <li className="plan-item" key={item.id}>
                  <span className="plan-item__rank">{index + 1}</span>

                  <div className="plan-item__body">
                    <p className="plan-item__title">
                      {item.title}
                      <span className={`badge ${item.impactVariant}`}>
                        {item.impact}
                      </span>
                    </p>

                    <p className="plan-item__why">{item.why}</p>

                    <p className="plan-item__evidence">{item.evidence}</p>
                  </div>

                  <Link className="btn btn--secondary btn--sm" to={item.action.to}>
                    {item.action.label}
                  </Link>
                </li>
              ))}
            </ol>
          </article>

          <section className="home-grid">
            <article className="card">
              <div className="card__header">
                <h3 className="card__title">Where the week breaks down</h3>
                <span className="badge">This week</span>
              </div>

              <div className="bar-chart">
                {WEEK.map((day) => (
                  <div className="bar-chart__col" key={day.label}>
                    <div
                      className="bar-chart__bar"
                      data-weak={day.flagged ? "true" : undefined}
                      style={{ "--value": day.value }}
                      title={`${day.value} min`}
                    />
                    <span className="bar-chart__label">{day.label}</span>
                  </div>
                ))}
              </div>

              <p className="insight">
                Thursday and Friday are carrying you. Wednesday is the crack the
                rest of the week leaks through — one protected round there is
                worth more than another big Friday.
              </p>
            </article>

            <article className="card">
              <div className="card__header">
                <h3 className="card__title">Keep doing this</h3>
              </div>

              <ul className="win-list">
                {WINS.map((win) => (
                  <li className="win-item" key={win.id}>
                    <span className="win-item__check" aria-hidden="true">✓</span>
                    <span>
                      <span className="win-item__title">{win.title}</span>
                      <span className="win-item__note">{win.note}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          </section>

          <section className="home-grid">
            <article className="card">
              <div className="card__header">
                <h3 className="card__title">Your leak list</h3>
                <span className="badge badge--danger">16 misses</span>
              </div>

              <p className="insight insight--tight">
                Four cards are responsible for most of your wrong answers. Ten
                minutes on these moves your recall further than an hour of new
                reviews would.
              </p>

              <div className="activity-list">
                {LEAKS.map((leak) => (
                  <div className="activity-item" key={leak.id}>
                    <span
                      className={`badge badge--${leak.level.toLowerCase()}`}
                    >
                      {leak.level}
                    </span>
                    {leak.question}
                    <span className="activity-item__time">
                      {leak.misses} misses
                    </span>
                  </div>
                ))}
              </div>

              <div className="card__footer">
                <Link className="btn btn--primary btn--sm" to="/study">
                  Drill these 4 cards
                </Link>
              </div>
            </article>

            <article className="card">
              <div className="card__header">
                <h3 className="card__title">Cold, not hard</h3>
              </div>

              {DECK_RECALL.map((deck) => (
                <div className="rank-row" key={deck.name}>
                  <span className="rank-row__name">{deck.name}</span>

                  <span className="progress">
                    <span
                      className="progress__bar"
                      style={{
                        width: `${deck.percentage}%`,
                        display: "block",
                        height: "100%",
                      }}
                    />
                  </span>

                  <span className="rank-row__value">
                    {deck.percentage === 0 ? "—" : `${deck.percentage}%`}
                  </span>
                </div>
              ))}

              <p className="insight">
                This list tracks how recently you reviewed, not how difficult
                the material is. The bottom three are not harder decks — they
                are colder ones.
              </p>
            </article>
          </section>

          <section className="evidence">
            <div className="evidence__header">
              <h3 className="evidence__title">The numbers behind all that</h3>
              <p className="muted">
                Twelve weeks of sessions. Darker is a longer day.
              </p>
            </div>

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

              <p className="insight">
                The gaps are weekends, and they are fine. Two weekdays in a row
                blank is the pattern worth catching early — that is when a
                streak usually ends.
              </p>
            </article>
          </section>
        </main>
      </div>
    </div>
  );
}

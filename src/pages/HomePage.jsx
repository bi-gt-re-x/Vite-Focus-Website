import SideBar from '../components/SideBar.jsx';

export default function HomePage() {
  return (
    <div className="app" data-collapsed="false">
      {<SideBar />}

      <div className="app__main">
        <header className="topbar">
          <h1 className="topbar__title">Home</h1>

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
          <section className="hero">
            <div>
              <p className="eyebrow">Wednesday, 3 September</p>

              <h2 className="hero__title">Ready for round one?</h2>

              <p className="hero__subtitle">
                Focus for 25 minutes, then review a handful of cards while it
                is still fresh. Short sessions, repeated often, beat one long
                cram.
              </p>

              <div className="hero__actions">
                <a className="btn btn--primary btn--lg" href="/timer">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Start focus session
                </a>

                <a className="btn btn--secondary btn--lg" href="/study">
                  Review 12 due cards
                </a>
              </div>
            </div>

            <div className="hero__visual">
              <div className="donut" style={{ "--pct": 68 }}>
                <span className="donut__label">68%</span>
              </div>
            </div>
          </section>

          <section className="stat-grid">
            <article className="stat-tile">
              <span className="stat-tile__label">Focus today</span>
              <span className="stat-tile__value">2h 05m</span>
              <span className="stat-tile__delta stat-tile__delta--up">
                ▲ 35m vs yesterday
              </span>
            </article>

            <article className="stat-tile">
              <span className="stat-tile__label">Pomodoros</span>
              <span className="stat-tile__value">5</span>
              <span className="stat-tile__delta muted">Goal: 8</span>
            </article>

            <article className="stat-tile">
              <span className="stat-tile__label">Cards reviewed</span>
              <span className="stat-tile__value">64</span>
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

          <section className="home-grid">
            <article className="card">
              <div className="card__header">
                <h3 className="card__title">Jump back in</h3>
                <a className="btn btn--ghost btn--sm" href="/decks">
                  All decks
                </a>
              </div>

              <div className="deck-shortcut-list">
                <a className="deck-shortcut" href="/study">
                  <span className="deck-shortcut__swatch">⚛️</span>
                  <span className="deck-shortcut__meta">
                    <span className="deck-shortcut__name">
                      React Essentials
                    </span>
                    <span className="deck-shortcut__sub">
                      8 due · 25 cards
                    </span>
                  </span>
                  <span className="badge badge--accent">Due</span>
                </a>

                <a className="deck-shortcut" href="/study">
                  <span className="deck-shortcut__swatch">🟨</span>
                  <span className="deck-shortcut__meta">
                    <span className="deck-shortcut__name">
                      JavaScript Fundamentals
                    </span>
                    <span className="deck-shortcut__sub">
                      4 due · 25 cards
                    </span>
                  </span>
                  <span className="badge badge--accent">Due</span>
                </a>

                <a className="deck-shortcut" href="/study">
                  <span className="deck-shortcut__swatch">🎨</span>
                  <span className="deck-shortcut__meta">
                    <span className="deck-shortcut__name">CSS & Layout</span>
                    <span className="deck-shortcut__sub">
                      Next review tomorrow
                    </span>
                  </span>
                  <span className="badge">Rested</span>
                </a>

                <a className="deck-shortcut" href="/study">
                  <span className="deck-shortcut__swatch">🧠</span>
                  <span className="deck-shortcut__meta">
                    <span className="deck-shortcut__name">CS Foundations</span>
                    <span className="deck-shortcut__sub">
                      Not started · 25 cards
                    </span>
                  </span>
                  <span className="badge">New</span>
                </a>
              </div>
            </article>

            <article className="card">
              <div className="card__header">
                <h3 className="card__title">Recent activity</h3>
              </div>

              <div className="activity-list">
                <div className="activity-item">
                  <span className="activity-item__dot"></span>
                  Finished a 25 min focus block
                  <span className="activity-item__time">14:20</span>
                </div>

                <div className="activity-item">
                  <span className="activity-item__dot"></span>
                  Reviewed 20 React cards
                  <span className="activity-item__time">13:44</span>
                </div>

                <div className="activity-item">
                  <span className="activity-item__dot"></span>
                  Took a long break
                  <span className="activity-item__time">13:10</span>
                </div>

                <div className="activity-item">
                  <span className="activity-item__dot"></span>
                  Finished a 25 min focus block
                  <span className="activity-item__time">12:35</span>
                </div>

                <div className="activity-item">
                  <span className="activity-item__dot"></span>
                  Added deck “CS Foundations”
                  <span className="activity-item__time">11:02</span>
                </div>
              </div>
            </article>
          </section>
        </main>
      </div>
    </div>
  );
}

export default function StudyPage() {
  return (
    <div className="app" data-collapsed="false">
    <aside className="sidebar">
    <div className="sidebar__brand">
    <div className="sidebar__logo">FD</div>
    <span>FocusDeck</span>
    </div>

      <nav className="sidebar__nav">
        <a className="nav-link" href="/" data-page="home">
          <svg
            className="nav-link__icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" />
          </svg>
          <span>Home</span>
        </a>

        <a className="nav-link" href="/timer" data-page="timer">
          <svg
            className="nav-link__icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <circle cx="12" cy="12" r="8" />
            <path d="M12 8v4l2.5 2.5" />
          </svg>
          <span>Timer</span>
        </a>

        <a className="nav-link" href="/decks" data-page="decks">
          <svg
            className="nav-link__icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <rect x="3" y="4" width="18" height="6" rx="2" />
            <rect x="3" y="14" width="18" height="6" rx="2" />
          </svg>
          <span>Decks</span>
          <span className="nav-link__badge">6</span>
        </a>

        <a
          className="nav-link nav-link--active"
          href="/study"
          data-page="study"
        >
          <svg
            className="nav-link__icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="M8 10h8M8 14h5" />
          </svg>
          <span>Study</span>
        </a>

        <a className="nav-link" href="/stats" data-page="stats">
          <svg
            className="nav-link__icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M5 20V10M12 20V4M19 20v-7" />
          </svg>
          <span>Stats</span>
        </a>

        <a className="nav-link" href="/settings" data-page="settings">
          <svg
            className="nav-link__icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M4 7h10M18 7h2M4 17h4M12 17h8" />
            <circle cx="16" cy="7" r="2" />
            <circle cx="10" cy="17" r="2" />
          </svg>
          <span>Settings</span>
        </a>
      </nav>

      <div className="sidebar__footer">
        <div className="sidebar__streak">
          <span>🔥</span>
          <div>
            <strong>7</strong>{" "}
            <span className="faint">day streak</span>
          </div>
        </div>
      </div>
    </aside>

    <div className="app__main">
      <header className="topbar">
        <h1 className="topbar__title">Study</h1>

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

      <main className="content content--focus study-page">
        <div className="study-header">
          <div className="study-header__row">
            <div className="row">
              <a className="btn btn--ghost btn--sm" href="/decks">
                ← Decks
              </a>

              <span className="badge badge--accent">
                ⚛️ React Essentials
              </span>
            </div>

            <span className="study-counter">7 / 25</span>
          </div>

          <div className="progress">
            <div
              className="progress__bar"
              style={{ width: "28%" }}
            ></div>
          </div>
        </div>

        <div className="card-stack">
          <div
            className="flashcard"
            tabIndex={0}
            role="button"
            aria-label="Flashcard, press Enter to flip"
          >
            <div className="flashcard__inner">
              <div className="flashcard__face flashcard__face--front">
                <span className="flashcard__tag">hooks</span>

                <span className="flashcard__difficulty badge badge--medium">
                  Medium
                </span>

                <p className="flashcard__question">
                  What does the dependency array of useEffect control?
                </p>

                <span className="flashcard__hint">
                  <span className="kbd">Space</span> to flip
                </span>
              </div>

              <div className="flashcard__face flashcard__face--back">
                <span className="flashcard__tag">Answer</span>

                <span className="flashcard__difficulty badge badge--medium">
                  Medium
                </span>

                <p className="flashcard__answer">
                  When the effect re-runs. Omitted means every render,{" "}
                  <code>[]</code> means once after mount, and a populated
                  array means whenever one of those values changes between
                  renders.
                </p>

                <span className="flashcard__hint">
                  How well did you know it?
                </span>
              </div>
            </div>
          </div>
        </div>

        <div
          className="card"
          style={{ width: "min(640px, 100%)" }}
        >
          <p
            className="eyebrow"
            style={{ marginBottom: "var(--sp-3)" }}
          >
            Card with a code snippet — back face
          </p>

          <pre className="flashcard__code">
          </pre>
        </div>

        <div className="grade-row">
          <button className="grade-btn grade-btn--again">
            Again
            <small>&lt; 1 min</small>
          </button>

          <button className="grade-btn grade-btn--hard">
            Hard
            <small>6 min</small>
          </button>

          <button className="grade-btn grade-btn--good">
            Good
            <small>1 day</small>
          </button>

          <button className="grade-btn grade-btn--easy">
            Easy
            <small>4 days</small>
          </button>
        </div>

        <div className="study-nav">
          <button
            className="btn btn--secondary btn--icon"
            aria-label="Previous card"
          >
            ←
          </button>

          <button className="btn btn--secondary">
            Flip card
          </button>

          <button
            className="btn btn--secondary btn--icon"
            aria-label="Next card"
          >
            →
          </button>

          <button className="btn btn--ghost btn--sm">
            Shuffle
          </button>
        </div>

        <p className="keyboard-hints">
          <span>
            <span className="kbd">Space</span> flip
          </span>

          <span>
            <span className="kbd">1</span>–<span className="kbd">4</span>{" "}
            grade
          </span>

          <span>
            <span className="kbd">←</span>
            <span className="kbd">→</span> navigate
          </span>

          <span>
            <span className="kbd">Esc</span> exit session
          </span>
        </p>

        <h3
          className="section-title"
          style={{ marginTop: "var(--sp-7)" }}
        >
          Session complete screen
        </h3>

        <section className="session-complete">
          <span style={{ fontSize: "var(--text-3xl)" }}>
            🎉
          </span>

          <p className="eyebrow">Session complete</p>

          <p className="session-complete__score">84%</p>

          <p className="muted">
            21 of 25 cards answered correctly in 6 minutes.
          </p>

          <div className="session-complete__breakdown">
            <div>
              <div
                className="session-strip__value"
                style={{ color: "var(--success)" }}
              >
                18
              </div>

              <div className="session-strip__label">
                Good / Easy
              </div>
            </div>

            <div>
              <div
                className="session-strip__value"
                style={{ color: "var(--warning)" }}
              >
                3
              </div>

              <div className="session-strip__label">
                Hard
              </div>
            </div>

            <div>
              <div
                className="session-strip__value"
                style={{ color: "var(--danger)" }}
              >
                4
              </div>

              <div className="session-strip__label">
                Again
              </div>
            </div>
          </div>

          <div
            className="row"
            style={{ marginTop: "var(--sp-3)" }}
          >
            <button className="btn btn--primary">
              Review the 4 you missed
            </button>

            <a className="btn btn--secondary" href="/timer">
              Start a break
            </a>
          </div>
        </section>
      </main>
    </div>
  </div>
  );
}
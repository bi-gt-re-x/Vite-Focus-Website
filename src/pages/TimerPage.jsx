export default function TimerPage() {
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

          <a
            className="nav-link nav-link--active"
            href="/timer"
            data-page="timer"
          >
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

          <a className="nav-link" href="/study" data-page="study">
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
          <h1 className="topbar__title">Timer</h1>

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

        <main
          className="content content--focus timer-page"
          data-mode="focus"
        >
          <div
            className="mode-switch"
            role="tablist"
            aria-label="Timer mode"
          >
            <button
              className="mode-switch__btn mode-switch__btn--active"
              role="tab"
              aria-selected="true"
            >
              Focus
            </button>

            <button
              className="mode-switch__btn"
              role="tab"
              aria-selected="false"
            >
              Short break
            </button>

            <button
              className="mode-switch__btn"
              role="tab"
              aria-selected="false"
            >
              Long break
            </button>
          </div>

          <div className="timer-task">
            <span>📌</span>

            <input
              className="timer-task__input"
              placeholder="What are you working on?"
              defaultValue="Finish the study page"
            />
          </div>

          <div className="dial" data-running="true">
            <svg
              className="dial__svg"
              viewBox="0 0 100 100"
              aria-hidden="true"
            >
              <circle
                className="dial__track"
                cx="50"
                cy="50"
                r="46"
              />

              <circle
                className="dial__progress"
                cx="50"
                cy="50"
                r="46"
                strokeDasharray="289.03"
                strokeDashoffset="86.7"
              />
            </svg>

            <div className="dial__glow"></div>

            <div className="dial__inner">
              <span
                className="dial__time"
                role="timer"
                aria-live="off"
              >
                18:42
              </span>

              <span className="dial__label">Focus</span>

              <span className="dial__round">
                Round 2 of 4
              </span>
            </div>
          </div>

          <div
            className="round-track"
            aria-label="Rounds completed"
          >
            <span className="round-dot round-dot--done"></span>
            <span className="round-dot round-dot--current"></span>
            <span className="round-dot"></span>
            <span className="round-dot"></span>
          </div>

          <div className="timer-controls">
            <button
              className="timer-controls__side tooltip"
              data-tip="Reset"
              aria-label="Reset timer"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M3 12a9 9 0 1 0 3-6.7" />
                <path d="M3 4v5h5" />
              </svg>
            </button>

            <button
              className="timer-controls__main"
              aria-label="Pause timer"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <rect x="7" y="5" width="4" height="14" rx="1" />
                <rect x="13" y="5" width="4" height="14" rx="1" />
              </svg>
            </button>

            <button
              className="timer-controls__side tooltip"
              data-tip="Skip"
              aria-label="Skip to next phase"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M6 5l9 7-9 7z" />
                <path d="M18 5v14" />
              </svg>
            </button>
          </div>

          <div className="session-strip">
            <div>
              <div className="session-strip__value">2</div>
              <div className="session-strip__label">Rounds done</div>
            </div>

            <div>
              <div className="session-strip__value">50m</div>
              <div className="session-strip__label">Focused today</div>
            </div>

            <div>
              <div className="session-strip__value">16:05</div>
              <div className="session-strip__label">Finish at</div>
            </div>
          </div>

          <p className="keyboard-hints">
            <span>
              <span className="kbd">Space</span> start / pause
            </span>

            <span>
              <span className="kbd">R</span> reset
            </span>

            <span>
              <span className="kbd">S</span> skip
            </span>

            <span>
              <span className="kbd">F</span> zen mode
            </span>
          </p>
        </main>
      </div>
    </div>
  );
}

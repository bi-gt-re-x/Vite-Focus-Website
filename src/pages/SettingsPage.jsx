import { Link } from "react-router-dom";
import { THEMES } from "../data/themes";

export default function SettingsPage() {
  return (
    <div className="app" data-collapsed="false">
      <aside className="sidebar">
        <div className="sidebar__brand">
          <div className="sidebar__logo">FD</div>
          <span>FocusDeck</span>
        </div>

        <nav className="sidebar__nav">
          <Link className="nav-link" to="/home" data-page="home">
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
          </Link>

          <Link className="nav-link" to="/timer" data-page="timer">
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
          </Link>

          <Link className="nav-link" to="/decks" data-page="decks">
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
          </Link>

          <Link className="nav-link" to="/study" data-page="study">
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
          </Link>

          <Link className="nav-link" to="/stats" data-page="stats">
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
          </Link>

          <Link
            className="nav-link nav-link--active"
            to="/settings"
            data-page="settings"
          >
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
          </Link>
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
          <h1 className="topbar__title">Settings</h1>

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
            <p className="eyebrow">Preferences</p>
            <h2 className="page-title">Settings</h2>
          </div>

          <div className="settings-layout">
            <nav className="settings-nav">
              <a
                className="settings-nav__link settings-nav__link--active"
                href="#timer"
              >
                Timer
              </a>

              <a className="settings-nav__link" href="#appearance">
                Appearance
              </a>

              <a className="settings-nav__link" href="#study">
                Study
              </a>

              <a className="settings-nav__link" href="#data">
                Data
              </a>
            </nav>

            <div>
              {/* TIMER */}
              <section className="settings-section" id="timer">
                <h3 className="section-title">Timer</h3>

                <div className="card">
                  <div
                    className="preset-row"
                    style={{ marginBottom: "var(--sp-4)" }}
                  >
                    <button className="chip chip--active">
                      Classic · 25/5/15
                    </button>

                    <button className="chip">
                      Deep work · 50/10/30
                    </button>

                    <button className="chip">
                      Sprint · 15/3/10
                    </button>
                  </div>

                  <div className="setting-row">
                    <div className="setting-row__text">
                      <span className="setting-row__label">
                        Focus length
                      </span>
                      <span className="setting-row__desc">
                        Minutes in a single work block
                      </span>
                    </div>

                    <div className="stepper">
                      <button className="stepper__btn" aria-label="Decrease">
                        −
                      </button>
                      <span className="stepper__value">25</span>
                      <button className="stepper__btn" aria-label="Increase">
                        +
                      </button>
                    </div>
                  </div>

                  <div className="setting-row">
                    <div className="setting-row__text">
                      <span className="setting-row__label">
                        Short break
                      </span>
                      <span className="setting-row__desc">
                        Between focus blocks
                      </span>
                    </div>

                    <div className="stepper">
                      <button className="stepper__btn" aria-label="Decrease">
                        −
                      </button>
                      <span className="stepper__value">5</span>
                      <button className="stepper__btn" aria-label="Increase">
                        +
                      </button>
                    </div>
                  </div>

                  <div className="setting-row">
                    <div className="setting-row__text">
                      <span className="setting-row__label">
                        Long break
                      </span>
                      <span className="setting-row__desc">
                        After a full set of rounds
                      </span>
                    </div>

                    <div className="stepper">
                      <button className="stepper__btn" aria-label="Decrease">
                        −
                      </button>
                      <span className="stepper__value">15</span>
                      <button className="stepper__btn" aria-label="Increase">
                        +
                      </button>
                    </div>
                  </div>

                  <div className="setting-row">
                    <div className="setting-row__text">
                      <span className="setting-row__label">
                        Rounds before a long break
                      </span>
                      <span className="setting-row__desc">
                        How many focus blocks per set
                      </span>
                    </div>

                    <div className="stepper">
                      <button className="stepper__btn" aria-label="Decrease">
                        −
                      </button>
                      <span className="stepper__value">4</span>
                      <button className="stepper__btn" aria-label="Increase">
                        +
                      </button>
                    </div>
                  </div>

                  <div className="setting-row">
                    <div className="setting-row__text">
                      <span className="setting-row__label">
                        Auto-start breaks
                      </span>
                      <span className="setting-row__desc">
                        Roll straight into the break when focus ends
                      </span>
                    </div>

                    <label className="switch">
                      <input type="checkbox" defaultChecked />
                      <span className="switch__track"></span>
                    </label>
                  </div>

                  <div className="setting-row">
                    <div className="setting-row__text">
                      <span className="setting-row__label">
                        Auto-start focus
                      </span>
                      <span className="setting-row__desc">
                        Begin the next block as soon as the break ends
                      </span>
                    </div>

                    <label className="switch">
                      <input type="checkbox" />
                      <span className="switch__track"></span>
                    </label>
                  </div>

                  <div className="setting-row">
                    <div className="setting-row__text">
                      <span className="setting-row__label">
                        Sound on completion
                      </span>
                      <span className="setting-row__desc">
                        A chime when a phase finishes
                      </span>
                    </div>

                    <label className="switch">
                      <input type="checkbox" defaultChecked />
                      <span className="switch__track"></span>
                    </label>
                  </div>

                  <div className="setting-row">
                    <div className="setting-row__text">
                      <span className="setting-row__label">
                        Desktop notifications
                      </span>
                      <span className="setting-row__desc">
                        Requires browser permission
                      </span>
                    </div>

                    <label className="switch">
                      <input type="checkbox" />
                      <span className="switch__track"></span>
                    </label>
                  </div>
                </div>
              </section>

              {/* APPEARANCE */}
              <section className="settings-section" id="appearance">
                <h3 className="section-title">Appearance</h3>

                <div className="card">
                  <p
                    className="muted"
                    style={{
                      fontSize: "var(--text-sm)",
                      marginBottom: "var(--sp-4)",
                    }}
                  >
                    Themes only swap CSS custom properties — nothing else in
                    the app changes.
                  </p>

                  <div className="theme-grid">
                    <button className="theme-option theme-option--active">
                      <span className="theme-option__preview">
                        <span style={{ background: "#0f1218" }}></span>
                        <span style={{ background: "#171b24" }}></span>
                        <span style={{ background: "#7c6cf5" }}></span>
                        <span style={{ background: "#f2695c" }}></span>
                      </span>
                      <span className="theme-option__name">
                        Graphite{" "}
                        <span className="badge badge--accent">Active</span>
                      </span>
                    </button>

                    {THEMES
                      .filter((theme) => theme.name !== 'Graphite')
                      .map((theme) => (
                        <button key={theme.name} className="theme-option">
                          <span className="theme-option__preview">
                            {theme.swatch.map((colorCode, index) => (
                              <span key={index} style={{ background: colorCode }}></span>
                            ))}
                          </span>
                          <span className="theme-option__name">{theme.name}</span>
                        </button>
                      ))}
                  </div>

                  <div
                    className="setting-row"
                    style={{ marginTop: "var(--sp-4)" }}
                  >
                    <div className="setting-row__text">
                      <span className="setting-row__label">
                        Follow system theme
                      </span>
                      <span className="setting-row__desc">
                        Switch with your OS light/dark setting
                      </span>
                    </div>

                    <label className="switch">
                      <input type="checkbox" />
                      <span className="switch__track"></span>
                    </label>
                  </div>

                  <div className="setting-row">
                    <div className="setting-row__text">
                      <span className="setting-row__label">
                        Tint the timer by phase
                      </span>
                      <span className="setting-row__desc">
                        Focus red, break green, long break blue
                      </span>
                    </div>

                    <label className="switch">
                      <input type="checkbox" defaultChecked />
                      <span className="switch__track"></span>
                    </label>
                  </div>
                </div>
              </section>

              {/* STUDY */}
              <section className="settings-section" id="study">
                <h3 className="section-title">Study</h3>

                <div className="card">
                  <div className="setting-row">
                    <div className="setting-row__text">
                      <span className="setting-row__label">
                        Cards per session
                      </span>
                      <span className="setting-row__desc">
                        How many to queue when you start studying
                      </span>
                    </div>

                    <select
                      className="select"
                      style={{ width: "auto" }}
                      defaultValue="20"
                    >
                      <option value="10">10</option>
                      <option value="20">20</option>
                      <option value="30">30</option>
                      <option value="all">All due</option>
                    </select>
                  </div>

                  <div className="setting-row">
                    <div className="setting-row__text">
                      <span className="setting-row__label">
                        Shuffle cards
                      </span>
                      <span className="setting-row__desc">
                        Randomise order instead of deck order
                      </span>
                    </div>

                    <label className="switch">
                      <input type="checkbox" defaultChecked />
                      <span className="switch__track"></span>
                    </label>
                  </div>

                  <div className="setting-row">
                    <div className="setting-row__text">
                      <span className="setting-row__label">
                        Reverse mode
                      </span>
                      <span className="setting-row__desc">
                        Show the answer first and recall the question
                      </span>
                    </div>

                    <label className="switch">
                      <input type="checkbox" />
                      <span className="switch__track"></span>
                    </label>
                  </div>

                  <div className="setting-row">
                    <div className="setting-row__text">
                      <span className="setting-row__label">
                        Difficulty filter
                      </span>
                      <span className="setting-row__desc">
                        Only study cards at these levels
                      </span>
                    </div>

                    <div className="chip-row">
                      <button className="chip chip--active">Easy</button>
                      <button className="chip chip--active">Medium</button>
                      <button className="chip chip--active">Hard</button>
                    </div>
                  </div>
                </div>
              </section>

              {/* DATA */}
              <section className="settings-section" id="data">
                <h3 className="section-title">Data</h3>

                <div className="card">
                  <div className="setting-row">
                    <div className="setting-row__text">
                      <span className="setting-row__label">
                        Export progress
                      </span>
                      <span className="setting-row__desc">
                        Download your stats and card history as JSON
                      </span>
                    </div>

                    <button className="btn btn--secondary btn--sm">
                      Export
                    </button>
                  </div>

                  <div className="setting-row">
                    <div className="setting-row__text">
                      <span className="setting-row__label">Import</span>
                      <span className="setting-row__desc">
                        Restore from a previously exported file
                      </span>
                    </div>

                    <button className="btn btn--secondary btn--sm">
                      Choose file
                    </button>
                  </div>
                </div>

                <div className="danger-zone">
                  <span className="danger-zone__title">Danger zone</span>

                  <p
                    className="muted"
                    style={{ fontSize: "var(--text-sm)" }}
                  >
                    Resetting clears every review record, streak, and session
                    log stored in this browser. It cannot be undone.
                  </p>

                  <div className="row">
                    <button className="btn btn--danger btn--sm">
                      Reset study progress
                    </button>

                    <button className="btn btn--danger btn--sm">
                      Clear all data
                    </button>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* MODAL + TOAST REFERENCE */}
          <h3
            className="section-title"
            style={{ marginTop: "var(--sp-7)" }}
          >
            Modal &amp; toast reference
          </h3>

          <div
            className="card"
            style={{
              position: "relative",
              minHeight: "320px",
              overflow: "hidden",
            }}
          >
            <div
              className="modal-backdrop"
              style={{ position: "absolute" }}
            >
              <div
                className="modal"
                role="dialog"
                aria-modal="true"
                aria-labelledby="m-title"
              >
                <h4 className="modal__title" id="m-title">
                  Clear all data?
                </h4>

                <p className="muted">
                  This removes every deck record, streak and session from this
                  browser. There is no undo.
                </p>

                <div className="modal__actions">
                  <button className="btn btn--secondary">Cancel</button>
                  <button className="btn btn--danger">
                    Yes, clear it
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            className="card"
            style={{
              display: "flex",
              gap: "var(--sp-3)",
              flexWrap: "wrap",
            }}
          >
            <div className="toast toast--success">
              <span>✅</span>
              <span>Settings saved</span>
            </div>

            <div className="toast">
              <span>⏱️</span>
              <span>
                Focus session complete — take a break
              </span>
            </div>

            <div className="toast toast--danger">
              <span>⚠️</span>
              <span>Could not read that import file</span>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
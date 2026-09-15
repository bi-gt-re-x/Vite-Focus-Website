import SideBar from '../components/layout/SideBar.jsx';
import Topbar from '../components/layout/Topbar.jsx';
import { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import duration from "dayjs/plugin/duration";

export default function TimerPage({ activeLink }) {
  const [timeLeft, setTimeLeft] = useState(1800);
  const [paused, setPaused] = useState(false);
  dayjs.extend(duration);

  useEffect(() => {
    if (timeLeft <= 0) return;

    if (paused === false) {
      const timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);

      return () => clearInterval(timer);  
    }

  }, [timeLeft]);

  return (
    <div className="app" data-collapsed="false">
      {<SideBar activeStudyLink={activeLink}/>}

      <div className="app__main">
        {<Topbar title="Timer" />}

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
                {dayjs.duration(timeLeft, "seconds").format("mm:ss")}
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
              onClick={() => {
                setTimeLeft(1800);
              }}
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
              onClick={() => {
                setPaused(!paused);
              }}
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

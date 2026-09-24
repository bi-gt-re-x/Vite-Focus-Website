import SideBar from "../components/layout/SideBar.jsx";
import Topbar from "../components/layout/Topbar.jsx";
import { useState, useEffect } from "react";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { useTimer, timeHandles } from "../hooks/useTimer.js";
import {
  timerSpaceShortcut,
  timerResetShortcut,
} from "../hooks/useKeyboardShortcuts.js";
import { playChime } from "../utils/sound.js";
import { formatClock } from "../utils/time.js";

export default function TimerPage({ activeLink }) {
  const [timeLeft, setTimeLeft] = useState(1500);
  const [paused, setPaused] = useState(true);
  const buttons = ["Focus", "Short Break", "Long Break"];
  const [selectedIndex, setSelectedIndex] = useState(0);
  dayjs.extend(duration);

  const radius = 44;
  const circumfrence = 2 * Math.PI * radius;
  const [strokeDashoffset, setOffSet] = useState(0);
  const [rounds, setRounds] = useState(0);
  const [cumuFocus, setCumuFocus] = useState(0);

  timeHandles({ timeLeft, circumfrence, setOffSet, playChime, setRounds, setTimeLeft });
  useTimer({ paused, timeLeft, setTimeLeft });
  timerSpaceShortcut({ paused, setPaused });
  timerResetShortcut({ timeLeft, setTimeLeft });

  const [workOn, setWorkOn] = useState(() => {
    const savedMastery = localStorage.getItem('workon');
    return savedMastery ? JSON.parse(savedMastery) 
    : ''
  });

  useEffect(() => {
    localStorage.setItem('workon', JSON.stringify(workOn));
  }, [workOn])

  return (
    <div className="app" data-collapsed="false">
      {<SideBar activeStudyLink={activeLink} />}

      <div className="app__main">
        {<Topbar title="Timer" />}

        <main className="content content--focus timer-page" data-mode="focus">
          <div className="mode-switch" role="tablist" aria-label="Timer mode">
            {buttons.map((button, index) => (
              <button
                key={index}
                className={`mode-switch__btn ${selectedIndex === index ? "mode-switch__btn--active" : ""}`}
                role="tab"
                aria-selected={selectedIndex === index}
                onClick={() => setSelectedIndex(index)}
              >
                {button}
              </button>
            ))}
          </div>

          <div className="timer-task">
            <span>📌</span>

            <input
              className="timer-task__input"
              placeholder="What are you working on?"
              defaultValue={workOn}
            />
          </div>

          <div className="dial" data-running="true">
            <svg className="dial__svg" viewBox="0 0 100 100" aria-hidden="true">
              <circle className="dial__track" cx="50" cy="50" r={radius} />

              <circle
                className="dial__progress"
                cx="50"
                cy="50"
                r={radius}
                strokeDasharray={circumfrence}
                strokeDashoffset={strokeDashoffset}
                style={{ transition: "stroke-dashoffset 1s linear" }}
              />
            </svg>

            <div className="dial__glow"></div>

            <div className="dial__inner">
              <span className="dial__time" role="timer" aria-live="off">
                {dayjs.duration(timeLeft, "seconds").format("mm:ss")}
              </span>

              <span className="dial__label">Focus</span>

              <span className="dial__round">Round {rounds} of 4</span>
            </div>
          </div>

          <div className="round-track" aria-label="Rounds completed">
            {(() => {
              const dots = [];
              for (let i = 0; i <= 4; i++) {
                if (i < rounds) {
                  dots.push(<span key={i} className="round-dot--done"></span>);
                } else if (i === rounds) {
                  dots.push(
                    <span key={i} className="round-dot--current"></span>,
                  );
                } else {
                  dots.push(<span key={i} className="round-dot"></span>);
                }
              }
              return dots;
            })()}
          </div>

          <div className="timer-controls">
            <button
              className="timer-controls__side tooltip"
              data-tip="Reset"
              aria-label="Reset timer"
              onClick={() => {
                setTimeLeft(1500);
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
              {paused ? (
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <rect x="7" y="5" width="4" height="14" rx="1" />
                  <rect x="13" y="5" width="4" height="14" rx="1" />
                </svg>
              )}
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
              <div className="session-strip__value">{rounds}</div>
              <div className="session-strip__label">Rounds done</div>
            </div>

            <div>
              <div className="session-strip__value">50m</div>
              <div className="session-strip__label">Focused today</div>
            </div>

            <div>
              <div className="session-strip__value">
                {dayjs().add(30, "minute").format("HH:mm")}
              </div>
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

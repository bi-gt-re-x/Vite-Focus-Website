import SideBar from "../../components/layout/SideBar.jsx";
import Topbar from "../../components/layout/Topbar.jsx";
import { useState, useEffect } from "react";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { useTimer, timeHandles } from "../../hooks/useTimer.js";
import {
  timerSpaceShortcut,
  timerResetShortcut,
  timerSkipShortcut
} from "../../hooks/useKeyboardShortcuts.js";
import { playChime } from "../../utils/sound.js";
import { formatClock } from "../../utils/time.js";
import ModeSwitch from "./ModeSwitch.jsx";
import RoundTrack from "./RoundTrack.jsx";
import TimerDial from "./TimerDial.jsx";
import { TimerSummary } from "./TimerSummary.jsx";

export default function TimerPage({ activeLink }) {
  const timeArray = [1500, 300, 900];
  const [currentTimeIndex, setCurrentTimeIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(timeArray[currentTimeIndex]);
  const [paused, setPaused] = useState(true);
  const buttons = ["Focus", "Short Break", "Long Break"];
  const [selectedIndex, setSelectedIndex] = useState(0);
  dayjs.extend(duration);

  const radius = 44;
  const circumfrence = 2 * Math.PI * radius;
  const [strokeDashoffset, setOffSet] = useState(0);
  const [rounds, setRounds] = useState(0);
  const [cumuFocus, setCumuFocus] = useState(0);
  const [time, setTime] = useState(0);

  timeHandles({ timeLeft, circumfrence, setOffSet, playChime, setRounds, setTimeLeft, currentTimeIndex, rounds, timeArray, setSelectedIndex, setCurrentTimeIndex });
  useTimer({ paused, timeLeft, time, setTimeLeft });
  timerSpaceShortcut({ paused, setPaused });
  timerResetShortcut({ timeLeft, setTimeLeft });
  timerSkipShortcut({ timeLeft, setTimeLeft });

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
          <ModeSwitch buttons={buttons} selectedIndex={selectedIndex} workOn={workOn} setSelectedIndex={setSelectedIndex} />
          <TimerDial rounds={rounds} radius={radius} circumfrence={circumfrence} strokeDashoffset={strokeDashoffset} timeLeft={timeLeft} />
          <RoundTrack rounds={rounds} />

          <div className="timer-controls">
            <button
              className="timer-controls__side tooltip"
              data-tip="Reset"
              aria-label="Reset timer"
              onClick={() => {
                setTimeLeft(timeArray[currentTimeIndex]);
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
              onClick={() => {setTimeLeft(0);}}
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

          <TimerSummary rounds={rounds} time={Math.floor(time / 60)} sessionLength={timeArray[currentTimeIndex]} />
        </main>
      </div>
    </div>
  );
}

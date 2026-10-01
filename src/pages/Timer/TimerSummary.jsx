import dayjs from "dayjs";

export function TimerSummary({ rounds, time, sessionLength }) {
  let showTime = '';

  if (time >= 60) {
    showTime = `${dayjs(time).format("HH:mm")}h`;
  }

  else {
    showTime = `${dayjs(time).format("mm")}m`;
  }

    return (
      <>
        <div className="session-strip">
          <div>
            <div className="session-strip__value">{rounds}</div>
            <div className="session-strip__label">Rounds done</div>
          </div>

          <div>
            <div className="session-strip__value">{showTime}</div>
            <div className="session-strip__label">Focused today</div>
          </div>

          <div>
            <div className="session-strip__value">
              {dayjs().add(sessionLength, "second").format("HH:mm")}
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
      </>
    );
}

import dayjs from "dayjs";

export default function TimerDial({ radius, circumfrence, strokeDashoffset, timeLeft, rounds }) {
  return (
    <>
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

          <span className="dial__round">Round {Math.min(rounds + 1, 4)} of 4</span>
        </div>
      </div>
    </>
  );
}

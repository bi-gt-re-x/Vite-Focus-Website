import dayjs from "dayjs";

export default function Topbar({ title }) {
  const currentTime = dayjs().format('HH:mm:ss');

  return (
    <header className="topbar" key={title}>
      <h1 className="topbar__title">{title}</h1>
      <div className="topbar__actions">
        <div className="topbar__mini-timer" data-running="true">
          <span className="topbar__mini-dot"></span>
          <span>{currentTime}</span>
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
  );
}

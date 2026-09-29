export default function ModeSwitch({buttons, selectedIndex, workOn, setSelectedIndex}) {
  return (
    <>
      <div className="mode-switch" role="tablist" aria-label="Timer mode">
        {buttons.map((button, index) => (
          <button
            key={index}
            className={`mode-switch__btn ${selectedIndex === index ? "mode-switch__btn--active" : ""}`}
            role="tab"
            aria-selected={selectedIndex === index}
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
    </>
  );
}

import { useState, useEffect } from "react"

export default function SessionSummary({ goodEasy, hard, wrong, percentage }) {
  return (        
    <section className="session-complete">
      <span style={{ fontSize: "var(--text-3xl)" }}>
        🎉
      </span>

      <p className="eyebrow">Session complete</p>

      <p className="session-complete__score">{percentage * 4}%</p>

      <p className="muted">
        {25 - wrong} of 25 cards answered correctly in this session.
      </p>

      <div className="session-complete__breakdown">
        <div>
          <div
            className="session-strip__value"
            style={{ color: "var(--success)" }}
          >
            {goodEasy}
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
            {hard}
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
            {wrong}
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
          Review the {wrong} you missed
        </button>

        <a className="btn btn--secondary" href="/timer">
          Start a break
        </a>
      </div>
    </section>
  )
}

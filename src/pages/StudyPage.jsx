import { useState, useEffect } from "react";
import SideBar from "../components/SideBar.jsx";
import FLASHCARDS from "../data/flashcards.js";

export default function StudyPage() {
  const [subjectCards, setCards] = useState(() => 
    FLASHCARDS.filter((card) => card.deckId === "javascript")
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setFlipped] = useState(false);
  const currCard = subjectCards[currentIndex] || null;

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === " ") {
        setFlipped(!isFlipped);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };

  }, []);

  return (
    <div className="app" data-collapsed="false">
    {<SideBar />}

    <div className="app__main">
      <header className="topbar">
        <h1 className="topbar__title">Study</h1>

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

      <main className="content content--focus study-page">
        <div className="study-header">
          <div className="study-header__row">
            <div className="row">
              <a className="btn btn--ghost btn--sm" href="/decks">
                ← Decks
              </a>

              <span className="badge badge--accent">
                ⚛️ React Essentials
              </span>
            </div>

            <span className="study-counter">7 / 25</span>
          </div>

          <div className="progress">
            <div
              className="progress__bar"
              style={{ width: "28%" }}
            ></div>
          </div>
        </div>

        <div className="card-stack">
          <div
            className="flashcard"
            tabIndex={0}
            role="button"
            aria-label="Flashcard, press Enter to flip"
          >
            <div className="flashcard__inner">
              <div className="flashcard__face flashcard__face--front">
                {currCard.tags.map((tag) => (
                  <span className="flashcard__tag">{tag}</span>
                ))}

                <span className="flashcard__difficulty badge badge--medium" style={{ textTransform: 'capitalize', 
                  color: currCard.difficulty === 'easy' ? 'green'
                       : currCard.difficulty === 'medium' ? 'yellow'
                       : currCard.difficulty === 'hard' ? 'red'
                       : 'black'
                }}>
                  {currCard.difficulty}
                </span>

                <p className="flashcard__question">
                  {currCard.question}
                </p>

                <span className="flashcard__hint">
                  <span className="kbd">Space</span> to flip
                </span>
              </div>

              <div className="flashcard__face flashcard__face--back">
                <span className="flashcard__tag">Answer</span>

                <span className="flashcard__difficulty badge badge--medium">
                  Medium
                </span>

                <p className="flashcard__answer">
                  {currCard.answer}
                </p>

                <span className="flashcard__hint">
                  How well did you know it?
                </span>
              </div>
            </div>

          </div>
        </div>

        <div
          className="card"
          style={{ width: "min(640px, 100%)" }}
        >
          <p
            className="eyebrow"
            style={{ marginBottom: "var(--sp-3)" }}
          >
            Card with a code snippet — back face
          </p>

          <pre className="flashcard__code">
          </pre>
        </div>

        <div className="grade-row">
          <button className="grade-btn grade-btn--again">
            Again
            <small>&lt; 1 min</small>
          </button>

          <button className="grade-btn grade-btn--hard">
            Hard
            <small>6 min</small>
          </button>

          <button className="grade-btn grade-btn--good">
            Good
            <small>1 day</small>
          </button>

          <button className="grade-btn grade-btn--easy">
            Easy
            <small>4 days</small>
          </button>
        </div>

        <div className="study-nav">
          <button
            className="btn btn--secondary btn--icon"
            aria-label="Previous card"
          >
            ←
          </button>

          <button className="btn btn--secondary">
            Flip card
          </button>

          <button
            className="btn btn--secondary btn--icon"
            aria-label="Next card"
          >
            →
          </button>

          <button className="btn btn--ghost btn--sm">
            Shuffle
          </button>
        </div>

        <p className="keyboard-hints">
          <span>
            <span className="kbd">Space</span> flip
          </span>

          <span>
            <span className="kbd">1</span>–<span className="kbd">4</span>{" "}
            grade
          </span>

          <span>
            <span className="kbd">←</span>
            <span className="kbd">→</span> navigate
          </span>

          <span>
            <span className="kbd">Esc</span> exit session
          </span>
        </p>

        <h3
          className="section-title"
          style={{ marginTop: "var(--sp-7)" }}
        >
          Session complete screen
        </h3>

        <section className="session-complete">
          <span style={{ fontSize: "var(--text-3xl)" }}>
            🎉
          </span>

          <p className="eyebrow">Session complete</p>

          <p className="session-complete__score">84%</p>

          <p className="muted">
            21 of 25 cards answered correctly in 6 minutes.
          </p>

          <div className="session-complete__breakdown">
            <div>
              <div
                className="session-strip__value"
                style={{ color: "var(--success)" }}
              >
                18
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
                3
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
                4
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
              Review the 4 you missed
            </button>

            <a className="btn btn--secondary" href="/timer">
              Start a break
            </a>
          </div>
        </section>
      </main>
    </div>
  </div>
  );
}
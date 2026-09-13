import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import SideBar from "../components/SideBar.jsx";
import GradeButtons from "../components/study/GradeButtons.jsx";
import SessionSummary from "../components/study/SessionSummary.jsx";
import Flashcard from "../components/study/Flashcard.jsx";
import FLASHCARDS from "../data/flashcards.js";

export default function StudyPage({ activeLink, deckMastery, deckName }) {
  const { deckId } = useParams();
  const [searchParams] = useSearchParams();

  const emoji = searchParams.get("emoji");
  const name = searchParams.get("name");

  const [subjectCards, setCards] = useState(() =>
    FLASHCARDS.filter((card) => card.deckId === deckId),
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setFlipped] = useState(false);
  const currCard = subjectCards[currentIndex] || null;
  const [isRated, setisRated] = useState(false);

  let index = 0;

  let goodEasy = 0;
  let hard = 0;
  let wrong = 0;
  let percentage = 0;

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === " ") {
        event.preventDefault();
        setFlipped((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  if (deckName === "javascript") {
    index = 0;
  }
  if (deckName === "react") {
    index = 1;
  }
  if (deckName === "css") {
    index = 2;
  }
  if (deckName === "webapi") {
    index = 3;
  }
  if (deckName === "cs") {
    index = 4;
  }
  if (deckName === "git") {
    index = 5;
  }

  return (
    <div className="app" data-collapsed="false">
      {<SideBar activeStudyLink={activeLink} />}

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
                  {emoji} {name}
                </span>
              </div>

              <span className="study-counter">{currentIndex + 1} / 25</span>
            </div>

            <div className="progress">
              <div
                className="progress__bar"
                style={{ width: `${((currentIndex + 1) / 25) * 100}%` }}
              ></div>
            </div>
          </div>

          {currentIndex + 1 !== 25 ? (
            <>
              <Flashcard
                currCard={currCard}
                isFlipped={isFlipped}
                setFlipped={setFlipped}
              />
              <GradeButtons
                isRated={isRated}
                setisRated={setisRated}
                percentage={percentage}
                goodEasy={goodEasy}
                wrong={wrong}
                hard={hard}
                deckMastery={deckMastery}
                index={index}
              />
              <div className="study-nav">
                <button
                  className="btn btn--secondary btn--icon"
                  aria-label="Previous card"
                  onClick={() => {
                    if (isFlipped === true) {
                      setFlipped(false);
                    }
                    if (currentIndex != 0) {
                      setCurrentIndex(currentIndex - 1);
                    }
                  }}
                >
                  ←
                </button>

                <button
                  className="btn btn--secondary"
                  onClick={() => {
                    setFlipped((prev) => !prev);
                  }}
                >
                  Flip card
                </button>

                <button
                  className="btn btn--secondary btn--icon"
                  aria-label="Next card"
                  onClick={() => {
                    setisRated(false);
                    if (isFlipped === true) {
                      setFlipped(false);
                    }
                    if (currentIndex != 25) {
                      setCurrentIndex(currentIndex + 1);
                    }
                  }}
                >
                  →
                </button>

                <button className="btn btn--ghost btn--sm">Shuffle</button>
              </div>
            </>
          ) : (
            <SessionSummary
              goodEasy={goodEasy}
              hard={hard}
              wrong={wrong}
              percentage={percentage}
            />
          )}
        </main>
      </div>
    </div>
  );
}

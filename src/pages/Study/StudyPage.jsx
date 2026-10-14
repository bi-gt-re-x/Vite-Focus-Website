import { useState, useEffect } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import SideBar from "../../components/layout/SideBar.jsx";
import GradeButtons from "./GradeButtons.jsx";
import SessionSummary from "./SessionSummary.jsx";
import Topbar from "../../components/layout/Topbar.jsx";
import Flashcard from "./Flashcard.jsx";
import FLASHCARDS from "../../data/flashcards.js";
import { shuffle } from "../../utils/shuffle.js";
import { studyFlipShortcut } from "../../hooks/useKeyboardShortcuts.js";

export default function StudyPage({ activeLink, deckMastery, deckName, cardsReviewed, setCardsReviewed, setDue }) {
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

  const [goodEasy, setGoodEasy] = useState(0);
  const [hard, setHard] = useState(0);
  const [wrong, setWrong] = useState(0);

  studyFlipShortcut({setFlipped})

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
        {<Topbar title="Study" />}

        <main className="content content--focus study-page">
          <div className="study-header">
            <div className="study-header__row">
              <div className="row">
                <Link className="btn btn--ghost btn--sm" to="/decks">
                  ← Decks
                </Link>

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
                setGoodEasy={setGoodEasy}
                setWrong={setWrong}
                setHard={setHard}
                deckMastery={deckMastery}
                index={index}
                cardsReviewed={cardsReviewed}
                setCardsReviewed={setCardsReviewed}
                setDue={setDue}
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

                <button className="btn btn--ghost btn--sm" onClick={() => {
                    setCards(shuffle(subjectCards));
                    setCurrentIndex(0);
                    setFlipped(false);
                  }}
                >Shuffle</button>
              </div>
            </>
          ) : (
            <SessionSummary
              goodEasy={goodEasy}
              hard={hard}
              wrong={wrong}
              percentage={goodEasy}
            />
          )}
        </main>
      </div>
    </div>
  );
}

import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import SideBar from "../components/SideBar.jsx";
import FLASHCARDS from "../data/flashcards.js";

export default function StudyPage({ activeLink, deckMastery, deckName }) {
  const { deckId } = useParams();
  const [searchParams] = useSearchParams();

  const emoji = searchParams.get("emoji");
  const name = searchParams.get("name");

  const [subjectCards, setCards] = useState(() => 
    FLASHCARDS.filter((card) => card.deckId === deckId)
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setFlipped] = useState(false);
  const currCard = subjectCards[currentIndex] || null;
  const [isRated, setisRated] = useState(false);
  
  let index = 0;
  
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === ' ') { 
        event.preventDefault(); 
        setFlipped((prev) => !prev); 
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };

  }, []);

  if (deckName === 'javascript') {index = 0};
  if (deckName === 'react') {index = 1};
  if (deckName === 'css') {index = 2};
  if (deckName === 'webapi') {index = 3};
  if (deckName === 'cs') {index = 4};
  if (deckName === 'git') {index = 5};


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

        <div className="card-stack"> 
          <div 
            className="flashcard" 
            tabIndex={0} 
            role="button" 
            aria-label="Flashcard, press Enter to flip" 
            onClick={() => setFlipped((prev) => !prev)}
          > 
            <div className={`flashcard__inner ${isFlipped ? "flashcard__inner--flipped" : ""}`}> 

              <div className="flashcard__face flashcard__face--front"> 
                {currCard.tags?.map((tag, idx) => ( 
                  <span key={idx} className="flashcard__tag">{tag}</span> 
                ))} 
                <span className="flashcard__difficulty badge badge--medium" style={{ textTransform: 'capitalize', color: currCard.difficulty === 'easy' ? 'green' : currCard.difficulty === 'medium' ? 'yellow' : currCard.difficulty === 'hard' ? 'red' : 'black' }}> 
                  {currCard.difficulty} 
                </span> 
                <p className="flashcard__question"> {currCard.question} </p> 
                <span className="flashcard__hint"> <span className="kbd">Space</span> to flip </span> 
              </div> 

              <div className="flashcard__face flashcard__face--back"> 
                <span className="flashcard__tag">Answer</span> 
                <span className="flashcard__difficulty badge badge--medium"> Medium </span> 
                <p className="flashcard__answer"> {currCard.answer} </p> 
                <span className="flashcard__hint"> How well did you know it? </span> 
              </div> 

            </div> 
          </div> 
        </div>

        <div className="grade-row">
          <button className="grade-btn grade-btn--again" style={{ opacity: isRated ? 0.6 : 1 }} onClick={() => {
            if (isRated === false) {setisRated(true);}
          }}>
            Wrong
          </button>

          <button className="grade-btn grade-btn--hard" style={{ opacity: isRated ? 0.6 : 1 }} onClick={() => {
            if (isRated === false) {
              deckMastery[index] += 1;
              setisRated(true);
            }
          }}>
            Hard
          </button>

          <button className="grade-btn grade-btn--good" style={{ opacity: isRated ? 0.6 : 1 }} onClick={() => {
            if (isRated === false) {
              deckMastery[index] += 1;
              setisRated(true);
            }
          }}>
            Good
          </button>

          <button className="grade-btn grade-btn--easy" style={{ opacity: isRated ? 0.6 : 1 }} onClick={() => {
            if (isRated === false) {
              deckMastery[index] += 1;
              setisRated(true);
            } 
          }}>
            Easy
          </button>
        </div>

        <div className="study-nav">
          <button
            className="btn btn--secondary btn--icon"
            aria-label="Previous card"
            onClick={() => {
              if (isFlipped === true) {setFlipped(false)};
              if (currentIndex != 0) {setCurrentIndex(currentIndex - 1)};
            }}
          >
            ←
          </button>

          <button className="btn btn--secondary" onClick={ () => {
            setFlipped((prev) => !prev); 
          }}>
            Flip card
          </button>

          <button
            className="btn btn--secondary btn--icon"
            aria-label="Next card"
            onClick={() => {
              setisRated(false);
              if (isFlipped === true) {setFlipped(false)};
              if (currentIndex != 25) {setCurrentIndex(currentIndex + 1)};
            }}
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
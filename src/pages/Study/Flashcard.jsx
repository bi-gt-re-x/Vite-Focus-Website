export default function Flashcard({ currCard, isFlipped, setFlipped }) {
  return (
    <div className="card-stack">
      <div
        className="flashcard"
        tabIndex={0}
        role="button"
        aria-label="Flashcard, press Enter to flip"
        onClick={() => setFlipped((prev) => !prev)}
      >
        <div
          className={`flashcard__inner ${isFlipped ? "flashcard__inner--flipped" : ""}`}
        >
          <div className="flashcard__face flashcard__face--front">
            <span className="flashcard__tag">{currCard.tags?.join(" · ")}</span>
            <span
              className="flashcard__difficulty badge badge--medium"
              style={{
                textTransform: "capitalize",
                color:
                  currCard.difficulty === "easy"
                    ? "green"
                    : currCard.difficulty === "medium"
                      ? "yellow"
                      : currCard.difficulty === "hard"
                        ? "red"
                        : "black",
              }}
            >
              {currCard.difficulty}
            </span>
            <p className="flashcard__question"> {currCard.question} </p>
            <span className="flashcard__hint">
              {" "}
              <span className="kbd">Space</span> to flip{" "}
            </span>
          </div>

          <div className="flashcard__face flashcard__face--back">
            <span className="flashcard__tag">Answer</span>
            <span className="flashcard__difficulty badge badge--medium">
              {" "}
              Medium{" "}
            </span>
            <p className="flashcard__answer"> {currCard.answer} </p>
            <span className="flashcard__hint"> How well did you know it? </span>
          </div>
        </div>
      </div>
    </div>
  );
}

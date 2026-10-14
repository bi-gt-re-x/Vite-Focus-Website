export default function GradeButtons({
  isRated,
  setisRated,
  setHard,
  setWrong,
  setGoodEasy,
  deckMastery,
  index,
  cardsReviewed,
  setCardsReviwed,
}) {
  return (
    <div className="grade-row">
      <button
        className="grade-btn grade-btn--again"
        style={{ opacity: isRated ? 0.6 : 1 }}
        onClick={() => {
          if (isRated === false) {
            setWrong((prev) => prev + 1);
            setisRated(true);
            setCardsReviwed(cardsReviewed + 1);
          }
        }}
      >
        Wrong
      </button>

      <button
        className="grade-btn grade-btn--hard"
        style={{ opacity: isRated ? 0.6 : 1 }}
        onClick={() => {
          if (isRated === false) {
            setHard((prev) => prev + 1);
            deckMastery[index] += 1;
            setisRated(true);
            setCardsReviwed(cardsReviewed + 1);
            setDue(25 - cardsReviewed);
          }
        }}
      >
        Hard
      </button>

      <button
        className="grade-btn grade-btn--good"
        style={{ opacity: isRated ? 0.6 : 1 }}
        onClick={() => {
          if (isRated === false) {
            setGoodEasy((prev) => prev + 1);
            deckMastery[index] += 1;
            setisRated(true);
            setCardsReviwed(cardsReviewed + 1);
            setDue(25 - cardsReviewed);
          }
        }}
      >
        Good
      </button>

      <button
        className="grade-btn grade-btn--easy"
        style={{ opacity: isRated ? 0.6 : 1 }}
        onClick={() => {
          if (isRated === false) {
            setGoodEasy((prev) => prev + 1);
            deckMastery[index] += 1;
            setisRated(true);
            setCardsReviwed(cardsReviewed + 1);
            setDue(25 - cardsReviewed);
          }
        }}
      >
        Easy
      </button>
    </div>
  );
}

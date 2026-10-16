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
  setAcc,
  accuracy
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
            if (accuracy > 1) {
              setAcc(accuracy - 1)
            }
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
            if (accuracy > 0.5) {
              setAcc(accuracy - 0.5)
            }
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
            if (accuracy <= 99) {
              setAcc(accuracy + 1)
            }
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
            if (accuracy <= 99) {
              setAcc(accuracy + 1)
            }
          }
        }}
      >
        Easy
      </button>
    </div>
  );
}

export default function GradeButtons({ isRated, setisRated, setHard, setWrong, setGoodEasy, deckMastery, index }) {
  return (
    <div className="grade-row">
      <button
        className="grade-btn grade-btn--again"
        style={{ opacity: isRated ? 0.6 : 1 }}
        onClick={() => {
          if (isRated === false) {
            setWrong((prev) => prev + 1);
            setisRated(true);
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
          }
        }}
      >
        Easy
      </button>
    </div>
  );
}

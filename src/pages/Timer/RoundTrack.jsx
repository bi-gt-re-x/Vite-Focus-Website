export default function RoundTrack({ rounds }) {
  return (
    <>
      <div className="round-track" aria-label="Rounds completed">
        {(() => {
          const dots = [];
          for (let i = 0; i < 4; i++) {
            if (i < rounds) {
              dots.push(<span key={i} className="round-dot--done"></span>);
            } else if (i === rounds) {
              dots.push(<span key={i} className="round-dot--current"></span>);
            } else {
              dots.push(<span key={i} className="round-dot"></span>);
            }
          }
          return dots;
        })()}
      </div>
    </>
  );
}

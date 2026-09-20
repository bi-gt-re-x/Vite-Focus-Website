export function ListView({ deckMastery, listLoopIndex, DECKS }) {
  return (
    <section className="deck-list">
      <div className="deck-row deck-row__head">
        <span></span>
        <span>Deck</span>
        <span>Cards</span>
        <span>Mastery</span>
        <span>Due</span>
      </div>
      {DECKS.map((deck) => {
        listLoopIndex += 1;
        let dueItems = 0;

        if (deckMastery[listLoopIndex] > 0) {
          dueItems = 25 - deckMastery[listLoopIndex] / 4;
        } else {
          dueItems = 0;
        }

        return (
          <div className="deck-row" key={deck.id}>
            <span
              className="deck-card__emoji"
              style={{ "--deck-color": deck.color }}
            >
              {deck.emoji}
            </span>
            <span>
              <strong>{deck.name}</strong>
              <br />
              <span className="faint" style={{ fontSize: "var(--text-xs)" }}>
                Last studied 2h ago
              </span>
            </span>
            <span className="mono">25</span>
            <span className="progress progress--sm">
              <span
                className="progress__bar"
                style={{
                  width: `${deckMastery[listLoopIndex] * 4}%`,
                  display: "block",
                  height: "100%",
                }}
              ></span>
            </span>
            <span className="badge badge--accent">{dueItems} due</span>
          </div>
        );
      })}
    </section>
  );
}

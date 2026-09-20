import { Link } from "react-router-dom";

export function DeckView({ deckMastery, loopIndex, DECKS }) {
  return (
    <section className="deck-grid">
      {DECKS.map((deck) => {
        loopIndex += 1;

        return (
          <article
            className="deck-card"
            style={{ "--deck-color": deck.color }}
            key={deck.id}
          >
            <div className="deck-card__top">
              <div className="deck-card__emoji">{deck.emoji}</div>
              <div>
                <h3 className="deck-card__name">{deck.name}</h3>
                <p className="deck-card__meta">
                  <span>25 cards</span> · <span>4 due</span>
                </p>
              </div>
            </div>
            <p className="deck-card__desc">{deck.description}</p>
            <div className="deck-card__progress">
              <div className="row-between">
                <span className="faint" style={{ fontSize: "var(--text-xs)" }}>
                  Mastery
                </span>
                <span
                  className="mono"
                  style={{ fontSize: "var(--text-xs)" }}
                >{`${deckMastery[loopIndex]}`}</span>
              </div>
              <div className="progress">
                <div
                  className="progress__bar"
                  style={{ width: `${deckMastery[loopIndex] * 4}%` }}
                ></div>
              </div>
            </div>
            <div className="deck-card__actions">
              <Link
                className="btn btn--primary btn--sm grow"
                to={`/study/${encodeURIComponent(deck.id)}?emoji=${encodeURIComponent(deck.emoji)}&name=${encodeURIComponent(deck.name)}`}
                onClick={() => {
                  setActiveLink(
                    `/study/${encodeURIComponent(deck.id)}?emoji=${encodeURIComponent(deck.emoji)}&name=${encodeURIComponent(deck.name)}`,
                  );
                  setDeckId(deck.id);
                }}
              >
                Study
              </Link>
              <button className="btn btn--secondary btn--sm">Browse</button>
            </div>
          </article>
        );
      })}
    </section>
  );
}

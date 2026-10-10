import { Link } from "react-router-dom";

export function ActivityGrid() {
  return (
    <>
      <section className="home-grid">
        <article className="card">
          <div className="card__header">
            <h3 className="card__title">Jump back in</h3>
            <Link className="btn btn--ghost btn--sm" to="/decks">
              All decks
            </Link>
          </div>

          <div className="deck-shortcut-list">
            <Link className="deck-shortcut" to="/study">
              <span className="deck-shortcut__swatch">⚛️</span>
              <span className="deck-shortcut__meta">
                <span className="deck-shortcut__name">React Essentials</span>
                <span className="deck-shortcut__sub">8 due · 25 cards</span>
              </span>
              <span className="badge badge--accent">Due</span>
            </Link>

            <Link className="deck-shortcut" to="/study">
              <span className="deck-shortcut__swatch">🟨</span>
              <span className="deck-shortcut__meta">
                <span className="deck-shortcut__name">
                  JavaScript Fundamentals
                </span>
                <span className="deck-shortcut__sub">4 due · 25 cards</span>
              </span>
              <span className="badge badge--accent">Due</span>
            </Link>

            <Link className="deck-shortcut" to="/study">
              <span className="deck-shortcut__swatch">🎨</span>
              <span className="deck-shortcut__meta">
                <span className="deck-shortcut__name">CSS & Layout</span>
                <span className="deck-shortcut__sub">Next review tomorrow</span>
              </span>
              <span className="badge">Rested</span>
            </Link>

            <Link className="deck-shortcut" to="/study">
              <span className="deck-shortcut__swatch">🧠</span>
              <span className="deck-shortcut__meta">
                <span className="deck-shortcut__name">CS Foundations</span>
                <span className="deck-shortcut__sub">
                  Not started · 25 cards
                </span>
              </span>
              <span className="badge">New</span>
            </Link>
          </div>
        </article>

        <article className="card">
          <div className="card__header">
            <h3 className="card__title">Recent activity</h3>
          </div>

          <div className="activity-list">
            <div className="activity-item">
              <span className="activity-item__dot"></span>
              Finished a 25 min focus block
              <span className="activity-item__time">14:20</span>
            </div>

            <div className="activity-item">
              <span className="activity-item__dot"></span>
              Reviewed 20 React cards
              <span className="activity-item__time">13:44</span>
            </div>

            <div className="activity-item">
              <span className="activity-item__dot"></span>
              Took a long break
              <span className="activity-item__time">13:10</span>
            </div>

            <div className="activity-item">
              <span className="activity-item__dot"></span>
              Finished a 25 min focus block
              <span className="activity-item__time">12:35</span>
            </div>

            <div className="activity-item">
              <span className="activity-item__dot"></span>
              Added deck “CS Foundations”
              <span className="activity-item__time">11:02</span>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}

import { DECKS } from "../data/decks.js";
import { Link } from "react-router-dom";
import SideBar from "../components/layout/SideBar.jsx";
import Topbar from "../components/layout/Topbar.jsx";
import { DeckView } from "../components/decks/DeckView.jsx";
import { ListView } from "../components/decks/ListView.jsx";
import { SearchState } from "../components/decks/SearchState.jsx";

export default function DecksPage({
  setActiveLink,
  activeLink,
  deckMastery,
  setDeckId,
}) {
  let loopIndex = -1;
  let listLoopIndex = -1;
  const search = false;

  return (
    <div className="app" data-collapsed="false">
      {<SideBar activeStudyLink={activeLink} />}

      <div className="app__main">
        {<Topbar title="Decks" />}
        <main className="content">
          <div className="page-header">
            <div className="page-header__row">
              <div>
                <p className="eyebrow">Library</p>
                <h2 className="page-title">Decks</h2>
              </div>
              <button className="btn btn--primary">+ New deck</button>
            </div>
          </div>

          <div className="deck-toolbar">
            <label className="search">
              <svg
                className="search__icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" />
              </svg>
              <input
                className="input"
                type="search"
                placeholder="Search decks and cards…"
              />
            </label>
            <div className="tabs">
              <button className="tab tab--active">All</button>
              <button className="tab">Due</button>
              <button className="tab">In progress</button>
            </div>
            <select className="select" style={{ width: "auto" }}>
              <option>Recently studied</option>
              <option>Name A–Z</option>
              <option>Most cards</option>
              <option>Lowest accuracy</option>
            </select>
          </div>

          {search === false ? (
            <>
              <DeckView
                deckMastery={deckMastery}
                DECKS={DECKS}
                loopIndex={loopIndex}
              />

              <h3
                className="section-title"
                style={{ marginTop: "var(--sp-6)" }}
              >
                List view
              </h3>
              <ListView
                DECKS={DECKS}
                deckMastery={deckMastery}
                listLoopIndex={listLoopIndex}
              />
            </>
          ) : (
            <>
              <SearchState />
            </>
          )}
        </main>
      </div>
    </div>
  );
}

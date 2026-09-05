import { DECKS } from "../data/decks.js";

export default function DecksPage() {
  return (
      <div className="app" data-collapsed="false">
        <aside className="sidebar">
          <div className="sidebar__brand"><div className="sidebar__logo">FD</div><span>FocusDeck</span></div>
          <nav className="sidebar__nav">
            <a className="nav-link" href="home" data-page="home"><svg className="nav-link__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/></svg><span>Home</span></a>
            <a className="nav-link" href="timer" data-page="timer"><svg className="nav-link__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="8"/><path d="M12 8v4l2.5 2.5"/></svg><span>Timer</span></a>
            <a className="nav-link nav-link--active" href="decks.html" data-page="decks"><svg className="nav-link__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="6" rx="2"/><rect x="3" y="14" width="18" height="6" rx="2"/></svg><span>Decks</span><span className="nav-link__badge">6</span></a>
            <a className="nav-link" href="study" data-page="study"><svg className="nav-link__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M8 10h8M8 14h5"/></svg><span>Study</span></a>
            <a className="nav-link" href="stats" data-page="stats"><svg className="nav-link__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 20V10M12 20V4M19 20v-7"/></svg><span>Stats</span></a>
            <a className="nav-link" href="settings" data-page="settings"><svg className="nav-link__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 7h10M18 7h2M4 17h4M12 17h8"/><circle cx="16" cy="7" r="2"/><circle cx="10" cy="17" r="2"/></svg><span>Settings</span></a>
          </nav>
          <div className="sidebar__footer">
            <div className="sidebar__streak"><span>🔥</span><div><strong>7</strong> <span className="faint">day streak</span></div></div>
          </div>
        </aside>
        <div className="app__main">
          <header className="topbar">
            <h1 className="topbar__title">Decks</h1>
            <div className="topbar__actions">
              <div className="topbar__mini-timer" data-running="true"><span className="topbar__mini-dot"></span><span>18:42</span></div>
              <button className="btn btn--ghost btn--icon tooltip" data-tip="Toggle theme" aria-label="Toggle theme">🌙</button>
            </div>
          </header>
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
                <svg className="search__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
                <input className="input" type="search" placeholder="Search decks and cards…" />
              </label>
              <div className="tabs">
                <button className="tab tab--active">All</button>
                <button className="tab">Due</button>
                <button className="tab">In progress</button>
              </div>
              <select className="select" style={{ width: 'auto' }}>
                <option>Recently studied</option>
                <option>Name A–Z</option>
                <option>Most cards</option>
                <option>Lowest accuracy</option>
              </select>
            </div>

            <div className="chip-row">
              <button className="chip chip--active">All tags</button>
              <button className="chip">hooks</button>
              <button className="chip">async</button>
              <button className="chip">layout</button>
              <button className="chip">complexity</button>
              <button className="chip">workflow</button>
            </div>

            <section className="deck-grid">
              {DECKS.map((deck) => (
                <article className="deck-card" style={{ '--deck-color': deck.color }}>
                  <div className="deck-card__top">
                    <div className="deck-card__emoji">{deck.emoji}</div>
                    <div>
                      <h3 className="deck-card__name">{deck.name}</h3>
                      <p className="deck-card__meta"><span>25 cards</span> · <span>4 due</span></p>
                    </div>
                  </div>
                  <p className="deck-card__desc">{deck.description}</p>
                  <div className="deck-card__progress">
                    <div className="row-between"><span className="faint" style={{ fontSize: 'var(--text-xs)' }}>Mastery</span><span className="mono" style={{ fontSize: 'var(--text-xs)' }}>72%</span></div>
                    <div className="progress"><div className="progress__bar" style={{ width: '72%' }}></div></div>
                  </div>
                  <div className="deck-card__actions">
                    <a className="btn btn--primary btn--sm grow" href="/study">Study</a>
                    <button className="btn btn--secondary btn--sm">Browse</button>
                  </div>
                </article>
              ))}
            </section>

            <h3 className="section-title" style={{ marginTop: 'var(--sp-6)' }}>List view (alternative)</h3>
            <section className="deck-list">
              <div className="deck-row deck-row__head">
                <span></span><span>Deck</span><span>Cards</span><span>Mastery</span><span>Due</span>
              </div>
              {DECKS.map((deck) => (
                <div className="deck-row">
                  <span className="deck-card__emoji" style={{ '--deck-color': deck.color }}>⚛️</span>
                  <span><strong>{deck.name}</strong><br /><span className="faint" style={{ fontSize: 'var(--text-xs)' }}>Last studied 2h ago</span></span>
                  <span className="mono">25</span>
                  <span className="progress progress--sm"><span className="progress__bar" style={{ width: '54%', display: 'block', height: '100%' }}></span></span>
                  <span className="badge badge--accent">8 due</span>
                </div>
              ))}
            </section>

            <h3 className="section-title" style={{ marginTop: 'var(--sp-6)' }}>Empty state (when a search returns nothing)</h3>
            <div className="card">
              <div className="empty-state">
                <div className="empty-state__icon">🔍</div>
                <p className="empty-state__title">No decks match “graphql”</p>
                <p>Try a different search, or create a deck for it.</p>
                <button className="btn btn--secondary">Clear search</button>
              </div>
            </div>
          </main>
        </div>
      </div>
  );
}

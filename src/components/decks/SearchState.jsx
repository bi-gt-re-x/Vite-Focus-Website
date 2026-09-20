export function SearchState() {
  return (
    <div className="card">
      <div className="empty-state">
        <div className="empty-state__icon">🔍</div>
        <p className="empty-state__title">No decks match “graphql”</p>
        <p>Try a different search, or create a deck for it.</p>
        <button className="btn btn--secondary">Clear search</button>
      </div>
    </div>
  );
}

/**
 * useStudySession(deckId)
 * Builds and manages the queue of cards for one review session.
 *
 * Returns { queue, current, index, flipped, flip, grade, results, isComplete, restart }
 *
 * BUILD:
 *  - Start from cardsByDeck(deckId).
 *  - Filter by the difficulty filter, then sort due cards first (dueAt <= now).
 *  - Shuffle if settings.shuffle, then slice to settings.cardsPerSession.
 *  - Build the queue ONCE per session (useState lazy init or useMemo with a
 *    session key) — rebuilding it on every render reshuffles mid-session.
 *  - grade(g) records { cardId, grade: g }, calls gradeCard() on the context,
 *    and advances.
 */

export function useStudySession() {
  // TODO
}

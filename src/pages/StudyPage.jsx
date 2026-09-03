/**
 * StudyPage — a review session.
 * Markup: mockups/study.html
 *
 * BUILD:
 *  - Read :deckId from useParams, build the queue with useStudySession().
 *  - Local state: index, flipped, results[].
 *  - Grading records the result, advances the index, and resets flipped.
 *  - Keyboard: Space flip, 1-4 grade (only once flipped), arrows navigate,
 *    Escape leaves the session.
 *  - When index === queue.length render <SessionSummary /> instead of the card.
 *  - Guard against an unknown deckId — redirect to /decks.
 */

export default function StudyPage() {
  return null; // TODO
}

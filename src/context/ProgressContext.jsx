/**
 * ProgressContext — everything the user has earned.
 *
 * State shape:
 *   {
 *     sessions: [{ id, startedAt, endedAt, mode, minutes, task }],
 *     reviews:  { [cardId]: { seen, correct, lastGrade, ease, interval, dueAt } },
 *     streak:   { current, longest, lastStudyDate }
 *   }
 *
 * BUILD:
 *  - Back it with useLocalStorage('focusdeck:progress', initialProgress).
 *  - Actions: logSession(session), gradeCard(cardId, grade), resetProgress().
 *  - gradeCard delegates the interval maths to utils/scheduler.js.
 *  - Recompute the streak on mount: if lastStudyDate is older than yesterday,
 *    current resets to 0.
 */

export function ProgressProvider({ children }) {
  return children; // TODO
}

export function useProgress() {
  // TODO
}

/**
 * Spaced repetition — a trimmed SM-2. See card cs-15.
 *
 * review(state, grade) where state = { ease, interval, reps } and grade is 0-3
 * (Again, Hard, Good, Easy). Returns the next { ease, interval, reps, dueAt }.
 *
 * RULES:
 *   grade 0 (Again): reps = 0, interval = 0 (due again this session),
 *                    ease = max(1.3, ease - 0.2)
 *   grade 1 (Hard):  interval = max(1, interval * 1.2), ease -= 0.15
 *   grade 2 (Good):  reps 0 -> 1 day, reps 1 -> 3 days,
 *                    otherwise interval * ease
 *   grade 3 (Easy):  same as Good but * 1.3, and ease += 0.15
 *   Clamp ease to [1.3, 2.8]. dueAt = Date.now() + interval * 86400000.
 *
 * nextIntervals(state) returns the four labels for the grade buttons
 * ("< 1 min", "6 min", "1 day", "4 days") by running review() for each grade.
 */

export function review() {
  // TODO
}

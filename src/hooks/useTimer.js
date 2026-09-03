/**
 * useTimer — the Pomodoro engine. The most interesting file in the project.
 *
 * Returns { status, mode, secondsLeft, round, start, pause, reset, skip }
 *   status: 'idle' | 'running' | 'paused'
 *   mode:   'focus' | 'short' | 'long'
 *
 * DO NOT count down by decrementing a number every tick — setInterval drifts
 * and is throttled in background tabs, so the clock loses seconds.
 *
 * Instead:
 *   1. On start, store endsAt = Date.now() + secondsLeft * 1000 in a ref.
 *   2. Tick every 250ms and compute
 *        secondsLeft = Math.max(0, Math.round((endsAt - Date.now()) / 1000))
 *   3. On pause, store the remaining seconds and clear the interval.
 *   4. Clear the interval in the effect cleanup — always.
 *   5. Listen for 'visibilitychange' and recompute on return, so a backgrounded
 *      tab catches up instead of resuming where it froze.
 *
 * When secondsLeft hits 0: stop, call onComplete(mode), then advance —
 * focus -> short break, or long break after roundsBeforeLongBreak rounds.
 */

export function useTimer() {
  // TODO
}

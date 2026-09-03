/**
 * TimerPage — the Pomodoro screen.
 * Markup: mockups/timer.html
 *
 * BUILD:
 *  - Pull { status, mode, secondsLeft, round, start, pause, reset, skip }
 *    from the timer context (useTimer lives behind it).
 *  - Put data-mode={mode} on the <main> so --accent follows the phase.
 *  - Keyboard: Space toggle, R reset, S skip, F zen mode
 *    (useKeyboardShortcuts). Ignore keys while an input is focused.
 *  - "Finish at" = now + secondsLeft, formatted with formatTime().
 *  - On completion: play the chime, fire a notification if permitted,
 *    log the session with logSession(), then auto-advance if the
 *    autoStart settings say so.
 */

export default function TimerPage() {
  return null; // TODO
}

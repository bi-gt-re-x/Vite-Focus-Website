/**
 * TimerDial — the circular countdown.
 * Markup: mockups/timer.html (.dial block)
 *
 * Props: { secondsLeft, totalSeconds, mode, running, round, totalRounds }
 *
 * THE MATHS — r = 46 inside viewBox "0 0 100 100":
 *   const CIRCUMFERENCE = 2 * Math.PI * 46;            // ≈ 289.03
 *   const progress = secondsLeft / totalSeconds;       // 1 -> 0
 *   strokeDasharray  = CIRCUMFERENCE
 *   strokeDashoffset = CIRCUMFERENCE * (1 - progress)
 *
 * Set data-running={running} on .dial to switch the glow on.
 * Format the digits with formatClock() from utils/time.js.
 */

export default function TimerDial() {
  return null; // TODO
}

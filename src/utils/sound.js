/**
 * Completion chime, via the Web Audio API — no audio file needed.
 *
 * BUILD:
 *  - Create one AudioContext lazily, on the first user gesture (see card web-16:
 *    autoplay policy blocks it otherwise).
 *  - playChime(): an OscillatorNode into a GainNode, ramp the gain down over
 *    ~0.4s so it fades instead of clicking, then stop().
 *  - Two short tones a fifth apart sound like a real notification.
 *  - Respect settings.soundEnabled at the call site, not in here.
 */

export function playChime() {
  // TODO
}

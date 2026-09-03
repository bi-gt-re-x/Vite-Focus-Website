/**
 * useKeyboardShortcuts(map, options)
 *   map: { ' ': toggle, r: reset, s: skip, Escape: exit }
 *
 * BUILD:
 *  - One keydown listener on window, removed in the effect cleanup.
 *  - Bail out when the event target is an input, textarea, or contenteditable —
 *    otherwise typing a task name pauses the timer.
 *  - Keep the handler map in a ref so the listener does not need re-registering
 *    on every render (this is the stale-closure trap card rc-20 warns about).
 *  - preventDefault on Space or the page scrolls.
 */

export function useKeyboardShortcuts() {
  // TODO
}

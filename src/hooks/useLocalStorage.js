/**
 * useLocalStorage(key, initialValue)
 * Returns [value, setValue] with the same API as useState, persisted.
 *
 * BUILD:
 *  - Lazy initialiser: read and JSON.parse once, inside useState(() => ...).
 *  - Wrap BOTH the read and the write in try/catch — private mode and a full
 *    quota both throw, and the app must survive that.
 *  - Support the updater form: setValue(prev => next).
 */

export function useLocalStorage() {
  // TODO
}

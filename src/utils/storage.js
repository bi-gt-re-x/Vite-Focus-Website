/**
 * localStorage helpers that never throw.
 *
 * read(key, fallback)   parse JSON, return fallback on any failure
 * write(key, value)     stringify and set, swallow quota errors
 * remove(key)
 * exportAll()           -> a JSON string of every focusdeck:* key
 * importAll(json)       -> validate the shape before writing anything
 *
 * Namespace every key with the "focusdeck:" prefix.
 */

export function read() {
  // TODO
}

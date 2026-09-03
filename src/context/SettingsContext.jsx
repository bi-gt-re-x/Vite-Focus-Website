/**
 * SettingsContext — user preferences, persisted to localStorage.
 *
 * Value shape (seed from DEFAULT_TIMER + DEFAULT_THEME in data/themes.js):
 *   { theme, focus, shortBreak, longBreak, roundsBeforeLongBreak,
 *     autoStartBreaks, autoStartFocus, soundEnabled,
 *     notificationsEnabled, cardsPerSession, shuffle, reverseMode }
 *
 * BUILD:
 *  - useLocalStorage('focusdeck:settings', DEFAULT_TIMER) for the state.
 *  - Expose { settings, updateSetting(key, value), applyPreset(id), reset() }.
 *  - useEffect: write settings.theme to document.documentElement.dataset.theme.
 *  - Memoise the context value or every consumer re-renders on each keystroke.
 */

export function SettingsProvider({ children }) {
  return children; // TODO
}

export function useSettings() {
  // TODO: useContext(...) and throw if used outside the provider
}

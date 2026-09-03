/**
 * Theme registry. Every id here has a matching [data-theme="..."] block
 * in src/styles/tokens.css. Applying a theme is one line:
 *
 *   document.documentElement.dataset.theme = id;
 *
 * `swatch` is only for the preview strip in the settings picker.
 */
export const THEMES = [
  { id: 'light',    name: 'Daylight',  mode: 'light', swatch: ['#f6f7fb', '#ffffff', '#4f46e5', '#e0483c'] },
  { id: 'dark',     name: 'Graphite',  mode: 'dark',  swatch: ['#0f1218', '#171b24', '#7c6cf5', '#f2695c'] },
  { id: 'midnight', name: 'Midnight',  mode: 'dark',  swatch: ['#070b14', '#0e1626', '#3d8bfd', '#ff6b81'] },
  { id: 'forest',   name: 'Forest',    mode: 'light', swatch: ['#f2f6f1', '#ffffff', '#2f7d54', '#c25e2a'] },
  { id: 'sunset',   name: 'Sunset',    mode: 'dark',  swatch: ['#1b1116', '#261a22', '#f2762e', '#e8b04b'] },
  { id: 'rose',     name: 'Rose',      mode: 'light', swatch: ['#fdf6f8', '#ffffff', '#c2306a', '#3f9b8b'] },
];

export const DEFAULT_THEME = 'dark';

/** Timer defaults, in minutes. Settings overrides these. */
export const DEFAULT_TIMER = {
  focus: 25,
  shortBreak: 5,
  longBreak: 15,
  roundsBeforeLongBreak: 4,
  autoStartBreaks: true,
  autoStartFocus: false,
  soundEnabled: true,
  notificationsEnabled: false,
};

export const TIMER_PRESETS = [
  { id: 'classic',  name: 'Classic',   focus: 25, shortBreak: 5,  longBreak: 15 },
  { id: 'deep',     name: 'Deep work', focus: 50, shortBreak: 10, longBreak: 30 },
  { id: 'sprint',   name: 'Sprint',    focus: 15, shortBreak: 3,  longBreak: 10 },
];

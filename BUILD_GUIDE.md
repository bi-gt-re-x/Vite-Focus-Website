# Build guide

Ten steps. Each one ends with something you can actually use, so you can stop
at any point and still have a working app.

---

### 0 · Get it running
`npm install && npm run dev`. `main.jsx` already imports every stylesheet, so
the moment `App.jsx` returns real markup it will be styled.

---

### 1 · The shell
**Files:** `App.jsx`, `components/layout/AppShell.jsx`, `Sidebar.jsx`, `Topbar.jsx`

Set up `BrowserRouter` with the six routes, wrap them in `AppShell`, and port
the sidebar markup from `mockups/_shell.html`. Use `NavLink`'s `isActive` for
the `nav-link--active` class.

*Done when:* you can click between six blank pages and the sidebar highlights
the right one.

---

### 2 · UI primitives
**Files:** everything in `components/ui/`

Small and boring on purpose. Build `Button`, `Card`, `Badge`, `ProgressBar`,
`EmptyState` first — the rest of the app is assembled from them. Spread
`...rest` onto the underlying element so `onClick` and `aria-*` pass through.

*Done when:* you can render one of each on a scratch page and they look like
the mockups.

---

### 3 · Persistence
**Files:** `hooks/useLocalStorage.js`, `utils/storage.js`, `context/SettingsContext.jsx`

Read once in a lazy `useState` initialiser, write in an effect, wrap both in
`try/catch`. Then build `SettingsContext` on top of it, seeded from
`DEFAULT_TIMER`.

*Done when:* a value survives a page refresh.

---

### 4 · Themes
**Files:** `hooks/useTheme.js`, `pages/SettingsPage.jsx` (appearance section only)

The CSS is done — you are only writing `document.documentElement.dataset.theme
= id`. Build the theme grid from `THEMES` and persist the choice.

*Done when:* clicking a swatch restyles the whole app instantly and the choice
survives a refresh. This is the most satisfying step for the least work.

---

### 5 · The timer engine
**Files:** `hooks/useTimer.js`, `utils/time.js`

The hardest file in the project, and the one worth doing carefully. Count down
from a target timestamp, not by decrementing a counter — read the warning in
the stub. Test it by backgrounding the tab for a minute and coming back.

*Done when:* `console.log`ging `secondsLeft` counts down accurately, pauses,
resumes, and does not drift.

---

### 6 · The timer page
**Files:** `pages/TimerPage.jsx`, `components/timer/*`

Port `mockups/timer.html`. The dial is one line of maths:

```js
const CIRCUMFERENCE = 2 * Math.PI * 46;              // ≈ 289.03
strokeDashoffset = CIRCUMFERENCE * (1 - secondsLeft / totalSeconds);
```

Add `data-mode={mode}` to the `<main>` and the colour follows the phase for
free. Then wire the keyboard shortcuts.

*Done when:* a full 25/5 cycle runs end to end, auto-advancing into the break.

---

### 7 · Decks
**Files:** `pages/DecksPage.jsx`

Map `DECKS`, pass `style={{ '--deck-color': deck.color }}`, and derive the
filtered list during render — no mirror state, no `useEffect`. Search should
match card questions too, not just deck names.

*Done when:* search, tabs, and tag chips all narrow the grid, and clearing the
search shows the empty state correctly.

---

### 8 · Studying
**Files:** `components/study/*`, `hooks/useStudySession.js`, `pages/StudyPage.jsx`

Port the flip card first and get the animation right before touching the queue
logic. Build the queue once per session — if you rebuild it during render it
reshuffles under the user mid-session.

*Done when:* you can review a deck front to back with the keyboard alone
(Space, then 1–4) and reach the summary screen.

---

### 9 · Spaced repetition + progress
**Files:** `utils/scheduler.js`, `context/ProgressContext.jsx`

Implement the SM-2 rules from the stub, record every grade, and show the real
next-review interval on the grade buttons. This is what turns a card viewer
into a study tool.

*Done when:* cards you fail come back in the same session and cards you find
easy stop appearing for days.

---

### 10 · Stats, sound, polish
**Files:** `hooks/useStats.js`, `pages/StatsPage.jsx`, `pages/HomePage.jsx`, `utils/sound.js`

Everything on these two pages is derived from `ProgressContext` — no new state.
The heatmap is 84 day-buckets with a `data-level` of 0–4. Finish with the
completion chime (Web Audio, unlocked on a user gesture), notifications, and
the modal on the destructive settings buttons.

*Done when:* a real session you just ran shows up on the heatmap.

---

## Stretch, once it all works

- Card authoring — add and edit your own cards, saved to `localStorage`
- Import/export a deck as JSON
- A "cram" mode that ignores the scheduler
- Deck-level daily goals
- Make it installable: a manifest and a service worker for offline study

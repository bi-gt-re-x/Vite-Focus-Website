# Phase 1 — Markup

Fifteen exercises. The whole phase is JSX only: no `useState`, no `useEffect`,
no event handlers, no `localStorage`. Every number on screen stays hardcoded.
The goal is that the markup lives in the right file and is generated from data
instead of copy-pasted — nothing more.

Where you are starting: all six pages render the full mockup, and each one
repeats the entire sidebar and topbar. Everything in `src/components/` still
returns `null`.

---

### 1.1 · Run it and write down the damage

`npm install && npm run dev`, then click through `/`, `/timer`, `/decks`,
`/study`, `/stats`, `/settings`.

Open all six files in `src/pages/` side by side and find the markup that is
identical in all of them. That block is what exercises 1.2–1.8 delete.

*Done when:* six pages render styled, and you can say out loud which lines of
`HomePage.jsx` also appear in `StatsPage.jsx`.

---

### 1.2 · Move the sidebar into `Sidebar.jsx`

**File:** `components/layout/Sidebar.jsx`

Cut the whole `<aside className="sidebar">…</aside>` out of `HomePage.jsx` and
paste it in as the return value of `Sidebar`. Import `Sidebar` at the top of
`HomePage.jsx` and render `<Sidebar />` where the markup used to be.

Leave the other five pages alone for now.

*Done when:* the home page looks exactly the same as it did in 1.1, and
`HomePage.jsx` is about 60 lines shorter.

---

### 1.3 · Generate the nav links from an array

**File:** `components/layout/Sidebar.jsx`

Six `<a className="nav-link">` blocks that differ only in href, icon and label
is five too many. Above the component, write:

```js
const NAV_LINKS = [
  { to: '/',         label: 'Home',     icon: <svg …/> },
  …
];
```

Then render `NAV_LINKS.map(…)` inside `<nav className="sidebar__nav">`. Give
each one a `key={link.to}`.

The Decks link also has `<span className="nav-link__badge">6</span>` — add a
`badge` field for it and render the span only when it exists.

*Done when:* the sidebar is unchanged on screen, the `.map` is one block, and
the console shows no key warning.

---

### 1.4 · Make the links actually links

**File:** `components/layout/Sidebar.jsx`

Replace `<a href>` with `<NavLink to>` from `react-router-dom`. Use the
`className` callback to add the active class:

```jsx
className={({ isActive }) => 'nav-link' + (isActive ? ' nav-link--active' : '')}
```

The Home link needs `end` on it, or it stays active on every route.

*Done when:* clicking a nav link changes the page without a full reload, and
exactly one link is highlighted at a time.

---

### 1.5 · Build `Topbar.jsx`

**File:** `components/layout/Topbar.jsx`

Move `<header className="topbar">…</header>` out of `HomePage.jsx`. It takes a
`title` prop for `<h1 className="topbar__title">`; the mini timer and the theme
button stay hardcoded exactly as they are in the mockup.

*Done when:* `<Topbar title="Home" />` renders the same header as before.

---

### 1.6 · Build `AppShell.jsx`

**File:** `components/layout/AppShell.jsx`

`AppShell` owns the outer frame:

```jsx
<div className="app" data-collapsed="false">
  <Sidebar />
  <div className="app__main">
    <Topbar title={…} />
    {children}
  </div>
</div>
```

`children` is where the page's `<main className="content">` will go.

*Done when:* `HomePage.jsx` returns `<AppShell><main className="content">…</main></AppShell>`
and the page is pixel-identical to 1.1.

---

### 1.7 · Wrap the routes once, in `App.jsx`

**Files:** `App.jsx`, `components/layout/AppShell.jsx`

Wrapping in the page means every page repeats it. Put `<AppShell>` around
`<Routes>` in `App.jsx` instead, and take the wrapper back out of `HomePage`.

The title now has to come from the route. Inside `AppShell` (or `Topbar`), use
`useLocation()` and a lookup object:

```js
const PAGE_TITLES = { '/': 'Home', '/timer': 'Timer', '/decks': 'Decks', … };
```

*Done when:* the topbar title changes as you navigate, and the word `sidebar`
appears in exactly one file under `src/`.

---

### 1.8 · Strip the shell out of the other five pages

**Files:** `TimerPage.jsx`, `DecksPage.jsx`, `StudyPage.jsx`, `StatsPage.jsx`, `SettingsPage.jsx`

Each page should return only its own content — the `<main className="content">`
element and what is inside it. Delete the `.app` wrapper, the `<aside>`, the
`.app__main` div and the `<header>` from all five.

Watch for the two pages that use a modified content class: the timer and study
pages use `content content--focus`. Keep that.

*Done when:* every page file starts with `<main` , the app still looks right on
all six routes, and you have deleted roughly 900 lines.

---

### 1.9 · The three primitives you will use everywhere

**Files:** `components/ui/Button.jsx`, `Card.jsx`, `Badge.jsx`

Markup only — no behaviour.

- `Button({ variant = 'primary', size, icon, children, ...rest })` renders
  `<button className={`btn btn--${variant}${size ? ` btn--${size}` : ''}`} {...rest}>`.
- `Card({ title, action, children })` renders `.card`, and renders the
  `.card__header` (with `.card__title` and the action slot) only when `title`
  is given.
- `Badge({ variant, children })` renders `.badge` plus `badge--${variant}`.

Spread `...rest` onto the real element in all three. If you forget, `onClick`
and `aria-label` silently vanish in phase 2 and you will not know why.

*Done when:* you can swap one `<button className="btn btn--primary">` on the
home page for `<Button>` and see no difference.

---

### 1.10 · `ProgressBar` and `EmptyState`

**Files:** `components/ui/ProgressBar.jsx`, `EmptyState.jsx`

- `ProgressBar({ value, size })` — `.progress` (plus `progress--sm`) wrapping
  `.progress__bar` with `style={{ width: `${value}%` }}`.
- `EmptyState({ icon, title, children, action })` — the `.empty-state` block
  from the bottom of `DecksPage.jsx`.

Then use them: every `.progress` in `DecksPage.jsx` and `StatsPage.jsx` becomes
a `<ProgressBar />`.

*Done when:* `<ProgressBar value={72} />` and the old hand-written markup render
identically.

---

### 1.11 · Clean up the decks page

**File:** `pages/DecksPage.jsx`

The mockup shipped three versions of the same thing so you could pick one.

- Delete the "List view (alternative)" section and its heading.
- Delete the standalone empty-state demo — you will render `<EmptyState />`
  conditionally in phase 2, not permanently.
- Pull the `<article className="deck-card">` body out into a local `DeckCard`
  function at the bottom of the file, taking a `deck` prop.
- Add `key={deck.id}` to the map. Keep `style={{ '--deck-color': deck.color }}`.
- Replace the hardcoded `25 cards` with the real count:
  `FLASHCARDS.filter((c) => c.deckId === deck.id).length`. Leave "4 due" and
  "72%" hardcoded — those need the scheduler.

*Done when:* six deck cards render, each showing its own emoji, name,
description and true card count, with no key warning.

---

### 1.12 · Generate the stats page grids

**File:** `pages/StatsPage.jsx`

Two blocks of repeated divs are begging to be loops.

- The heatmap is 84 cells. Replace them with
  `Array.from({ length: 84 }, (_, i) => …)`, each a `.heatmap__cell` with a
  `data-level` of 0–4. For now derive the level from the index (`i % 5`) —
  real data lands in phase 4.
- The bar chart columns come from a small array of `{ label, value }` you write
  by hand at the top of the file.

*Done when:* the heatmap and chart look the same as the mockup but the JSX for
each is under ten lines.

---

### 1.13 · The timer's four components

**Files:** `components/timer/TimerDial.jsx`, `ModeSwitch.jsx`, `TimerControls.jsx`, `RoundTrack.jsx`

Split `TimerPage.jsx` along the seams the CSS already gives you. Every value is
still a prop with a static value passed from the page:

- `TimerDial({ secondsLeft, totalSeconds })` — the `.dial` block. Compute the
  offset now, it is one line:
  `const offset = 2 * Math.PI * 46 * (1 - secondsLeft / totalSeconds);`
- `ModeSwitch({ mode })` — three `.mode-switch__btn`, active class on the one
  matching `mode`.
- `TimerControls()` — the buttons, no handlers yet.
- `RoundTrack({ rounds, current })` — `.round-dot` per round with the
  `--done` / `--current` modifiers.

Put `data-mode="focus"` on the page's `<main>` and the accent colour follows.

*Done when:* `<TimerDial secondsLeft={1122} totalSeconds={1500} />` draws the
arc at three quarters, and passing `mode="short"` recolours the page.

---

### 1.14 · The study screen's four components

**Files:** `components/study/Flashcard.jsx`, `GradeButtons.jsx`, `StudyProgress.jsx`, `SessionSummary.jsx`

- `Flashcard({ card, flipped })` — `.flashcard` with `.flashcard__inner` and
  the two faces. The flip is CSS driven by a class or `data-` attribute; pass
  `flipped` as a prop and hardcode it `false` at the call site. Render
  `card.code` inside `.flashcard__code` only when the card has one.
- `GradeButtons()` — the four `.grade-btn` variants.
- `StudyProgress({ index, total })` — the counter and progress bar.
- `SessionSummary({ … })` — move the `.session-complete` block here. It is a
  second screen, not something shown under the card, so `StudyPage` renders
  either the card or the summary; hardcode which for now.

Feed `Flashcard` a real card: `FLASHCARDS[2]` has a `code` field, so use that
one and check the code block renders.

*Done when:* flipping the `flipped` prop by hand in the editor shows the answer
side, and the summary screen renders when you hardcode it on.

---

### 1.15 · The settings controls

**Files:** `components/ui/Toggle.jsx`, `Stepper.jsx`, `Modal.jsx`, `Toast.jsx`, `pages/SettingsPage.jsx`

- `Toggle({ checked, label })` — the `.switch` / `.switch__track` markup.
- `Stepper({ value, unit })` — `.stepper` with its two buttons and value.
- `Modal({ open, title, children, actions })` — returns `null` when `open` is
  false. The mockup leaves it visible; that is why it is stuck on your screen.
- `Toast({ variant, children })` — same deal, `null` unless shown.
- Render the theme grid from `THEMES` in `data/themes.js`: map to
  `.theme-option`, build `.theme-option__preview` from the four `swatch`
  colours, and mark one `--active` by hardcoding the id.
- Render `TIMER_PRESETS` into the `.preset-row` the same way.

*Done when:* the settings page shows six themes and three presets generated
from data, and no modal or toast is on screen.

---

## Phase 1 is finished when

- No file under `src/pages/` contains the word `sidebar` or `topbar`.
- Nothing in `src/components/` returns `null` except `Modal` and `Toast`, which
  return it deliberately.
- Every list on screen comes from `map`, and the console has no key warnings.
- The app looks exactly like the mockups and does exactly nothing: clicking a
  button, a grade or a toggle has no effect.

That last point is the phase boundary. Phase 2 is `useLocalStorage` and
`SettingsContext`; the first thing that will actually move is the theme
switcher.

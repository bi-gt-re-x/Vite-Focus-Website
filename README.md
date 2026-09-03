# FocusDeck

A Pomodoro timer and flashcard study app. Pure frontend — React + Vite, plain
CSS, no backend and no UI library. Everything persists in `localStorage`.

## What is already here

| Area | Status |
|---|---|
| `index.html`, Vite + package config | done |
| Full CSS system — reset, tokens, 6 themes, layout, components, 6 page stylesheets | done |
| `mockups/*.html` — every screen as static HTML, styled and linked to the real CSS | done |
| `src/data/flashcards.js` — 150 cards across 6 decks | done |
| `src/data/decks.js`, `src/data/themes.js` | done |
| `src/main.jsx` | done |
| Everything else in `src/` | **stubs — this is what you build** |

Each stub file carries a doc comment describing its props, its return shape,
and the traps to avoid. Nothing is left to guess at.

## Run it

```bash
npm install
npm run dev
```

To look at the finished design before writing any React, open the mockups
through a server so the stylesheets resolve:

```bash
npx serve . 
```

then visit `/mockups/home.html`.

## Themes

Six themes live in `src/styles/tokens.css`, each redefining the same token
names under a `[data-theme="…"]` block. Switching is one line:

```js
document.documentElement.dataset.theme = 'forest';
```

`light` · `dark` · `midnight` · `forest` · `sunset` · `rose`

The Pomodoro phase also re-points `--accent` — put `data-mode="focus"`,
`"short"`, or `"long"` on a container and everything inside follows.

## Structure

```
mockups/            static HTML for every screen — port these to JSX
src/
  data/             flashcards (150), decks, themes + timer defaults
  styles/           reset · tokens · global · layout · components · pages/
  components/
    layout/         AppShell · Sidebar · Topbar
    ui/             Button · Card · Badge · Modal · Toggle · Stepper ·
                    ProgressBar · EmptyState · Toast
    timer/          TimerDial · ModeSwitch · TimerControls · RoundTrack
    study/          Flashcard · GradeButtons · StudyProgress · SessionSummary
  context/          SettingsContext · ProgressContext
  hooks/            useTimer · useLocalStorage · useTheme ·
                    useKeyboardShortcuts · useStudySession · useStats
  pages/            Home · Timer · Decks · Study · Stats · Settings
  utils/            time · storage · scheduler (SM-2) · shuffle · sound
```

See `BUILD_GUIDE.md` for the order to build it in.

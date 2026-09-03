/**
 * App — router + global providers.
 *
 * BUILD:
 *  - Wrap everything in <SettingsProvider> and <ProgressProvider>.
 *  - <BrowserRouter> with routes:
 *      /          -> HomePage
 *      /timer     -> TimerPage
 *      /decks     -> DecksPage
 *      /study/:deckId -> StudyPage
 *      /stats     -> StatsPage
 *      /settings  -> SettingsPage
 *  - All routes render inside <AppShell> so the sidebar/topbar persist.
 *
 * The timer must keep running while the user navigates, so its state
 * lives in a provider here — NOT inside TimerPage.
 */

export default function App() {
  return null; // TODO
}

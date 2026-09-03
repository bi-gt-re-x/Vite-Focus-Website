/**
 * AppShell — the persistent frame around every page.
 * Markup: mockups/_shell.html (the .app > .sidebar + .app__main part).
 *
 * BUILD:
 *  - <div className="app" data-collapsed={collapsed}>
 *  - Render <Sidebar />, then <div className="app__main"> with
 *    <Topbar title={...} /> and {children} inside <main className="content">.
 *  - Page components supply their own <main> so they can add
 *    "content--focus" or "timer-page" modifiers — pass children straight through.
 */

export default function AppShell({ children }) {
  return null; // TODO
}

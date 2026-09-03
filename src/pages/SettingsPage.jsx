/**
 * SettingsPage — preferences.
 * Markup: mockups/settings.html
 *
 * BUILD:
 *  - Every control reads from useSettings() and writes with updateSetting.
 *  - Theme grid maps THEMES; clicking one sets settings.theme, which the
 *    provider mirrors onto <html data-theme>.
 *  - "Follow system theme" listens to matchMedia('(prefers-color-scheme: dark)').
 *  - Notifications toggle must call Notification.requestPermission() from the
 *    click itself, and revert if the user denies.
 *  - Export downloads a JSON blob; import parses it inside a try/catch and
 *    shows the danger toast on failure.
 *  - Both destructive buttons go through <Modal> first.
 */

export default function SettingsPage() {
  return null; // TODO
}

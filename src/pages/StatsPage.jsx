/**
 * StatsPage — progress dashboard.
 * Markup: mockups/stats.html
 *
 * BUILD:
 *  - Heatmap: build 84 day buckets (12 weeks x 7) from progress.sessions,
 *    bucket each day's minutes into levels 0-4, render data-level on the cell.
 *  - Bar chart: this week's minutes per day; --value is the percentage of the
 *    tallest bar, not the raw minutes.
 *  - Accuracy per deck and the donut both come from useStats().
 *  - "Hardest cards" = reviews sorted by (seen - correct) descending, top 4.
 *  - Every number here is derived — nothing extra goes into state.
 */

export default function StatsPage() {
  return null; // TODO
}

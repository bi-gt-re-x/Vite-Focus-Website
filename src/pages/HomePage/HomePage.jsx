import { Link } from 'react-router-dom';
import SideBar from '../../components/layout/SideBar.jsx';
import Topbar from '../../components/layout/Topbar.jsx';
import { ActivityGrid } from './ActivityGrid.jsx';
import { StatGrid } from './StatGrid.jsx';

export default function HomePage({ activeLink, pomodoros, cardsReviewed }) {
  return (
    <div className="app" data-collapsed="false">
      {<SideBar activeStudyLink={activeLink} />}

      <div className="app__main">
        {<Topbar title='Home' />}
        <main className="content">
          <section className="hero">
            <div>
              <p className="eyebrow">Wednesday, 3 September</p>

              <h2 className="hero__title">Ready for round one?</h2>

              <p className="hero__subtitle">
                Focus for 25 minutes, then review a handful of cards while it
                is still fresh. Short sessions, repeated often, beat one long
                cram.
              </p>

              <div className="hero__actions">
                <Link className="btn btn--primary btn--lg" to="/timer">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Start focus session
                </Link>

                <Link className="btn btn--secondary btn--lg" to="/study">
                  Review 12 due cards
                </Link>
              </div>
            </div>

            <div className="hero__visual">
              <div className="donut" style={{ "--pct": 68 }}>
                <span className="donut__label">68%</span>
              </div>
            </div>
          </section>

          <StatGrid pomodoros={pomodoros} cardsReviewed={cardsReviewed} />

          <ActivityGrid />
        </main>
      </div>
    </div>
  );
}

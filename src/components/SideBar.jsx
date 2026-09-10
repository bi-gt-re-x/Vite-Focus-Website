import { NavLink } from "react-router-dom";

export default function SideBar({ activeStudyLink }) {
    const linkClass = ({ isActive }) =>
        "nav-link" + (isActive ? " nav-link--active" : "");

    return (
        <aside className="sidebar">
            <div className="sidebar__brand">
            <div className="sidebar__logo">FD</div>
            <span>FocusDeck</span>
            </div>

            <nav className="sidebar__nav">
            <NavLink className={linkClass} to="/" end data-page="home">
                <svg
                className="nav-link__icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                >
                <path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" />
                </svg>
                <span>Home</span>
            </NavLink>

            <NavLink
                className={linkClass}
                to="/timer"
                data-page="timer"
            >
                <svg
                className="nav-link__icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                >
                <circle cx="12" cy="12" r="8" />
                <path d="M12 8v4l2.5 2.5" />
                </svg>
                <span>Timer</span>
            </NavLink>

            <NavLink className={linkClass} to="/decks" data-page="decks">
                <svg
                className="nav-link__icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                >
                <rect x="3" y="4" width="18" height="6" rx="2" />
                <rect x="3" y="14" width="18" height="6" rx="2" />
                </svg>
                <span>Decks</span>
                <span className="nav-link__badge">6</span>
            </NavLink>

            <NavLink className={linkClass} to={activeStudyLink} data-page="study">
                <svg
                className="nav-link__icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M8 10h8M8 14h5" />
                </svg>
                <span>Study</span>
            </NavLink>

            <NavLink className={linkClass} to="/stats" data-page="stats">
                <svg
                className="nav-link__icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                >
                <path d="M5 20V10M12 20V4M19 20v-7" />
                </svg>
                <span>Stats</span>
            </NavLink>

            <NavLink className={linkClass} to="/settings" data-page="settings">
                <svg
                className="nav-link__icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                >
                <path d="M4 7h10M18 7h2M4 17h4M12 17h8" />
                <circle cx="16" cy="7" r="2" />
                <circle cx="10" cy="17" r="2" />
                </svg>
                <span>Settings</span>
            </NavLink>
            </nav>

            <div className="sidebar__footer">
            <div className="sidebar__streak">
                <span>🔥</span>
                <div>
                <strong>7</strong>{" "}
                <span className="faint">day streak</span>
                </div>
            </div>
            </div>
        </aside>
    );
}

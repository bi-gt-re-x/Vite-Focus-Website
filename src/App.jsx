import DecksPage from './pages/DecksPage.jsx'
import HomePage from './pages/HomePage.jsx';
import TimerPage from './pages/TimerPage.jsx';
import StudyPage from './pages/StudyPage.jsx';
import StatsPage from './pages/StatsPage.jsx';
import SettingsPage from './pages/SettingsPage.jsx';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <Routes>
      <Route path="/decks" element={<DecksPage />} />
      <Route path="/timer" element={<TimerPage />} />
      <Route path="/study" element={<StudyPage />} />
      <Route path="/stats" element={<StatsPage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route index element={<HomePage />} />
    </Routes>
  )
}

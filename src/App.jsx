import DecksPage from './pages/DecksPage.jsx'
import HomePage from './pages/HomePage.jsx';
import TimerPage from './pages/TimerPage.jsx';
import StudyPage from './pages/StudyPage.jsx';
import StatsPage from './pages/StatsPage.jsx';
import SettingsPage from './pages/SettingsPage.jsx';
import { Routes, Route, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

export default function App() {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const deckId = useSearchParams.get("deckId");
  }, [searchParams]);

  return (
    <Routes>
      <Route path="/decks" element={<DecksPage />} />
      <Route path="/timer" element={<TimerPage />} />
      <Route path="/study/:deckId" element={<StudyPage />} />
      <Route path="/stats" element={<StatsPage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route index element={<HomePage />} />
    </Routes>
  )
}

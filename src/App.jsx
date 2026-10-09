import DecksPage from './pages/Decks/DecksPage.jsx'
import HomePage from './pages/HomePage.jsx';
import TimerPage from './pages/Timer/TimerPage.jsx';
import StudyPage from './pages/Study/StudyPage.jsx';
import StatsPage from './pages/StatsPage.jsx';
import SettingsPage from './pages/Settings/SettingsPage.jsx';
import { useLocalStorage } from './hooks/useLocalStorage.js';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function App() {
  const [activeLink, setActiveLink] = useState(() => {
    const savedLink = localStorage.getItem('studyLink');
    return savedLink || '/study/javascript?emoji=🟨&name=JavaScript%20Fundamentals';
  });

  const [deckId, setDeckId] = useState(() => {
    const deckId = localStorage.getItem('deckId');
    return deckId || 'javascript';
  });

  const [deckMastery, setDeckMastery] = useState(() => {
    const savedMastery = localStorage.getItem('deckMastery');
    return savedMastery ? JSON.parse(savedMastery)
    : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  });

  const [timeArray, setTimeArray] = useState(() => {
    const savedArray = localStorage.getItem('timeArray');
    return savedArray ? JSON.parse(savedArray)
    : [1500, 300, 900]
  });

  useLocalStorage({activeLink, deckId, deckMastery, timeArray});

  return (
    <Routes>
      <Route path="/decks" element={<DecksPage setActiveLink={setActiveLink} activeLink={activeLink} deckMastery={deckMastery} setDeckId={setDeckId} />} />
      <Route path="/timer" element={<TimerPage  activeLink={activeLink} timeArray={timeArray} />}/>
      <Route path="/study" element={<Navigate to={activeLink} replace />} />
      <Route path="/study/:deckId" element={<StudyPage activeLink={activeLink} deckMastery={deckMastery} deckName={deckId} />} />
      <Route path="/stats" element={<StatsPage activeLink={activeLink}  />} />
      <Route path="/settings" element={<SettingsPage activeLink={activeLink}  />} />
      <Route index element={<HomePage activeLink={activeLink}  />}/>
    </Routes>
  )
}

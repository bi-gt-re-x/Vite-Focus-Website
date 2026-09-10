import DecksPage from './pages/DecksPage.jsx'
import HomePage from './pages/HomePage.jsx';
import TimerPage from './pages/TimerPage.jsx';
import StudyPage from './pages/StudyPage.jsx';
import StatsPage from './pages/StatsPage.jsx';
import SettingsPage from './pages/SettingsPage.jsx';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function App() {
  const [activeLink, setActiveLink] = useState(() => {
    const savedLink = localStorage.getItem('studyLink');
    return savedLink ? JSON.parse(savedLink) : '/study/javascript?emoji=🟨&name=JavaScript%20Fundamentals';
  });

  const [deckId, setDeckId] = useState(() => {
    const deckId = localStorage.getItem('deckId');
    return deckId ? JSON.parse(deckId) : 'javascript';
  });

  const [deckMastery, setDeckMastery] = useState(() => {
    const savedMastery = localStorage.getItem('deckMastery');
    return savedMastery ? JSON.parse(savedMastery) 
    : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  });

  useEffect(() => {
    localStorage.setItem('deckMastery', JSON.stringify(deckMastery));
  }, [deckMastery])

  useEffect(() => {
    localStorage.setItem('studyLink', JSON.stringify(activeLink));
  }, [activeLink]);

  useEffect(() => {
    localStorage.setItem('deckId', JSON.stringify(deckId));
  }, [deckId]);

  return (
    <Routes>
      <Route path="/decks" element={<DecksPage setActiveLink={setActiveLink} activeLink={activeLink} deckMastery={deckMastery} setDeckId={setDeckId} />} />
      <Route path="/timer" element={<TimerPage  activeLink={activeLink} />}/>
      <Route path="/study/:deckId" element={<StudyPage activeLink={activeLink} deckMastery={deckMastery} deckName={deckId} />} />
      <Route path="/stats" element={<StatsPage activeLink={activeLink}  />} />
      <Route path="/settings" element={<SettingsPage activeLink={activeLink}  />} />
      <Route index element={<HomePage activeLink={activeLink}  />}/>
    </Routes>
  )
}

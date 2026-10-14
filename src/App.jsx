import DecksPage from './pages/Decks/DecksPage.jsx'
import HomePage from './pages/HomePage/HomePage.jsx';
import TimerPage from './pages/Timer/TimerPage.jsx';
import StudyPage from './pages/Study/StudyPage.jsx';
import StatsPage from './pages/Stats/StatsPage.jsx';
import SettingsPage from './pages/Settings/SettingsPage.jsx';
import { useLocalStorage } from './hooks/useLocalStorage.js';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { dailyReset } from './utils/time.js';

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

  const [pomodoros, setPomodoros] = useState(() => {
    const savedPomo = localStorage.getItem('pomodoros');
    return savedPomo ? Number(savedPomo) : 0;
  });

  const [cardsReviewed, setCardsReviewed] = useState(() => {
    const review = localStorage.getItem('cardsReviewed');
    return review ? Number(review) : 0;
  })

  const [focusToday, setFocusToday] = useState(() => {
    const focusDaily = localStorage.getItem('todayFocus');
    return focusDaily ? Number(focusDaily) : 0;
  })

  const [dueCards, setDue] = useState(() => {
    const dueCards = localStorage.getItem('dueCards');
    return dueCards ? Number(dueCards) : 0;
  })

  useLocalStorage({activeLink, deckId, deckMastery, timeArray, pomodoros, cardsReviewed, focusToday, dueCards});
  dailyReset({ focusToday })

  return (
    <Routes>
      <Route path="/decks" element={<DecksPage setActiveLink={setActiveLink} activeLink={activeLink} deckMastery={deckMastery} setDeckId={setDeckId} />} />

      <Route path="/timer" element={<TimerPage  
        activeLink={activeLink}
        timeArray={timeArray}
        setPomodoros={setPomodoros}
        pomodoros={pomodoros}
        focusToday={focusToday}
        setFocusToday={setFocusToday}
      />}/>

      <Route path="/study" element={<Navigate to={activeLink} replace />} />
      <Route path="/study/:deckId" element={<StudyPage 
        activeLink={activeLink}
        deckMastery={deckMastery}
        deckName={deckId}
        cardsReviewed={cardsReviewed}
        setCardsReviewed={setCardsReviewed}
        setDue={setDue}
      />} />

      <Route path="/stats" element={<StatsPage activeLink={activeLink}  />} />
      <Route path="/settings" element={<SettingsPage activeLink={activeLink} setTimeArray={setTimeArray} />} />
      <Route index element={<HomePage
        activeLink={activeLink}
        pomodoros={pomodoros}
        cardsReviewed={cardsReviewed}
        focusToday={focusToday}
        dueCards={dueCards}
      />}/>
    </Routes>
  )
}

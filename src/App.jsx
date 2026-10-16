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
import { useStudyState } from './hooks/useLocalStorage.js';

export default function App() {

  const {
    activeLink, setActiveLink,
    deckId, setDeckId,
    deckMastery, setDeckMastery,
    timeArray, setTimeArray,
    pomodoros, setPomodoros,
    cardsReviewed, setCardsReviewed,
    focusToday, setFocusToday,
    dueCards, setDue,
    accuracy, setAcc
  } = useStudyState();

  useLocalStorage({activeLink, deckId, deckMastery, timeArray, pomodoros, cardsReviewed, focusToday, dueCards, accuracy});
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
        setAcc={setAcc}
        accuracy={accuracy}
      />} />

      <Route path="/stats" element={<StatsPage activeLink={activeLink}  />} />
      <Route path="/settings" element={<SettingsPage activeLink={activeLink} setTimeArray={setTimeArray} timeArray={timeArray} />} />
      <Route index element={<HomePage
        activeLink={activeLink}
        pomodoros={pomodoros}
        cardsReviewed={cardsReviewed}
        focusToday={focusToday}
        dueCards={dueCards}
        accuracy={accuracy}
      />}/>
    </Routes>
  )
}

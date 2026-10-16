import { useEffect, useState } from "react";

export function useLocalStorage({
  deckMastery,
  activeLink,
  deckId,
  timeArray,
  pomodoros,
  cardsReviewed,
  focusToday,
  dueCards,
  accuracy
}) {
  useEffect(() => {
    localStorage.setItem("deckMastery", JSON.stringify(deckMastery));
  }, [deckMastery]);

  useEffect(() => {
    localStorage.setItem("studyLink", activeLink);
  }, [activeLink]);

  useEffect(() => {
    localStorage.setItem("deckId", deckId);
  }, [deckId]);

  useEffect(() => {
    localStorage.setItem("timeArray", JSON.stringify(timeArray));
  }, [timeArray]);

  useEffect(() => {
    localStorage.setItem("pomodoros", pomodoros);
  }, [pomodoros]);

  useEffect(() => {
    localStorage.setItem("cardsReviewed", cardsReviewed);
  }, [cardsReviewed]);

  useEffect(() => {
    localStorage.setItem("todayFocus", focusToday);
  }, [focusToday]);

  useEffect(() => {
    localStorage.setItem("dueCards", dueCards);
  }, [dueCards]);

  useEffect(() => {
    localStorage.setItem("accuracy", accuracy)
  }, [accuracy])
}

export function useStudyState() {
  const [activeLink, setActiveLink] = useState(() => {
    const savedLink = localStorage.getItem("studyLink");
    return (
      savedLink || "/study/javascript?emoji=🟨&name=JavaScript%20Fundamentals"
    );
  });

  const [deckId, setDeckId] = useState(() => {
    const deckId = localStorage.getItem("deckId");
    return deckId || "javascript";
  });

  const [deckMastery, setDeckMastery] = useState(() => {
    const savedMastery = localStorage.getItem("deckMastery");
    return savedMastery
      ? JSON.parse(savedMastery)
      : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  });

  const [timeArray, setTimeArray] = useState(() => {
    const savedArray = localStorage.getItem("timeArray");
    return savedArray ? JSON.parse(savedArray) : [1500, 300, 900];
  });

  const [pomodoros, setPomodoros] = useState(() => {
    const savedPomo = localStorage.getItem("pomodoros");
    return savedPomo ? Number(savedPomo) : 0;
  });

  const [cardsReviewed, setCardsReviewed] = useState(() => {
    const review = localStorage.getItem("cardsReviewed");
    return review ? Number(review) : 0;
  });

  const [focusToday, setFocusToday] = useState(() => {
    const focusDaily = localStorage.getItem("todayFocus");
    return focusDaily ? Number(focusDaily) : 0;
  });

  const [dueCards, setDue] = useState(() => {
    const dueCards = localStorage.getItem("dueCards");
    return dueCards ? Number(dueCards) : 0;
  });

  const [accuracy, setAcc] = useState(() => {
    const accuracy = localStorage.getItem('accuracy');
    return accuracy ? Number(accuracy) : 100;
  });

  return {
    activeLink, setActiveLink,
    deckId, setDeckId,
    deckMastery, setDeckMastery,
    timeArray, setTimeArray,
    pomodoros, setPomodoros,
    cardsReviewed, setCardsReviewed,
    focusToday, setFocusToday,
    dueCards, setDue,
    accuracy, setAcc
  };
}

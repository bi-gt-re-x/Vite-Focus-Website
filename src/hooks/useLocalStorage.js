import { useEffect } from "react";

export function useLocalStorage({ 
    deckMastery,
    activeLink,
    deckId,
    timeArray,
    pomodoros,
    cardsReviewed,
    focusToday,
    dueCards
}) {
    useEffect(() => {
        localStorage.setItem('deckMastery', JSON.stringify(deckMastery));
    }, [deckMastery]);

    useEffect(() => {
        localStorage.setItem('studyLink', activeLink);
    }, [activeLink]);

    useEffect(() => {
        localStorage.setItem('deckId', deckId);
    }, [deckId]);

    useEffect(() => {
        localStorage.setItem('timeArray', JSON.stringify(timeArray));
    }, [timeArray]);

    useEffect(() => {
        localStorage.setItem('pomodoros', pomodoros);
    }, [pomodoros]);

    useEffect(() => {
        localStorage.setItem('cardsReviewed', cardsReviewed);
    }, [cardsReviewed])

    useEffect(() => {
        localStorage.setItem('todayFocus', focusToday);
    }, [focusToday])

    useEffect(() => {
        localStorage.setItem('dueCards', dueCards);
    }, [dueCards])
}

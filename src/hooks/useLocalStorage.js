import { useEffect } from "react";

export function useLocalStorage({ 
    deckMastery,
    activeLink,
    deckId,
    timeArray
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
}

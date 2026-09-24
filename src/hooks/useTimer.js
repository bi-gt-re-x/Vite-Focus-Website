import { useEffect } from "react";

export function useTimer({ paused, timeLeft, setTimeLeft }) {
    useEffect(() => {
        if (paused || timeLeft <= 0) return;

        const timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
        }, 1000);

        return () => clearInterval(timer);  
    }, [paused, timeLeft, setTimeLeft]);
}

export function timeHandles({ timeLeft, circumfrence, setOffSet, playChime, setRounds, setTimeLeft }) {
    useEffect(() => {
    if (timeLeft === 1500) {
        setOffSet(circumfrence);
    } 

    else if (timeLeft === 0) {
        setOffSet(0);
        setRounds(rounds + 1);
        playChime();
    } 

    else {
        const percentageLeft = timeLeft / 1500;
        setOffSet(circumfrence * (1 - percentageLeft));
    }
    }, [timeLeft, circumfrence]);
}

export function handleFocusMinutes() {
    useEffect(() => {

    });
}

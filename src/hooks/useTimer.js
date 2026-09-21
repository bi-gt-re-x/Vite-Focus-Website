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

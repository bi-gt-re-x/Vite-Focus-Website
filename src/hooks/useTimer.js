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

export function timeHandles({ 
    timeLeft, 
    circumfrence, 
    setOffSet, 
    playChime, 
    setRounds, 
    setTimeLeft, 
    currentTimeIndex, 
    setCurrentTimeIndex,
    timeArray, 
    setSelectedIndex,
    rounds 
}) {

    const totalMaxTime = timeArray[currentTimeIndex]; 

    useEffect(() => {
        if (timeLeft === totalMaxTime) {
            setOffSet(0);
        } 
        else if (timeLeft === 0) {
            setOffSet(circumfrence); 

            let nextIndex = currentTimeIndex;
            
            if (currentTimeIndex === 0) {
                setRounds(rounds + 1);
                nextIndex = rounds + 1 >= 4 ? 2 : 1;
            }

            else if (currentTimeIndex === 2) {
                setRounds(0);
                nextIndex = 0;
            }

            else {
                nextIndex = 0;
            }

            setSelectedIndex(nextIndex);
            setCurrentTimeIndex(nextIndex);
            setTimeLeft(timeArray[nextIndex]);
            playChime();
        } 
        else {
            const percentageLeft = timeLeft / totalMaxTime;
            setOffSet(circumfrence * (1 - percentageLeft));
        }
    }, [timeLeft, circumfrence, currentTimeIndex, totalMaxTime]);
}

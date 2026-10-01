import { useEffect } from "react";

export function useTimer({ paused, timeLeft, setTime, setTimeLeft }) {
    useEffect(() => {
        if (paused || timeLeft <= 0) return;

        const timer = setInterval(() => {
            setTimeLeft(prev => prev - 1);
            setTime(prev => prev + 1);
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
      return; 
    } 
    
    if (timeLeft === 0) {
      setOffSet(circumfrence);
      
      let nextIndex = 0;
      
      if (currentTimeIndex === 0) {

        nextIndex = rounds >= 3 ? 2 : 1; 
      } else if (currentTimeIndex === 1) {

        setRounds(prevRounds => {
          const updatedRounds = prevRounds + 1;
          nextIndex = updatedRounds >= 4 ? 2 : 0; 
          setSelectedIndex(nextIndex);
          setCurrentTimeIndex(nextIndex);
          setTimeLeft(timeArray[nextIndex]);
          return updatedRounds;
        });
        
        playChime();
        return; 
      } else if (currentTimeIndex === 2) {
        setRounds(0);
        nextIndex = 0;
      }

      setSelectedIndex(nextIndex);
      setCurrentTimeIndex(nextIndex);
      setTimeLeft(timeArray[nextIndex]);
      playChime();
    } else {
      const percentageLeft = timeLeft / totalMaxTime;
      setOffSet(circumfrence * (1 - percentageLeft));
    }

  }, [timeLeft, circumfrence, currentTimeIndex, totalMaxTime, rounds, timeArray, setOffSet, setRounds, setSelectedIndex, setCurrentTimeIndex, setTimeLeft, playChime]);
}
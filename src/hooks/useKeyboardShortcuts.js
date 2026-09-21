import { useEffect } from "react";

export function timerSpaceShortcut({ paused, setPaused }) {
  useEffect(() => {
    const handleSpaceDown = (event) => {
      if (event.key === " ") {
        setPaused(!paused);
      }
    };

    window.addEventListener("keydown", handleSpaceDown);

    return () => {
      window.removeEventListener("keydown", handleSpaceDown);
    };
  }, [paused]);
}

export function timerResetShortcut({ timeLeft, setTimeLeft }) {
  useEffect(() => {
    const handleResetDown = (event) => {
      if (event.key === "r") {
        setTimeLeft(1800);
      }
    };

    window.addEventListener("keydown", handleResetDown);

    return () => {
      window.removeEventListener("keydown", handleResetDown);
    };
  }, [timeLeft]);
}

export function studyFlipShortcut({ setFlipped }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === " ") {
        event.preventDefault();
        setFlipped((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
}

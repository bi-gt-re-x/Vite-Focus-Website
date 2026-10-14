import dayjs from "dayjs";

export function formatClock({ currentTime }) {
    currentTime = dayjs().format('HH:mm');
    return (currentTime);
}

export function formatClockBasedOnTime({ time }) {
    if (time >= 3600) {
        time = dayjs().format('HH:mm');
        return (time);
    }

    else {
        time = dayjs().format('mm');
        return(time);
    }
}

export function dailyReset({ setFocusToday }) {
    const d = dayjs();

    const isMidnight = 
    d.hour() === 0 && 
    d.minute() === 0 && 
    d.second() === 0 && 
    d.millisecond() === 0;

    if (isMidnight === true) {
        setFocusToday(0);
    }

}
import dayjs from "dayjs";

export function formatClock({ currentTime }) {
    currentTime = dayjs().format('HH:mm');
    return (currentTime);
}

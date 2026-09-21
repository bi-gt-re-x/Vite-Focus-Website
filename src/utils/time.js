import dayjs from "dayjs";

export function formatClock() {
    const currentTime = dayjs().format('HH:mm');
    return (currentTime);
}

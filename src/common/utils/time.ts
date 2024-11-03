export function timeToSeconds(time: string) {
    const [houres = '0', minutes = '0', seconds = '0'] = time.split(":");
    const hourInSeconds = Number(houres) * 3600;
    const minutesInSeconds = Number(minutes) * 60;
    return hourInSeconds + minutesInSeconds + Number(seconds);
}
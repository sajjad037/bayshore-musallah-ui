import moment from 'moment'

const TIME_24_HOUR_FORMAT: string = "HH:mm";
const TIME_24_HOUR_FORMAT_WITH_SEC: string = `${TIME_24_HOUR_FORMAT}:ss`;
const TIME_AM_PM_FORMAT: string = "hh:mm A";
const TIME_AM_PM_FORMAT_WITH_SEC: string = "hh:mm:ss A";

export const getTimestamp = () => new Date().toISOString().replace(/\.\d{3}Z/u, "");

export function getCurrentDateDD_MM_YYYY() {
    return moment().format('DD-MM-YYYY');
}

export function getCurrentDateDD_MMM_YYYY() {
    return moment().format('DD-MMM-YYYY');
}

export function getReadableCurrentDate() {
    return moment().format('dddd, Do MMMM  YYYY');
}

export function getReadableCurrentTimeAmPm() {
    return moment().format(TIME_AM_PM_FORMAT_WITH_SEC);
}

export function getReadableCurrentTime24H() {
    return moment().format(TIME_24_HOUR_FORMAT_WITH_SEC);
}

export function getReadableCurrentTime(timeIn24Format: boolean) {
    if (timeIn24Format) {
        return getReadableCurrentTime24H();
    } else {
        return getReadableCurrentTimeAmPm();
    }
}

export function convertAmPmTimeTo24H(amPmTime: string) {
    return moment(amPmTime, [TIME_AM_PM_FORMAT]).format(TIME_24_HOUR_FORMAT);
}

export function convert24HTimeToAmPm(time24H: string) {
    return moment(time24H, [TIME_24_HOUR_FORMAT]).format(TIME_AM_PM_FORMAT);
}

export function convertTime(time24H: string, timeIn24Format: boolean) {
    if (timeIn24Format) {
        return time24H;
    } else {
        return convert24HTimeToAmPm(time24H)
    }
}

export function addMinutesToGivenTime(givenTime: string, addMinutes: number, timeIn24Format: boolean) {
    // const divisibleValue : number = addMinutes % 5
    // if(divisibleValue != 0) {
    //     addMinutes = addMinutes + (5 - divisibleValue)
    // }

    if (timeIn24Format) {
        return moment(givenTime, TIME_24_HOUR_FORMAT).add(addMinutes, 'minutes').format(TIME_24_HOUR_FORMAT);
    } else {
        return moment(givenTime, TIME_AM_PM_FORMAT).add(addMinutes, 'minutes').format(TIME_AM_PM_FORMAT);
    }
    
}
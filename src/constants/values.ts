import { iIslamicDate, iPrayerTime, iPrayerTable, iPrayTime } from "../types/aladhan"
import { getCurrentDateDD_MMM_YYYY, convertTime } from "../utils/dateTimeUtils"

import { PrayerName } from '../constants/labels'


export namespace Location {
    export const city: string = "Ottawa"
    export const state: string = "Ontario"
    export const country: string = "Canada"
}

export namespace Aladhan {
    export const islamicDate: iIslamicDate = { en: '', ar: '' }

    export function getStaticPrayerTime(timeIn24Format: boolean) {
        const fajrTime: string = "05:39";
        const sunriseTime: string = "07:05";
        const dhuhrTime: string = "11:49";
        const asrTime: string = "14:10";
        const sunsetTime: string = "16:26";
        const maghribTime: string = "16:31";
        const ishaTime: string = "17:57";
        const imsakTime: string = "05:35";
        const midnightTime: string = "23:49";

        const prayerTime: iPrayerTime = {
            fajr: convertTime(fajrTime, timeIn24Format),
            sunrise: convertTime(sunriseTime, timeIn24Format),
            dhuhr: convertTime(dhuhrTime, timeIn24Format),
            asr: convertTime(asrTime, timeIn24Format),
            sunset: convertTime(sunsetTime, timeIn24Format),
            maghrib: convertTime(maghribTime, timeIn24Format),
            isha: convertTime(ishaTime, timeIn24Format),
            imsak: convertTime(imsakTime, timeIn24Format),
            midnight: convertTime(midnightTime, timeIn24Format),
            date: getCurrentDateDD_MMM_YYYY(),
            method: "Islamic Society of North America (ISNA)",
            timezone: "Eastern Standard Time",
            islamicDate: islamicDate
        }

        return prayerTime;
    }

    export function getStaticPrayerTable(timeIn24Format: boolean) {
        const prayerTime: iPrayTime[] = [
            {
                prayerName: PrayerName.fajar,
                athan: convertTime("05:39", timeIn24Format),
                iqama: convertTime("06:15", timeIn24Format)
            },
            {
                prayerName: PrayerName.dhuhr,
                athan: convertTime("11:49", timeIn24Format),
                iqama: convertTime("12:30", timeIn24Format)
            },
            {
                prayerName: PrayerName.asr,
                athan: convertTime("14:10", timeIn24Format),
                iqama: convertTime("14:30", timeIn24Format),
            },
            {
                prayerName: PrayerName.maghrib,
                athan: convertTime("16:31", timeIn24Format),
                iqama: convertTime("16:36", timeIn24Format),
            },
            {
                prayerName: PrayerName.isha,
                athan: convertTime("17:57", timeIn24Format),
                iqama: convertTime("19:00", timeIn24Format),
            },
            {
                prayerName: PrayerName.jumma1,
                athan: convertTime("11:49", timeIn24Format),
                iqama: convertTime("12:15", timeIn24Format)
            },
            {
                prayerName: PrayerName.jumma2,
                athan: convertTime("11:49", timeIn24Format),
                iqama: convertTime("13:00", timeIn24Format)
            }
        ]

        const prayerTable: iPrayerTable = {
            times: prayerTime,
            sunrise: convertTime("07:05", timeIn24Format),
            islamicDate: islamicDate
        }


        return prayerTable;
    }
}


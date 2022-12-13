import axios from "axios"

import { getCurrentDateDD_MM_YYYY, convertTime, addMinutesToGivenTime } from '../utils/dateTimeUtils'
import { iIslamicDate, iPrayerTable, iPrayerTime, iPrayTime } from '../types/aladhan'
import { Location, Aladhan } from '../constants/values'
import { PrayerName } from '../constants/labels'

export class AladhanAPI {

    public async getIslamicDate(): Promise<any> {
        const response = await axios.get(`http://api.aladhan.com/v1/gToH?date=${getCurrentDateDD_MM_YYYY()}`);
        const islamicDate: iIslamicDate = Aladhan.islamicDate
        const responseData = response.data
        if (responseData.code === 200) {
            const hijri = responseData.data.hijri
            islamicDate.en = `${hijri.day}-${hijri.month.en}-${hijri.year}`
            islamicDate.ar = `${hijri.year}-${hijri.day}-${hijri.month.ar}`
        }
        return islamicDate;
    }

    public async getTodayPrayTime(timeIn24Format: boolean): Promise<any> {
        // Method: 2 - Islamic Society of North America
        // School: 0 - Shafi

        const prayerTime: iPrayerTime = Aladhan.getStaticPrayerTime(timeIn24Format)
        const prayerTable: iPrayerTable = Aladhan.getStaticPrayerTable(timeIn24Format)

        const response = await axios.get(`https://api.aladhan.com/v1/timingsByCity?city=${Location.city}&country=${Location.country}&state=${Location.state}&method=2&date_or_timestamp=${getCurrentDateDD_MM_YYYY()}&school=0`);
        const responseData = response.data
        if (responseData.code === 200) {
            const timings = responseData.data.timings
            prayerTime.fajr = convertTime(timings.Fajr, timeIn24Format);
            prayerTime.sunrise = convertTime(timings.Sunrise, timeIn24Format);
            prayerTime.dhuhr = convertTime(timings.Dhuhr, timeIn24Format); 
            prayerTime.asr = convertTime(timings.Asr, timeIn24Format);
            prayerTime.sunset = convertTime(timings.Sunset, timeIn24Format);
            prayerTime.maghrib = convertTime(timings.Maghrib, timeIn24Format);
            prayerTime.isha = convertTime(timings.Isha, timeIn24Format); 
            prayerTime.imsak = convertTime(timings.Imsak, timeIn24Format);
            prayerTime.midnight = convertTime(timings.Midnight, timeIn24Format);

            const date = responseData.data.date
            prayerTime.date = date.readable

            const meta = responseData.data.meta
            prayerTime.timezone = meta.timezone
            prayerTime.method = meta.method.name

            const hijri = date.hijri
            prayerTime.islamicDate.en = `${hijri.day}-${hijri.month.en}-${hijri.year}`
            prayerTime.islamicDate.ar = `${hijri.year}-${hijri.day}-${hijri.month.ar}`

            //
            const times: iPrayTime[] = [
                {
                    prayerName: PrayerName.fajar,
                    athan: prayerTime.fajr,
                    iqama: addMinutesToGivenTime(prayerTime.fajr, 30, timeIn24Format)
                },
                {
                    prayerName: PrayerName.dhuhr,
                    athan: prayerTime.dhuhr,
                    iqama: addMinutesToGivenTime(prayerTime.dhuhr, 41, timeIn24Format)
                },
                {
                    prayerName: PrayerName.asr,
                    athan: prayerTime.asr,
                    iqama: addMinutesToGivenTime(prayerTime.asr, 20, timeIn24Format)
                },
                {
                    prayerName: PrayerName.maghrib,
                    athan: prayerTime.maghrib,
                    iqama: addMinutesToGivenTime(prayerTime.maghrib, 5, timeIn24Format)
                },
                {
                    prayerName: PrayerName.isha,
                    athan: prayerTime.isha,
                    iqama: addMinutesToGivenTime(prayerTime.maghrib, 120, timeIn24Format)
                },
                {
                    prayerName: PrayerName.jumma1,
                    athan: prayerTime.dhuhr,
                    iqama: convertTime("12:15", timeIn24Format)
                },
                {
                    prayerName: PrayerName.jumma2,
                    athan: prayerTime.dhuhr,
                    iqama: convertTime("13:00", timeIn24Format)
                }
            ]
            prayerTable.times = times
            prayerTable.sunrise = prayerTime.sunrise
            prayerTable.islamicDate = prayerTime.islamicDate
        }
        return prayerTable;
    }



}
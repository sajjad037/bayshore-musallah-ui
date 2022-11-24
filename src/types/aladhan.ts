export interface iIslamicDate {
    en: string,
    ar: string
}

export interface iPrayerTime {
    fajr: string;
    sunrise: string;
    dhuhr: string;
    asr: string;
    sunset: string;
    maghrib: string;
    isha: string;
    imsak: string;
    midnight: string;
    date: string;
    method: string;
    timezone: string;
    islamicDate: iIslamicDate
}

export interface iPrayTime {
    prayerName: string;
    athan: string;
    iqama: string;
}

export interface iPrayerTable {
    times: iPrayTime[],
    sunrise: string,
    islamicDate: iIslamicDate
}
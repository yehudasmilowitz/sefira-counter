import { useState, useEffect } from 'react';

interface OmerCount {
  dayCount: number;
  hebrewText: string;
  englishText: string;
  location: string;
  sunsetTime: string;
}

const hebrewNumbers = {
  1: "אחד",
  2: "שנים",
  3: "שלשה",
  4: "ארבעה",
  5: "חמשה",
  6: "ששה",
  7: "שבעה",
  8: "שמונה",
  9: "תשעה",
  10: "עשרה",
  11: "אחד עשר",
  12: "שנים עשר",
  13: "שלשה עשר",
  14: "ארבעה עשר",
  15: "חמשה עשר",
  16: "ששה עשר",
  17: "שבעה עשר",
  18: "שמונה עשר",
  19: "תשעה עשר",
  20: "עשרים",
  30: "שלשים",
  40: "ארבעים",
};

// Full proper Hebrew text for each day of the Omer
const hebrewOmerTexts: { [key: number]: string } = {
  1: "הַיּוֹם אֶחָד יוֹם לָעוֹמֶר",
  2: "הַיּוֹם שְׁנַיִם יָמִים לָעוֹמֶר",
  3: "הַיּוֹם שְׁלֹשָׁה יָמִים לָעוֹמֶר",
  4: "הַיּוֹם אַרְבָּעָה יָמִים לָעוֹמֶר",
  5: "הַיּוֹם חֲמִשָּׁה יָמִים לָעוֹמֶר",
  6: "הַיּוֹם שִׁשָּׁה יָמִים לָעוֹמֶר",
  7: "הַיּוֹם שִׁבְעָה יָמִים שֶׁהֵם שָׁבוּעַ אֶחָד לָעוֹמֶר",
  8: "הַיּוֹם שְׁמוֹנָה יָמִים שֶׁהֵם שָׁבוּעַ אֶחָד וְיוֹם אֶחָד לָעוֹמֶר",
  9: "הַיּוֹם תִּשְׁעָה יָמִים שֶׁהֵם שָׁבוּעַ אֶחָד וּשְׁנֵי יָמִים לָעוֹמֶר",
  10: "הַיּוֹם עֲשָׂרָה יָמִים שֶׁהֵם שָׁבוּעַ אֶחָד וּשְׁלֹשָׁה יָמִים לָעוֹמֶר",
  11: "הַיּוֹם אַחַד עָשָׂר יוֹם שֶׁהֵם שָׁבוּעַ אֶחָד וְאַרְבָּעָה יָמִים לָעוֹמֶר",
  12: "הַיּוֹם שְׁנֵים עָשָׂר יוֹם שֶׁהֵם שָׁבוּעַ אֶחָד וַחֲמִשָּׁה יָמִים לָעוֹמֶר",
  13: "הַיּוֹם שְׁלֹשָׁה עָשָׂר יוֹם שֶׁהֵם שָׁבוּעַ אֶחָד וְשִׁשָּׁה יָמִים לָעוֹמֶר",
  14: "הַיּוֹם אַרְבָּעָה עָשָׂר יוֹם שֶׁהֵם שְׁנֵי שָׁבוּעוֹת לָעוֹמֶר",
  15: "הַיּוֹם חֲמִשָּׁה עָשָׂר יוֹם שֶׁהֵם שְׁנֵי שָׁבוּעוֹת וְיוֹם אֶחָד לָעוֹמֶר",
  16: "הַיּוֹם שִׁשָּׁה עָשָׂר יוֹם שֶׁהֵם שְׁנֵי שָׁבוּעוֹת וּשְׁנֵי יָמִים לָעוֹמֶר",
  17: "הַיּוֹם שִׁבְעָה עָשָׂר יוֹם שֶׁהֵם שְׁנֵי שָׁבוּעוֹת וּשְׁלֹשָׁה יָמִים לָעוֹמֶר",
  18: "הַיּוֹם שְׁמוֹנָה עָשָׂר יוֹם שֶׁהֵם שְׁנֵי שָׁבוּעוֹת וְאַרְבָּעָה יָמִים לָעוֹמֶר",
  19: "הַיּוֹם תִּשְׁעָה עָשָׂר יוֹם שֶׁהֵם שְׁנֵי שָׁבוּעוֹת וַחֲמִשָּׁה יָמִים לָעוֹמֶר",
  20: "הַיּוֹם עֶשְׂרִים יוֹם שֶׁהֵם שְׁנֵי שָׁבוּעוֹת וְשִׁשָּׁה יָמִים לָעוֹמֶר",
  21: "הַיּוֹם אֶחָד וְעֶשְׂרִים יוֹם שֶׁהֵם שְׁלֹשָׁה שָׁבוּעוֹת לָעוֹמֶר",
  22: "הַיּוֹם שְׁנַיִם וְעֶשְׂרִים יוֹם שֶׁהֵם שְׁלֹשָׁה שָׁבוּעוֹת וְיוֹם אֶחָד לָעוֹמֶר",
  23: "הַיּוֹם שְׁלֹשָׁה וְעֶשְׂרִים יוֹם שֶׁהֵם שְׁלֹשָׁה שָׁבוּעוֹת וּשְׁנֵי יָמִים לָעוֹמֶר",
  24: "הַיּוֹם אַרְבָּעָה וְעֶשְׂרִים יוֹם שֶׁהֵם שְׁלֹשָׁה שָׁבוּעוֹת וּשְׁלֹשָׁה יָמִים לָעוֹמֶר",
  25: "הַיּוֹם חֲמִשָּׁה וְעֶשְׂרִים יוֹם שֶׁהֵם שְׁלֹשָׁה שָׁבוּעוֹת וְאַרְבָּעָה יָמִים לָעוֹמֶר",
  26: "הַיּוֹם שִׁשָּׁה וְעֶשְׂרִים יוֹם שֶׁהֵם שְׁלֹשָׁה שָׁבוּעוֹת וַחֲמִשָּׁה יָמִים לָעוֹמֶר",
  27: "הַיּוֹם שִׁבְעָה וְעֶשְׂרִים יוֹם שֶׁהֵם שְׁלֹשָׁה שָׁבוּעוֹת וְשִׁשָּׁה יָמִים לָעוֹמֶר",
  28: "הַיּוֹם שְׁמוֹנָה וְעֶשְׂרִים יוֹם שֶׁהֵם אַרְבָּעָה שָׁבוּעוֹת לָעוֹמֶר",
  29: "הַיּוֹם תִּשְׁעָה וְעֶשְׂרִים יוֹם שֶׁהֵם אַרְבָּעָה שָׁבוּעוֹת וְיוֹם אֶחָד לָעוֹמֶר",
  30: "הַיּוֹם שְׁלֹשִׁים יוֹם שֶׁהֵם אַרְבָּעָה שָׁבוּעוֹת וּשְׁנֵי יָמִים לָעוֹמֶר",
  31: "הַיּוֹם אֶחָד וּשְׁלֹשִׁים יוֹם שֶׁהֵם אַרְבָּעָה שָׁבוּעוֹת וּשְׁלֹשָׁה יָמִים לָעוֹמֶר",
  32: "הַיּוֹם שְׁנַיִם וּשְׁלֹשִׁים יוֹם שֶׁהֵם אַרְבָּעָה שָׁבוּעוֹת וְאַרְבָּעָה יָמִים לָעוֹמֶר",
  33: "הַיּוֹם שְׁלֹשָׁה וּשְׁלֹשִׁים יוֹם שֶׁהֵם אַרְבָּעָה שָׁבוּעוֹת וַחֲמִשָּׁה יָמִים לָעוֹמֶר",
  34: "הַיּוֹם אַרְבָּעָה וּשְׁלֹשִׁים יוֹם שֶׁהֵם אַרְבָּעָה שָׁבוּעוֹת וְשִׁשָּׁה יָמִים לָעוֹמֶר",
  35: "הַיּוֹם חֲמִשָּׁה וּשְׁלֹשִׁים יוֹם שֶׁהֵם חֲמִשָּׁה שָׁבוּעוֹת לָעוֹמֶר",
  36: "הַיּוֹם שִׁשָּׁה וּשְׁלֹשִׁים יוֹם שֶׁהֵם חֲמִשָּׁה שָׁבוּעוֹת וְיוֹם אֶחָד לָעוֹמֶר",
  37: "הַיּוֹם שִׁבְעָה וּשְׁלֹשִׁים יוֹם שֶׁהֵם חֲמִשָּׁה שָׁבוּעוֹת וּשְׁנֵי יָמִים לָעוֹמֶר",
  38: "הַיּוֹם שְׁמוֹנָה וּשְׁלֹשִׁים יוֹם שֶׁהֵם חֲמִשָּׁה שָׁבוּעוֹת וּשְׁלֹשָׁה יָמִים לָעוֹמֶר",
  39: "הַיּוֹם תִּשְׁעָה וּשְׁלֹשִׁים יוֹם שֶׁהֵם חֲמִשָּׁה שָׁבוּעוֹת וְאַרְבָּעָה יָמִים לָעוֹמֶר",
  40: "הַיּוֹם אַרְבָּעִים יוֹם שֶׁהֵם חֲמִשָּׁה שָׁבוּעוֹת וַחֲמִשָּׁה יָמִים לָעוֹמֶר",
  41: "הַיּוֹם אֶחָד וְאַרְבָּעִים יוֹם שֶׁהֵם חֲמִשָּׁה שָׁבוּעוֹת וְשִׁשָּׁה יָמִים לָעוֹמֶר",
  42: "הַיּוֹם שְׁנַיִם וְאַרְבָּעִים יוֹם שֶׁהֵם שִׁשָּׁה שָׁבוּעוֹת לָעוֹמֶר",
  43: "הַיּוֹם שְׁלֹשָׁה וְאַרְבָּעִים יוֹם שֶׁהֵם שִׁשָּׁה שָׁבוּעוֹת וְיוֹם אֶחָד לָעוֹמֶר",
  44: "הַיּוֹם אַרְבָּעָה וְאַרְבָּעִים יוֹם שֶׁהֵם שִׁשָּׁה שָׁבוּעוֹת וּשְׁנֵי יָמִים לָעוֹמֶר",
  45: "הַיּוֹם חֲמִשָּׁה וְאַרְבָּעִים יוֹם שֶׁהֵם שִׁשָּׁה שָׁבוּעוֹת וּשְׁלֹשָׁה יָמִים לָעוֹמֶר",
  46: "הַיּוֹם שִׁשָּׁה וְאַרְבָּעִים יוֹם שֶׁהֵם שִׁשָּׁה שָׁבוּעוֹת וְאַרְבָּעָה יָמִים לָעוֹמֶר",
  47: "הַיּוֹם שִׁבְעָה וְאַרְבָּעִים יוֹם שֶׁהֵם שִׁשָּׁה שָׁבוּעוֹת וַחֲמִשָּׁה יָמִים לָעוֹמֶר",
  48: "הַיּוֹם שְׁמוֹנָה וְאַרְבָּעִים יוֹם שֶׁהֵם שִׁשָּׁה שָׁבוּעוֹת וְשִׁשָּׁה יָמִים לָעוֹמֶר",
  49: "הַיּוֹם תִּשְׁעָה וְאַרְבָּעִים יוֹם שֶׁהֵם שִׁבְעָה שָׁבוּעוֹת לָעוֹמֶר"
};

export const useOmerCount = (): OmerCount => {
  const [dayCount, setDayCount] = useState(0);
  const [location, setLocation] = useState('Loading...');
  const [sunsetTime, setSunsetTime] = useState('Loading...');
  const [sunsetDate, setSunsetDate] = useState<Date | null>(null);

  useEffect(() => {
    const getLocation = async () => {
      try {
        const position = await new Promise<GeolocationPosition>((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });
        
        const { latitude, longitude } = position.coords;
        setLocation(`${latitude.toFixed(2)}°N, ${longitude.toFixed(2)}°E`);
        
        const sunset = await getSunsetTime(latitude, longitude);
        setSunsetDate(sunset);
        setSunsetTime(sunset.toLocaleTimeString());
        
        const day = calculateOmerDay(sunset);
        setDayCount(day);
      } catch (error) {
        console.error('Error getting location:', error);
        setLocation('Location unavailable');
        setSunsetTime('Sunset time unavailable');
      }
    };

    getLocation();
  }, []);

  // Set up a timer to check if we've passed sunset
  useEffect(() => {
    if (!sunsetDate) return;

    const checkSunset = () => {
      const now = new Date();
      const currentTime = now.getTime();
      const sunsetTime = sunsetDate.getTime();
      
      // If we've passed sunset, recalculate the day
      if (currentTime > sunsetTime) {
        const newDay = calculateOmerDay(sunsetDate);
        if (newDay !== dayCount) {
          setDayCount(newDay);
        }
      }
    };

    // Check immediately
    checkSunset();
    
    // Then check every minute
    const intervalId = setInterval(checkSunset, 60000);
    
    return () => clearInterval(intervalId);
  }, [sunsetDate, dayCount]);

  const getSunsetTime = async (lat: number, lon: number): Promise<Date> => {
    const response = await fetch(
      `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lon}&formatted=0`
    );
    const data = await response.json();
    return new Date(data.results.sunset);
  };

  const calculateOmerDay = (sunset: Date): number => {
    const now = new Date();
    const currentTime = now.getTime();
    const sunsetTime = sunset.getTime();

    const jewishDay = new Date(now);
    if (currentTime < sunsetTime) {
      jewishDay.setDate(jewishDay.getDate() - 1);
    }
    jewishDay.setHours(0, 0, 0, 0);

    const startDate = getPesachDate(jewishDay.getFullYear());
    startDate.setHours(0, 0, 0, 0);

    if (jewishDay < startDate) {
      const lastYearStart = getPesachDate(jewishDay.getFullYear() - 1);
      lastYearStart.setHours(0, 0, 0, 0);
      const daysSinceLastYear =
        Math.floor((jewishDay.getTime() - lastYearStart.getTime()) / (1000 * 60 * 60 * 24)) + 1;
      return daysSinceLastYear <= 49 ? daysSinceLastYear : 0;
    }

    const daysSincePesach =
      Math.floor((jewishDay.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)) + 1;
    return daysSincePesach > 0 && daysSincePesach <= 49 ? daysSincePesach : 0;
  };

  const getPesachDate = (year: number): Date => {
    const pesachDates: { [key: number]: Date } = {
      2024: new Date(2024, 3, 23),
      2025: new Date(2025, 3, 13),
      2026: new Date(2026, 3, 2),
      2027: new Date(2027, 3, 22),
      2028: new Date(2028, 3, 11),
      2029: new Date(2029, 2, 31),
      2030: new Date(2030, 3, 18),
    };

    return pesachDates[year] || new Date(year, 3, 16);
  };

  const getEnglishCount = (day: number): string => {
    const weeks = Math.floor(day / 7);
    const remainingDays = day % 7;

    let text = `Today is ${day} `;
    text += day === 1 ? "day" : "days";

    if (weeks > 0) {
      text += `, which is ${weeks} `;
      text += weeks === 1 ? "week" : "weeks";
      if (remainingDays > 0) {
        text += ` and ${remainingDays} `;
        text += remainingDays === 1 ? "day" : "days";
      }
    }

    text += " of the Omer";
    return text;
  };

  return {
    dayCount,
    hebrewText: dayCount > 0 ? hebrewOmerTexts[dayCount] || "אין ספירה היום" : "אין ספירה היום",
    englishText: dayCount > 0 ? getEnglishCount(dayCount) : "No counting today",
    location,
    sunsetTime,
  };
}; 

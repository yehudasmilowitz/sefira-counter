import { useState, useEffect } from 'react';

export const useCountedDays = () => {
    const [countedDays, setCountedDays] = useState<number[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const loadCountedDays = () => {
            const stored = localStorage.getItem('countedDays');
            if (stored) {
                setCountedDays(JSON.parse(stored));
            }
            setIsLoaded(true);
        };

        loadCountedDays();
    }, []);

    const isDayCounted = (day: number) => {
        return countedDays.includes(day);
    };

    const toggleDayCounted = (day: number) => {
        const newCountedDays = isDayCounted(day)
            ? countedDays.filter(d => d !== day)
            : [...countedDays, day].sort((a, b) => a - b);
        
        setCountedDays(newCountedDays);
        localStorage.setItem('countedDays', JSON.stringify(newCountedDays));
    };

    return {
        countedDays,
        isLoaded,
        isDayCounted,
        toggleDayCounted
    };
}; 

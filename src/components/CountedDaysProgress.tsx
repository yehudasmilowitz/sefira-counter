import React from 'react';

interface CountedDaysProgressProps {
    countedDays: number[];
    totalDays: number;
}

export const CountedDaysProgress: React.FC<CountedDaysProgressProps> = ({ countedDays, totalDays }) => {
    const progress = (countedDays.length / totalDays) * 100;

    return (
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
                className="bg-blue-600 h-2.5 rounded-full transition-all duration-500 ease-in-out"
                style={{ width: `${progress}%` }}
            />
        </div>
    );
}; 

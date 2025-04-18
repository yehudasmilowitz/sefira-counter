import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';

interface PreviousDaysStatusProps {
    currentDay: number;
    countedDays: number[];
    onToggleDay: (day: number) => void;
}

export const PreviousDaysStatus: React.FC<PreviousDaysStatusProps> = ({
    currentDay,
    countedDays,
    onToggleDay,
}) => {
    const days = Array.from({ length: currentDay - 1 }, (_, i) => i + 1);

    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                Previous Days
            </h3>
            <div className="grid grid-cols-7 gap-2">
                {days.map((day) => (
                    <motion.button
                        key={day}
                        onClick={() => onToggleDay(day)}
                        className={`p-2 rounded-lg flex items-center justify-center transition-colors ${countedDays.includes(day)
                                ? 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300'
                                : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                            }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {countedDays.includes(day) ? (
                            <CheckCircleIcon className="h-5 w-5" />
                        ) : (
                            <XCircleIcon className="h-5 w-5" />
                        )}
                        <span className="ml-1 text-sm">{day}</span>
                    </motion.button>
                ))}
            </div>
        </div>
    );
}; 

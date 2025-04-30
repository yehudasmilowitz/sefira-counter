import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useOmerCount } from '../hooks/useOmerCount';
import { getKabbalisticInsight, KabbalisticDay } from '../utils/kabbalisticInsights';
import { SparklesIcon, LightBulbIcon, CalendarIcon, BookOpenIcon, CheckCircleIcon, MapPinIcon, ArrowPathIcon } from '@heroicons/react/24/outline';
import LocationInfo from '../components/LocationInfo';
import { useCountedDays } from '../hooks/useCountedDays';
import confetti from 'canvas-confetti';

export const Counter: React.FC = () => {
    const { dayCount, hebrewText, englishText, sunsetTime, isLoading, error } = useOmerCount();
    const { isLoaded, isDayCounted, toggleDayCounted } = useCountedDays();
    const [insight, setInsight] = useState<KabbalisticDay | null>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (dayCount > 0) {
            setInsight(getKabbalisticInsight(dayCount));
        }
    }, [dayCount]);

    const handleCountClick = () => {
        const wasCounted = isDayCounted(dayCount);
        toggleDayCounted(dayCount);

        if (!wasCounted) {
            // Left burst
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { x: 0, y: 0.5 },
                angle: 60,
                startVelocity: 45,
                gravity: 0.5,
                ticks: 200,
                colors: ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF']
            });

            // Right burst
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { x: 1, y: 0.5 },
                angle: 120,
                startVelocity: 45,
                gravity: 0.5,
                ticks: 200,
                colors: ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF']
            });
        }
    };

    if (isLoading || !isLoaded) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 dark:border-white mx-auto"></div>
                    <p className="mt-4 text-gray-600 dark:text-gray-400">Loading...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="container mx-auto px-4 py-8"
            >
                <div className="max-w-3xl mx-auto">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 space-y-6">
                        <div className="text-center">
                            <MapPinIcon className="h-12 w-12 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                Location Required
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                {error.message}
                            </p>
                        </div>

                        <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl">
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
                                Dvar Torah: The Importance of Location
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                {error.dvarTorah}
                            </p>
                        </div>

                        <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl">
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
                                How to Enable Location Access
                            </h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Chrome / Edge:</h4>
                                    <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-1">
                                        <li>Click the lock icon in the address bar</li>
                                        <li>Click "Site settings"</li>
                                        <li>Find "Location" and change it to "Allow"</li>
                                        <li>Refresh this page</li>
                                    </ol>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Safari:</h4>
                                    <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-1">
                                        <li>Click "Safari" in the menu bar</li>
                                        <li>Go to "Settings" → "Websites"</li>
                                        <li>Select "Location" on the left</li>
                                        <li>Find this website and change to "Allow"</li>
                                        <li>Refresh this page</li>
                                    </ol>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Firefox:</h4>
                                    <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-1">
                                        <li>Click the lock icon in the address bar</li>
                                        <li>Click "Connection" → "More Information"</li>
                                        <li>Go to "Permissions" tab</li>
                                        <li>Find "Access your location" and click "Allow"</li>
                                        <li>Refresh this page</li>
                                    </ol>
                                </div>
                            </div>
                        </div>

                        <div className="text-center">
                            <button
                                onClick={() => window.location.reload()}
                                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                <ArrowPathIcon className="h-4 w-4 mr-2" />
                                Refresh Page
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="container mx-auto px-4 py-4"
        >
            <LocationInfo />

            <div className="max-w-3xl mx-auto w-full mt-4">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4">
                    <div className="flex flex-col space-y-4">
                        {/* Bracha Section */}
                        <div className="text-center p-4 bg-gray-50 dark:bg-gray-900 rounded-xl relative overflow-hidden">
                            <div className="absolute -top-4 -right-4 opacity-10">
                                <SparklesIcon className="h-16 w-16 text-gray-500 dark:text-gray-400" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center justify-center">
                                <SparklesIcon className="h-4 w-4 mr-2 text-gray-500 dark:text-gray-400" />
                                Bracha
                            </h3>
                            <div className="font-hebrew text-xl mb-1 text-gray-800 dark:text-gray-200">
                                בָּרוּךְ אַתָּה ה׳ אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם אֲשֶׁר קִדְּשָׁנוּ בְּמִצְוֹתָיו וְצִוָּנוּ עַל סְפִירַת הָעֹמֶר
                            </div>
                            <div className="text-sm text-gray-700 dark:text-gray-300">
                                Blessed are You, Lord our God, King of the Universe, who has sanctified us with His commandments and commanded us concerning the counting of the Omer.
                            </div>
                        </div>
                        {/* Day Count Section */}
                        <div className="text-center relative p-4 bg-gray-50 dark:bg-gray-900 rounded-xl">
                            <motion.div
                                className="text-5xl font-bold text-gray-900 dark:text-white mb-2 flex flex-col items-center"
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <span>Day</span>
                                <span>{dayCount}</span>
                            </motion.div>
                            <div className="font-hebrew text-2xl mb-2 text-gray-800 dark:text-gray-200">{hebrewText}</div>
                            <div className="text-base text-gray-700 dark:text-gray-300">{englishText}</div>

                            {sunsetTime && (
                                <div className="mt-2 inline-flex items-center text-xs text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                                    <CalendarIcon className="h-3 w-3 mr-1" />
                                    Sunset: {sunsetTime}
                                </div>
                            )}

                            <div className="mt-4">
                                {isLoaded && (
                                    <motion.button
                                        ref={buttonRef}
                                        onClick={handleCountClick}
                                        className={`w-56 mx-auto inline-flex items-center justify-center px-6 py-3 rounded-lg transition-colors ${isDayCounted(dayCount)
                                            ? 'bg-green-500 text-white'
                                            : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                                            }`}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <CheckCircleIcon className={`h-5 w-5 mr-2 ${isDayCounted(dayCount)
                                            ? 'text-white'
                                            : 'text-gray-500 dark:text-gray-400'
                                            }`} />
                                        {isDayCounted(dayCount) ? 'Counted' : 'Mark as Counted'}
                                    </motion.button>
                                )}
                            </div>
                        </div>

                        {/* Progress Section */}
                        <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-xl">
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                                Progress: {dayCount} / 49 Days
                            </h3>
                            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                <div
                                    className="bg-blue-600 h-2.5 rounded-full transition-all duration-500 ease-in-out"
                                    style={{ width: `${(dayCount / 49) * 100}%` }}
                                />
                            </div>
                        </div>

                        {/* Kabbalistic Insight Section */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="bg-gray-50 dark:bg-gray-900 p-4 rounded-xl relative overflow-hidden"
                        >
                            <div className="absolute -bottom-4 -left-4 opacity-10">
                                <LightBulbIcon className="h-16 w-16 text-gray-500 dark:text-gray-400" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center">
                                <LightBulbIcon className="h-4 w-4 mr-2 text-gray-500 dark:text-gray-400" />
                                Kabbalistic Insight
                            </h3>

                            {insight ? (
                                <div className="space-y-2 text-sm">
                                    <div>
                                        <h4 className="font-semibold text-gray-800 dark:text-gray-200">Attributes:</h4>
                                        <p className="text-gray-700 dark:text-gray-300">{insight.attributes}</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800 dark:text-gray-200">Insight:</h4>
                                        <p className="text-gray-700 dark:text-gray-300">{insight.insight}</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800 dark:text-gray-200">Sefirah:</h4>
                                        <p className="font-hebrew text-gray-700 dark:text-gray-300">{insight.sefirah}</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800 dark:text-gray-200">Middah:</h4>
                                        <p className="text-gray-700 dark:text-gray-300">{insight.middah}</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800 dark:text-gray-200">Torah:</h4>
                                        <p className="text-gray-700 dark:text-gray-300">{insight.torah}</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800 dark:text-gray-200">Prayer:</h4>
                                        <p className="text-gray-700 dark:text-gray-300">{insight.tefillah}</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800 dark:text-gray-200">Action:</h4>
                                        <p className="text-gray-700 dark:text-gray-300">{insight.maaseh}</p>
                                    </div>
                                </div>
                            ) : (
                                <p className="text-gray-700 dark:text-gray-300">Loading insight...</p>
                            )}
                        </motion.div>

                        {/* Dvar Torah Section */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="bg-gray-50 dark:bg-gray-900 p-4 rounded-xl relative overflow-hidden"
                        >
                            <div className="absolute -bottom-4 -right-4 opacity-10">
                                <BookOpenIcon className="h-16 w-16 text-gray-500 dark:text-gray-400" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center">
                                <BookOpenIcon className="h-4 w-4 mr-2 text-gray-500 dark:text-gray-400" />
                                Dvar Torah
                            </h3>

                            {insight ? (
                                <div className="prose dark:prose-invert max-w-none text-sm">
                                    <pre className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap font-sans">{insight.dvarTorah}</pre>
                                </div>
                            ) : (
                                <p className="text-gray-700 dark:text-gray-300">Loading dvar Torah...</p>
                            )}
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Counter; 

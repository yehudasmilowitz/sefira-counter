import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useOmerCount } from '../hooks/useOmerCount';
import { getKabbalisticInsight, KabbalisticDay } from '../utils/kabbalisticInsights';
import { SparklesIcon, LightBulbIcon, CalendarIcon, BookOpenIcon } from '@heroicons/react/24/outline';
import LocationInfo from '../components/LocationInfo';

const Counter = () => {
    const { dayCount, hebrewText, englishText, location, sunsetTime } = useOmerCount();
    const [insight, setInsight] = useState<KabbalisticDay | null>(null);

    useEffect(() => {
        if (dayCount > 0) {
            setInsight(getKabbalisticInsight(dayCount));
        }
    }, [dayCount]);

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
                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{insight.dvarTorah}</p>
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

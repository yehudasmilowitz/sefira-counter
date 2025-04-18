import { motion } from 'framer-motion';

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="container mx-auto px-4 py-8"
        >
            <div className="max-w-4xl mx-auto">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 space-y-8">
                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            Sefiras HaOmer: A Journey of Spiritual Refinement
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            The mitzvah of Sefiras HaOmer is derived from the Torah: "וּסְפַרְתֶּם לָכֶם מִמָּחֳרַת הַשַּׁבָּת, מִיּוֹם הֲבִיאֲכֶם אֶת-עֹמֶר הַתְּנוּפָה, שֶׁבַע שַׁבָּתוֹת, תְּמִימֹת תִּהְיֶינָה" (Vayikra 23:15).
                            This counting represents our journey from יציאת מצרים (the Exodus from Egypt) to מתן תורה (the giving of the Torah).
                        </p>
                        <p className="text-gray-700 dark:text-gray-300">
                            The Baal Shem Tov teaches that each day of the Omer represents a unique combination of the שבע ספירות תחתונות (seven lower sefirot),
                            creating a spiritual journey of תיקון המידות (refinement of character traits) and דביקות (closeness to Hashem).
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                            Chassidic Insights on Sefiras HaOmer
                        </h2>
                        <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl space-y-4">
                            <p className="text-gray-700 dark:text-gray-300">
                                The Alter Rebbe teaches in the Tanya that the counting of the Omer is a time of spiritual preparation,
                                where we refine our animal soul (נפש הבהמית) to make it a proper vessel for receiving the Torah on Shavuot.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300">
                                The Rebbe Rashab explains that each day of the Omer corresponds to a specific combination of sefirot,
                                allowing us to work on different aspects of our character. This is based on the teachings of the Arizal in
                                שער הכוונות and Etz Chaim.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300">
                                The Tzemach Tzedek emphasizes that the counting of the Omer is not merely a mitzvah, but a spiritual
                                journey that transforms us from עבדים (slaves) to בני חורין (free people) in our divine service.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                            The Sefirot Journey: A Kabbalistic Framework
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            The 49 days of the Omer are divided into שבע שבתות תמימות (seven complete weeks), each corresponding to one of the שבע ספירות תחתונות (seven lower sefirot).
                            This framework is based on the teachings of the Arizal in שער הכוונות and is further developed in Chassidic thought.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-xl">
                                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">שבוע ראשון: חסד (Loving-kindness)</h3>
                                <p className="text-sm text-gray-700 dark:text-gray-300">ימים א-ז: Exploring אהבת ישראל and אהבת השם</p>
                            </div>
                            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-xl">
                                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">שבוע שני: גבורה (Discipline)</h3>
                                <p className="text-sm text-gray-700 dark:text-gray-300">ימים ח-יד: Developing יראה and גבורה</p>
                            </div>
                            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-xl">
                                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">שבוע שלישי: תפארת (Harmony)</h3>
                                <p className="text-sm text-gray-700 dark:text-gray-300">ימים טו-כא: Finding רחמים and אמת</p>
                            </div>
                            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-xl">
                                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">שבוע רביעי: נצח (Endurance)</h3>
                                <p className="text-sm text-gray-700 dark:text-gray-300">ימים כב-כח: Building התמדה and נצחון</p>
                            </div>
                            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-xl">
                                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">שבוע חמישי: הוד (Humility)</h3>
                                <p className="text-sm text-gray-700 dark:text-gray-300">ימים כט-לה: Cultivating הודיה and ענוה</p>
                            </div>
                            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-xl">
                                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">שבוע שישי: יסוד (Bonding)</h3>
                                <p className="text-sm text-gray-700 dark:text-gray-300">ימים לו-מב: Strengthening אמונה and קיום</p>
                            </div>
                            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-xl">
                                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">שבוע שביעי: מלכות (Nobility)</h3>
                                <p className="text-sm text-gray-700 dark:text-gray-300">ימים מג-מט: Embracing מלכות and השראת השכינה</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                            הלכות ספירת העומר (Laws of Counting the Omer)
                        </h2>
                        <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl space-y-4">
                            <p className="text-gray-700 dark:text-gray-300">
                                According to the Shulchan Aruch (Orach Chaim 489:1), one should count the Omer while standing,
                                after tzeit hakochavim (nightfall), and with proper kavanah (intention).
                            </p>
                            <p className="text-gray-700 dark:text-gray-300">
                                The Mishnah Berurah (489:1) adds that one should count in a language they understand,
                                though the Hebrew count is preferred. If one misses a day, they should continue counting
                                without a bracha on subsequent days.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300">
                                The Magen Avraham (489:1) notes that the mitzvah is to count both days and weeks,
                                as the Torah states: "שֶׁבַע שַׁבָּתוֹת תְּמִימֹת תִּהְיֶינָה" (seven complete weeks).
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                            ברכת ספירת העומר (The Blessing)
                        </h2>
                        <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl space-y-4">
                            <p className="font-hebrew text-xl text-right text-gray-800 dark:text-gray-200">
                                בָּרוּךְ אַתָּה ה' אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם אֲשֶׁר קִדְּשָׁנוּ בְּמִצְוֹתָיו וְצִוָּנוּ עַל סְפִירַת הָעוֹמֶר
                            </p>
                            <p className="text-gray-700 dark:text-gray-300">
                                Blessed are You, Lord our God, King of the Universe, who has sanctified us with His
                                commandments and commanded us concerning the counting of the Omer.
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 mt-4">
                                After the blessing, one counts both the day and the week. For example, on the first day:
                                "היום יום אחד לעומר" (Today is one day of the Omer).
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                            מקורות (Sources)
                        </h2>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                            <li>תנ"ך: ויקרא כ"ג, ט"ו-ט"ז</li>
                            <li>שולחן ערוך אורח חיים סימן תפ"ט</li>
                            <li>משנה ברורה סימן תפ"ט</li>
                            <li>תניא פרק ל"ב</li>
                            <li>שער הכוונות - האריז"ל</li>
                            <li>עץ חיים - האריז"ל</li>
                            <li>לקוטי תורה - אדמו"ר הזקן</li>
                            <li>מאמרי אדמו"ר הרש"ב</li>
                        </ul>
                    </section>
                </div>
            </div>
        </motion.div>
    );
};

export default About; 

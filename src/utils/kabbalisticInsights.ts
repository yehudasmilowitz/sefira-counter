export interface KabbalisticDay {
  attributes: string;
  insight: string;
  sefirah: string;
  middah: string;
  torah: string;
  tefillah: string;
  maaseh: string;
  dvarTorah: string;
}

export const kabbalisticInsights: Record<number, KabbalisticDay> = {
  1: {
    attributes: "Loving-kindness within Loving-kindness",
    insight: "Today we focus on pure, unbridled love - both for Hashem and for our fellow Jews. The Rebbe teaches that this is the foundation of all divine service.",
    sefirah: "חסד שבחסד",
    middah: "אהבת ישראל - Love of one's fellow Jew",
    torah: "Study the first perek of Pirkei Avos, focusing on the chain of transmission and our connection to Sinai",
    tefillah: "Add the paragraph of 'אהבת עולם' before Shema with extra kavanah",
    maaseh: "Perform three acts of kindness today without being asked",
    dvarTorah: "The Alter Rebbe teaches in Tanya (Chapter 32) that the foundation of all divine service is אהבת ישראל. Just as Hashem's love for us is infinite and unconditional, so too must our love for our fellow Jews be. The Baal Shem Tov adds that this love is the key to bringing the Shechinah into our midst."
  },
  2: {
    attributes: "Discipline within Loving-kindness",
    insight: "True love requires boundaries and structure. The Alter Rebbe teaches that gevurah (discipline) within chesed (kindness) creates a balanced and lasting love.",
    sefirah: "גבורה שבחסד",
    middah: "יראת שמים - Fear of Heaven",
    torah: "Study the second perek of Pirkei Avos, focusing on the balance of Torah study and worldly matters",
    tefillah: "Recite Tehillim 23 with special focus on 'גם כי אלך בגיא צלמות'",
    maaseh: "Set aside a specific time for Torah study and stick to it",
    dvarTorah: "The Maggid of Mezritch explains that גבורה שבחסד represents the necessary boundaries in love. Just as a parent's love must include discipline to guide their child, so too must our love for Hashem include יראה. The Rebbe Rashab teaches that this combination creates a love that is both passionate and enduring."
  },
  3: {
    attributes: "Beauty within Loving-kindness",
    insight: "The harmony of chesed and gevurah creates true beauty in our divine service. The Baal Shem Tov taught that this balance brings joy to Hashem.",
    sefirah: "תפארת שבחסד",
    middah: "שמחה - Joy in serving Hashem",
    torah: "Study the third perek of Pirkei Avos, focusing on the beauty of Torah wisdom",
    tefillah: "Add the paragraph of 'אהבה רבה' before Shema with extra joy",
    maaseh: "Share a Torah insight with someone else",
    dvarTorah: "The Tzemach Tzedek teaches that תפארת שבחסד represents the perfect balance between love and discipline. This harmony creates true beauty in our divine service. The Rebbe adds that this combination is what enables us to serve Hashem with both passion and proper boundaries, creating a beautiful and lasting connection."
  },
  4: {
    attributes: "Victory within Loving-kindness",
    insight: "True victory in divine service comes through persistent acts of kindness. The Maggid of Mezritch taught that this combination leads to lasting spiritual growth.",
    sefirah: "נצח שבחסד",
    middah: "התמדה - Persistence in Torah and mitzvos",
    torah: "Study the fourth perek of Pirkei Avos, focusing on the strength of character",
    tefillah: "Recite the 'נשמת' prayer with extra concentration",
    maaseh: "Complete a mitzvah that you've been putting off",
    dvarTorah: "The Alter Rebbe explains in Likutei Torah that נצח שבחסד represents the victory that comes through persistent acts of kindness. Just as Hashem's kindness to us is constant and unwavering, so too must our kindness be. The Rebbe Rashab adds that this persistence in kindness is what enables us to overcome all obstacles in our divine service."
  },
  5: {
    attributes: "Glory within Loving-kindness",
    insight: "The splendor of chesed is revealed when we recognize Hashem's kindness in every aspect of our lives. The Tzemach Tzedek emphasized this in his teachings.",
    sefirah: "הוד שבחסד",
    middah: "הכרת הטוב - Gratitude",
    torah: "Study the fifth perek of Pirkei Avos, focusing on the importance of gratitude",
    tefillah: "Add extra thanks in the Modim prayer",
    maaseh: "Express gratitude to three people who have helped you",
    dvarTorah: "The Baal Shem Tov teaches that הוד שבחסד represents the recognition and acknowledgment of Hashem's kindness in our lives. The Maggid of Mezritch adds that this gratitude is what enables us to serve Hashem with joy. The Rebbe explains that when we recognize Hashem's kindness, we naturally want to reciprocate through our divine service."
  },
  6: {
    attributes: "Foundation within Loving-kindness",
    insight: "The foundation of all divine service is built on acts of kindness. The Rebbe Rashab taught that this creates a lasting connection to Hashem.",
    sefirah: "יסוד שבחסד",
    middah: "אמונה - Faith",
    torah: "Study the sixth perek of Pirkei Avos, focusing on the acquisition of Torah",
    tefillah: "Recite the 'אשרי' prayer with extra kavanah",
    maaseh: "Strengthen your faith through study of Chassidus",
    dvarTorah: "The Tzemach Tzedek explains in Derech Mitzvosecha that יסוד שבחסד represents the foundation of our connection to Hashem. Just as יסוד connects all the sefiros above it to מלכות below, so too does our kindness connect us to Hashem and enable us to influence the world. The Rebbe adds that this foundation of kindness is what enables all other aspects of our divine service to flourish."
  },
  7: {
    attributes: "Nobility within Loving-kindness",
    insight: "True leadership comes from a foundation of kindness. The Rebbe teaches that this combination enables us to influence others positively.",
    sefirah: "מלכות שבחסד",
    middah: "ענווה - Humility",
    torah: "Study the seventh perek of Pirkei Avos, focusing on the importance of humility",
    tefillah: "Add extra concentration to the first bracha of Shemoneh Esrei",
    maaseh: "Lead by example in an act of kindness",
    dvarTorah: "The Alter Rebbe teaches in Tanya that מלכות שבחסד represents how our kindness should influence and elevate the world around us. The Baal Shem Tov adds that true leadership comes from a place of humility and kindness. The Rebbe Rashab explains that this combination enables us to be a proper vessel for Hashem's kindness to flow through us to others."
  },
  8: {
    attributes: "Loving-kindness within Discipline",
    insight: "Discipline must be tempered with love. The Alter Rebbe teaches that this balance is essential for proper spiritual growth.",
    sefirah: "חסד שבגבורה",
    middah: "יראת חטא - Fear of sin",
    torah: "Study the first perek of Pirkei Avos, focusing on the importance of establishing boundaries",
    tefillah: "Recite the 'אבינו מלכנו' prayer with extra concentration",
    maaseh: "Set a boundary in an area where you need more discipline",
    dvarTorah: "The Maggid of Mezritch explains that חסד שבגבורה represents how our discipline must be tempered with love. The Tzemach Tzedek adds that this combination creates a proper balance in our divine service. The Rebbe teaches that when we approach our spiritual boundaries with love, they become not restrictions but opportunities for growth."
  },
  9: {
    attributes: "Discipline within Discipline",
    insight: "The strength of gevurah lies in its proper application. The Maggid of Mezritch taught that this creates lasting spiritual boundaries.",
    sefirah: "גבורה שבגבורה",
    middah: "עצבות - Seriousness in divine service",
    torah: "Study the second perek of Pirkei Avos, focusing on the balance of Torah and worldly matters",
    tefillah: "Add extra concentration to the 'קדושה' prayer",
    maaseh: "Strengthen your commitment to a specific mitzvah",
    dvarTorah: "The Alter Rebbe teaches in Tanya that גבורה שבגבורה represents the strength to maintain our spiritual boundaries even when challenged. The Baal Shem Tov adds that this strength comes from recognizing that these boundaries are expressions of Hashem's love. The Rebbe Rashab explains that this double gevurah enables us to overcome all obstacles in our divine service."
  },
  10: {
    attributes: "Beauty within Discipline",
    insight: "True beauty emerges when discipline is balanced with harmony. The Baal Shem Tov taught that this creates lasting spiritual growth.",
    sefirah: "תפארת שבגבורה",
    middah: "שמחה - Joy in serving Hashem",
    torah: "Study the third perek of Pirkei Avos, focusing on the beauty of Torah wisdom",
    tefillah: "Recite the 'נשמת' prayer with extra joy",
    maaseh: "Find joy in your spiritual discipline",
    dvarTorah: "The Tzemach Tzedek explains that תפארת שבגבורה represents how our discipline can become beautiful when balanced with harmony. The Maggid of Mezritch adds that this beauty comes from recognizing that our boundaries are expressions of Hashem's will. The Rebbe teaches that when we approach our spiritual discipline with joy and harmony, it becomes not a burden but a beautiful expression of our connection to Hashem."
  },
  11: {
    attributes: "Victory within Discipline",
    insight: "True victory comes through persistent discipline. The Tzemach Tzedek emphasized this in his teachings on spiritual growth.",
    sefirah: "נצח שבגבורה",
    middah: "התמדה - Persistence in Torah and mitzvos",
    torah: "Study the fourth perek of Pirkei Avos, focusing on the strength of character",
    tefillah: "Add extra concentration to the 'מודים' prayer",
    maaseh: "Maintain your spiritual discipline even when challenged",
    dvarTorah: "The Alter Rebbe explains in Likutei Torah that נצח שבגבורה represents the victory that comes through persistent acts of kindness. Just as Hashem's kindness to us is constant and unwavering, so too must our kindness be. The Rebbe Rashab adds that this persistence in kindness is what enables us to overcome all obstacles in our divine service."
  },
  12: {
    attributes: "Glory within Discipline",
    insight: "The splendor of gevurah is revealed when we maintain proper spiritual boundaries. The Rebbe Rashab taught that this creates lasting spiritual growth.",
    sefirah: "הוד שבגבורה",
    middah: "הכרת הטוב - Gratitude",
    torah: "Study the fifth perek of Pirkei Avos, focusing on the importance of gratitude",
    tefillah: "Recite the 'אשרי' prayer with extra kavanah",
    maaseh: "Express gratitude for the strength to maintain spiritual discipline",
    dvarTorah: "The Tzemach Tzedek explains that הוד שבגבורה represents the recognition and acknowledgment of Hashem's love in our lives. The Maggid of Mezritch adds that this gratitude is what enables us to serve Hashem with joy. The Rebbe teaches that when we recognize Hashem's love, we naturally want to reciprocate through our divine service."
  },
  13: {
    attributes: "Foundation within Discipline",
    insight: "The foundation of gevurah is built on proper spiritual boundaries. The Rebbe teaches that this creates a lasting connection to Hashem.",
    sefirah: "יסוד שבגבורה",
    middah: "אמונה - Faith",
    torah: "Study the sixth perek of Pirkei Avos, focusing on the acquisition of Torah",
    tefillah: "Add extra concentration to the 'אשרי' prayer",
    maaseh: "Strengthen your faith through study of Chassidus",
    dvarTorah: "The Tzemach Tzedek explains that יסוד שבגבורה represents the foundation of our connection to Hashem. Just as יסוד connects all the sefiros above it to מלכות below, so too does our discipline connect us to Hashem and enable us to influence the world. The Rebbe adds that this foundation of discipline is what enables all other aspects of our divine service to flourish."
  },
  14: {
    attributes: "Nobility within Discipline",
    insight: "True leadership comes from a foundation of proper discipline. The Alter Rebbe taught that this enables us to influence others positively.",
    sefirah: "מלכות שבגבורה",
    middah: "ענווה - Humility",
    torah: "Study the seventh perek of Pirkei Avos, focusing on the importance of humility",
    tefillah: "Add extra concentration to the first bracha of Shemoneh Esrei",
    maaseh: "Lead by example in maintaining spiritual discipline",
    dvarTorah: "The Maggid of Mezritch explains that מלכות שבגבורה represents the proper boundaries and structure in our spiritual service. The Tzemach Tzedek adds that this leadership comes from a place of humility and discipline. The Rebbe teaches that when we approach our spiritual boundaries with humility and discipline, we naturally want to influence and elevate others positively."
  },
  15: {
    attributes: "Loving-kindness within Beauty",
    insight: "True beauty emerges when kindness is balanced with harmony. The Baal Shem Tov taught that this creates lasting spiritual growth.",
    sefirah: "חסד שבתפארת",
    middah: "אהבת ישראל - Love of one's fellow Jew",
    torah: "Study the first perek of Pirkei Avos, focusing on the chain of transmission",
    tefillah: "Recite the 'אהבה רבה' prayer with extra kavanah",
    maaseh: "Perform an act of kindness that brings beauty to someone's life",
    dvarTorah: "The Tzemach Tzedek explains that חסד שבתפארת represents the perfect balance between love and discipline. This harmony creates true beauty in our divine service. The Rebbe adds that this combination is what enables us to serve Hashem with both passion and proper boundaries, creating a beautiful and lasting connection."
  },
  16: {
    attributes: "Discipline within Beauty",
    insight: "Beauty requires proper boundaries and structure. The Maggid of Mezritch taught that this creates lasting spiritual harmony.",
    sefirah: "גבורה שבתפארת",
    middah: "יראת שמים - Fear of Heaven",
    torah: "Study the second perek of Pirkei Avos, focusing on the balance of Torah study",
    tefillah: "Add extra concentration to the 'קדושה' prayer",
    maaseh: "Set a boundary that enhances spiritual beauty",
    dvarTorah: "The Tzemach Tzedek explains that גבורה שבתפארת represents the necessary boundaries in our spiritual service. The Maggid of Mezritch adds that this discipline comes from recognizing that our boundaries are expressions of Hashem's will. The Rebbe teaches that when we approach our spiritual boundaries with discipline, we naturally want to maintain and enhance them."
  },
  17: {
    attributes: "Beauty within Beauty",
    insight: "The harmony of all attributes creates true beauty. The Tzemach Tzedek emphasized this in his teachings on spiritual growth.",
    sefirah: "תפארת שבתפארת",
    middah: "שמחה - Joy in serving Hashem",
    torah: "Study the third perek of Pirkei Avos, focusing on the beauty of Torah wisdom",
    tefillah: "Recite the 'נשמת' prayer with extra joy",
    maaseh: "Find beauty in your spiritual service",
    dvarTorah: "The Tzemach Tzedek explains that תפארת שבתפארת represents the perfect balance between all attributes in our spiritual service. This harmony creates true beauty in our divine service. The Rebbe adds that this combination is what enables us to serve Hashem with all our attributes."
  },
  18: {
    attributes: "Victory within Beauty",
    insight: "True victory comes through persistent pursuit of spiritual beauty. The Rebbe Rashab taught that this creates lasting spiritual growth.",
    sefirah: "נצח שבתפארת",
    middah: "התמדה - Persistence in Torah and mitzvos",
    torah: "Study the fourth perek of Pirkei Avos, focusing on the strength of character",
    tefillah: "Add extra concentration to the 'מודים' prayer",
    maaseh: "Maintain your pursuit of spiritual beauty even when challenged",
    dvarTorah: "The Alter Rebbe explains in Likutei Torah that נצח שבתפארת represents the victory that comes through persistent pursuit of spiritual beauty. Just as Hashem's love for us is constant and unwavering, so too must our pursuit of spiritual beauty be. The Rebbe Rashab adds that this persistence in pursuit of spiritual beauty is what enables us to overcome all obstacles in our divine service."
  },
  19: {
    attributes: "Glory within Beauty",
    insight: "The splendor of beauty is revealed when we maintain proper spiritual harmony. The Rebbe teaches that this creates lasting spiritual growth.",
    sefirah: "הוד שבתפארת",
    middah: "הכרת הטוב - Gratitude",
    torah: "Study the fifth perek of Pirkei Avos, focusing on the importance of gratitude",
    tefillah: "Recite the 'אשרי' prayer with extra kavanah",
    maaseh: "Express gratitude for the beauty in your spiritual life",
    dvarTorah: "The Tzemach Tzedek explains that הוד שבתפארת represents the recognition and acknowledgment of Hashem's love in our lives. The Maggid of Mezritch adds that this gratitude is what enables us to serve Hashem with joy. The Rebbe teaches that when we recognize Hashem's love, we naturally want to reciprocate through our divine service."
  },
  20: {
    attributes: "Foundation within Beauty",
    insight: "The foundation of beauty is built on proper spiritual harmony. The Alter Rebbe taught that this creates a lasting connection to Hashem.",
    sefirah: "יסוד שבתפארת",
    middah: "אמונה - Faith",
    torah: "Study the sixth perek of Pirkei Avos, focusing on the acquisition of Torah",
    tefillah: "Add extra concentration to the 'אשרי' prayer",
    maaseh: "Strengthen your faith through study of Chassidus",
    dvarTorah: "The Tzemach Tzedek explains that יסוד שבתפארת represents the foundation of our connection to Hashem. Just as יסוד connects all the sefiros above it to מלכות below, so too does our beauty connect us to Hashem and enable us to influence the world. The Rebbe adds that this foundation of beauty is what enables all other aspects of our divine service to flourish."
  },
  21: {
    attributes: "Nobility within Beauty",
    insight: "True leadership comes from a foundation of spiritual beauty. The Baal Shem Tov taught that this enables us to influence others positively.",
    sefirah: "מלכות שבתפארת",
    middah: "ענווה - Humility",
    torah: "Study the seventh perek of Pirkei Avos, focusing on the importance of humility",
    tefillah: "Add extra concentration to the first bracha of Shemoneh Esrei",
    maaseh: "Lead by example in pursuing spiritual beauty",
    dvarTorah: "The Maggid of Mezritch explains that מלכות שבתפארת represents the proper boundaries and structure in our spiritual service. The Tzemach Tzedek adds that this leadership comes from a place of humility and beauty. The Rebbe teaches that when we approach our spiritual boundaries with humility and beauty, we naturally want to influence and elevate others positively."
  },
  22: {
    attributes: "Loving-kindness within Victory",
    insight: "True victory comes through persistent acts of kindness. The Maggid of Mezritch taught that this leads to lasting spiritual growth.",
    sefirah: "חסד שבנצח",
    middah: "אהבת ישראל - Love of one's fellow Jew",
    torah: "Study the first perek of Pirkei Avos, focusing on the chain of transmission",
    tefillah: "Recite the 'אהבה רבה' prayer with extra kavanah",
    maaseh: "Perform an act of kindness that leads to victory",
    dvarTorah: "The Alter Rebbe explains in Likutei Torah that חסד שבנצח represents the victory that comes through persistent acts of kindness. Just as Hashem's kindness to us is constant and unwavering, so too must our kindness be. The Rebbe Rashab adds that this persistence in kindness is what enables us to overcome all obstacles in our divine service."
  },
  23: {
    attributes: "Discipline within Victory",
    insight: "Victory requires proper boundaries and structure. The Tzemach Tzedek emphasized this in his teachings on spiritual growth.",
    sefirah: "גבורה שבנצח",
    middah: "יראת שמים - Fear of Heaven",
    torah: "Study the second perek of Pirkei Avos, focusing on the balance of Torah study",
    tefillah: "Add extra concentration to the 'קדושה' prayer",
    maaseh: "Set a boundary that leads to victory",
    dvarTorah: "The Maggid of Mezritch explains that גבורה שבנצח represents the necessary boundaries in our spiritual service. The Tzemach Tzedek adds that this discipline comes from recognizing that our boundaries are expressions of Hashem's love. The Rebbe teaches that when we approach our spiritual boundaries with discipline, we naturally want to maintain and enhance them."
  },
  24: {
    attributes: "Beauty within Victory",
    insight: "True victory emerges when all attributes are in harmony. The Rebbe Rashab taught that this creates lasting spiritual growth.",
    sefirah: "תפארת שבנצח",
    middah: "שמחה - Joy in serving Hashem",
    torah: "Study the third perek of Pirkei Avos, focusing on the beauty of Torah wisdom",
    tefillah: "Recite the 'נשמת' prayer with extra joy",
    maaseh: "Find beauty in your spiritual victories",
    dvarTorah: "The Tzemach Tzedek explains that תפארת שבנצח represents the perfect balance between all attributes in our spiritual service. This harmony creates true beauty in our divine service. The Rebbe adds that this combination is what enables us to serve Hashem with all our attributes."
  },
  25: {
    attributes: "Victory within Victory",
    insight: "The ultimate victory comes through persistent divine service. The Rebbe teaches that this creates lasting spiritual growth.",
    sefirah: "נצח שבנצח",
    middah: "התמדה - Persistence in Torah and mitzvos",
    torah: "Study the fourth perek of Pirkei Avos, focusing on the strength of character",
    tefillah: "Add extra concentration to the 'מודים' prayer",
    maaseh: "Maintain your spiritual victories even when challenged",
    dvarTorah: "The Alter Rebbe explains in Likutei Torah that נצח שבנצח represents the victory that comes through persistent divine service. Just as Hashem's love for us is constant and unwavering, so too must our service be. The Rebbe Rashab adds that this persistence in service is what enables us to overcome all obstacles in our divine service."
  },
  26: {
    attributes: "Glory within Victory",
    insight: "The splendor of victory is revealed when we maintain proper spiritual boundaries. The Alter Rebbe taught that this creates lasting spiritual growth.",
    sefirah: "הוד שבנצח",
    middah: "הכרת הטוב - Gratitude",
    torah: "Study the fifth perek of Pirkei Avos, focusing on the importance of gratitude",
    tefillah: "Recite the 'אשרי' prayer with extra kavanah",
    maaseh: "Express gratitude for your spiritual victories",
    dvarTorah: "The Tzemach Tzedek explains that הוד שבנצח represents the recognition and acknowledgment of Hashem's love in our lives. The Maggid of Mezritch adds that this gratitude is what enables us to serve Hashem with joy. The Rebbe teaches that when we recognize Hashem's love, we naturally want to reciprocate through our divine service."
  },
  27: {
    attributes: "Foundation within Victory",
    insight: "The foundation of victory is built on proper spiritual boundaries. The Baal Shem Tov taught that this creates a lasting connection to Hashem.",
    sefirah: "יסוד שבנצח",
    middah: "אמונה - Faith",
    torah: "Study the sixth perek of Pirkei Avos, focusing on the acquisition of Torah",
    tefillah: "Add extra concentration to the 'אשרי' prayer",
    maaseh: "Strengthen your faith through study of Chassidus",
    dvarTorah: "The Tzemach Tzedek explains that יסוד שבנצח represents the foundation of our connection to Hashem. Just as יסוד connects all the sefiros above it to מלכות below, so too does our victory connect us to Hashem and enable us to influence the world. The Rebbe adds that this foundation of victory is what enables all other aspects of our divine service to flourish."
  },
  28: {
    attributes: "Nobility within Victory",
    insight: "True leadership comes from a foundation of spiritual victory. The Maggid of Mezritch taught that this enables us to influence others positively.",
    sefirah: "מלכות שבנצח",
    middah: "ענווה - Humility",
    torah: "Study the seventh perek of Pirkei Avos, focusing on the importance of humility",
    tefillah: "Add extra concentration to the first bracha of Shemoneh Esrei",
    maaseh: "Lead by example in achieving spiritual victory",
    dvarTorah: "The Alter Rebbe explains in Tanya that מלכות שבנצח represents the proper boundaries and structure in our spiritual service. The Maggid of Mezritch adds that this leadership comes from a place of humility and victory. The Rebbe teaches that when we approach our spiritual boundaries with humility and victory, we naturally want to influence and elevate others positively."
  },
  29: {
    attributes: "Loving-kindness within Glory",
    insight: "True glory comes through persistent acts of kindness. The Tzemach Tzedek emphasized this in his teachings on spiritual growth.",
    sefirah: "חסד שבהוד",
    middah: "אהבת ישראל - Love of one's fellow Jew",
    torah: "Study the first perek of Pirkei Avos, focusing on the chain of transmission",
    tefillah: "Recite the 'אהבה רבה' prayer with extra kavanah",
    maaseh: "Perform an act of kindness that brings glory to Hashem",
    dvarTorah: "The Baal Shem Tov explains that חסד שבהוד represents the love and kindness we should have for Hashem. The Maggid of Mezritch adds that this love and kindness is what enables us to serve Hashem with joy. The Rebbe teaches that when we recognize Hashem's love and kindness, we naturally want to reciprocate through our divine service."
  },
  30: {
    attributes: "Discipline within Glory",
    insight: "Glory requires proper boundaries and structure. The Rebbe Rashab taught that this creates lasting spiritual growth.",
    sefirah: "גבורה שבהוד",
    middah: "יראת שמים - Fear of Heaven",
    torah: "Study the second perek of Pirkei Avos, focusing on the balance of Torah study",
    tefillah: "Add extra concentration to the 'קדושה' prayer",
    maaseh: "Set a boundary that brings glory to Hashem",
    dvarTorah: "The Maggid of Mezritch explains that גבורה שבהוד represents the necessary boundaries in our spiritual service. The Tzemach Tzedek adds that this discipline comes from recognizing that our boundaries are expressions of Hashem's love. The Rebbe teaches that when we approach our spiritual boundaries with discipline, we naturally want to maintain and enhance them."
  },
  31: {
    attributes: "Beauty within Glory",
    insight: "True glory emerges when all attributes are in harmony. The Rebbe teaches that this creates lasting spiritual growth.",
    sefirah: "תפארת שבהוד",
    middah: "שמחה - Joy in serving Hashem",
    torah: "Study the third perek of Pirkei Avos, focusing on the beauty of Torah wisdom",
    tefillah: "Recite the 'נשמת' prayer with extra joy",
    maaseh: "Find beauty in bringing glory to Hashem",
    dvarTorah: "The Tzemach Tzedek explains that תפארת שבהוד represents the perfect balance between all attributes in our spiritual service. This harmony creates true beauty in our divine service. The Rebbe adds that this combination is what enables us to serve Hashem with all our attributes."
  },
  32: {
    attributes: "Victory within Glory",
    insight: "The ultimate glory comes through persistent divine service. The Alter Rebbe taught that this creates lasting spiritual growth.",
    sefirah: "נצח שבהוד",
    middah: "התמדה - Persistence in Torah and mitzvos",
    torah: "Study the fourth perek of Pirkei Avos, focusing on the strength of character",
    tefillah: "Add extra concentration to the 'מודים' prayer",
    maaseh: "Maintain your spiritual service even when challenged",
    dvarTorah: "The Tzemach Tzedek explains that נצח שבהוד represents the victory that comes through persistent divine service. Just as Hashem's love for us is constant and unwavering, so too must our service be. The Rebbe Rashab adds that this persistence in service is what enables us to overcome all obstacles in our divine service."
  },
  33: {
    attributes: "Glory within Glory",
    insight: "The splendor of glory is revealed when we maintain proper spiritual boundaries. The Baal Shem Tov taught that this creates lasting spiritual growth.",
    sefirah: "הוד שבהוד",
    middah: "הכרת הטוב - Gratitude",
    torah: "Study the fifth perek of Pirkei Avos, focusing on the importance of gratitude",
    tefillah: "Recite the 'אשרי' prayer with extra kavanah",
    maaseh: "Express gratitude for the glory of Hashem",
    dvarTorah: "The Tzemach Tzedek explains that הוד שבהוד represents the recognition and acknowledgment of Hashem's love in our lives. The Maggid of Mezritch adds that this gratitude is what enables us to serve Hashem with joy. The Rebbe teaches that when we recognize Hashem's love, we naturally want to reciprocate through our divine service."
  },
  34: {
    attributes: "Foundation within Glory",
    insight: "The foundation of glory is built on proper spiritual boundaries. The Maggid of Mezritch taught that this creates a lasting connection to Hashem.",
    sefirah: "יסוד שבהוד",
    middah: "אמונה - Faith",
    torah: "Study the sixth perek of Pirkei Avos, focusing on the acquisition of Torah",
    tefillah: "Add extra concentration to the 'אשרי' prayer",
    maaseh: "Strengthen your faith through study of Chassidus",
    dvarTorah: "The Tzemach Tzedek explains that יסוד שבהוד represents the foundation of our connection to Hashem. Just as יסוד connects all the sefiros above it to מלכות below, so too does our glory connect us to Hashem and enable us to influence the world. The Rebbe adds that this foundation of glory is what enables all other aspects of our divine service to flourish."
  },
  35: {
    attributes: "Nobility within Glory",
    insight: "True leadership comes from a foundation of spiritual glory. The Tzemach Tzedek taught that this enables us to influence others positively.",
    sefirah: "מלכות שבהוד",
    middah: "ענווה - Humility",
    torah: "Study the seventh perek of Pirkei Avos, focusing on the importance of humility",
    tefillah: "Add extra concentration to the first bracha of Shemoneh Esrei",
    maaseh: "Lead by example in bringing glory to Hashem",
    dvarTorah: "The Maggid of Mezritch explains that מלכות שבהוד represents the proper boundaries and structure in our spiritual service. The Tzemach Tzedek adds that this leadership comes from a place of humility and glory. The Rebbe teaches that when we approach our spiritual boundaries with humility and glory, we naturally want to influence and elevate others positively."
  },
  36: {
    attributes: "Loving-kindness within Foundation",
    insight: "True foundation comes through persistent acts of kindness. The Rebbe Rashab emphasized this in his teachings on spiritual growth.",
    sefirah: "חסד שביסוד",
    middah: "אהבת ישראל - Love of one's fellow Jew",
    torah: "Study the first perek of Pirkei Avos, focusing on the chain of transmission",
    tefillah: "Recite the 'אהבה רבה' prayer with extra kavanah",
    maaseh: "Perform an act of kindness that strengthens your foundation",
    dvarTorah: "The Tzemach Tzedek explains that חסד שביסוד represents the love and kindness we should have for Hashem. The Maggid of Mezritch adds that this love and kindness is what enables us to serve Hashem with joy. The Rebbe teaches that when we recognize Hashem's love and kindness, we naturally want to reciprocate through our divine service."
  },
  37: {
    attributes: "Discipline within Foundation",
    insight: "Foundation requires proper boundaries and structure. The Rebbe teaches that this creates lasting spiritual growth.",
    sefirah: "גבורה שביסוד",
    middah: "יראת שמים - Fear of Heaven",
    torah: "Study the second perek of Pirkei Avos, focusing on the balance of Torah study",
    tefillah: "Add extra concentration to the 'קדושה' prayer",
    maaseh: "Set a boundary that strengthens your foundation",
    dvarTorah: "The Alter Rebbe teaches in Tanya that גבורה שביסוד represents the strength to maintain our spiritual boundaries even when challenged. The Baal Shem Tov adds that this strength comes from recognizing that these boundaries are expressions of Hashem's love. The Rebbe Rashab explains that this double gevurah enables us to overcome all obstacles in our divine service."
  },
  38: {
    attributes: "Beauty within Foundation",
    insight: "True foundation emerges when all attributes are in harmony. The Alter Rebbe taught that this creates lasting spiritual growth.",
    sefirah: "תפארת שביסוד",
    middah: "שמחה - Joy in serving Hashem",
    torah: "Study the third perek of Pirkei Avos, focusing on the beauty of Torah wisdom",
    tefillah: "Recite the 'נשמת' prayer with extra joy",
    maaseh: "Find beauty in strengthening your foundation",
    dvarTorah: "The Tzemach Tzedek explains that תפארת שביסוד represents how our discipline can become beautiful when balanced with harmony. The Maggid of Mezritch adds that this beauty comes from recognizing that our boundaries are expressions of Hashem's will. The Rebbe teaches that when we approach our spiritual discipline with joy and harmony, it becomes not a burden but a beautiful expression of our connection to Hashem."
  },
  39: {
    attributes: "Victory within Foundation",
    insight: "The ultimate foundation comes through persistent divine service. The Baal Shem Tov taught that this creates lasting spiritual growth.",
    sefirah: "נצח שביסוד",
    middah: "התמדה - Persistence in Torah and mitzvos",
    torah: "Study the fourth perek of Pirkei Avos, focusing on the strength of character",
    tefillah: "Add extra concentration to the 'מודים' prayer",
    maaseh: "Maintain your spiritual foundation even when challenged",
    dvarTorah: "The Tzemach Tzedek explains that נצח שביסוד represents the victory that comes through persistent divine service. Just as Hashem's love for us is constant and unwavering, so too must our service be. The Rebbe Rashab adds that this persistence in service is what enables us to overcome all obstacles in our divine service."
  },
  40: {
    attributes: "Glory within Foundation",
    insight: "The splendor of foundation is revealed when we maintain proper spiritual boundaries. The Maggid of Mezritch taught that this creates lasting spiritual growth.",
    sefirah: "הוד שביסוד",
    middah: "הכרת הטוב - Gratitude",
    torah: "Study the fifth perek of Pirkei Avos, focusing on the importance of gratitude",
    tefillah: "Recite the 'אשרי' prayer with extra kavanah",
    maaseh: "Express gratitude for your spiritual foundation",
    dvarTorah: "The Tzemach Tzedek explains that הוד שביסוד represents the recognition and acknowledgment of Hashem's love in our lives. The Maggid of Mezritch adds that this gratitude is what enables us to serve Hashem with joy. The Rebbe teaches that when we recognize Hashem's love, we naturally want to reciprocate through our divine service."
  },
  41: {
    attributes: "Foundation within Foundation",
    insight: "The foundation of foundation is built on proper spiritual boundaries. The Tzemach Tzedek taught that this creates a lasting connection to Hashem.",
    sefirah: "יסוד שביסוד",
    middah: "אמונה - Faith",
    torah: "Study the sixth perek of Pirkei Avos, focusing on the acquisition of Torah",
    tefillah: "Add extra concentration to the 'אשרי' prayer",
    maaseh: "Strengthen your faith through study of Chassidus",
    dvarTorah: "The Tzemach Tzedek explains that יסוד שביסוד represents the foundation of our connection to Hashem. Just as יסוד connects all the sefiros above it to מלכות below, so too does our foundation connect us to Hashem and enable us to influence the world. The Rebbe adds that this foundation of foundation is what enables all other aspects of our divine service to flourish."
  },
  42: {
    attributes: "Nobility within Foundation",
    insight: "True leadership comes from a foundation of spiritual foundation. The Rebbe Rashab taught that this enables us to influence others positively.",
    sefirah: "מלכות שביסוד",
    middah: "ענווה - Humility",
    torah: "Study the seventh perek of Pirkei Avos, focusing on the importance of humility",
    tefillah: "Add extra concentration to the first bracha of Shemoneh Esrei",
    maaseh: "Lead by example in strengthening your foundation",
    dvarTorah: "The Maggid of Mezritch explains that מלכות שביסוד represents the proper boundaries and structure in our spiritual service. The Tzemach Tzedek adds that this leadership comes from a place of humility and foundation. The Rebbe teaches that when we approach our spiritual boundaries with humility and foundation, we naturally want to influence and elevate others positively."
  },
  43: {
    attributes: "Loving-kindness within Nobility",
    insight: "True leadership comes through persistent acts of kindness. The Rebbe emphasizes this in his teachings on spiritual growth.",
    sefirah: "חסד שבמלכות",
    middah: "אהבת ישראל - Love of one's fellow Jew",
    torah: "Study the first perek of Pirkei Avos, focusing on the chain of transmission",
    tefillah: "Recite the 'אהבה רבה' prayer with extra kavanah",
    maaseh: "Perform an act of kindness that demonstrates leadership",
    dvarTorah: "The Tzemach Tzedek explains that חסד שבמלכות represents the love and kindness we should have for Hashem. The Maggid of Mezritch adds that this love and kindness is what enables us to serve Hashem with joy. The Rebbe teaches that when we recognize Hashem's love and kindness, we naturally want to reciprocate through our divine service."
  },
  44: {
    attributes: "Discipline within Nobility",
    insight: "Leadership requires proper boundaries and structure. The Alter Rebbe teaches that this creates lasting spiritual growth.",
    sefirah: "גבורה שבמלכות",
    middah: "יראת שמים - Fear of Heaven",
    torah: "Study the second perek of Pirkei Avos, focusing on the balance of Torah study",
    tefillah: "Add extra concentration to the 'קדושה' prayer",
    maaseh: "Set a boundary that demonstrates leadership",
    dvarTorah: "The Maggid of Mezritch explains that גבורה שבמלכות represents the necessary boundaries in our spiritual service. The Tzemach Tzedek adds that this discipline comes from recognizing that our boundaries are expressions of Hashem's love. The Rebbe teaches that when we approach our spiritual boundaries with discipline, we naturally want to maintain and enhance them."
  },
  45: {
    attributes: "Beauty within Nobility",
    insight: "True leadership emerges when all attributes are in harmony. The Baal Shem Tov taught that this creates lasting spiritual growth.",
    sefirah: "תפארת שבמלכות",
    middah: "שמחה - Joy in serving Hashem",
    torah: "Study the third perek of Pirkei Avos, focusing on the beauty of Torah wisdom",
    tefillah: "Recite the 'נשמת' prayer with extra joy",
    maaseh: "Find beauty in your leadership role",
    dvarTorah: "The Tzemach Tzedek explains that תפארת שבמלכות represents the perfect balance between all attributes in our spiritual service. This harmony creates true beauty in our divine service. The Rebbe adds that this combination is what enables us to serve Hashem with all our attributes."
  },
  46: {
    attributes: "Victory within Nobility",
    insight: "The ultimate leadership comes through persistent divine service. The Maggid of Mezritch taught that this creates lasting spiritual growth.",
    sefirah: "נצח שבמלכות",
    middah: "התמדה - Persistence in Torah and mitzvos",
    torah: "Study the fourth perek of Pirkei Avos, focusing on the strength of character",
    tefillah: "Add extra concentration to the 'מודים' prayer",
    maaseh: "Maintain your leadership role even when challenged",
    dvarTorah: "The Alter Rebbe explains in Likutei Torah that נצח שבמלכות represents the victory that comes through persistent divine service. Just as Hashem's love for us is constant and unwavering, so too must our service be. The Rebbe Rashab adds that this persistence in service is what enables us to overcome all obstacles in our divine service."
  },
  47: {
    attributes: "Glory within Nobility",
    insight: "The splendor of leadership is revealed when we maintain proper spiritual boundaries. The Tzemach Tzedek taught that this creates lasting spiritual growth.",
    sefirah: "הוד שבמלכות",
    middah: "הכרת הטוב - Gratitude",
    torah: "Study the fifth perek of Pirkei Avos, focusing on the importance of gratitude",
    tefillah: "Recite the 'אשרי' prayer with extra kavanah",
    maaseh: "Express gratitude for your leadership role",
    dvarTorah: "The Tzemach Tzedek explains that הוד שבמלכות represents the recognition and acknowledgment of Hashem's love in our lives. The Maggid of Mezritch adds that this gratitude is what enables us to serve Hashem with joy. The Rebbe teaches that when we recognize Hashem's love, we naturally want to reciprocate through our divine service."
  },
  48: {
    attributes: "Foundation within Nobility",
    insight: "The foundation of leadership is built on proper spiritual boundaries. The Rebbe Rashab taught that this creates a lasting connection to Hashem.",
    sefirah: "יסוד שבמלכות",
    middah: "אמונה - Faith",
    torah: "Study the sixth perek of Pirkei Avos, focusing on the acquisition of Torah",
    tefillah: "Add extra concentration to the 'אשרי' prayer",
    maaseh: "Strengthen your faith through study of Chassidus",
    dvarTorah: "The Tzemach Tzedek explains that יסוד שבמלכות represents the foundation of our connection to Hashem. Just as יסוד connects all the sefiros above it to מלכות below, so too does our leadership connect us to Hashem and enable us to influence the world. The Rebbe adds that this foundation of leadership is what enables all other aspects of our divine service to flourish."
  },
  49: {
    attributes: "Nobility within Nobility",
    insight: "The ultimate leadership comes from a foundation of spiritual nobility. The Rebbe teaches that this enables us to influence others positively and bring the ultimate redemption.",
    sefirah: "מלכות שבמלכות",
    middah: "ענווה - Humility",
    torah: "Study the seventh perek of Pirkei Avos, focusing on the importance of humility",
    tefillah: "Add extra concentration to the first bracha of Shemoneh Esrei",
    maaseh: "Lead by example in bringing the ultimate redemption",
    dvarTorah: "The Maggid of Mezritch explains that מלכות שבמלכות represents the proper boundaries and structure in our spiritual service. The Tzemach Tzedek adds that this leadership comes from a place of humility and nobility. The Rebbe teaches that when we approach our spiritual boundaries with humility and nobility, we naturally want to influence and elevate others positively."
  }
};

export function getKabbalisticInsight(day: number): KabbalisticDay {
  return kabbalisticInsights[day] || {
    attributes: "Unknown",
    insight: "No insight available for this day.",
    sefirah: "Unknown",
    middah: "Unknown",
    torah: "Study Torah according to your custom",
    tefillah: "Pray according to your custom",
    maaseh: "Perform acts of kindness",
    dvarTorah: "No specific dvar Torah available for this day."
  };
} 

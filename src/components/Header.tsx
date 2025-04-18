import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../hooks/useTheme';

const Header = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="sticky top-0 z-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-md">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                        Sefira Counter
                    </h1>
                    <button
                        onClick={toggleTheme}
                        className="p-2.5 rounded-full text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center justify-center"
                        aria-label="Toggle theme"
                    >
                        {theme === 'dark' ? (
                            <SunIcon className="h-5 w-5" />
                        ) : (
                            <MoonIcon className="h-5 w-5" />
                        )}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header; 

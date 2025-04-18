import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Counter from './pages/Counter';
import About from './pages/About';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import { useTheme } from './hooks/useTheme';

const App = () => {
    const { theme } = useTheme();

    // Apply theme class to document
    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    return (
        <Router>
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-10 left-10 w-64 h-64 bg-primary-200 dark:bg-primary-900/20 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-float"></div>
                    <div className="absolute bottom-10 right-10 w-64 h-64 bg-secondary-200 dark:bg-secondary-900/20 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent-200 dark:bg-accent-900/20 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
                </div>

                <div className="relative z-10">
                    <Header />
                    <main className="pb-20">
                        <Routes>
                            <Route path="/" element={<Counter />} />
                            <Route path="/about" element={<About />} />
                        </Routes>
                    </main>
                    <BottomNav />
                </div>
            </div>
        </Router>
    );
};

export default App; 

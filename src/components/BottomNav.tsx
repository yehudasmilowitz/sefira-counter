import { Link, useLocation } from 'react-router-dom';
import { HomeIcon, InformationCircleIcon } from '@heroicons/react/24/outline';

const BottomNav = () => {
    const location = useLocation();

    const navItems = [
        { path: '/', label: 'Home', icon: HomeIcon },
        { path: '/about', label: 'About', icon: InformationCircleIcon },
    ];

    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg z-10">
            <div className="container mx-auto px-4">
                <div className="flex justify-around items-center h-16">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`flex flex-col items-center space-y-1 px-3 py-2 transition-all ${location.pathname === item.path
                                ? 'text-gray-900 dark:text-white scale-110'
                                : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                                }`}
                        >
                            <div className="relative">
                                <item.icon className="h-6 w-6" />
                            </div>
                            <span className="text-xs font-medium">{item.label}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default BottomNav; 

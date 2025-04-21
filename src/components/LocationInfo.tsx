import { useState, useEffect } from 'react';
import { MapPinIcon, GlobeAltIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

interface LocationData {
    city: string;
    state: string;
    country: string;
    latitude: number;
    longitude: number;
}

const LocationInfo = () => {
    const [location, setLocation] = useState<LocationData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    try {
                        const response = await fetch(
                            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=en`
                        );
                        const data = await response.json();
                        setLocation({
                            city: data.locality || data.city,
                            state: data.principalSubdivision,
                            country: data.countryName,
                            latitude: position.coords.latitude,
                            longitude: position.coords.longitude
                        });
                        setLoading(false);
                    } catch (err) {
                        console.error('Error fetching location details:', err);
                        setError('Failed to fetch location details');
                        setLoading(false);
                    }
                },
                (err) => {
                    console.error('Error getting location:', err);
                    setError('Unable to get location');
                    setLoading(false);
                }
            );
        } else {
            setError('Geolocation is not supported');
            setLoading(false);
        }
    }, []);

    if (loading) {
        return (
            <div className="w-full flex items-center justify-center py-2 px-4 bg-gray-50 dark:bg-gray-900">
                <ArrowPathIcon className="h-4 w-4 animate-spin text-gray-600 dark:text-gray-400 mr-2" />
                <span className="text-sm text-gray-600 dark:text-gray-400">Loading location...</span>
            </div>
        );
    }

    if (error) {
        return (
            <div className="w-full flex items-center justify-center py-2 px-4 bg-gray-50 dark:bg-gray-900">
                <MapPinIcon className="h-4 w-4 text-gray-600 dark:text-gray-400 mr-2" />
                <span className="text-sm text-gray-600 dark:text-gray-400">{error}</span>
            </div>
        );
    }

    if (!location) return null;

    return (
        <div className="w-full flex items-center justify-center py-2 px-4 bg-gray-50 dark:bg-gray-900">
            <div className="flex items-center space-x-2">
                <MapPinIcon className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {location.city}, {location.state}
                </span>
                <GlobeAltIcon className="h-3 w-3 text-gray-500 dark:text-gray-500" />
                <span className="text-xs text-gray-500 dark:text-gray-500">
                    ({location.latitude.toFixed(4)}°N, {location.longitude.toFixed(4)}°E)
                </span>
            </div>
        </div>
    );
};

export default LocationInfo; 

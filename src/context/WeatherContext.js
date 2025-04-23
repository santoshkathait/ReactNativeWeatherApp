import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState('');
    const [darkMode, setDarkMode] = useState(false);

    //Load previously saved city from storage when app starts
    useEffect(() => {
        const loadLastCity = async () => {
            const lastCity = await AsyncStorage.getItem('lastCity');
            if (lastCity) setCity(lastCity);
        };
        loadLastCity();
    }, []);

    //Update the city and save it to local storage
    const updateCity = async (newCity) => {
        setCity(newCity);
        await AsyncStorage.setItem('lastCity', newCity);
    };

    //Load dark mode preference on mount
    useEffect(() => {
        const loadPrefs = async () => {
            const theme = await AsyncStorage.getItem('darkMode');
            if (theme !== null) setDarkMode(JSON.parse(theme));
        };
        loadPrefs();
    }, []);

    //Toggle dark mode and persist it in local storage
    const toggleDarkMode = async () => {
        const newValue = !darkMode;
        setDarkMode(newValue);
        await AsyncStorage.setItem('darkMode', JSON.stringify(newValue));
    };

    return (
        <WeatherContext.Provider value={{ city, weather, setWeather, error, setError, updateCity, darkMode, toggleDarkMode }}>
            {children}
        </WeatherContext.Provider>
    );
};

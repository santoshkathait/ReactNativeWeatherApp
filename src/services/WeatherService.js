import axios from 'axios';
import Constants from 'expo-constants';

// ✅ Access the weather API key from Expo's app config (defined in app.config.js)
const API_KEY = Constants.expoConfig.extra.WEATHER_API_KEY;

/**
 * Fetch weather data for a given city from OpenWeatherMap API.
 * @param {string} city - The name of the city to get weather for.
 * @returns {Promise<Object>} - Returns weather data in JSON format.
 */
export const fetchWeather = async (city) => {
    const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    );

    return response.data;
};

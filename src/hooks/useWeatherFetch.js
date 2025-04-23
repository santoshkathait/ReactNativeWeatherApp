import { useContext, useState } from 'react';
import { Keyboard } from 'react-native';
import { WeatherContext } from '../context/WeatherContext';
import { fetchWeather } from '../../src/services/WeatherService';
import { strings } from '../constants/strings';

/**
 * Custom hook to handle fetching weather data and managing loading/error states.
 * Separates business logic from the UI for cleaner and reusable code.
 */
export const useWeatherFetch = () => {
  const { setWeather, setError, updateCity } = useContext(WeatherContext);
  const [loading, setLoading] = useState(false);

  /**
   *   Main method to fetch weather based on city input.
   * - Updates global state
   * - Manages loading & error status
   * - Dismisses keyboard on fetch
   */
  const handleFetch = async (city) => {
    try {
      setLoading(true);
      Keyboard.dismiss();
      const data = await fetchWeather(city);
      setWeather(data);
      setError('');
      updateCity(city);
    } catch (e) {
      setError(strings.errorCityNotFound);
    } finally {
      setLoading(false);
    }
  };

  return { handleFetch, loading };
};

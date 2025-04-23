import React from 'react';
import { WeatherProvider } from './src/context/WeatherContext';
import HomeScreen from './src/screens/HomeScreen';

export default function App() {
  return (
    <WeatherProvider>
      <HomeScreen />
    </WeatherProvider>
  );
}

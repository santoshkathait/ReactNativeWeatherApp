import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../styles/Styles';

// WeatherCard component displays current weather details
const WeatherCard = ({ weather, themeStyles }) => {
  if (!weather) return null;

  return (
    <View style={[styles.card, themeStyles.card]}>

      {/* City name */}
      <Text style={[styles.city, themeStyles.text]}>{weather.name}</Text>

      {/* Current temperature */}
      <Text style={[styles.temp, themeStyles.text]}>{weather.main.temp} °C</Text>

      {/* Weather description */}
      <Text style={[styles.condition, themeStyles.text]}>
        {weather.weather[0].description}
      </Text>

      {/* Weather icon from OpenWeatherMap */}
      <Image
        source={{ uri: `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png` }}
        style={styles.icon}
      />
    </View>
  );
};

export default WeatherCard;

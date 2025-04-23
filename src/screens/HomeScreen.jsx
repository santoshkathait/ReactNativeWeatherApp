import React, { useContext, useState } from 'react';
import { SafeAreaView, View, TextInput, Button, Text, Image, StyleSheet, Switch, Keyboard } from 'react-native';
import styles from '../styles/Styles';
import { WeatherContext } from '../context/WeatherContext';
import WeatherCard from '../components/WeatherCard';
import DarkModeToggle from '../components/DarkModeToggle';
import ErrorMessage from '../components/ErrorMessage';
import { useWeatherFetch } from '../hooks/useWeatherFetch';
import { strings } from '../constants/strings';
import { colors } from '../constants/colors';

export default function HomeScreen() {
    const { city, weather, setWeather, error, setError, updateCity, darkMode, toggleDarkMode } = useContext(WeatherContext);
    const [input, setInput] = useState(city);

    // Custom hook for fetching weather data
    const { handleFetch } = useWeatherFetch();

    // Apply dark or light theme styles
    const themeStyles = darkMode ? styles.dark : styles.light;

    return (
        <SafeAreaView style={[styles.safeArea, themeStyles.background]}>
            <View style={styles.container}>

                {/* Text input for entering the city name */}
                <TextInput
                    value={input}
                    onChangeText={(text) => {
                        setInput(text);
                        if (text.trim() === '') setError('');// Clear error if input is cleared
                    }}
                    placeholder={strings.enterCity}
                    placeholderTextColor={darkMode ? colors.textSecondary : colors.textPrimary}
                    style={[styles.input, themeStyles.input]}
                />

                {/* Button to trigger weather fetch */}
                <Button title={strings.getWeather} onPress={() => handleFetch(input)} />

                {/* Toggle switch for dark/light mode */}
                <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

                {/* Conditional rendering of error message */}
                <ErrorMessage message={error} />

                {/* Display weather card with fetched data */}
                <WeatherCard weather={weather} themeStyles={themeStyles} />
            </View>
        </SafeAreaView>
    );
}

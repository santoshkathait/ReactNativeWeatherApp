import React from 'react';
import { View, Text, Switch } from 'react-native';
import styles from '../styles/Styles';
import { colors } from '../constants/colors';
import { strings } from '../constants/strings';

// DarkModeToggle component - allows toggling between light and dark mode
const DarkModeToggle = ({ darkMode, toggleDarkMode }) => {
    return (
        <View style={styles.darkModeContainer}>

            {/* Label with dynamic color based on the current theme */}
            <Text style={[styles.label, { color: darkMode ? colors.darkText : colors.textPrimary }]}>
                {strings.darkModeLabel}
            </Text>

            {/* Switch component for toggling dark mode */}
            <Switch value={darkMode} onValueChange={toggleDarkMode} />
        </View>
    );
};

export default DarkModeToggle;

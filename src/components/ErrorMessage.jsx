import React from 'react';
import { Text } from 'react-native';
import styles from '../styles/Styles';

const ErrorMessage = ({ message }) => {
    if (!message) return null; // Don't render if there is no message

    return <Text style={styles.error}>{message}</Text>;
};

export default ErrorMessage;

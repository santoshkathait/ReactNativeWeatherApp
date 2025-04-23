import { StyleSheet, StatusBar, Platform } from 'react-native';

const baseStyles = {
    safeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    input: {
        width: '100%',
        borderBottomWidth: 1,
        marginBottom: 10,
        padding: 10,
    },
    error: {
        color: 'red',
        marginTop: 10,
    },
    card: {
        marginTop: 20,
        alignItems: 'center',
        padding: 20,
        borderRadius: 10,
        width: '100%',
    },
    darkModeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10
    },
    icon: {
        width: 50,
        height: 50,
    },
    city: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    temp: {
        fontSize: 16,
        marginVertical: 5,
    },
    condition: {
        fontStyle: 'italic',
    },
};

export default StyleSheet.create({
    ...baseStyles,
    light: StyleSheet.create({
        background: { backgroundColor: '#fff' },
        card: { backgroundColor: '#f0f0f0' },
        input: { color: '#000', borderColor: '#000' },
        text: { color: '#000' },
    }),
    dark: StyleSheet.create({
        background: { backgroundColor: '#121212' },
        card: { backgroundColor: '#1e1e1e' },
        input: { color: '#fff', borderColor: '#fff' },
        text: { color: '#fff' },
    }),
});

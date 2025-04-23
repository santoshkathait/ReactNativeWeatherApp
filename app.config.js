import 'dotenv/config';

export default {
  expo: {
    name: 'WeatherApp',
    slug: 'weatherapp',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './src/assets/icon.png',
    userInterfaceStyle: 'light',
    newArchEnabled: true,
    splash: {
      image: './src/assets/splash-icon.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './src/assets/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
    },
    web: {
      favicon: './src/assets/favicon.png',
    },
    extra: {
      WEATHER_API_KEY: process.env.WEATHER_API_KEY,
    },
  },
};

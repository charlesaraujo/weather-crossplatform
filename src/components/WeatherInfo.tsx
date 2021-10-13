import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { IMG_URL } from "../../weatherapi";
import { ColorsLigth } from "../utils/Colors";

interface WeatherInfoProps {
  children?: React.ReactNode;
  currentWeather: any;
}

const styles = StyleSheet.create({
  weatherInfo: {
    alignItems: "center",
  },
  icon: {
    width: 100,
    height: 100,
  },
  description: {
    textTransform: "capitalize",
  },
});

export const WeatherInfo: React.FC<WeatherInfoProps> = ({ currentWeather }) => {
  const {
    main: { temp },
    weather: [details],
    name,
  } = currentWeather;

  const { icon, main, description } = details;
  const img = `${IMG_URL}${icon}@4x.png`;

  return (
    <View style={styles.weatherInfo}>
      <Text>{name}</Text>
      <Image style={styles.icon} source={{ uri: img }} />
      <Text>{temp}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

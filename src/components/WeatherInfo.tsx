import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { IMG_URL } from "../../weatherapi";
import { Colors } from "../utils/Colors";

const { PRIMARY_COLOR, SECONDARY_COLOR } = Colors;
interface WeatherInfoProps {
  children?: React.ReactNode;
  currentWeather: any;
}

const styles = StyleSheet.create({
  info: {
    alignItems: "center",
  },
  icon: {
    width: 100,
    height: 100,
  },
  description: {
    textTransform: "capitalize",
    fontSize: 16,
  },
  textPrimary: {
    color: PRIMARY_COLOR,
    fontSize: 40,
  },
  textSecondary: {
    color: SECONDARY_COLOR,
    fontSize: 20,
    fontWeight: "500",
    marginTop: 10,
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
    <View style={styles.info}>
      <Text style={styles.textSecondary}>{name}</Text>
      <Image style={styles.icon} source={{ uri: img }} />
      <Text style={styles.textPrimary}>{temp}°</Text>
      <Text style={[styles.textSecondary, styles.description]}>
        {description}
      </Text>
      {/* <Text style={styles.textSecondary}>{main}</Text> */}
    </View>
  );
};

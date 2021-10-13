import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";

import { WeatherInfo } from "./components";

import { API_URL, WEATHER_API_KEY } from "../weatherapi";

export const Core: React.FC = () => {
  const [errorMessage, setErrorMessage] = React.useState("");
  const [currentWeather, setCurrentWeather] = React.useState<any>(null);
  const [unitsSystem, setUnitsSystem] = React.useState<"metric" | "imperial">(
    "metric"
  );

  const load = async (): Promise<void> => {
    try {
      let { status } = await requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMessage("Precisamos acessar a Localização para buscar o clima");
        return;
      }
      const { latitude, longitude } = (await getCurrentPositionAsync()).coords;
      const weaterUrl = `${API_URL}weather?lat=${latitude}&lon=${longitude}&lang=pt_br&units=${unitsSystem}&appid=${WEATHER_API_KEY}`;
      const response = await fetch(weaterUrl);
      const result = await response.json();

      if (response.ok) setCurrentWeather(result);
      else setErrorMessage(result.message);
    } catch (error: any) {
      setErrorMessage(error.message);
    }
  };

  React.useEffect((): void => {
    load();
  }, []);

  const loading = currentWeather ? (
    <WeatherInfo currentWeather={currentWeather} />
  ) : (
    <Text>Criar loader</Text>
  );

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.main}>{loading}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
  },
  main: {
    flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
  },
});

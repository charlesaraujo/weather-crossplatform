import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
  getLastKnownPositionAsync,
} from "expo-location";

import { WeatherInfo, UnitsPicker } from "./components";

import { API_URL, WEATHER_API_KEY } from "../weatherapi";

export const Core: React.FC = () => {
  const [erroMessage, setErroMessage] = React.useState("");
  const [currentWeather, setCurrentWeather] = React.useState<any>(null);
  const [unitsSystem, setUnitsSystem] = React.useState<"metric" | "imperial">(
    "metric"
  );

  const load = async (): Promise<void> => {
    setCurrentWeather(null);
    try {
      let { status } = await requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErroMessage("Precisamos acessar a Localização para buscar o clima");
        return;
      }

      let location = await getLastKnownPositionAsync();
      if (location === null) location = await getCurrentPositionAsync();
      const { latitude, longitude } = location.coords;
      const weaterUrl = `${API_URL}weather?lat=${latitude}&lon=${longitude}&lang=pt_br&units=${unitsSystem}&appid=${WEATHER_API_KEY}`;
      const response = await fetch(weaterUrl);
      const result = await response.json();
      console.log(response.ok);
      if (response.ok) setCurrentWeather(result);
      else setErroMessage(result.message);
    } catch (error: any) {
      console.log(error);
      setErroMessage(error.message);
    }
  };

  React.useEffect((): void => {
    load();
  }, [unitsSystem]);

  const loading = currentWeather ? (
    <WeatherInfo currentWeather={currentWeather} />
  ) : (
    <Text>{erroMessage || "Criar loader"}</Text>
  );

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.main}>
        <UnitsPicker
          unitsSystem={unitsSystem}
          setUnitsSystem={setUnitsSystem}
        />
        {loading}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  main: {
    minWidth: 320,
    minHeight: 320,
    position: "relative",
  },
});

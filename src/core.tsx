import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
  getLastKnownPositionAsync,
} from "expo-location";
import {
  WeatherInfo,
  UnitsPicker,
  Loader,
  ReloadIcon,
  WeatherDetails,
} from "./components";
import { Colors } from "./utils/Colors";
import { API_URL, WEATHER_API_KEY } from "../weatherapi";

export const Core: React.FC = () => {
  const [erroMessage, setErroMessage] = React.useState<string | null>(null);
  const [currentWeather, setCurrentWeather] = React.useState<any>(null);
  const [unitsSystem, setUnitsSystem] = React.useState<"metric" | "imperial">(
    "metric"
  );

  const load = async (): Promise<void> => {
    setCurrentWeather(null);
    setErroMessage(null);
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
      if (response.ok) setCurrentWeather(result);
      else setErroMessage(result.message);
    } catch (error: any) {
      setErroMessage(error.message);
    }
  };

  React.useEffect((): void => {
    load();
  }, [unitsSystem]);

  let loading: any = <Loader />;
  if (currentWeather)
    loading = (
      <>
        <WeatherInfo currentWeather={currentWeather} />
        <WeatherDetails
          unitsSystem={unitsSystem}
          currentWeather={currentWeather}
        />
      </>
    );
  if (erroMessage)
    loading = (
      <View style={styles.container}>
        <Text style={styles.error}>{erroMessage}</Text>
      </View>
    );

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.wrapper}>
        <ReloadIcon load={load} />
        <UnitsPicker
          unitsSystem={unitsSystem}
          setUnitsSystem={setUnitsSystem}
        />
        <View style={styles.main}>{loading}</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    padding: 60,
  },
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    maxWidth: 600,
  },
  main: {
    minWidth: 320,
    minHeight: 320,
    position: "relative",
  },
  error: {
    alignSelf: "stretch",
    textAlign: "center",
    color: Colors.SECONDARY_COLOR,
    fontSize: 30,
  },
});

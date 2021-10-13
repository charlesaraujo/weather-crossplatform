import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";
import apiKey from "../weatherapi";

const Core: React.FC = () => {
  const [errorMessage, setErrorMessage] = React.useState("");

  const load = async (): Promise<void> => {
    try {
      let { status } = await requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMessage("Precisamos acessar a Localização para buscar o clima");
        return;
      }
      const { latitude, longitude } = (await getCurrentPositionAsync()).coords;
      console.log(latitude, longitude);
    } catch (error) {}
  };

  React.useEffect((): void => {
    load();
  }, []);

  return (
    <View style={styles.container}>
      <Text>beleza?</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export { Core };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});

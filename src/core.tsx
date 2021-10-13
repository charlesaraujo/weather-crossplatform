import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { requestForegroundPermissionsAsync } from "expo-location";

const Core: React.FC = () => {
  const load = async () => {
    let teste = await requestForegroundPermissionsAsync();
    console.log(teste);
  };

  React.useEffect(() => {
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

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../utils/Colors";

const { PRIMARY_COLOR, SECONDARY_COLOR, BORDER_COLOR } = Colors;

const styles = StyleSheet.create({
  container: {
    margin: "auto",
    borderWidth: 1,
    borderColor: BORDER_COLOR,
    borderRadius: 10,
  },
});

interface WeatherDetailsProps {}
export const WeatherDetails: React.FC<any> = () => {
  return (
    <View style={styles.container}>
      <Text>Hi</Text>
    </View>
  );
};

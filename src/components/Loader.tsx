import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { Colors } from "../utils/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});

export const Loader: React.FC = () => (
  <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator size="large" color={Colors.PRIMARY_COLOR} />
  </View>
);

import React from "react";
import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../utils/Colors";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 24,
    right: 0,
  },
});

interface ReloadIconProps {
  load: Function;
}

export const ReloadIcon: React.FC<ReloadIconProps> = ({ load }) => {
  return (
    <View style={styles.container}>
      <Ionicons
        onPress={() => load()}
        name="ios-refresh"
        size={24}
        color={Colors.PRIMARY_COLOR}
      />
    </View>
  );
};

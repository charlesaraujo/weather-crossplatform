import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors } from "../utils/Colors";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: 1,
  },
});

interface ReloadIconProps {
  load: Function;
}

export const ReloadIcon: React.FC<ReloadIconProps> = ({ load }) => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        onPress={() => load()}
        name="reload"
        size={30}
        color={Colors.PRIMARY_COLOR}
      />
    </View>
  );
};

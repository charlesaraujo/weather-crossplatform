import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Colors } from "../utils/Colors";

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    alignItems: "center",
    position: "absolute",
    top: 24,
    left: 0,
  },
  wrapper: {
    width: 80,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  picker: {
    width: 30,
    height: 30,
    marginBottom: 10,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.PRIMARY_COLOR,
    borderWidth: 0,
  },
  text: {
    fontSize: 18,
    textAlign: "center",
    justifyContent: "center",
    color: "#fff",
  },
  textSelected: {
    color: Colors.SECONDARY_COLOR,
  },
  selected: {
    borderWidth: 1,
    borderColor: Colors.BORDER_COLOR,
    backgroundColor: "#fff",
  },
});
interface UnitsPickerProps {
  children?: React.ReactNode;
  unitsSystem: "metric" | "imperial";
  setUnitsSystem: Function;
}

export const UnitsPicker: React.FC<UnitsPickerProps> = ({
  unitsSystem,
  setUnitsSystem,
}) => {
  const isMetric = unitsSystem === "metric" ? true : false;
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <TouchableOpacity
          style={[styles.picker, isMetric && styles.selected]}
          onPress={() => {
            setUnitsSystem("metric");
          }}
        >
          <Text style={[styles.text, isMetric && styles.textSelected]}>C°</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.picker, !isMetric && styles.selected]}
          onPress={() => {
            setUnitsSystem("imperial");
          }}
        >
          <Text style={[styles.text, !isMetric && styles.textSelected]}>
            F°
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Colors } from "../utils/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  wrapper: {
    width: 80,
    flexDirection: "row",
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
    // fontSize: 18,
    // textAlign: "center",
    justifyContent: "center",
    // color: "#fff",
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
          <View style={[styles.text]}>
            <MaterialCommunityIcons
              name="temperature-celsius"
              size={24}
              color={isMetric ? Colors.SECONDARY_COLOR : "#fff"}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.picker, !isMetric && styles.selected]}
          onPress={() => {
            setUnitsSystem("imperial");
          }}
        >
          <View style={[styles.text]}>
            <MaterialCommunityIcons
              name="temperature-fahrenheit"
              size={24}
              color={!isMetric ? Colors.SECONDARY_COLOR : "#fff"}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

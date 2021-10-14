import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../utils/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const { PRIMARY_COLOR, SECONDARY_COLOR, BORDER_COLOR } = Colors;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    borderWidth: 1,
    borderColor: BORDER_COLOR,
    borderRadius: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  box: {
    flex: 1,
    padding: 20,
  },
  subtitle: {
    color: SECONDARY_COLOR,
    fontSize: 15,
    fontWeight: "700",
    margin: 6,
  },
  items: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  title: {
    textAlign: "right",
  },
});

interface WeatherDetailsProps {
  currentWeather: any;
  unitsSystem: "metric" | "imperial";
}
export const WeatherDetails: React.FC<WeatherDetailsProps> = ({
  currentWeather,
  unitsSystem,
}) => {
  const {
    main: { feels_like, humidity, pressure, temp_min, temp_max },
    wind: { speed },
  } = currentWeather;

  const windSpeed =
    unitsSystem === "metric"
      ? `${(speed * 3.6).toFixed(2)} Km/h`
      : `${speed.toFixed(2)} Mph`;
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.row,
          { borderBottomWidth: 1, borderBottomColor: BORDER_COLOR },
        ]}
      >
        <View
          style={[
            styles.box,
            { borderRightWidth: 1, borderRightColor: BORDER_COLOR },
          ]}
        >
          <View style={styles.row}>
            <MaterialCommunityIcons
              name="thermometer-chevron-up"
              size={30}
              color={PRIMARY_COLOR}
            />
            <View style={styles.items}>
              <Text style={styles.title}>{`Temperatura\nmáxima`}</Text>
              <Text style={styles.subtitle}>{temp_max}°</Text>
            </View>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.row}>
            <MaterialCommunityIcons
              name="thermometer-chevron-down"
              size={30}
              color={PRIMARY_COLOR}
            />
            <View style={styles.items}>
              <Text style={styles.title}>{`Temperatura\nmínima`}</Text>
              <Text style={styles.subtitle}>{temp_min}°</Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={[
          styles.row,
          { borderBottomWidth: 1, borderBottomColor: BORDER_COLOR },
        ]}
      >
        <View
          style={[
            styles.box,
            { borderRightWidth: 1, borderRightColor: BORDER_COLOR },
          ]}
        >
          <View style={styles.row}>
            <MaterialCommunityIcons
              name="thermometer"
              size={30}
              color={PRIMARY_COLOR}
            />
            <View style={styles.items}>
              <Text style={styles.title}>{`Sensação\ntérmica`}</Text>
              <Text style={styles.subtitle}>{feels_like}°</Text>
            </View>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.row}>
            <MaterialCommunityIcons
              name="water"
              size={30}
              color={PRIMARY_COLOR}
            />
            <View style={styles.items}>
              <Text style={styles.title}>{`Umidade\ndo ar`}</Text>
              <Text style={styles.subtitle}>{humidity}%</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.row}>
        <View
          style={[
            styles.box,
            { borderRightWidth: 1, borderRightColor: BORDER_COLOR },
          ]}
        >
          <View style={styles.row}>
            <MaterialCommunityIcons
              name="weather-windy"
              size={30}
              color={PRIMARY_COLOR}
            />
            <View style={styles.items}>
              <Text style={styles.title}>{`Velocidade\ndo vento`}</Text>
              <Text style={styles.subtitle}>{windSpeed}</Text>
            </View>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.row}>
            <MaterialCommunityIcons
              name="speedometer"
              size={30}
              color={PRIMARY_COLOR}
            />
            <View style={styles.items}>
              <Text style={styles.title}>{`Pressão\natmosférica`}</Text>
              <Text style={styles.subtitle}>{pressure} hPa</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

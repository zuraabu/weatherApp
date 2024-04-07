import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
  View,
  StatusBar,
  ImageBackground,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const DATA = [
  {
    dt_txt: "2023-02-18 12:00:00",
    main: {
      temp_max: 8.55,
      temp_min: 7.55,
    },
    weather: [
      {
        main: "Clear",
      },
    ],
  },
  {
    dt_txt: "2023-02-18 15:00:00",
    main: {
      temp_max: 8.55,
      temp_min: 7.55,
    },
    weather: [
      {
        main: "Clouds",
      },
    ],
  },
  {
    dt_txt: "2023-02-18 18:00:00",
    main: {
      temp_max: 8.55,
      temp_min: 5.55,
    },
    weather: [
      {
        main: "Rain",
      },
    ],
  },
];

const Item = (props) => {
  const { dt_text, min, max, condition } = props;
  return (
    <View style={styles.item}>
      <Feather name={"sun"} size={50} color="#E5C07B" />
      <Text style={styles.data}>{dt_text}</Text>
      <Text style={styles.tempMin}>{min}</Text>
      <Text style={styles.tempMax}>{max}</Text>
    </View>
  );
};
const UpcomingWeather = () => {
  const renderItem = ({ item }) => (
    <Item
      condition={item.weather[0].main}
      dt_text={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../assets/background.png")}
        style={styles.image}
      >
        <Text style={{ color: "#e3e1d5" }}>Upcoming Weather</Text>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_txt}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "#24272F",
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 0.5,
    borderRadius: 40,
    borderColor: "#e3e1d5",
    backgroundColor: "#292C35",
  },
  data: {
    color: "#ABB2BF",
    fontSize: 15,
  },
  tempMin: {
    color: "#62AFEF",
    fontSize: 20,
  },
  tempMax: {
    color: "#E06C75",
    fontSize: 20,
  },
  image: {
    flex: 1,
  },
});
export default UpcomingWeather;

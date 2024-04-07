import React from "react";
import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
// import { View } from "react-native-web";

const CurrentWeather = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Feather style={styles.icon} name="sun" size={100} color="#e3e1d5" />
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>Feels like 5</Text>
        <View style={styles.highLowWrapper}>
          <Text style={styles.highLow}>High: 8 </Text>
          <Text style={styles.highLow}>Low: 6</Text>
        </View>
      </View>
      <View style={styles.bodyWrapper}>
        <Text style={styles.description}>Its sunny</Text>
        <Text style={styles.message}>Its perfect</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#0f1626",
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  temp: {
    color: "#e3e1d5",
    fontSize: 48,
  },
  feels: {
    color: "#e3e1d5",
    fontSize: 30,
  },
  highLowWrapper: {
    flexDirection: "row",
  },
  highLow: {
    color: "#e3e1d5",
    fontSize: 20,
  },
  bodyWrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 25,
    marginBottom: 40,
  },
  description: {
    color: "#e3e1d5",
    fontSize: 48,
  },
  message: {
    color: "#e3e1d5",
    fontSize: 30,
  },
  icon: {
    marginTop: 40,
  },
});
export default CurrentWeather;

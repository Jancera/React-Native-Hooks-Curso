import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Position = () => {
  return (
    <View>
      <View style={style.box1} />
      <View style={style.box2} />
      <View style={style.box3} />
    </View>
  );
};

const style = StyleSheet.create({
  box1: {
    width: 100,
    height: 100,
    backgroundColor: "red",
  },
  box2: {
    width: 70,
    height: 70,
    backgroundColor: "green",
    position: "absolute",
  },
  box3: {
    width: 50,
    height: 50,
    backgroundColor: "blue",
    position: "absolute",
  },
});

export default Position;

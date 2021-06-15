import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";

const Scroll = () => {
  return (
    <View>
      <Text>Scroll</Text>
      <ScrollView
        decelerationRate="normal"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.caixa1} />
        <View style={styles.caixa2} />
        <View style={styles.caixa3} />
        <View style={styles.caixa1} />
        <View style={styles.caixa2} />
        <View style={styles.caixa3} />
      </ScrollView>
    </View>
  );
};

const { width, height } = Dimensions.get("window");
const LADO = width;

const styles = StyleSheet.create({
  caixa1: {
    height: LADO,
    width: LADO,
    backgroundColor: "red",
  },
  caixa2: {
    height: LADO,
    width: LADO,
    backgroundColor: "green",
  },
  caixa3: {
    height: LADO,
    width: LADO,
    backgroundColor: "blue",
  },
});

export default Scroll;

import React from "react";
import { View, Text, StyleSheet } from "react-native";

const FlexBox = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.caixa1}>Caixa 1</Text>
      <Text style={styles.caixa2}>Caixa 2</Text>
      <Text style={styles.caixa3}>Caixa 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    borderWidth: 3,
    borderColor: "blue",
    flexDirection: "row-reverse",
  },
  caixa1: {
    fontSize: 30,
    borderWidth: 3,
    borderColor: "red",
  },
  caixa2: {
    fontSize: 30,
    borderWidth: 3,
    borderColor: "red",
  },
  caixa3: {
    fontSize: 30,
    borderWidth: 3,
    borderColor: "red",
  },
});

export default FlexBox;

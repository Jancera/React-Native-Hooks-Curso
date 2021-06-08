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
    flex: 0.5,
    borderWidth: 3,
    borderColor: "blue",
  },
  caixa1: {
    fontSize: 20,
    borderWidth: 3,
    borderColor: "red",
    alignSelf: "flex-start",
  },
  caixa2: {
    fontSize: 30,
    borderWidth: 3,
    borderColor: "red",
    alignSelf: "center",
  },
  caixa3: {
    fontSize: 20,
    borderWidth: 3,
    borderColor: "red",
    alignSelf: "flex-end",
  },
});

export default FlexBox;

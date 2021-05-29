import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const TelaInicial = (props) => {
  console.log(props);
  return (
    <View style={styles.view}>
      <Text style={StyleSheet.compose(styles.test1, styles.test2)}>
        Inicial
      </Text>
      <Button
        title="Navegar"
        onPress={() => props.navigation.navigate("Primeira")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    borderWidth: 5,
    borderColor: "blue",
  },
  text: {
    fontSize: 20,
    margin: 20,
    borderWidth: 3,
    borderColor: "red",
    backgroundColor: "#BFBFBF",
  },
  test1: {
    borderWidth: 3,
  },
  test2: {
    borderColor: "red",
  },
});

export default TelaInicial;

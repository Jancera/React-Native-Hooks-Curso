import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const Pessoa = (props) => {
  return (
    <View>
      <Text>
        Oi, Eu sou {props.name} {props.sobrenome}!
      </Text>
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <StatusBar style="auto" />
      <Button title="Teste" />
      <Pessoa name="Alex" sobrenome="Lima" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

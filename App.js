import { StatusBar } from "expo-status-bar";
import React from "react";
<<<<<<< HEAD
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
=======
import { StyleSheet, Text, View } from "react-native";
>>>>>>> 9834b0440d614ab3a0348c6b08b62d90bb2e411c

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <StatusBar style="auto" />
<<<<<<< HEAD
      <Button title="Teste" />
      <Pessoa name="Alex" sobrenome="Lima" />
=======
>>>>>>> 9834b0440d614ab3a0348c6b08b62d90bb2e411c
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

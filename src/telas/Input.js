import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
} from "react-native";

const Input = () => {
  const [dados, setDados] = useState("");
  return (
    <View>
      <Text style={styles.texto}>{dados}</Text>
      <TextInput
        style={styles.input}
        value={dados}
        onChangeText={(text) => {
          setDados(text);
        }}
        scrollEnabled={true}
        placeholder="Digite seu email"
        placeholderTextColor="blue"
        textAlignVertical="top"
        autoCapitalize="none"
        secureTextEntry={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 20,
    borderWidth: 3,
    borderColor: "black",
    margin: 10,
    height: 70,
  },
  texto: { fontSize: 20, alignSelf: "center" },
});

export default Input;

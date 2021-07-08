import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
} from "react-native";

const State = () => {
  const [valor, setValor] = useState(0);
  return (
    <View>
      <Text style={styles.texto}>{valor}</Text>
      <Button
        title="Aumentar"
        onPress={() => {
          setValor(valor + 1);
          console.log(valor);
        }}
      />
      <Button
        title="Diminuir"
        onPress={() => {
          setValor(valor - 1);
          console.log(valor);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  texto: {
    fontSize: 30,
    alignSelf: "center",
  },
});

export default State;

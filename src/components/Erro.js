import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Erro = ({ showError }) => {
  return showError ? (
    <Text style={styles.texto}>
      Estamos tendo problemas ao carregar os dados
    </Text>
  ) : null;
};

const styles = StyleSheet.create({
  texto: {
    fontSize: 20,
    marginTop: 40,
    color: "white",
    width: "80%",
    textAlign: "center",
    alignSelf: "center",
  },
});

export default Erro;

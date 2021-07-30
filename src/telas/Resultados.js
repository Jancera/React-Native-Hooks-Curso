import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Resultados = ({ route }) => {
  const escolha = route.params.escolha;
  const link = `api.giphy.com/v1/${escolha}/search`;
  console.log(link);
  return (
    <View>
      <Text>Resultado</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Resultados;

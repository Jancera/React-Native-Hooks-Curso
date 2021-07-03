import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Imagem from "../component/Imagem";

const CR = () => {
  return (
    <View>
      <Imagem texto="Imagem 1" />
      <Imagem texto="Imagem 2" />
      <Imagem texto="Imagem 3" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default CR;

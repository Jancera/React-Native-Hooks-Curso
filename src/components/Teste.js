import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context } from "../context/dataContext";

const Teste = () => {
  const data = useContext(Context);
  return <Text>{data}</Text>;
};

const styles = StyleSheet.create({});

export default Teste;

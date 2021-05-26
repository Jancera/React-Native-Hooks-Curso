import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const TelaInicial = (props) => {
  console.log(props);
  return (
    <View>
      <Text>Inicial</Text>
      <Button
        title="Navegar"
        onPress={() => props.navigation.navigate("Primeira")}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default TelaInicial;

import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const PrimieraComponent = (props) => {
  return (
    <View>
      <Text>Primeira Component</Text>
      <Button
        title="Navegar"
        onPress={() => props.navigation.navigate("Inicial")}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default PrimieraComponent;

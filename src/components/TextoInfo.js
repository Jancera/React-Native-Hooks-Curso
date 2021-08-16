import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "react-native-vector-icons";

const TextoInfo = ({ showMessage }) => {
  return showMessage ? (
    <View style={styles.headerContainer}>
      <Ionicons name="arrow-up" size={40} color="white" />
      <Text style={styles.headerText}>
        Use a barra de pesquisa para encontrar o que busca
      </Text>
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: "center",
    margin: 20,
  },
  headerText: {
    fontSize: 16,
    color: "white",
    width: "80%",
    textAlign: "center",
    alignSelf: "center",
  },
});

export default TextoInfo;

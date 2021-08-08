import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "react-native-vector-icons";

const Cabecalho = ({
  navigation,
  text,
  setText,
  solicitar,
}) => {
  return (
    <View style={styles.cabecalho}>
      <Ionicons
        name="chevron-back"
        size={40}
        color="white"
        onPress={() => {
          navigation.pop();
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Pesquisar"
        autoCapitalize="none"
        autoCorrect={false}
        value={text}
        onChangeText={(value) => setText(value)}
        onSubmitEditing={() => {
          solicitar(text);
        }}
      />
      <Ionicons
        name="search"
        size={40}
        color="white"
        onPress={() => {
          solicitar(text);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cabecalho: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 25,
    fontSize: 20,
    paddingHorizontal: 20,
  },
});

export default Cabecalho;

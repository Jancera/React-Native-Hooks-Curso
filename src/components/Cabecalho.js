import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
} from "react-native";
import { Ionicons } from "react-native-vector-icons";

let searchedText = "";

const Cabecalho = ({
  navigation,
  text,
  setText,
  solicitar,
}) => {
  return (
    <View>
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
            searchedText = text;
            solicitar(text);
          }}
        />
        <Ionicons
          name="search"
          size={40}
          color="white"
          onPress={() => {
            searchedText = text;
            solicitar(text);
          }}
        />
      </View>
      {searchedText !== "" ? (
        <Text style={styles.white}>
          Monstrando resultados para{" "}
          <Text style={styles.whiteBold}>
            {searchedText}
          </Text>
        </Text>
      ) : null}
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
  white: {
    fontSize: 16,
    marginLeft: 10,
    marginTop: 15,
    color: "white",
  },
  whiteBold: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
});

export default Cabecalho;

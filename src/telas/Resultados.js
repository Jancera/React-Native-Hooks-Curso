import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ImageBackground,
  TextInput,
} from "react-native";
import { Ionicons } from "react-native-vector-icons";

const Resultados = ({ route }) => {
  const escolha = route.params.escolha;
  const link = `api.giphy.com/v1/${escolha}/search`;
  const [text, setText] = useState("");
  return (
    <ImageBackground
      source={require("../../assets/BG.png")}
      style={styles.container}
    >
      <SafeAreaView style={styles.view}>
        <View style={styles.cabecalho}>
          <Ionicons
            name="chevron-back"
            size={40}
            color="white"
            onPress={() => {}}
          />
          <TextInput
            style={styles.input}
            placeholder="Pesquisar"
            autoCapitalize="none"
            autoCorrect={false}
            value={text}
            onChangeText={(value) => setText(value)}
          />
          <Ionicons
            name="search"
            size={40}
            color="white"
            onPress={() => {}}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view: {
    marginTop: StatusBar.currentHeight,
  },
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

export default Resultados;

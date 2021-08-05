import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ImageBackground,
  TextInput,
  Keyboard,
} from "react-native";
import { Ionicons } from "react-native-vector-icons";
import axios from "axios";
import API_KEY from "../API_KEY";

const Resultados = ({ navigation, route }) => {
  const escolha = route.params.escolha;
  const link = `https://api.giphy.com/v1/${escolha}/search`;
  const [text, setText] = useState("");

  const [data, setData] = useState([]);

  const solicitar = async (text) => {
    Keyboard.dismiss();
    try {
      const resultados = await axios.get(link, {
        params: {
          api_key: API_KEY,
          q: text,
          lang: "pt",
        },
      });
      console.log(resultados.data.data);
      setData(resultados.data.data);
    } catch (err) {
      console.log(err);
    }
  };

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

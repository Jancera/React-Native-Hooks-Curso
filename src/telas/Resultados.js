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
  FlatList,
  Image,
  Dimensions,
} from "react-native";
import Cabecalho from "../components/Cabecalho";
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
        <Cabecalho
          navigation={navigation}
          text={text}
          setText={setText}
          solicitar={solicitar}
        />
        <FlatList
          data={data}
          keyExtractor={(element) => element.id}
          numColumns={2}
          renderItem={({ item }) => {
            return (
              <Image
                style={styles.image}
                source={{
                  uri: item.images.preview_gif.url,
                }}
              />
            );
          }}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

const { width, height } = Dimensions.get("window");
const IMAGE_WIDTH = width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view: {
    marginTop: StatusBar.currentHeight,
  },
  image: {
    width: IMAGE_WIDTH / 2,
    height: IMAGE_WIDTH / 2,
  },
});

export default Resultados;

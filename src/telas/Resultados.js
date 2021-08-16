import React, { useState } from "react";
import {
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ImageBackground,
  Keyboard,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import { Ionicons } from "react-native-vector-icons";
import Cabecalho from "../components/Cabecalho";
import axios from "axios";
import API_KEY from "../API_KEY";
import TextoInfo from "../components/TextoInfo";
import Loading from "../components/Loading";

const Resultados = ({ navigation, route }) => {
  const escolha = route.params.escolha;
  const link = `https://api.giphy.com/v1/${escolha}/search`;
  const [text, setText] = useState("");
  const [showMessage, setShowMessage] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const [data, setData] = useState([]);

  const solicitar = async (text) => {
    Keyboard.dismiss();
    setShowMessage(false);
    setIsLoading(true);
    try {
      const resultados = await axios.get(link, {
        params: {
          api_key: API_KEY,
          q: text,
          lang: "pt",
        },
      });
      console.log(resultados.data.data);
      setIsLoading(false);
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
          ListHeaderComponent={
            <>
              <TextoInfo showMessage={showMessage} />
              <Loading isLoading={isLoading} />
            </>
          }
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Detalhes", {
                    item: item,
                  })
                }
              >
                <Image
                  style={styles.image}
                  source={{
                    uri: item.images.preview_gif.url,
                  }}
                />
              </TouchableOpacity>
            );
          }}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

const { width, height } = Dimensions.get("window");
const COLUMN_WIDTH = width / 2;
const IMAGE_WIDTH = COLUMN_WIDTH * 0.9;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view: {
    marginTop: StatusBar.currentHeight,
  },
  image: {
    width: IMAGE_WIDTH,
    height: IMAGE_WIDTH,
    margin: IMAGE_WIDTH * 0.05,
  },
});

export default Resultados;

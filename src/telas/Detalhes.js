import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ImageBackground,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import { Ionicons } from "react-native-vector-icons";

const Detalhes = ({ navigation, route }) => {
  const data = route.params.item;
  return (
    <ImageBackground
      source={require("../../assets/BG.png")}
      style={styles.container}
    >
      <SafeAreaView>
        <View style={styles.cabecalho}>
          <Ionicons
            name="chevron-back"
            size={40}
            color="white"
            onPress={() => {
              navigation.pop();
            }}
          />
          <Text style={styles.texto}>Resultados</Text>
        </View>

        <View style={styles.imageContainer}>
          <Image
            style={{ flex: 1 }}
            source={{ uri: data.images.original.url }}
            resizeMode="contain"
          />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.texto}>{data.title}</Text>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(data.images.original.url)
            }
          >
            <Ionicons
              name="globe"
              size={40}
              color="white"
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  texto: {
    color: "white",
    fontSize: 22,
    width: "80%",
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 10,
  },
  textoTitulo: {
    color: "white",
    fontSize: 18,
  },
  cabecalho: {
    flexDirection: "row",
    alignItems: "center",
  },
  imageContainer: {
    width: "100%",
    height: "50%",
    backgroundColor: "rgba(171,171,171,0.8)",
  },
});

export default Detalhes;

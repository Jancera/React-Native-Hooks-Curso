import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
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
          <Text style={styles.texto}>Detalhes</Text>
        </View>

        <View style={styles.imageContainer}>
          <Image
            style={{ flex: 1 }}
            source={{ uri: data.images.original.url }}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.texto}>{data.title}</Text>
        <Ionicons name="globe" size={40} color="white" />
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

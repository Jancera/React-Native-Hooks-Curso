import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
} from "react-native";

const TelaInicial = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../../assets/HomePage.png")}
      style={styles.container}
    >
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Text style={styles.mainText}>Pesquisar por:</Text>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate("Resultados", {
              escolha: "gifs",
            })
          }
        >
          <Text style={styles.textButton}>GIFs</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate("Resultados", {
              escolha: "stickers",
            })
          }
        >
          <Text style={styles.textButton}>Stickers</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mainText: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
  },
  button: {
    width: 100,
    height: 50,
    borderWidth: 3,
    borderColor: "white",
    borderRadius: 10,
    backgroundColor: "white",
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default TelaInicial;

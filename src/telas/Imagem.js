import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
} from "react-native";

const Imagem = () => {
  return (
    <View>
      <Text>Image</Text>
      <Image
        style={{
          width: 300,
          height: 400,
          borderWidth: 3,
          borderColor: "red",
        }}
        resizeMode="center"
        source={require("../../assets/QuebrandoParadigmas.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Imagem;

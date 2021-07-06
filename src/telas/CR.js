import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import Imagem from "../component/Imagem";

const CR = () => {
  return (
    <ScrollView>
      <Imagem
        texto="Lago di Brales "
        img={require("../../assets/images/1.png")}
      />
      <Imagem
        texto="Pragser Wildsee "
        img={require("../../assets/images/2.png")}
      />
      <Imagem
        texto="Yosemite Valley "
        img={require("../../assets/images/3.png")}
      />
      <Imagem
        texto="Sorapiss "
        img={{
          uri: "https://images.unsplash.com/photo-1508144753681-9986d4df99b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
        }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default CR;

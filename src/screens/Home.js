import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Teste from "../components/Teste";
import { Provider } from "../context/dataContext";

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
      <Provider>
        <Teste />
      </Provider>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Home;

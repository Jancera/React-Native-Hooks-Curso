import React, { useState, useReducer } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
} from "react-native";
import RButton from "../component/RButton";

const reducer = (state, action) => {
  switch (action.type) {
    case "red":
      return { ...state, red: state.red + action.payload };
    case "green":
      return {
        ...state,
        green: state.green + action.payload,
      };
    case "blue":
      return {
        ...state,
        blue: state.blue + action.payload,
      };
  }
};

const RGB = () => {
  // "rgb(0,0,0)"

  const [state, dispatch] = useReducer(reducer, {
    red: 0,
    green: 0,
    blue: 0,
  });

  return (
    <View>
      <View
        style={[
          styles.circulo,
          {
            backgroundColor: `rgb(${state.red},${state.green},${state.blue})`,
          },
        ]}
      />

      <Text style={styles.texto}>
        Red: {state.red} Green:{state.green} Blue:
        {state.blue}
      </Text>
      <View style={styles.button}>
        <Button
          title="Aumentar Vermelho"
          color="red"
          onPress={() => {
            dispatch({ type: "red", payload: 15 });
          }}
        />
        <Button
          title="Diminuir Vermelho"
          color="red"
          onPress={() => {
            dispatch({ type: "red", payload: -15 });
          }}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Aumentar Verde"
          color="green"
          onPress={() => {
            dispatch({ type: "green", payload: 15 });
          }}
        />
        <Button
          title="Diminuir Verde"
          color="green"
          onPress={() => {
            dispatch({ type: "green", payload: -15 });
          }}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Aumentar Azul"
          color="blue"
          onPress={() => {
            dispatch({ type: "blue", payload: 15 });
          }}
        />
        <Button
          title="Diminuir Azul"
          color="blue"
          onPress={() => {
            dispatch({ type: "blue", payload: -15 });
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  texto: { fontSize: 20, alignSelf: "center", margin: 20 },
  circulo: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: "black",
    alignSelf: "center",
  },
  containerButton: {
    flexDirection: "row",
    alignSelf: "center",
  },
  button: { alignSelf: "center", flexDirection: "row" },
});

export default RGB;

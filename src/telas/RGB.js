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
      if (
        state.red + action.payload > 255 ||
        state.red + action.payload < 0
      ) {
        return state;
      } else {
        return {
          ...state,
          red: state.red + action.payload,
        };
      }
    case "green":
      if (
        state.green + action.payload > 255 ||
        state.green + action.payload < 0
      ) {
        return state;
      } else {
        return {
          ...state,
          green: state.green + action.payload,
        };
      }
    case "blue":
      if (
        state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
      ) {
        return state;
      } else {
        return {
          ...state,
          blue: state.blue + action.payload,
        };
      }
    default:
      return state;
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
      <RButton color="red" dispatch={dispatch} />
      <RButton color="green" dispatch={dispatch} />
      <RButton color="blue" dispatch={dispatch} />
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

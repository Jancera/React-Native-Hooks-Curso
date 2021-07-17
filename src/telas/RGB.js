import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
} from "react-native";
import RButton from "../component/RButton";

const RGB = () => {
  // "rgb(0,0,0)"
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  return (
    <View>
      <View
        style={[
          styles.circulo,
          {
            backgroundColor: `rgb(${red},${green},${blue})`,
          },
        ]}
      />

      <Text style={styles.texto}>
        Red: {red} Green:{green} Blue:{blue}
      </Text>

      <RButton
        color="red"
        colorValue={red}
        setColor={setRed}
      />
      <RButton
        color="green"
        colorValue={green}
        setColor={setGreen}
      />
      <RButton
        color="blue"
        colorValue={blue}
        setColor={setBlue}
      />
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
});

export default RGB;

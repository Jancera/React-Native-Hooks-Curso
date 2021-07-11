import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
} from "react-native";

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

      <View style={styles.containerButton}>
        <Button
          title="Aumentar Vermelho"
          color="red"
          onPress={() => {
            if (red + 15 > 255) {
              setRed(255);
            } else {
              setRed(red + 15);
            }
          }}
        />
        <Button
          title="Reduzir Vermelho"
          color="red"
          onPress={() => {
            if (red - 15 < 0) {
              setRed(0);
            } else {
              setRed(red - 15);
            }
          }}
        />
      </View>
      <View style={styles.containerButton}>
        <Button
          title="Aumentar Verde"
          color="green"
          onPress={() => {
            if (green + 15 > 255) {
              setGreen(255);
            } else {
              setGreen(green + 15);
            }
          }}
        />
        <Button
          title="Reduzir Verde"
          color="green"
          onPress={() => {
            if (green - 15 < 0) {
              setGreen(0);
            } else {
              setGreen(green - 15);
            }
          }}
        />
      </View>
      <View style={styles.containerButton}>
        <Button
          title="Aumentar Azul"
          color="blue"
          onPress={() => {
            if (blue + 15 > 255) {
              setBlue(255);
            } else {
              setBlue(blue + 15);
            }
          }}
        />
        <Button
          title="Reduzir Azul"
          color="blue"
          onPress={() => {
            if (blue - 15 < 0) {
              setBlue(0);
            } else {
              setBlue(blue - 15);
            }
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
});

export default RGB;

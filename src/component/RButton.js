import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
} from "react-native";

const RButton = ({ color, dispatch }) => {
  let title = "";
  if (color === "red") {
    title = "vermelho";
  } else if (color === "blue") {
    title = "azul";
  } else {
    title = "verde";
  }

  return (
    <View style={styles.container}>
      <Button
        title={`Aumentar ${title}`}
        color={color}
        onPress={() => {
          dispatch({ type: color, payload: 15 });
        }}
      />
      <Button
        title={`Diminuir ${title}`}
        color={color}
        onPress={() => {
          dispatch({ type: color, payload: -15 });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: "row", alignSelf: "center" },
});

export default RButton;

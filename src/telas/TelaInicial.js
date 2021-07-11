import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
} from "react-native";

const TelaInicial = (props) => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Telas</Text>
      <Button
        title="Box Model"
        onPress={() =>
          props.navigation.navigate("Primeira")
        }
      />
      <Button
        title="Position"
        onPress={() =>
          props.navigation.navigate("Position")
        }
      />
      <Button
        title="Flex Box"
        onPress={() =>
          props.navigation.navigate("Flex Box")
        }
      />
      <Button
        title="Button e Touchable"
        onPress={() =>
          props.navigation.navigate("Button_Touchable")
        }
      />
      <Button
        title="Imagem"
        onPress={() => props.navigation.navigate("Imagem")}
      />
      <Button
        title="Scroll"
        onPress={() => props.navigation.navigate("Scroll")}
      />
      <Button
        title="FlatList"
        onPress={() =>
          props.navigation.navigate("FlatList")
        }
      />
      <Button
        title="CR"
        onPress={() => props.navigation.navigate("CR")}
      />
      <Button
        title="State"
        onPress={() => props.navigation.navigate("State")}
      />
      <Button
        title="Input"
        onPress={() => props.navigation.navigate("Input")}
      />
      <Button
        title="RGB"
        onPress={() => props.navigation.navigate("RGB")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    margin: 20,
    alignSelf: "center",
  },
});

export default TelaInicial;

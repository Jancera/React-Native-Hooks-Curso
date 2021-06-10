import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
} from "react-native";

const TelaInicial = (props) => {
  console.log(props);
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

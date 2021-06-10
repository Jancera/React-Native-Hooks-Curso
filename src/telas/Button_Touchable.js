import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";

const Button_Touchable = () => {
  return (
    <View>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => console.log("Pressionado 2")}
      >
        <Text>Button_Touchable</Text>
      </TouchableOpacity>
      <TouchableWithoutFeedback
        onPress={() => console.log("Pressionado 3")}
      >
        <Text>Button_Touchable</Text>
      </TouchableWithoutFeedback>
      <View style={styles.button}>
        <Button
          title="  Teste  "
          onPress={() => console.log("Pressionado")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: { alignSelf: "center" },
  touchable: {
    height: 40,
    width: 200,
    borderRadius: 20,
    alignSelf: "center",
    borderWidth: 3,
    borderColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Button_Touchable;

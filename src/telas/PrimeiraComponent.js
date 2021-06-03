import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
} from "react-native";

const PrimeiraComponent = (props) => {
  return (
    <View>
      <Text style={styles.text}>Box Model</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    borderWidth: 5,
    borderColor: "red",
    backgroundColor: "rgba(0,0,0,0.1)",
    height: 200,
    width: 200,
    padding: 20,
    paddingHorizontal: 40,
    paddingVertical: 40,
    marginVertical: 50,
  },
});

export default PrimeiraComponent;

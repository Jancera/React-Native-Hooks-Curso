import React, { useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  Button,
} from "react-native";

var { width, height } = Dimensions.get("window");
const Scroll = () => {
  const scrollRef = useRef();
  return (
    <View>
      <Text>Scroll</Text>
      <ScrollView
        horizontal
        onLayout={(event) =>
          console.log(event.nativeEvent.layout)
        }
        ref={scrollRef}
        decelerationRate="normal"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.caixa1} />
        <View style={styles.caixa2} />
        <View style={styles.caixa3} />
        <View style={styles.caixa1} />
        <View style={styles.caixa2} />
        <View style={styles.caixa3} />
      </ScrollView>
      <Button
        title="Rolar"
        onPress={() => scrollRef.current.scrollToEnd()}
      />
    </View>
  );
};

const LADO = width;
const ALTURA = 518;

const styles = StyleSheet.create({
  caixa1: {
    height: LADO,
    width: LADO,
    backgroundColor: "red",
  },
  caixa2: {
    height: LADO,
    width: LADO,
    backgroundColor: "green",
  },
  caixa3: {
    height: LADO,
    width: LADO,
    backgroundColor: "blue",
  },
});

export default Scroll;

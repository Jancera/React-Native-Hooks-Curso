import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  Button,
} from "react-native";

var { width, height } = Dimensions.get("window");

const Flat_List = () => {
  const [state, setState] = useState(true);

  const callback = useCallback(
    () => console.log("Disparado"),
    []
  );

  const amigos = [
    { nome: "Amigo 1", key: "1" },
    { nome: "Amigo 2", key: "2" },
    { nome: "Amigo 3", key: "3" },
    { nome: "Amigo 4", key: "4" },
    { nome: "Amigo 5", key: "5" },
    { nome: "Amigo 6", key: "6" },
    { nome: "Amigo 7", key: "7" },
  ];

  return (
    <View>
      <FlatList
        data={amigos}
        horizontal
        pagingEnabled
        keyExtractor={(elemento) => String(elemento.key)}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.containerElement}>
              <Text>
                {item.nome} {index}
              </Text>
            </View>
          );
        }}
        viewabilityConfig={{
          viewAreaCoveragePercentThreshold: 50,
          minimumViewTime: 0,
        }}
        onViewableItemsChanged={callback}
      />
      <Button
        title="Pressione"
        onPress={() => setState(!state)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerElement: {
    borderWidth: 3,
    borderColor: "blue",
    height: 200,
    width: width,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyComponent: {
    height: 300,
    width: "70%",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    alignSelf: "center",
    borderColor: "grey",
    borderRadius: 30,
  },
  cabecalho: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "red",
    height: 50,
  },
  rodape: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "green",
    height: 50,
  },
});

export default Flat_List;

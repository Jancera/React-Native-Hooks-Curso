import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
} from "react-native";

const Flat_List = () => {
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
        renderItem={({ item, index }) => {
          return (
            <View style={styles.containerElement}>
              <Text>
                {item.nome} {index}
              </Text>
            </View>
          );
        }}
        keyExtractor={(elemento) => String(elemento.key)}
        initialScrollIndex={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerElement: {
    borderWidth: 3,
    borderColor: "blue",
    height: 200,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Flat_List;

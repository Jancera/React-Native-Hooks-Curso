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
        ListEmptyComponent={() => (
          <View style={styles.emptyComponent}>
            <Text style={{ color: "grey" }}>
              Erro ao carregar os dados
            </Text>
          </View>
        )}
        horizontal
        ItemSeparatorComponent={() => (
          <View style={{ height: 20, width: 20 }} />
        )}
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
});

export default Flat_List;

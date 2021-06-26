import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
} from "react-native";

const Flat_List = () => {
  const [refreshing, setRefreshing] = useState(false);
  const amigos = [
    { nome: "Amigo 1", key: "1" },
    { nome: "Amigo 2", key: "2" },
    { nome: "Amigo 3", key: "3" },
    { nome: "Amigo 4", key: "4" },
    { nome: "Amigo 5", key: "5" },
    { nome: "Amigo 6", key: "6" },
    { nome: "Amigo 7", key: "7" },
  ];

  const amigos2 = [
    { nome: "Amigo 8", key: "8" },
    { nome: "Amigo 9", key: "9" },
    { nome: "Amigo 10", key: "10" },
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
        ListHeaderComponentStyle={styles.cabecalho}
        ListHeaderComponent={() => (
          <View>
            <Text>Cabeçalho</Text>
          </View>
        )}
        ListFooterComponentStyle={styles.rodape}
        ListFooterComponent={() => (
          <View>
            <Text>Rodapé</Text>
          </View>
        )}
        refreshing={refreshing}
        onRefresh={() => {
          setRefreshing(true);
          amigos.push(...amigos2);
          setRefreshing(false);
        }}
        onViewableItemsChanged
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerElement: {
    borderWidth: 3,
    borderColor: "blue",
    height: 200,
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

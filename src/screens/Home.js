import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
} from "react-native";
import Teste from "../components/Teste";
import { Context } from "../context/dataContext";

const Home = () => {
  const { state, aumentar, toggle, acessarAPI } =
    useContext(Context); // Você pode usar destructuring => const {state, dispatch} = useContext(Context)
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{state.value}</Text>
      <Button
        title="Aumentar"
        onPress={() => {
          acessarAPI();
          aumentar(5);
        }}
      />
      {state.showMessage ? (
        <Text>Mensagem que não pode ser mostrada</Text>
      ) : null}
      <Button
        title="Mostrar mensagem"
        onPress={() => toggle(true)}
      />
      <Button
        title="Ocultar mensagem"
        onPress={() => toggle(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
  },
});

export default Home;

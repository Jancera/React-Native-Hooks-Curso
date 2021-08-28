import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
} from "react-native";
import Teste from "../components/Teste";
import { Provider, Context } from "../context/dataContext";

const Home = () => {
  const actualState = useContext(Context); // Você pode usar destructuring => const {state, dispatch} = useContext(Context)
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {actualState.state.value}
      </Text>
      <Button
        title="Aumentar"
        onPress={() =>
          actualState.dispatch({
            type: "aumentar",
            payload: 1,
          })
        }
      />
      {actualState.state.showMessage ? (
        <Text>Mensagem que não pode ser mostrada</Text>
      ) : null}
      <Button
        title="Mostrar mensagem"
        onPress={() =>
          actualState.dispatch({
            type: "toggle",
            payload: true,
          })
        }
      />
      <Button
        title="Ocultar mensagem"
        onPress={() =>
          actualState.dispatch({
            type: "toggle",
            payload: false,
          })
        }
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

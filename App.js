import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TelaInicial from "./src/telas/TelaInicial";
import Resultados from "./src/telas/Resultados";
import Detalhes from "./src/telas/Detalhes";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TelaInicial"
          component={TelaInicial}
        />
        <Stack.Screen
          name="Resultados"
          component={Resultados}
        />

        <Stack.Screen
          name="Detalhes"
          component={Detalhes}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import TelaInicial from "./src/telas/TelaInicial";
import PrimieraComponent from "./src/telas/PrimeiraComponent";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicial">
        <Stack.Screen name="Primeira" component={PrimieraComponent} />
        <Stack.Screen name="Inicial" component={TelaInicial} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

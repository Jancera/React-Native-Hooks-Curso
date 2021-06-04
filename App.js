import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import TelaInicial from "./src/telas/TelaInicial";
import PrimeiraComponent from "./src/telas/PrimeiraComponent";
import Position from "./src/telas/Position";
import FlexBox from "./src/telas/FlexBox";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicial">
        <Stack.Screen
          name="Primeira"
          component={PrimeiraComponent}
        />
        <Stack.Screen
          name="Inicial"
          component={TelaInicial}
        />
        <Stack.Screen
          name="Position"
          component={Position}
        />
        <Stack.Screen name="Flex Box" component={FlexBox} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

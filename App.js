import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import TelaInicial from "./src/telas/TelaInicial";
import PrimeiraComponent from "./src/telas/PrimeiraComponent";
import Position from "./src/telas/Position";
import FlexBox from "./src/telas/FlexBox";
import Button_Touchable from "./src/telas/Button_Touchable";
import Imagem from "./src/telas/Imagem";
import Scroll from "./src/telas/Scroll";

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
        <Stack.Screen
          name="Button_Touchable"
          component={Button_Touchable}
        />
        <Stack.Screen name="Flex Box" component={FlexBox} />
        <Stack.Screen name="Imagem" component={Imagem} />
        <Stack.Screen name="Scroll" component={Scroll} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

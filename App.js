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
import Flat_List from "./src/telas/Flat_List";
import CR from "./src/telas/CR";
import State from "./src/telas/State";
import Input from "./src/telas/Input";

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
        <Stack.Screen
          name="FlatList"
          component={Flat_List}
        />
        <Stack.Screen name="CR" component={CR} />
        <Stack.Screen name="State" component={State} />
        <Stack.Screen name="Input" component={Input} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

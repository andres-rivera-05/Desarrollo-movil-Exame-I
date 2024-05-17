import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import ListaRecetas from "./ListarRecetas";
import AgregarRecetas from "./AgregarRecetas";
import { MaterialIcons } from "@expo/vector-icons";

export default function Navigation() {
  const tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <tab.Navigator initialRouteName="Home">
        <tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: (props) => <MaterialIcons name="home" size={24} />,
          }}
        />
        <tab.Screen
          name="Agregar Recetas"
          component={AgregarRecetas}
          options={{
            tabBarLabel: "Agrgegar Recetas",
            tabBarIcon: (props) => (
              <MaterialIcons name="home" size={24}></MaterialIcons>
            ),
          }}
        ></tab.Screen>
        <tab.Screen
          name="Listar Recetas"
          component={ListaRecetas}
          options={{
            tabBarLabel: "Recetas",
            tabBarIcon: (props) => (
              <MaterialIcons name="contacts" size={24}></MaterialIcons>
            ),
          }}
        ></tab.Screen>
      </tab.Navigator>
    </NavigationContainer>
  );
}

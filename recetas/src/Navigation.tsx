import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Home";
import ListaRecetas from "./ListarRecetas";
import AgregarRecetas from "./AgregarRecetas";
import DetallesReceta from "./DetallesReceta";
import { MaterialIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

function RecetasStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ListaRecetas" component={ListaRecetas} />
      <Stack.Screen name="DetallesReceta" component={DetallesReceta} />
    </Stack.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="HomeStack"
        screenOptions={{ headerShown: false }}
      >
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarLabel: () => null,
            tabBarIcon: () => null,
            tabBarButton: () => null,
          }}
        />
        <Tab.Screen
          name="Agregar Recetas"
          component={AgregarRecetas}
          options={{
            tabBarLabel: "Agregar Recetas",
            tabBarIcon: () => <MaterialIcons name="add-circle" size={24} />,
          }}
        />
        <Tab.Screen
          name="Recetas"
          component={RecetasStack}
          options={{
            tabBarLabel: "Recetas",
            tabBarIcon: () => (
              <MaterialIcons name="format-list-numbered" size={24} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

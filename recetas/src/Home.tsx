import { View, Text, Image, StyleSheet } from "react-native";
import React from 'react'

export default function Home() {
  return (
    <View style={style.container}>
      <View style={style.containerImg}>
        <Image
          source={require("../assets/icono.png")}
          style={style.image}
        ></Image>
      </View>
      <Text style={style.text}>
        La aplicación permite a los usuarios agregar nuevas recetas, ver
        detalles de una receta especifica, y eliminar recetas existentes.
      </Text>
      <Text>Dueño de la aplicación: Cristian Rivera</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center'
  },
  containerImg:{
  justifyContent: 'center',
  alignItems: 'center'
  },
  image: {
    width: 230,
    height: 230,
    resizeMode: 'contain'
  },
  text:{
    textAlign: 'left',
    marginTop: 20
  }
});


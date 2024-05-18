import React, { useContext } from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import { RecetasContext } from "./RecetasContext";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";

interface Receta {
  recetaID: number;
  nombre: string;
  ingredientes: string;
}

type RouteParams = {
  DetallesReceta: {
    receta: Receta;
  };
};

const DetallesReceta: React.FC = () => {
  const { eliminarReceta } = useContext(RecetasContext);
  const navigation = useNavigation();
  const route = useRoute<RouteProp<RouteParams, "DetallesReceta">>();
  const { receta } = route.params;

  const handleEliminar = () => {
    eliminarReceta(receta.recetaID);
    alert("Receta eliminada");
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.contanerImg}>
        <Image
          source={require("../assets/icono.png")}
          style={{ width: 150, height: 150, resizeMode: "contain" }}
        ></Image>
      </View>
      <Text style={styles.info}>ID: {receta.recetaID}</Text>
      <Text style={styles.info}>Nombre: {receta.nombre}</Text>
      <Text style={styles.info}>Ingredientes: {receta.ingredientes}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Volver" onPress={() => navigation.goBack()} />
        <Button title="Eliminar" onPress={handleEliminar} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contanerImg: {
    alignItems: "center",
    marginBottom: 10
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  info: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: "left",
    borderWidth: 1,
    borderColor: "#cccccc",
    padding: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
});

export default DetallesReceta;

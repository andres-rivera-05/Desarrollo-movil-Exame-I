import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import { RecetasContext } from "./RecetasContext";

const ListaRecetas = () => {
  const { recetas, eliminarReceta } = useContext(RecetasContext);

  if (!recetas || recetas.length === 0) {
    return <Text style={styles.emptyMessage}>No hay recetas agregadas</Text>;
  }

  const renderItem = ({ item }) => (
    <View style={styles.recetaItem}>
      <Text style={styles.recetaInfo}>{item.nombre} - {item.recetaID}</Text>
      <Text style={styles.recetaInfo}>{item.ingredientes}</Text>
      <Button title="Eliminar" onPress={() => eliminarReceta(item.recetaID)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recetas Agregadas</Text>
      <FlatList
        data={recetas}
        renderItem={renderItem}
        keyExtractor={(item) => item.recetaID.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  emptyMessage: {
    fontSize: 18,
    textAlign: "center",
  },
  recetaItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#cccccc",
  },
  recetaInfo: {
    fontSize: 16,
  },
});

export default ListaRecetas;

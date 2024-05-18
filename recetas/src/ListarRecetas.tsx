import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TextInput,
  Image
} from "react-native";
import { RecetasContext } from "./RecetasContext";
import { useNavigation } from "@react-navigation/native";

interface Receta {
  recetaID: number;
  nombre: string;
  ingredientes: string;
}

const ListarRecetas = () => {
  const { recetas, eliminarReceta } = useContext(RecetasContext);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const navigation: any = useNavigation();

  const handleSearch = () => {
    const recetaID = parseInt(searchQuery, 10); // Asegurarnos de que el ID sea un número
    if (isNaN(recetaID)) {
      alert("Ingrese un ID valido");
      return;
    }
    const receta = recetas.find(
      (receta: Receta) => receta.recetaID === recetaID
    );
    if (receta) {
      navigation.navigate("DetallesReceta", { receta });
    } else {
      alert("La receta no se encontro");
    }
  };

  const handleEliminar = (recetaID: number) => {
    eliminarReceta(recetaID);
    alert("Receta eliminada");
  };

  const renderItem = ({ item }: { item: Receta }) => (
    <View style={styles.recetaItem}>
      <Text style={styles.recetaInfo}>
        {item.nombre} # {item.recetaID}
      </Text>
      <Text style={styles.recetaInfo}>{item.ingredientes}</Text>
      <Button title="Eliminar" onPress={() => handleEliminar(item.recetaID)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.contanerImg}>
        <Image
          source={require("../assets/icono.png")}
          style={{ width: 150, height: 150, resizeMode: "contain" }}
        ></Image>
      </View>
      {recetas.length === 0 ? (
        <Text style={styles.Message}>No hay recetas agregadas</Text>
      ) : (
        <FlatList
          data={recetas}
          renderItem={renderItem}
          keyExtractor={(item) => item.recetaID.toString()}
        />
      )}

      <TextInput
        style={styles.searchBar}
        placeholder="Buscar receta por ID"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <Button title="Buscar" onPress={handleSearch} />
    </View>
  );
};

const styles = StyleSheet.create({
  contanerImg:{
   alignItems: 'center'
  },
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
  Message: {
    fontSize: 18,
    marginTop: 10,
    marginBottom : 10,
    textAlign: "center",
  },
  searchBar: {
    height: 40,
    borderColor: "#cccccc",
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 10,
  },
  recetaItem: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#cccccc",
  },
  recetaInfo: {
    fontSize: 16,
    paddingBottom: 5
  },
});

export default ListarRecetas;

import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RecetasContext } from "./RecetasContext";

const AgregarRecetas = () => {
  const [ingInputText, setIngInputText] = useState("");
  const [nomInputText, setNomInputText] = useState("");
  const [mensajeVisible, setMensajeVisible] = useState(false);
  const navigation = useNavigation();
  const context = useContext(RecetasContext);

  if (!context) {
    throw new Error("RecetasContext must be used within a RecetasProvider");
  }

  const { recetas, agregarReceta } = context;

  const agregaContacto = () => {
    if (nomInputText.length < 3) {
      Alert.alert("Ups", "El nombre debe tener al menos 3 caracteres");
      return;
    }

    if (ingInputText.length < 8) {
      Alert.alert(
        "Ups",
        "El número de contacto debe tener al menos 8 caracteres"
      );
      return;
    }

    const newReceta = {
      recetaID: recetas.length + 1,
      nombre: nomInputText,
      ingredientes: ingInputText,
    };

    agregarReceta(newReceta);
    setIngInputText("");
    setNomInputText("");
    setMensajeVisible(true);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/icono.png")}
        style={{ width: 150, height: 150, resizeMode: "contain" }}
      ></Image>
      <TextInput
        style={styles.input}
        onChangeText={setNomInputText}
        value={nomInputText}
        placeholder="Nombre de la receta"
      />
      <TextInput
        style={styles.input}
        onChangeText={setIngInputText}
        value={ingInputText}
        placeholder="Ingredientes de la receta"
      />
      <Button title="Agregar" onPress={agregaContacto} />
      {mensajeVisible && (
        <Text style={styles.mensaje}>Detalle receta agregada</Text>
      )}
      <ScrollView contentContainerStyle={styles.contactList}>
        {recetas.map((elemento) => (
          <TouchableOpacity key={elemento.recetaID} style={styles.recetaItem}>
            <Text style={styles.recetaName}>{elemento.nombre}</Text>
            <Text style={styles.ingName}>{elemento.ingredientes}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: "#cccccc",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: "#f5f5f5",
  },
  mensaje: {
    marginTop: 10,
    fontSize: 16,
    color: "green",
  },
  contactList: {
    marginTop: 5,
    width: '100%'
  },
  recetaItem: {
    flexDirection: "row",
    width: '100%',
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#cccccc",
  },
  recetaName: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight:15,
  },
  ingName: {
    fontSize: 14,
    color: "#555555",
  },
});

export default AgregarRecetas;

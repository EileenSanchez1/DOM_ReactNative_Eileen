import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function App() {
  // En móvil NO hay DOM: usamos estado con useState
  const [contador, setContador] = useState(0);

  return (
    <View style={estilos.body}>
      <View style={estilos.card}>
        <Text style={estilos.titulo}>Interactividad con React Native</Text>
        <Text style={estilos.counterBox}>{contador}</Text>

        <TouchableOpacity
          style={estilos.btnClick}
          onPress={() => setContador(contador + 1)}
        >
          <Text style={estilos.btnText}>¡Haz Clic Aquí!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#f4f7f6",
    justifyContent: "center",
    padding: 16,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 24,
    alignItems: "center",
    elevation: 6,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "800",
    color: "#2d3748",
    textAlign: "center",
  },
  counterBox: {
    fontSize: 56,
    fontWeight: "bold",
    color: "#3b9be0",
    marginVertical: 12,
  },
  btnClick: {
    backgroundColor: "#2ecc71",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  btnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },
});
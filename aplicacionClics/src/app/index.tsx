import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";

type Registro = { id: number; numero: number; hora: string };

export default function App() {
  // En móvil NO hay DOM: usamos estado con useState
  const [contador, setContador] = useState(0);
  const [registros, setRegistros] = useState<Registro[]>([]);

  // Hora actual en formato HH:MM:SS
  const obtenerHora = () => {
    const ahora = new Date();
    const h = String(ahora.getHours()).padStart(2, "0");
    const m = String(ahora.getMinutes()).padStart(2, "0");
    const s = String(ahora.getSeconds()).padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  const incrementarContador = () => {
    const nuevo = contador + 1;
    setContador(nuevo);
    // La fila nueva va al INICIO de la lista
    setRegistros([
      { id: Date.now(), numero: nuevo, hora: obtenerHora() },
      ...registros,
    ]);
  };

  // Reto 1: restar y reiniciar
  const restarContador = () => {
    if (contador > 0) setContador(contador - 1);
  };

  const reiniciar = () => {
    setContador(0);
    setRegistros([]);
  };

  return (
    <View style={estilos.body}>
      <View style={estilos.card}>
        <Text style={estilos.titulo}>Interactividad con React Native</Text>
        <Text style={estilos.subtitulo}>
          Toca el botón para incrementar el contador y registrar la hora.
        </Text>

        {/* Reto 2: cambia de color si supera 10 */}
        <Text
          style={[estilos.counterBox, contador > 10 ? estilos.counterAlto : null]}
        >
          {contador}
        </Text>

        {/* Botón disparador de eventos */}
        <TouchableOpacity
          style={estilos.btnClick}
          onPress={incrementarContador}
        >
          <Text style={estilos.btnText}>¡Haz Clic Aquí!</Text>
        </TouchableOpacity>

        {/* Reto 1 */}
        <View style={estilos.filaBotones}>
          <TouchableOpacity style={estilos.btnRestar} onPress={restarContador}>
            <Text style={estilos.btnText}>Restar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={estilos.btnReiniciar} onPress={reiniciar}>
            <Text style={estilos.btnText}>Reiniciar</Text>
          </TouchableOpacity>
        </View>

        {/* Tabla de registros */}
        <View style={estilos.tableContainer}>
          {/* Cabecera de la tabla */}
          <View style={estilos.tableHeader}>
            <Text style={[estilos.th, estilos.cellNumero]}>Nº Clic</Text>
            <Text style={[estilos.th, estilos.cellHora]}>Hora</Text>
          </View>

          {/* Cuerpo de la tabla con scroll */}
          <ScrollView style={estilos.tableBody}>
            {registros.map((item, index) => (
              <View
                key={item.id}
                style={[estilos.tr, index % 2 === 0 ? estilos.trEven : null]}
              >
                <Text style={[estilos.td, estilos.cellNumero]}>
                  {item.numero}
                </Text>
                <Text style={[estilos.td, estilos.cellHora]}>{item.hora}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
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
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 12,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "800",
    color: "#2d3748",
    textAlign: "center",
  },
  subtitulo: {
    fontSize: 13,
    color: "#555",
    textAlign: "center",
    marginTop: 6,
  },
  counterBox: {
    fontSize: 56,
    fontWeight: "bold",
    color: "#3b9be0",
    marginVertical: 12,
  },
  counterAlto: { color: "#e74c3c" },
  btnClick: {
    backgroundColor: "#2ecc71",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    elevation: 4,
  },
  btnRestar: {
    backgroundColor: "#f39c12",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 18,
  },
  btnReiniciar: {
    backgroundColor: "#e74c3c",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 18,
  },
  filaBotones: { flexDirection: "row", gap: 10, marginTop: 12 },
  btnText: { color: "#fff", fontWeight: "bold", fontSize: 15 },
  tableContainer: {
    width: "100%",
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 8,
    overflow: "hidden",
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#f8f9fa",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  tableBody: { maxHeight: 170 },
  tr: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    backgroundColor: "#ffffff",
  },
  trEven: { backgroundColor: "#fafafa" },
  th: {
    color: "#7f8c8d",
    fontWeight: "600",
    fontSize: 14,
    padding: 10,
    textAlign: "center",
  },
  td: {
    color: "#333",
    fontSize: 14,
    padding: 10,
    textAlign: "center",
  },
  cellNumero: { flex: 1 },
  cellHora: { flex: 1.5 },
});
// 1. Obtener los elementos del DOM por su ID
const textoContador = document.getElementById("contador");
const boton = document.getElementById("btn-like");
const tablaRegistros = document.getElementById("tabla-registros");
let likes = 0;

// Función que devuelve la hora actual en formato HH:MM:SS
function obtenerHora() {
  const ahora = new Date();
  const h = String(ahora.getHours()).padStart(2, "0");
  const m = String(ahora.getMinutes()).padStart(2, "0");
  const s = String(ahora.getSeconds()).padStart(2, "0");
  return `${h}:${m}:${s}`;
}

// 2. Escuchar el evento 'click' y manipular el DOM
boton.addEventListener("click", () => {
  likes++;
  textoContador.textContent = likes;

  // Crear la fila y las dos celdas
  const fila = document.createElement("tr");
  const celdaNumero = document.createElement("td");
  const celdaHora = document.createElement("td");

  // Rellenar las celdas
  celdaNumero.textContent = likes;
  celdaHora.textContent = obtenerHora();

  // Armar la fila
  fila.appendChild(celdaNumero);
  fila.appendChild(celdaHora);

  // Agregar la fila al INICIO de la tabla (lo más reciente arriba)
  tablaRegistros.prepend(fila);
  actualizarColor();
});

// ----- Reto 1: restar y reiniciar -----
const btnRestar = document.getElementById("btn-restar");
const btnReiniciar = document.getElementById("btn-reiniciar");

btnRestar.addEventListener("click", () => {
  if (likes > 0) {
    likes--;
    textoContador.textContent = likes;
    actualizarColor();
  }
});

btnReiniciar.addEventListener("click", () => {
  likes = 0;
  textoContador.textContent = likes;
  tablaRegistros.innerHTML = "";
  actualizarColor();
});

// ----- Reto 2: cambiar color si supera 10 -----
function actualizarColor() {
  textoContador.style.color = likes > 10 ? "#e74c3c" : "#3b9be0";
}
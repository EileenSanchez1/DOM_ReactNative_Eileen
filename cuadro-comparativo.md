# Cuadro comparativo: Desarrollo Web vs React Native (Expo)

Actividad: "De la Web al Móvil: Creando tu primer Contador de clics"
Programa: Análisis y Desarrollo de Software (228118)

## Mapa de equivalencias

| Concepto | Desarrollo Web | React Native (Expo) | ¿Cómo funciona cada una? |
|---|---|---|---|
| Estructura visual | HTML (`<h1>`, `<div>`, `<p>`) | Componentes (`<Text>`, `<View>`) | En la web, el navegador lee las etiquetas HTML y construye un árbol llamado DOM que luego dibuja en pantalla. En React Native no existen las etiquetas HTML: se usan componentes como `<View>` (contenedor) y `<Text>` (texto), que se convierten en elementos nativos de Android o iOS. |
| Botón de clic | `<button>` + `onclick` / `addEventListener` | `<TouchableOpacity>` + `onPress` | En la web se busca el botón en el DOM (`document.getElementById("btn-like")`) y se le asigna un escuchador de eventos de tipo `click`. En React Native la función se pasa directamente en la propiedad `onPress` del componente, sin buscar nada. |
| ¿Existe el DOM? | Sí (se accede con `document.getElementById`) | No (se maneja por estado interno `useState`) | En la web nosotros modificamos el elemento directamente (`textoContador.textContent = likes`). En React Native cambiamos el estado con `setContador(...)` y React vuelve a dibujar la pantalla automáticamente; a esto se le llama reactividad. |
| Estilos | CSS tradicional o librerías | Objetos JavaScript (`StyleSheet.create`) | En la web los estilos se escriben en archivos `.css` con selectores y propiedades como `background-color`. En React Native son objetos de JavaScript con propiedades en camelCase como `backgroundColor`, y el diseño se organiza con flexbox. |
| Entorno de ejecución | Navegadores (Chrome, Edge, Safari) | Dispositivos móviles (Android / iOS) | La web se ejecuta dentro del motor del navegador. React Native ejecuta el código JavaScript en el teléfono y lo conecta con los componentes nativos; durante el desarrollo se prueba con la app Expo Go escaneando un código QR. |

## Conclusión

Las dos aplicaciones hacen lo mismo (un contador que registra la hora de cada clic en una tabla), pero se construyen distinto. En la web manipulamos el DOM de forma directa: buscamos elementos y los cambiamos. En React Native no hay DOM: describimos cómo debe verse la pantalla según el estado, y React se encarga de actualizarla.
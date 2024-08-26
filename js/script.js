
const DATA_URL = "json/data.json"; // URL que contiene los datos que queremos mostrar

const container = document.getElementById("container"); // "Traemos" utilizando el DOM el div de id "container" para colocar la información en él

/**
 * Función que recibe por parámetro un array con los datos que se mostrarán en el DOM
 * Los datos se mostrarán dentro del div de id "container" y por cada ítem se está creando un nuevo párrafo donde se
 * imprime el campo "name" y el campo "lastname" separados por un espacio
 */
function showData(dataArray) {
  for (const item of dataArray) {
    container.innerHTML += `<p> ${item.name} ${item.lastname} </p>`;
  }
}

// Realizamos el fetch al archivo JSON
fetch(DATA_URL)
  .then(response => response.json()) // Convertimos la respuesta a JSON
  .then(data => {
    showData(data.students); // Llamamos a la función showData con el array de estudiantes
  })
  .catch(error => console.error('Error fetching the data:', error)); // Manejamos cualquier error que ocurra durante el fetch

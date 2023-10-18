import { example } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

const container= document.querySelector("#root");
container.innerHTML= renderItems(data);




/*document.addEventListener('DOMContentLoaded', function () {
    const dataRoot = document.getElementById('dataRoot');
    const filterSelect = document.getElementById('select-filter');

    // Datos de ejemplo
const data = [
    { name: 'Personaje 1', gender: 'Femenino', specialty: 'Fuerza', planet: 'Tatooine' },
    { name: 'Personaje 2', gender: 'Masculino', specialty: 'Piloto', planet: 'Tatooine' },
    { name: 'Personaje 3', gender: 'Femenino', specialty: 'Espía', planet: 'Alderaan' },
      // Otros datos
    ];

    // Función para mostrar los datos según la opción seleccionada
function displayData(selectedOption) {
    dataRoot.innerHTML = '';
    data.forEach(item => {
        const value = item[selectedOption];
        const card = document.createElement('div');
        card.textContent = `${item.name} - ${selectedOption}: ${value}`;
        dataRoot.appendChild(card);
    });
    }
  
    // Manejar el cambio de la opción de filtrado
    filterSelect.addEventListener('change', function () {
      const selectedOption = filterSelect.value;
      displayData(selectedOption);
    });
  
    // Mostrar todos los datos al principio
    displayData(filterSelect.value);
  });*/

import { clasifFilter } from './dataFunctions.js';
import { fortalecFilter } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

const container= document.querySelector("#root");
container.innerHTML= renderItems(data);


const selectFilter = document.getElementById("select-filter");
let containerClasificacion = document.querySelector("#root");

selectFilter.addEventListener('change', function () {
    const nuevosDatos = data.filter(clasifFilter);
    const resultadoClasificación = document.createElement('ul');

    nuevosDatos.forEach(element => {
    const liItem = document.createElement('li');
    const imagen = document.createElement('img');
    
    liItem.appendChild(imagen);
    for (let key in element) {
        if (element.hasOwnProperty(key)) {
        imagen.src= element.imageUrl;
        const divItem = document.createElement('div');
        divItem.textContent = `${key}: ${element[key]}`;
        liItem.appendChild(divItem, imagen);
        }
    }

    resultadoClasificación.appendChild(liItem);
    });

    // Reemplazar el contenido actual del contenedor con el resultado filtrado
    containerClasificacion.innerHTML = '';
    containerClasificacion.appendChild(resultadoClasificación);
});



const selectFilter2 = document.getElementById("select-filter");
let containerFortalec = document.querySelector("#root");

selectFilter2.addEventListener('change', function () {
    const nuevosDatos2 = data.filter(fortalecFilter);
    const resultadoFortalec = document.createElement('ul');

    nuevosDatos2.forEach(element => {
    const liItem = document.createElement('li');
    const imagen = document.createElement('img');
    
    liItem.appendChild(imagen);
    for (let key in element) {
        if (element.hasOwnProperty(key)) {
        imagen.src= element.imageUrl;
        const divItem = document.createElement('div');
        divItem.textContent = `${key}: ${element[key]}`;
        liItem.appendChild(divItem, imagen);
        }
    }

    resultadoFortalec.appendChild(liItem);
    });

    // Reemplazar el contenido actual del contenedor con el resultado filtrado
    containerFortalec.innerHTML = '';
    containerFortalec.appendChild(resultadoFortalec);
});

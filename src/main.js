import { filtrarDatos } from './dataFunctions.js';
import { dataOrdenadaAZ } from './dataFunctions.js';
import { dataOrdenadaZA } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

const container= document.querySelector("#root");
container.innerHTML= renderItems(data);
    

const selectFilter = document.getElementById("select-filter");
selectFilter.addEventListener('change', function(event) {
  event.preventDefault();
  const selectedValue = selectFilter.value; //por qué value?
  const nuevosDatos = filtrarDatos(data, selectedValue);

  const resultadoFiltrado = document.createElement('ul');

  nuevosDatos.forEach(element => {
    const liItem = document.createElement('li');
    const imagen = document.createElement('img');
    liItem.appendChild(imagen);

    for (const key in element) {
            
      imagen.src = element.imageUrl;
      const divItem = document.createElement('div');
      divItem.textContent = `${key}: ${element[key]}`;
      liItem.appendChild(divItem, imagen);
      liItem.className = "tarjeta";          
    }
        
    resultadoFiltrado.className= "container";
    resultadoFiltrado.appendChild(liItem);
  });
  
  container.innerHTML = '';
  container.appendChild(resultadoFiltrado);
});



const selectSort = document.getElementById("sorting");
const selectedSort = document.createElement('ul'); //***********  Mover la creación del elemento ul aquí

selectSort.addEventListener('change', function(event) {
  event.preventDefault();
  // Limpia el contenido del elemento ul en cada cambio
  selectedSort.innerHTML = ''; //********** esta /
  
  let sortedData; //esteeeeee************
  if (selectSort.value === "desc") {
    sortedData = dataOrdenadaAZ(data); // Utiliza la función de ordenamiento
  } else if (selectSort.value === "asc") {
    sortedData = dataOrdenadaZA(data); // Utiliza la función de ordenamiento
  } 
  /*
  if(selectSort.value === "desc"){;
    dataOrdenadaAZ(data); 
}
else if(selectSort.value === "asc"){
    dataOrdenadaZA(data);
}*/
  sortedData.forEach(element => {
    const liItem = document.createElement('li');
    const imagen = document.createElement('img');
    liItem.appendChild(imagen);
    

    for (const key in element) {
      imagen.src = element.imageUrl;
      const divItem = document.createElement('div');
      divItem.textContent = `${key}: ${element[key]}`;
      
      liItem.appendChild(divItem, imagen);
      liItem.className = "tarjeta";
    }
    selectedSort.className="container";
    selectedSort.appendChild(liItem);
    
  });

  container.innerHTML = '';
  container.appendChild(selectedSort);
});
//Con esta modificación, solo se crea un elemento ul una vez, y los elementos li se agregan a ese elemento ul en lugar de crear múltiples elementos ul. Además, se utiliza selectedSort.innerHTML = ''; para limpiar el contenido del elemento ul en cada cambio, de modo que se actualice adecuadamente con la nueva información.







    
//console.log(dataOrdenadaAZ(data));

//console.log(dataOrdenadaZA(data));

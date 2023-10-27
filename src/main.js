import { filtrarDatos } from './dataFunctions.js';
import { dataOrdenadaAZ } from './dataFunctions.js';
import { dataOrdenadaZA } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

const container= document.querySelector("#root");
container.innerHTML= renderItems(data);
let dataManipulada= data;

const selectFilter = document.querySelector('select[name="select-filter"]');
selectFilter.addEventListener('change', (event)=>{
  
  const selectedValue =event.target.value; //por qué value?
  console.log(selectedValue);
  dataManipulada = filtrarDatos(dataManipulada, selectedValue);
  container.innerHTML=renderItems(dataManipulada);
})

const selectSort = document.querySelector('select[name="sorting"]');

selectSort.addEventListener('change', function(event) {

  let sortedData; 
  if (selectSort.value === "desc") {
    sortedData = dataOrdenadaAZ(dataManipulada); // Utiliza la función de ordenamiento
  } else if (selectSort.value === "asc") {
    sortedData = dataOrdenadaZA(dataManipulada); // Utiliza la función de ordenamiento
  } 

  container.innerHTML = renderItems(sortedData);
});
//Con esta modificación, solo se crea un elemento ul una vez, y los elementos li se agregan a ese elemento ul en lugar de crear múltiples elementos ul. Además, se utiliza selectedSort.innerHTML = ''; para limpiar el contenido del elemento ul en cada cambio, de modo que se actualice adecuadamente con la nueva información.







    
//console.log(dataOrdenadaAZ(data));

//console.log(dataOrdenadaZA(data));

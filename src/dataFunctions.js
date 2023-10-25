// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

//Función para seleccionar los filtros

function renderElement(element){
  if(element){
    let elementRendered = `<li class="tarjeta">
    <dl itemscope itemtype="Plantas Medicinales">
      <link rel="stylesheet" href="style.css"/>
      <img src="${element.imageUrl}"/ class=image /><br >
      <dt></dt>
      <dd itemprop="planta" style="display: inline;"><h2>${element.planta}</h2></dd><br />
      <dt style= "display: inline;">id:</dt><dd itemprop="id" style="display: inline;">${element.id}</dd><br />
      <dt style= "display: inline;"><strong>Nombre común:</strong></dt><dd itemprop="Nombre común" style= "display: inline;">${element.NombreComun}</dd><br />
      <dt style= "display: inline;">Nombre científico:</dt><dd itemprop="Nombre científico" style= "display: inline;">${element.NombreCientifico}</dd><br />
      <dt style= "display: inline;">Descripción corta:</dt><dd itemprop="Descripción corta" style= "display: inline;">${element.DescripcionCorta}</dd><br />
      <dt style= "display: inline;">Descripción:</dt><dd itemprop="Descripción" style= "display: inline;">${element.Descripcion}</dd><br />
      <dt style= "display: inline;">Órgano beneficiado:</dt><dd itemprop="Órgano beneficiado" style= "display: inline;">${element.OrganoBeneficiado}</dd><br /  >
      <dt style= "display: inline;">Clasificación:</dt><dd itemprop="Clasificación" style= "display: inline;">${element.Clasificacion}</dd><br />
      <dt style= "display: inline;">Estado productor:</dt><dd itemprop="Estado productor" style= "display: inline;">${element.EstadoProductor}</dd><br />
    </dl>
  </li>` 
  return elementRendered;
  }
  
}
export function filtrarDatos(data, selectedValue) {  
  for(const element of data){
    if (selectedValue) {
      
      let filteredData = data.filter(element => element.Clasificacion === selectedValue, renderElement(element));
      return filteredData;
    
    } else {
      return data;
    }
}}

export function dataOrdenadaAZ(data){
  const dataCopy=[...data]; //función de propagación ayuda a copiar los datos de una matriz 
  dataCopy.sort(function(a,b){
    const dataA=a.planta.toLowerCase();
    const dataB= b.planta.toLowerCase();

    if (dataA > dataB) {
      return 1;
    }
    if (dataA < dataB) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });
  return dataCopy;
}
  

export function dataOrdenadaZA(data){
  const dataCopy= data.slice(0); //se tine que volver a almacenar para no trabajar con un arreglo ordenado, por eso muestra el mismo ordenamiento ambas veces
  dataCopy.sort(function(a,b){ //se usa slice para crear una copia superficial de un array (matriz) o para extraer un subconjunto de elementos
    const data1A=a.planta.toLowerCase();
    const data1B= b.planta.toLowerCase();

    if (data1A < data1B) {
      return 1;
    }
    if (data1A > data1B) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });
  return dataCopy;
}
  


/*const items = [
    { name: "Edward", value: 21 },
    { name: "Sharpe", value: 37 },
    { name: "And", value: 45 },
    { name: "The", value: -12 },
    { name: "Magnetic", value: 13 },
    { name: "Zeros", value: 37 },
  ];
  items.sort(function (a, b) {

    const itemsA = a.name.toLowerCase();
    const itemsB = b.name.toLocaleLowerCase();
    if (itemsA > itemsB) {
      return 1;
    }
    if (itemsA < itemsB) {
      return -1;
    }
    // a must be equal to b
      return 0;
  });
  console.log(items)*/
/*export function clasifFilter(elemento){
  if(elemento.Clasificacion === "antiácida"){
    return elemento;
  } 
  /// recuerda que es otro elemento de escucha para ese "filtro"
}

export function fortalecFilter(elemento){
  if(elemento.Clasificacion === "fortalecedora"){
    return elemento;
  } 
  /// recuerda que es otro elemento de escucha para ese "filtro"
}*/

//xport const anotherExample = () => {
//return [];
//};

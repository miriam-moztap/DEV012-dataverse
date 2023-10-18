export const renderItems = (data)=>{

  let listItem="";
  for(let element of data) {
    listItem+=`<li><dl itemscope itemtype=\"Universo Dragon Ball Z\"> 
    <img src="${element.imageUrl}"/><br>
    <dt style= "display: inline;">planta:</dt><dd itemprop="planta" style="display: inline;">${element.planta}</dd><br>
    <dt style= "display: inline;">id:</dt><dd itemprop="id" style="display: inline;">${element.id}</dd><br>
    <dt style= "display: inline;">Nombre común:</dt><dd itemprop="Nombre común" style= "display: inline;">${element.Nombre_comun}</dd><br>
    <dt style= "display: inline;">Nombre científico:</dt><dd itemprop="Nombre científico" style= "display: inline;">${element.Nombre_cientifico}</dd><br>
    <dt style= "display: inline;">Descripción corta:</dt><dd itemprop="Descripción corta" style= "display: inline;">${element.Descripcion_corta}</dd><br>
    <dt style= "display: inline;">Descripción:</dt><dd itemprop="Descripción" style= "display: inline;">${element.Descripcion}</dd><br>
    <dt style= "display: inline;">Órgano beneficiado:</dt><dd itemprop="Órgano beneficiado" style= "display: inline;">${element.Organo_beneficiado}</dd><br>
    <dt style= "display: inline;">Clasificación:</dt><dd itemprop="Clasificación" style= "display: inline;">${element.Clasificacion}</dd><br>
    <dt style= "display: inline;">Estado productor:</dt><dd itemprop="Estado productor" style= "display: inline;">${element.Estado_productor}</dd><br>
  </dl></li>
  ` 
    //document.getElementById("personaje").innerHTML=counter; //esto va en main
    
    
  }
  return `<ul>${listItem}</ul>`;
  }
    
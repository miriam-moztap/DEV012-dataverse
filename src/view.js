export const renderItems = (data)=>{

  let listItem="";
  for(const element of data) {
    let facts = element.facts;
    listItem+=
    
      `<li class="tarjeta">
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
    //document.getElementById("personaje").innerHTML=counter; //esto va en main
    
    
  }
  
  return `<ul class="container">${listItem}</ul>`;
}
    


//ul class="container"
//li class="tarjeta"
// 
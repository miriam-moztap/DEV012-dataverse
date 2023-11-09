export const renderItems = (data)=>{

  let listItem="";
  for(const element of data) {
    
    listItem+=
    
      `<li class="tarjeta" itemtype="Plantas Medicinales">
        <dl itemscope itemtype="Plantas Medicinales">
          <link rel="stylesheet" href="style.css"/>
          <img src="${element.imageUrl}"/ class=image /><br >
          <dt></dt>
          <dd itemprop="planta" style="display: inline;"><h2>${element.planta}</h2></dd><br />
          <dt><strong>Nombre común:</strong></dt><dd itemprop="Nombre común" style="display:inline;"><h4>${element.NombreComun}</h4></dd>
          <dt><strong>Nombre científico:</dt><dd itemprop="Nombre científico" style="display:inline;"><h4>${element.NombreCientifico}</h4></dd>
          <dt><strong>Descripción corta:</dt><dd itemprop="Descripción corta"style="display:inline;"><h4>${element.DescripcionCorta}</h4></dd>
          <dt><strong>Descripción:</dt><dd itemprop="Descripción" style= "display: inline;"style="display:inline;"><h4>${element.Descripcion}</h4></dd>
          <dt><strong>Órgano beneficiado:</dt><dd itemprop="Órgano beneficiado" style= "display: inline;style="display:inline;"><h4>${element.facts.OrganoBeneficiado}</h4></dd>
          <dt><strong>Clasificación:</dt><dd itemprop="Clasificación" style= "display: inline;"style="display:inline;"><h4>${element.facts.Clasificacion}</h4></dd>
          <dt><strong>Estado productor:</dt><dd itemprop="Estado productor" style= "display: inline;"style="display:inline;"><h4>${element.facts.EstadoProductor}</h4></dd>
        </dl>
      </li>` 
    //document.getElementById("personaje").innerHTML=counter; //esto va en main
    
    
  }
  
  return `<ul class="container">${listItem}</ul>`;
}
    


//ul class="container"
//li class="tarjeta"
// 
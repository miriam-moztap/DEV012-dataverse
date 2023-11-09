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
          <dt><h3><strong>Nombre común:</strong></h3></dt><dd itemprop="Nombre común" style="display:inline;"><h4>${element.NombreComun}</h4></dd>
          <dt><h3><strong>Nombre científico:</dt></h3><dd itemprop="Nombre científico" style="display:inline;"><h4>${element.NombreCientifico}</h4></dd>
          <dt><h3><strong>Descripción corta:</dt></h3><dd itemprop="Descripción corta"style="display:inline;"><h4>${element.DescripcionCorta}</h4></dd>
          <dt><h3><strong>Descripción:</dt></h3><dd itemprop="Descripción" style= "display: inline;"style="display:inline;"><h4>${element.Descripcion}</h4></dd>
          <dt><h3><strong>Órgano beneficiado:</dt></h3><dd itemprop="Órgano beneficiado" style= "display: inline;style="display:inline;"><h4>${element.facts.OrganoBeneficiado}</h4></dd>
          <dt><h3><strong>Clasificación:</dt></h3><dd itemprop="Clasificación" style= "display: inline;"style="display:inline;"><h4>${element.facts.Clasificacion}</h4></dd>
          <dt><h3><strong>Estado productor:</dt></h3><dd itemprop="Estado productor" style= "display: inline;"style="display:inline;"><h4>${element.facts.EstadoProductor}</h4></dd>
        </dl>
      </li>` 
    //document.getElementById("personaje").innerHTML=counter; //esto va en main
    
    
  }
  
  return `<ul class="container">${listItem}</ul>`;
}
    


//ul class="container"
//li class="tarjeta"
// 
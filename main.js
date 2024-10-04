
fetch('./json/data.json')
.then(response => response.json())
.then(datos => {console.log(datos)

    document.getElementById('personaje1').innerHTML=`
    ${datos.Marvel[0].superheroe}<br><br>
    <h3><span>Nombre real</span></h3> ${datos.Marvel[0].nombre}<br>
     ${datos.Marvel[0].imagen}
     ${datos.Marvel[0]}`; 
     
     
     document.getElementById('personaje2').innerHTML=`
    ${datos.Marvel[1].superheroe}<br><br>
    <h3><span>Nombre real</span></h3> ${datos.Marvel[1].nombre}<br>
     ${datos.Marvel[1].biografia}
     ${datos.Marvel[0]}`
    
    
     document.getElementById('personaje3').innerHTML=`
     ${datos.Marvel[2].superheroe}<br><br>
     <h3><span>Nombre real</span></h3> ${datos.Marvel[2].nombre}<br>
      ${datos.Marvel[2].biografia}
      ${datos.Marvel[0]}`
      
      
      document.getElementById('personaje4').innerHTML=`
     ${datos.Marvel[3].superheroe}<br><br>
     <h3><span>Nombre real</span></h3> ${datos.Marvel[3].nombre}<br>
      ${datos.Marvel[3].biografia}
      ${datos.Marvel[0]}`
     
})

                                                 
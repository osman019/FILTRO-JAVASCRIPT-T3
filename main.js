const datos = ("./json/data.json")
fetch(datos)
.then(response => response.json())
.then(datos => {console.log(datos)})

const personaje1= document.getElementById('personaje1').innerHTML +=`${datos.Marvel.superheroe}`;                                                  
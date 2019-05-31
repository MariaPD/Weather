var data;

window.onload =() => obtenerClima()

const obtenerClima = () => fetch("https://api.myjson.com/bins/i8run", {
  method: "GET",
}).then(function(response){
  if(response.ok){
    return response.json();
  }
  throw new Error(response.statusText);
}).then(function(json){
  data = json.list
  crearCaja(data)
  console.log(data);
}).catch(function(error){
  console.log("Request failed:" + error.message);
});


/*
var imagenes = ["Patata", "Naranja"]
var data = [];
data.push(imagenes);
ciudades.imagen = array[indice]
*/

var imagenes = ["style/images/yafran.jpg", "style/images/zuwarah.jpg", "style/images/sabratah.jpg", "style/images/gharyan.jpg", "style/images/zawiya.jpg", "style/images/tripoli.jpg", "style/images/tarhuna.jpg", "style/images/masallatah.jpg", "style/images/alkhums.jpg", "style/images/zlitan.jpg", "style/images/birkirkara.jpg", "style/images/ragusa.jpg", "style/images/pozzallo.jpg", "style/images/modica.jpg", "style/images/rosolini.jpg"]

console.log(imagenes);

function crearCaja(caja){
  console.log(data);
  var lista = caja.map(function(ciudades,index){
    return "<div class='fondo'>" + "<img class='icono' src='style/icons/nublado.gif'" + " alt='weather icon'/>" + "<img class='foto' src=" + imagenes[index] + " alt='city image'/>" + "<p class='city'>" + ciudades.name + "</p>" + "<p class='clima'>" + ciudades.weather[0].main + "</p>" + "<p class='temperature'>" + Math.round(ciudades.main.temp) + " ºC </p> </div>"
  })  
  document.getElementById("box").innerHTML = lista;
}
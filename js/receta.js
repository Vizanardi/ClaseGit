let queryString = location.search; //esto nos devuelve la inormacion que sacamos del api o de la pagina en un formato no legible 
let queryStringObjeto = new URLSearchParams(queryString); //este new Url.. lo que hace es que se convierta en un objeto y pueda ser manejado despues con get por ejemplo

let identificador = queryStringObjeto.get('id'); //CHEQUEAR SI ES ID de esta manera podemos usar el get y obtener ese dato (id) del array de informacion que sacamos de la web

console.log(identificador);

fetch(`https://dummyjson.com/recipes/${identificador}`)
    .then(function(response){
     return response.json();
    })
    .then(function(data){
        console.log(data);
        let nombre = document.querySelector("h1");
        nombre.innerText = data.name;
        let instrucciones = document.querySelector(".inspreparacion");
        instrucciones.innerText = data.instructions;
        let coccion = document.querySelector(".coccion");
        coccion.innerText = data.prepTimeMinutes
        let imagen = document.querySelector("img");
        imagen.src = data.image;
    })
    .catch(function(error){
        console.log(error);
    })
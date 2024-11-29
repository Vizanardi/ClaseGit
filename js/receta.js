/*parte del buscador*/
let formulario = document.querySelector("form")
let completaFormulario = document.querySelector("#buscador")
let errorForm = document.querySelector(".error")

formulario.addEventListener("submit", function(evento){
    evento.preventDefault();
    if (completaFormulario.value == ""){
        console.log("buscador vacio")
        errorForm.innerText = "Complete el campo de busqueda"
    }else if (completaFormulario.value.length < 3){
        console.log("busqueda demasido corta")
        errorForm.innerText = "Que contenga al menos 3 caracteres"
    }else{
        formulario.submit()
    }  
})
/*------------------------------------------------------------------*/


let queryString = location.search;
let queryStringObjeto = new URLSearchParams(queryString);

let identificador = queryStringObjeto.get('id');

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
        let instruOrdenado = "<strong>Instrucciones:</strong>"
        for (i=0; i<data.instructions.length; i++){
            instruOrdenado+=`<li>${data.instructions[i]}</li>`
        }
        instrucciones.innerHTML= instruOrdenado
        let coccion = document.querySelector(".coccion");
        let coccionprep = data.prepTimeMinutes
        coccion.innerText = `Tiempo de coccion: ${coccionprep}`
        let imagen = document.querySelector(".imagen");
        imagen.src = data.image;
        let categorias = document.querySelector(".categorias")
        let categ = "<strong>Categorias:</strong>"
        for (i=0; i<data.tags.length; i++){
            categ+=`<li> <a class="cat" href="./category.html?categoria=${data.tags[i]}">${data.tags[i]}</a></li>`
        }
        categorias.innerHTML= categ

    })
    .catch(function(error){
        console.log(error);
    })

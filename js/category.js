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

let detallescateg = queryStringObjeto.get("categoria"); 

console.log(detallescateg);

let titulo = document.querySelector("h1");
titulo.innerText = detallescateg

fetch(`https://dummyjson.com/recipes/tag/${detallescateg}`)
.then(function(response) {
  return response.json();
})

.then(function(data){
    console.log(data);
    let infoReceta = document.querySelector(".recetas_category")
    let receta = "";
    cantidadDeRecetas = data.recipes.length
    for (i=0; i<cantidadDeRecetas; i++){
        receta += `<article>
                <img src=${data.recipes[i].image} alt="">
                <h2 class="tituloReceta">${data.recipes[i].name}</h2>
                <p>Nivel de dificultad: ${data.recipes[i].difficulty}</p>
                <p> <a class="verMas" href= "./receta.html?id=${data.recipes[i].id}"> Ver mas </a></p>
            </article>`;
    console.log(receta)
    infoReceta.innerHTML = receta; 
    }  
})

.catch(function(error){
    console.log(error);
})
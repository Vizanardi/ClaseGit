let cantidadDeRecetas /* esto es para poer hacer que aparezcan mas*/

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

/*imagenes de las recetas e informacion*/
fetch('https://dummyjson.com/recipes?limit=10')
.then(function(response) {
  return response.json();
})

.then(function(data){
    console.log(data);
    let infoReceta = document.querySelector(".info-recetas")
    let receta = "";
    cantidadDeRecetas = data.recipes.length
    for (i=0; i<data.recipes.length; i++){
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
   
/*Al tocar cargar mas*/
let cargarMas = document.querySelector(".cargarMas")
    cargarMas.addEventListener("click", function(){
        fetch(`https://dummyjson.com/recipes?limit=10&skip=${cantidadDeRecetas}`)
        .then(function(response) {
          return response.json();
        })
        
        .then(function(data){
            console.log(data);
            let infoReceta = document.querySelector(".info-recetas")
            let receta = "";
            for (i=0; i<data.recipes.length; i++){
                receta += `<article>
                        <img src=${data.recipes[i].image} alt="">
                        <h2>${data.recipes[i].name}</h2>
                        <p>Nivel de dificultad: ${data.recipes[i].difficulty}</p>
                        <p> <a href= "./receta.html?id=${data.recipes[i].id}"> Ver mas </a></p>
                    </article>`;
            console.log(receta)
        }  
        infoReceta.innerHTML += receta;
        cantidadDeRecetas += 10 
        })
        
        .catch(function(error){
            console.log(error);
        })
    })

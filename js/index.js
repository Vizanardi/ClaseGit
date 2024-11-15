let cantidadDeRecetas 
let formulario = document.querySelector("form")
let completaFormulario = document.querySelector("#buscador")

formulario.addEventListener("submit", function(evento){
    evento.preventDefault()
    if (completaFormulario.value == ""){
        console.log("buscador vacio")
        completaFormulario.innerHTML = "<p>Complete el campo porfavor</p>"
    }else if (formulario.value.length < 3)
        completaFormulario.innerHTML = "<p>Que contenga al menos 3 caracteres</p>"
})


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
                <h2>${data.recipes[i].name}</h2>
                <p>Nivel de dificultad: ${data.recipes[i].difficulty}</p>
                <p> <a href= "./receta.html?id=${data.recipes[i].id}"> Ver mas </a></p>
            </article>`;
    console.log(receta)
    infoReceta.innerHTML = receta; 
    }  
})

.catch(function(error){
    console.log(error);
})
    
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

let queryString = location.search; 
let queryStringObjeto = new URLSearchParams(queryString); 

let detallescateg = queryStringObjeto.get(data); 

console.log(detallescateg);

/*fetch(`https://dummyjson.com/recipes/tag/${detallescateg}`)
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
})*/
let resultados = document.querySelector(".buscar-form")

let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);

let buscador = queryStringObj.get("buscar-form");
fetch(`https://dummyjson.com/recipes/search?q=Margherita${buscador}`)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
    let infoReceta = document.querySelector(".info-recetas","article")
    let receta = ""
    for (i=0; i<10; i++ ){
        receta += `<article>
                <img src="${data.results[i].image}" alt="" class="" class="">
                <h2>${data.results[i].name}</h2>
                <p>Nivel de dificultad: ${data.results[i].difficulty}</p>
                <p> <a href= "./receta.html"></a> Ver mas </p>
            </article>`;
    console.log(receta) 
    }
    infoReceta.innerHTML = receta;
})
.catch(function(error){
    console.log(error);
})

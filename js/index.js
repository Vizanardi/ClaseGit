fetch("https://dummyjson.com/recipes")
.then(function(response) {
  return response.json()
})

.then(function(data) {
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
    if{
        let cargarMas = document.querySelector("button")
        cargarMas.addEventListener("click", function(){
    
        })
    }

})



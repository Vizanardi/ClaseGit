fetch("https://dummyjson.com/recipes")
.then(function(response) {
  return response.json();
})

.then(function(data){
    console.log(data);
    let infoReceta = document.querySelector(".info-recetas")
    let receta = "";
    for (i=0; i<10; i++){
        receta += `<article>
                <img src=${data.recipes[i].image} alt="">
                <h2>${data.recipes[i].name}</h2>
                <p>Nivel de dificultad: ${data.recipes[i].difficulty}</p>
                <p> <a href= "./receta.html?id=${data.recipes[i].id}"> Ver mas </a></p>
            </article>`;
    console.log(receta)
} })
    infoReceta.innerHTML = receta;
    
    let cargarMas = document.querySelector("button")
    cargarMas.addEventListener("click", function(){
        for (i=10; i<20; i++ ){
            receta += `<article>
                    <img src="${data.results[i].image}" alt="" class="" class="">
                    <h2>${data.results[i].name}</h2>
                    <p>Nivel de dificultad: ${data.results[i].difficulty}</p>
                    <p> <a href= "./receta.html"></a> Ver mas </p>
                </article>`;
        console.log(receta)
    } })



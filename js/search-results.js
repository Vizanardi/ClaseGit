let resultados = document.querySelector(".search-results")

let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);

let buscador = queryStringObj.get("form");
fetch(`https://dummyjson.com/recipes/?name=${buscador}`)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
    let infoReceta = document.querySelector(".search-results")
    let receta = ""
    for (i=0; i<data.recipes.length; i++ ){
        receta += `<article>
                <img src="${data.recipes[i].image}" alt="${data.recipes[i].name}">
                <h2>${data.recipes[i].name}</h2>
                <p> <a href= "./receta.html?id=${data.recipes[i].id}"> Ver mas </a></p>
            </article>`;
     
    }
    console.log(receta)
    infoReceta.innerHTML = receta;
})
.catch(function(error){
    console.log(error);
})

/*
La lista de resultados que coincidan con el término buscado. Cada resultado debe mostrar:
Foto
Título
Link para ir al detalle.
Para el caso de no haber resultados que coincidan con el término buscado la página debe avisar al usuario que no hay coincidencias.
*/ 

/*TERMINAR DE CORREGIR ESTO PORQUE APARECE CUALQUIERA ME PA*/

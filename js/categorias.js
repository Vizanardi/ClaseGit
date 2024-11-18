fetch('https://dummyjson.com/recipes/tags')
    .then(function(response){
     return response.json();
    })
    .then(function(data){
        console.log(data);
        let listaCategorias= document.querySelector(".listaCategorias");
        let cateOrdenadas = "";
        for (i=0; i<data.length; i++){
            cateOrdenadas+=`<li><a href="./category.html?categoria=${data[i]}">${data[i]}</a></li>`
            listaCategorias.innerHTML = cateOrdenadas
        }
    })
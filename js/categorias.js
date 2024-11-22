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

fetch('https://dummyjson.com/recipes/tags')
    .then(function(response){
     return response.json();
    })
    .then(function(data){
        console.log(data);
        let listaCategorias= document.querySelector(".listaCategorias");
        let cateOrdenadas = "";
        for (i=0; i<data.length; i++){
            cateOrdenadas+=`<p class="categoriasInd"><a class="cat" href="./category.html?categoria=${data[i]}">${data[i]}</a></p>` /*Con ese signito de pregunta es para que agarre la categoria que clickeas, ponele si tocas pizza manda a pizza*/
            listaCategorias.innerHTML = cateOrdenadas
        }
    })
    .catch(function(error){
        console.log(error);
    })
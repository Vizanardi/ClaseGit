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


let formulario = document.querySelector(".formulario")
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let errorEmail = document.querySelector(".email")
let errorPassword = document.querySelector(".password")

console.log(formulario);


formulario.addEventListener("submit", function(evento){
    evento.preventDefault()

    if (email.value == ""){
        console.log("por favor complete el campo email")
        errorEmail.innerHTML = "<p>por favor complete el campo email</p>"
    }else if(password.value == " "){
        console.log("por favor complete el campo contraseña")
        errorPassword.innerHTML = "<p>por favor complete el campo contraseña</p>"
    }else{
        formulario.submit()
    }

})
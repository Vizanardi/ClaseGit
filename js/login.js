let formulario = document.querySelector(".formulario")
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let errorEmail = document.querySelector(".email")
let errorPassword = document.querySelector(".password")

formulario.addEventListener("submit", function(evento){
    evento.preventDefault()
    if (email.value == " "){
        console.log("por favor complete el campo email")
        errorEmail.innerHTML = "<p>por favor complete el campo email</p>"
    }else if(password.value == " "){
        console.log("por favor complete el campo contraseña")
        errorPassword.innerHTML = "<p>por favor complete el campo contraseña</p>"
    }else{
        formulario.submit()
    }
})
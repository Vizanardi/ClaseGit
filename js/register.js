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


let form_register = document.querySelector(".form_register")
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let errorEmail = document.querySelector(".error_email")
let errorPassword = document.querySelector(".error_password")

console.log(form_register);


form_register.addEventListener("submit", function(evento){
    evento.preventDefault()
    if (email.value == ""){
        console.log("Por favor complete el campo email")
        errorEmail.innerHTML = "<p>Por favor complete el campo email</p>"
    }else if(password.value == ""){
        console.log("Por favor complete el campo contraseña")
        errorPassword.innerHTML = "<p>Por favor complete el campo contraseña</p>"
    }else{
        form_register.submit()
    }

})
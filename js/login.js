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
/*------------------------------------------------------------------ preguntar por que no funciona, y como poner alert*/

let form_login = document.querySelector(".form_login")
let email = document.querySelector("#email")
let password = document.querySelector("#password")

form_login.addEventListener("submit", function(evento){
    evento.preventDefault();
    if (email.value === ""){
        console.log("Complete el email")
        alert("Por favor complete su email");
    }else if (password.value === ""){
        console.log("Complet la contraseña")
        alert("porfavor complete su contraseña")
    }else{
        console.log("formulario enviado")
        form_login.submit()
    }
})

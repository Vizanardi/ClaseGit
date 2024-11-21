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

let loginform = document.querySelector("form")
let email = document.querySelector("#email")
let errorEmail = document.querySelector(".errorEmail")
let password = document.querySelector("#password")
let errorPassword = document.querySelector(".errorPassword")

loginform.addEventListener("submit", function(evento){
    evento.preventDefault()
    console.log("Eventento prevenenido")
    if (email.value == ""){
        console.log("por favor complete el campo email");
        errorEmail.innerHTML = "<p>por favor complete el campo email</p>";
        errorEmail.style.display = "block";
    }else if(password.value == ""){
        console.log("por favor complete el campo contraseña");
        errorPassword.innerHTML = "<p>por favor complete el campo contraseña</p>";
        errorPassword.style.display = "block";
    }else{
        this.submit()
    }
})
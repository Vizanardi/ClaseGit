let resultados = document.querySelector(".buscar-form")

let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);

let buscador = queryStringObj.get("q");



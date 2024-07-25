import Marca from "./letras.js"
import Modelo2 from "./numeros10.js"

const usuv = document.querySelector('#usuariovig')
const apev = document.querySelector('#apellidovig')
const docv = document.querySelector('#documentovig')
const contv = document.querySelector('#contraseñavig')
console.log(contv)

docv.addEventListener("keypress", (event) => {
    Modelo2(event, docv)
})
docv.addEventListener("blur", (event) => {
    Modelo2(event, docv)
})
apev.addEventListener("keypress", (event) => {
    Marca(event, apev)
})
apev.addEventListener("blur", (event) => {
    Marca(event, apev)
})
usuv.addEventListener("keypress", (event) => {
    Marca(event, usuv)
})
usuv.addEventListener("blur", (event) => {
    Marca(event, usuv)
})

const Contraseña = (element, elemento) => {
    if (element.value === "") {
        elemento.classList.remove("correcto");
        elemento.classList.add("error");
    } else {
        elemento.classList.add("error");
        elemento.classList.remove("correcto");
    }
}
contv.addEventListener("keypress", (event) => {
    Contraseña(event, contv);
})
contv.addEventListener("blur", (event) => {
    Contraseña(event, contv);
})


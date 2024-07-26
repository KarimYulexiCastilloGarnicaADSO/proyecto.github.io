import Marca from "./letras.js"
import Modelo2 from "./numeros10.js"
import Contraseña from "./contraseña.js"

const usuv = document.querySelector('#usuariovig')
const apev = document.querySelector('#apellidovig')
const docv = document.querySelector('#documentovig')
const contv = document.querySelector('#contraseñavig')


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
contv.addEventListener("keypress", (event) => {
    Contraseña(event, contv);
})
contv.addEventListener("blur", (event) => {
    Contraseña(event, contv);
})


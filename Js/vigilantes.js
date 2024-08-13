import Marca from "./letras.js"
import Modelo2 from "./numeros10.js"
import Contraseña from "./contraseña.js"
import valid from "./validar.js"

const usuv = document.querySelector('#usuariovig')
const apev = document.querySelector('#apellidovig')
const docv = document.querySelector('#documentovig')
const contv = document.querySelector('#contraseñavig')
const formu = document.querySelector('#formulario')
console.log(formu)

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

formu.addEventListener("submit", (event) => {
    event.preventDefault();
    let validar = valid(event, '#formulario [required]')
    // alert(validar)
    if (validar) {
        const datos = {
            usuv: usuv.value,
            apev: apev.value,
            docv: docv.value,
            contv: contv.value
        }
        enviar(datos)
        // location
        location.href ="/logeo.html";
        console.log(datos)
        // enviar(datos)
        alert("Formulario enviado")
    }
    else{
        alert("Por favor llene todos los campos del formulario")
    }
})

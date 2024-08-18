import Marca from "./letras.js";
import Modelo from "./numeros4.js";
import Placa from "./placa.js";
import valid from "./validar.js";

/**
 * Buscamos por id en el HTML
 */
const $form = document.querySelector('#formulario')
const select = document.querySelector('#formulario > select')
console.log(select)
const placa = document.querySelector('#placa')
const marca = document.querySelector('#marca')
const $tipo = document.querySelector('#tipo')
const modelo =document.querySelector('#modelo')
const color = document.querySelector('#color')
const due = document.querySelector('#dueno')
console.log(due)
const formu_usu = document.querySelector('.form__subtitulos')

/**
 * Valida los campos*/


placa.addEventListener("keypress", (event) => {
    Placa(event, placa);
})
placa.addEventListener("blur", (event) => {
    Placa(event, placa);
})
marca.addEventListener("keypress", (event) => {
    Marca(event, marca)
})
marca.addEventListener("blur", (event) => {
    Marca(event, marca)
})
color.addEventListener("keypress", (event) => {
    Marca(event, color )
})
color.addEventListener("blur", (event) => {
    Marca(event, color)
})
modelo.addEventListener("keypress", (event) => {
    Modelo(event, modelo)
})
modelo.addEventListener("blur", (event) => {
    Modelo(event, modelo)
}) 
due.addEventListener("keypress", (event) => {
    Marca(event, due)
})
due.addEventListener("blur", (event) => {
    Marca(event, due)
})


$form.addEventListener("submit", (event) => {
    event.preventDefault();
    let validar = valid(event, '#formulario [required]')
    // alert(validar)
    if (validar) {
        const datos = {
            placa: placa.value,
            marca: marca.value,
            modelo: modelo.value,
            color: color.value,
            tipo: $tipo.value,
            due: due.value
        }
        enviar(datos)
        // location
        location.href ="vehiculos.html";
        console.log(datos)
        // enviar(datos)
        alert("Formulario enviado")
    }
    else{
        alert("Por favor llene todos los campos antes de enviar el formulario")
    }
})



import Modelo2 from "./numeros10.js"
import Marca from "./letras.js"
import valid from "./validar.js"
import Placa from "./placa.js"

const form = document.querySelector('#formulario')
const documento = document.querySelector('#documento')
const nombre = document.querySelector('#nombre')
const apellido = document.querySelector('#apellido')
const telefono = document.querySelector('#telefono')
const tp_usuario = document.querySelector('#tp_usuario')
const tp_jornada = document.querySelector('#tp_jornada')
const placa = document.querySelector('#placa')
console.log(placa);

documento.addEventListener("keypress", (event) => {
    Modelo2(event, documento)
})
documento.addEventListener("blur", (event) => {
    Modelo2(event, documento)
})
nombre.addEventListener("keypress", (event) => {
    Marca(event, nombre)
})
nombre.addEventListener("blur", (event) => {
    Marca(event, nombre)
})
apellido.addEventListener("keypress", (event) => {
    Marca(event, apellido)
})
apellido.addEventListener("blur", (event) => {
    Marca(event, apellido)
})
telefono.addEventListener("keypress", (event) => {
    Modelo2(event, telefono)
})
telefono.addEventListener("blur", (event) => {
    Modelo2(event, telefono)
})
placa.addEventListener("keypress", (event) => {
    Placa(event, placa)
})
placa.addEventListener("blur", (event) => {
    Placa(event, placa)
})

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let validar = valid(event, '#formulario [required]')
    // alert(validar)
    if (validar) {
        const datos = {
            documento: documento.value,
            nombre: nombre.value,
            apellido: apellido.value,
            telefono: telefono.value,
            tp_usuario: tp_usuario.value,
            tp_jornada: tp_jornada.value,
            placa: placa.value
        }
        enviar(datos)
        // location
        location.href ="/Usuarios/registro_usuarios.html";
        console.log(datos)
        // enviar(datos)
        alert("Formulario Enviado")
    }
    else{
        alert("Por favor llene todos los campos antes de enviar el formulario")
    }
})



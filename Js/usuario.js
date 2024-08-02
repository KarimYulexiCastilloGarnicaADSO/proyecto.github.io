import Modelo2 from "./numeros10.js"
import Marca from "./letras.js"
import valid from "./validar.js"

const form = document.querySelector('#formulario')
const documento = document.querySelector('#documento')
const nombre = document.querySelector('#nombre')
const apellido = document.querySelector('#apellido')
const telefono = document.querySelector('#telefono')
const tp_usuario = document.querySelector('#tp_usuario')
const tp_jornada = document.querySelector('#tp_jornada')
console.log(tp_jornada);

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
            tp_jornada: tp_jornada.value
        }
        enviar(datos)
        // location
        location.href ="/Usuarios/registro_usuarios.html";
        console.log(datos)
        // enviar(datos)
        alert("bien")
    }
    else{
        alert("mal")
    }
})

//ENVIAR
async function enviar(datos) {
    fetch('http://127.0.0.1:3000/Registro_usuarios_vehiculos', {
        method: 'POST',
        body: JSON.stringify(datos),
        headers: {
            'Content-type': 'application/json; charsert=UTF-8',
        },
    })
    .then( (response) => response.json() )
    .then((json) => {
        documento.value = "";
        nombre.value = "";
        apellido.value = "";
        telefono.value = "";
        tp_usuario.value = "";
        tp_jornada.value = "";
    });
}


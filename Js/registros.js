import Contraseña from "./contraseña.js"
import Placa from "./placa.js"
import valid from "./validar.js"

const fecha2 = document.querySelector('#fch_entrada')
const placa2 = document.querySelector('#placa_entrada')
const formulario = document.querySelector('#formulario')
console.log(formulario)

fecha2.addEventListener("keypress", (event) => {
    Contraseña(event, fecha2)
})
fecha2.addEventListener("blur", (event) => {
    Contraseña(event, fecha2)
})
placa2.addEventListener("keypress", (event) => {
    Placa(event, placa2)
})
placa2.addEventListener("blur", (event) => {
    Placa(event, placa2)
})


formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    let validar = valid(event, '#formulario [required]')
    // alert(validar)
    if (validar) {
        const datos = {
            fecha2: fecha2.value,
            placa2: placa2.value
        }
        enviar(datos)
        // location
        location.href ="/Registro/registro_entrada.html";
        console.log(datos)
        // enviar(datos)
        alert("bien")
    }
    else{
        alert("mal")
    }
})

async function enviar(datos) {
    fetch('http://127.0.0.1:3000/Registros_entrada', {
        method: 'POST',
        body: JSON.stringify(datos),
        headers: {
            'Content-type': 'application/json; charsert=UTF-8',
        },
    })
    .then( (response) => response.json() )
    .then((json) => console.log(json))
  }
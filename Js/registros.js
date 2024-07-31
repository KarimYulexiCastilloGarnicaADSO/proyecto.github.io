import Contraseña from "./contraseña.js"
import Placa from "./placa.js"
import valid from "./validar.js"

const fecha2 = document.querySelector('#fch_entrada')
const fecha = document.querySelector('#fch_salida')
const placa2 = document.querySelector('#placa_entrada')
const formulario = document.querySelector('#formulario')
const codigo = document.querySelector('#codigo')
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
fecha.addEventListener("keypress", (event) => {
    Contraseña(event, fecha)
})
fecha.addEventListener("blur", (event) => {
    Contraseña(event, fecha)
})
codigo.addEventListener("keypress", (event) => {
    Contraseña(event, codigo)
})
codigo.addEventListener("blur", (event) => {
    Contraseña(event, codigo)
})

formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    let validar = valid(event, '#formulario [required]')
    // alert(validar)
    if (validar) {
        const datos = {
            codigo: codigo.value,
            entrada: fecha2.value,
            placa: placa2.value,
            salida: fecha.value
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


//fUNCION PARA ENVIAR DATOS 
async function enviar(datos) {
    fetch('http://127.0.0.1:3000/Registros', {
        method: 'POST',
        body: JSON.stringify(datos),
        headers: {
            'Content-type': 'application/json; charsert=UTF-8',
        },
    })
    .then( (response) => response.json() )
    .then((json) => {
        codigo.value = "";
        fecha2.value = "";
        placa2.value = "";
        fecha.value = "";
    });
}




import Marca from "./letras.js";
import Modelo from "./numeros4.js";
import Placa from "./placa.js";
import valid from "./validar.js";
/**
 * Carga los tipos de vehiculo
 */
async function consultar() {
    const data = await fetch("http://127.0.0.1:3000/tipos_vehiculo")
    const tpos = await data.json()

    tpos.forEach(element => {
        let option = document.createElement('option')
        select.appendChild(option)
        option.innerText = element.nombre
    });
}
consultar()

/**
 * Buscamos por id en el HTML
 */
const $form = document.querySelector('#formulario')
console.log($form)
const select = document.querySelector('#formulario > select')
console.log(select)
const placa = document.querySelector('#placa')
const marca = document.querySelector('#marca')
const $tipo = document.querySelector('#tipo')
const modelo =document.querySelector('#modelo')
const color = document.querySelector('#color')
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
            $tipo: $tipo.value
        }
        enviar(datos)
        // location
        location.href ="vehiculos.html";
        console.log(datos)
        // enviar(datos)
        alert("bien")
    }
    else{
        alert("mal")
    }
})


/**
 * Capturar los inputs para enviarle los datos
 */

// const capturar = (event) => {
//     event.preventDefault()

// }

async function enviar(datos) {
    fetch('http://127.0.0.1:3000/vehiculos', {
        method: 'POST',
        body: JSON.stringify(datos),
        headers: {
            'Content-type': 'application/json; charsert=UTF-8',
        },
    })
    .then( (response) => response.json() )
    .then((json) => console.log(json))
}
// $form.addEventListener("submit", capturar)

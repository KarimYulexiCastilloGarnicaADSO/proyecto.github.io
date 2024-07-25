import Marca from "./letras.js";
import Modelo from "./numeros4.js";
import Placa from "./placa.js";
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
const usuario = document.querySelector('#usuario')
const contraseña = document.querySelector('#contraseña ')
const formu_usu = document.querySelector('.form__subtitulos')
console.log(formu_usu)

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

/**
 * Capturar los inputs para enviarle los datos
 */

const capturar = (event) =>{
    event.preventDefault()

    let camposValidos = true;
    const campos = [placa, marca, $tipo, modelo, color];
    
    campos.forEach(campo => {
        if (!campo.value.trim()) {
            campo.classList.add("error");
            camposValidos = false;
        } else {
            campo.classList.remove("error");
        }
    });

    if (!camposValidos) {
        console.error('Todos los campos son obligatorios');
        return;
    }

    const datos = {
        placa: placa.value,
        marca: marca.value,
        tipo: $tipo.value,  
        modelo: modelo.value,
        color: color.value
    }
    enviar(datos)
}



/**
 * Envia los datos
 */
async function enviar(datos) {
    try {
        const response = await fetch('http://127.0.0.1:3000/vehiculos', {
            method: 'POST',
            body: JSON.stringify(datos),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });

        const json = await response.json();
        console.log(json);

        if (!response.ok) {
            throw new Error(json.message || 'Error al guardar los datos');
        }

    } catch (error) {
        console.error('Error al enviar los datos:', error);
    }
}

$form.addEventListener('submit', capturar);


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
const $form = document.querySelector('.formulario')
const form = document.querySelector('.formulario')
console.log($form)
const select = document.querySelector('.formulario > select')
console.log(select)
const placa = document.querySelector('#placa')
const marca = document.querySelector('#marca')
const $tipo = document.querySelector('#tipo')
const modelo =document.querySelector('#modelo')
const color = document.querySelector('#color')
console.log($tipo)

/**
 * Capturar los inputs para enviarle los datos
 */

const capturar = (event) =>{
    event.preventDefault()
    const datos = {
        placa: placa.value,
        marca: marca.value,
        $tipo: $tipo.value,
        modelo: modelo.value,
        color: color.value
    }
    enviar(datos)
}


/**
 * Envia los datos
 */
async function enviar(datos) {
    fetch('http://127.0.0.1:3000/vehiculos', {
        method: 'POST',
        body: JSON.stringify(datos),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

$form.addEventListener("submit" , capturar)



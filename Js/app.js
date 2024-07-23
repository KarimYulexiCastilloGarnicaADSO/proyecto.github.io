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
// const form = document.querySelector('.formulario')
console.log($form)
const select = document.querySelector('.formulario > select')
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



const Marca = (event) =>{
    console.log(event)
    let regex = /^[A-Za-zAà-ÿ\s]+$/
    if (!regex.test(event.key)) {
        event.preventDefault()
        marca.classList.remove("correcto")
        marca.classList.add("error")

    }
    else{
        marca.classList.add("correcto")
        marca.classList.remove("error")
    }
}
const Modelo = (event) =>{
    console.log(event)
    let regex = /^([0-9])*$/
    if (!regex.test(event.key)) {
        event.preventDefault()
        modelo.classList.remove("correcto")
        modelo.classList.add("error")

    }
    else{
        modelo.classList.add("correcto")
        modelo.classList.remove("error")
    }
}
const Color = (event) =>{
    console.log(event)
    let regex = /^[A-Za-zAà-ÿ\s]+$/
    if (!regex.test(event.key)) {
        event.preventDefault()
        color.classList.remove("correcto")
        color.classList.add("error")

    }
    else{
        color.classList.add("correcto")
        color.classList.remove("error")
    }
}
// const letras2 = (event) =>{
//     console.log(event)
//     let regex = /^[A-Za-zAà-ÿ\s]+$/
//     if (!regex.test(event.key)) {
//         event.preventDefault()
//         apellido.classList.remove("correcto")
//         apellido.classList.add("error")

//     }
//     else{
//         apellido.classList.add("correcto")
//         apellido.classList.remove("error")
//     }
// }
marca.addEventListener("keypress", (event) => {
    Marca(event, marca)
})
modelo.addEventListener("keypress", (event) => {
    Modelo(event, modelo)
})
color.addEventListener("keypress", (event) => {
    Color(event, color )
})
// apellido.addEventListener("keypress", (event) => {
//     letras2(event, apellido)
// })



// const solo_numeros = (event) => {
//     if (event.keyCode < 48 || event.keyCode > 57) {
//         event.preventDefault()
//     }
// } 


// const numeros = (event, elemento) => {
//     let valor = elemento.value.length === 10; 
//     console.log(valor, elemento.value.length) 
//     if(valor){ 
//         event.preventDefault()
//         elemento.classList.add("correcto")
//         elemento.classList.remove("error")
//         // doc.classList.remove("correcto")
//         // doc.classList.add("error")
//     }
//     else{
//         elemento.classList.remove("correcto")
//         elemento.classList.add("error")
//         // doc.classList.add("correcto")
//         // doc.classList.remove("error")
//     }
// }


// telefono.addEventListener("keypress", (event) => {
//     solo_numeros(event, telefono)
// })
// // telefono.add("input", (event) => {
// //     numeros(event, telefono)
// // })
// doc.addEventListener("keypress", (event) => {
//     numeros(event,doc)
// })


// const email = (event,elemento) => {
//     let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//     if (regex.test(elemento.value)) {
//         event.preventDefault()
//         correo.classList.add("correcto")
//         correo.classList.remove("error")
//     }
//     else{
//         correo.classList.add("error")
//         correo.classList.remove("correcto")
//     }
// }
// correo.addEventListener("blur", (event) => {
//     email(event, correo)
// })


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


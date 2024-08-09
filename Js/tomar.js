import Marca from "./letras.js"
import Contraseña from "./contraseña.js"
import valid from "./validar.js"

const formu_usu = document.querySelector('#formulario')
const usuario = document.querySelector('#usuario')
const contraseña = document.querySelector('#contraseña')
console.log(formu_usu, usuario, contraseña)


usuario.addEventListener("keypress", (event) => {
  Marca(event, usuario);
})
usuario.addEventListener("blur", (event) => {
  Marca(event, usuario);
})
contraseña.addEventListener("keypress", (event) => {
  Contraseña(event, contraseña)
})
contraseña.addEventListener("blur", (event) => {
  Contraseña(event, contraseña)
})



formu_usu.addEventListener("submit", (event) => {
  event.preventDefault();
  let validar = valid(event, '#formulario [required]')
  // alert(validar)
  if (validar) {
      const datos = {
          usuario: usuario.value,
          contraseña: contraseña.value
      }
      enviar(datos)
      // location
      location.href ="/Vehiculos/vehiculos.html";
      console.log(datos)
      // enviar(datos)
      alert("Bienvenido")
  }
  else{
      alert("Por  favor ingrese su nombre de usuario y una contraseña valida")
  }
})


async function enviar(datos) {
  fetch('http://127.0.0.1:3000/Usuarios', {
      method: 'POST',
      body: JSON.stringify(datos),
      headers: {
          'Content-type': 'application/json; charsert=UTF-8',
      },
  })
  .then( (response) => response.json() )
  .then((json) => console.log(json))
}

// formu_usu.addEventListener("submit" , tomar)



    // const tomar = (event) => {
    //     event.preventDefault()
    //     const dt = {
    //         usuario: usuario.value,
    //         contraseña: contraseña.value
    //     }
    //     registrar(dt)
    // }
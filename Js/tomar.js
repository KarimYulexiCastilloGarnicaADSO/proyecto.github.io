import Marca from "./letras.js"
import Contraseña from "./contraseña.js"

const formu_usu = document.querySelector('.form__subtitulos')
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

// async function registrar(dt) {
  //     fetch('http://127.0.0.1:3000/Usuarios', {
//         method: 'POST',
//         body: JSON.stringify(dt),
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         },
//       })
//         .then((response) => response.json())
//         .then((json) => console.log(json));
// }

// formu_usu.addEventListener("submit" , tomar)



    // const tomar = (event) => {
    //     event.preventDefault()
    //     const dt = {
    //         usuario: usuario.value,
    //         contraseña: contraseña.value
    //     }
    //     registrar(dt)
    // }
import Contraseña from "./contraseña.js"
import Placa from "./placa.js"

const fecha2 = document.querySelector('#fch_entrada')
const placa2 = document.querySelector('#placa_entrada')
console.log(placa2)

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
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

// Función para verificar si la placa tiene un dueño
async function verificarDueno(placa) {
    try {
        const response = await fetch(`http://127.0.0.1:3000/vehiculos/dueno/${placa}`, {
            method: "GET",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });

        if (response.ok) {
            const json = await response.json();
            return json.dueno;  // Devuelve el nombre del dueño si existe
        } else {
            return null;  // Si la placa no tiene dueño
        }
    } catch (error) {
        console.error("Error al verificar el dueño: ", error);
        return null;
    }
}

// Modifica el listener de submit para incluir la verificación del dueño
formulario.addEventListener("submit", async (event) => {
    event.preventDefault();

    const validar = valid(event, '#formulario [required]');
    if (!validar) {
        alert("Por favor llene todos los campos antes de enviar el formulario");
        return;
    }

    const placa = placa2.value;
    const dueno = await verificarDueno(placa);

    if (!dueno) {
        alert("La placa ingresada no tiene un dueño registrado. Por favor registre un dueño primero.");
        location.href = "/Usuarios/usuario_nuevo.html";  // Redirigir al formulario de registro de usuario
    } else {
        const datos = {
            codigo: codigo.value,
            entrada: fecha2.value,
            placa: placa2.value,
            salida: fecha.value
        };

        enviar(datos);
        location.href = "/Registro/registro_entrada.html";
        alert("Formulario Enviado");
    }
});
let id = localStorage.getItem("id");
console.log(id);

// Selecciona los elementos del formulario usando sus IDs
const entrada = document.getElementById('fch_entrada');
const placa = document.getElementById('placa_entrada');
const salida = document.getElementById('fch_salida');
const codigo = document.getElementById('codigo');
const $boton = document.querySelector(".boton");
const id_f = document.querySelector('codigo')

async function modificarRegistro(id) {
    console.log(id);
    try {
        const response = await fetch(`http://127.0.0.1:3000/Registros/${id}`, {
            method: "GET",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        const json = await response.json();

        // Asignar los valores recibidos a los campos del formulario
        codigo.value = json.codigo || "";
        entrada.value = json.entrada  || "";
        placa.value = json.placa || "";
        salida.value = json.salida || "";

    } catch (error) {
        console.error("Error al obtener el registro: ", error);
    }
}
modificarRegistro(id);

function modificar() {
    // Verifica que todos los elementos existen y tienen valores antes de continuar
    if (entrada && placa && salida && codigo) {
        const datos = {
            codigo: codigo.value,
            entrada: entrada.value,
            placa: placa.value,
            salida: salida.value
        };

        fetch(`http://127.0.0.1:3000/Registros/${id}`, {
            method: 'PUT',
            body: JSON.stringify(datos),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            location.href = "registro_entrada.html";
        })
        .catch(error => console.error("Error al modificar el registro: ", error));
    } else {
        console.error("Uno o más elementos del formulario no se encontraron o no tienen valores.");
    }
}

$boton.addEventListener("click", modificar);

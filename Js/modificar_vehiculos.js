let id = localStorage.getItem("id");
console.log(id);

// Selecciona los elementos del formulario usando sus IDs
const placa = document.getElementById('placa');
const marca = document.getElementById('marca');
const $tipo = document.getElementById('tipo');
const modelo = document.getElementById('modelo');
const color = document.getElementById('color')
const dueno = document.getElementById('dueno')
const $boton = document.querySelector(".boton");

async function modificarRegistro(id) {
    try {
        const response = await fetch(`http://127.0.0.1:3000/vehiculos/${id}`, {
            method: "GET",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        const json = await response.json();

        // Asignar los valores recibidos a los campos del formulario
        placa.value = json.placa || "";
        marca.value = json.marca  || "";
        modelo.value = json.modelo || "";
        color.value = json.color || "";
        dueno.value = json.due || "";

        // Asignar el valor del tipo de vehículo en el select
        $tipo.value = json.tipo || "";
        
        // Si por alguna razón el tipo no se establece correctamente:
        if ($tipo.value !== json.tipo) {
            // Recorre las opciones y selecciona la que coincida con el valor del tipo
            for (let option of $tipo.options) {
                if (option.value === json.tipo) {
                    option.selected = true;
                    break;
                }
            }
        }
    } catch (error) {
        console.error("Error al obtener el registro: ", error);
    }
}

modificarRegistro(id);

function modificar() {
    // Verifica que todos los elementos existen y tienen valores antes de continuar
    if (placa && marca && $tipo && modelo && color && dueno) {
        const datos = {
            placa: placa.value,
            marca: marca.value,
            modelo: modelo.value,
            color: color.value,
            tipo: $tipo.value,
            due: dueno.value
        };

        fetch(`http://127.0.0.1:3000/vehiculos/${id}`, {
            method: 'PUT',
            body: JSON.stringify(datos),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            location.href = "vehiculos.html";
        })
        .catch(error => console.error("Error al modificar el registro: ", error));
    } else {
        console.error("Uno o más elementos del formulario no se encontraron o no tienen valores.");
    }
}

$boton.addEventListener("click", modificar);

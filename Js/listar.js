
/**
 * Lista los vehiculos
 */
// Función para obtener y listar los datos
async function obtener() {
    try {
        const response = await fetch('http://127.0.0.1:3000/vehiculos');
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        const datos = await response.json();

        // Obtener el elemento tbody donde se mostrarán los vehiculos
        const $tbody = document.querySelector('#table_vehiculos tbody');

        // Limpiar cualquier contenido previo en el tbody
        $tbody.innerHTML = '';

        // Iterar sobre cada vehiculo y crear elementos tr y td
        datos.forEach(vehiculo => {
            const $tr = document.createElement('tr');
            $tr.innerHTML = `
                <td>${vehiculo.placa}</td>
                <td>${vehiculo.marca}</td>
                <td>${vehiculo.modelo}</td>
                <td>${vehiculo.color}</td>
                <td>${vehiculo.$tipo}</td>
                <td><button class="boton_eliminar">Eliminar</button></td>
            `;

            // Añadir un event listener al botón de eliminar
            $tr.querySelector('.boton_eliminar').addEventListener('click', () => {
                eliminarUsuario(vehiculo.placa, $tr);
            });

            $tbody.appendChild($tr);
        });
    } catch (error) {
        console.log('Error al obtener los datos', error);
    }
}

// Función para eliminar un vehiculo
async function eliminarUsuario(placa, fila) {
    try {
        const response = await fetch(`http://127.0.0.1:3000/vehiculos/${placa}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            // Eliminar la fila del DOM si la solicitud fue exitosa
            fila.remove();
            console.log(`Usuario con id ${placa} eliminado exitosamente.`);
        } else {
            console.error("Error al eliminar usuario");
        }
    } catch (error) {
        console.error("Error al eliminar el usuario", error);
    }
}

document.addEventListener('DOMContentLoaded', obtener);

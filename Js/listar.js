/**
 * Lista los usuarios
 */
// Función para obtener y listar los datos
async function obtener() {
    try {
        const response = await fetch('http://127.0.0.1:3000/vehiculos');
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        const datos = await response.json();

        // Obtener el elemento tbody donde se mostrarán los usuarios
        const $tbody = document.querySelector('#table_vehiculos tbody');

        // Limpiar cualquier contenido previo en el tbody
        $tbody.innerHTML = '';

        // Iterar sobre cada usuario y crear elementos tr y td
        datos.forEach(vehiculos => {
            const $tr = document.createElement('tr');
            $tr.innerHTML = `
                <td>${vehiculos.placa}</td>
                <td>${vehiculos.marca}</td>
                <td>${vehiculos.modelo}</td>
                <td>${vehiculos.color}</td>
                <td>${vehiculos.$tipo}</td>
                <td><button class="boton_eliminar">Eliminar</button></td>
            `;

            // Añadir un event listener al botón de eliminar
            $tr.querySelector('.boton_eliminar').addEventListener('click', () => {
                eliminarvehiculo(vehiculos.placa, $tr);
            });

            $tbody.appendChild($tr);
        });
    } catch (error) {
        console.log('Error al obtener los datos', error);
    }
}

// Función para eliminar un usuario
async function eliminarvehiculo(placa, fila) {
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

document.addEventListener('DOMContentLoaded', obtener());

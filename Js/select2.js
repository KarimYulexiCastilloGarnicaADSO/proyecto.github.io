/**
 * Carga los tipos de vehiculo
 */
async function llenar() {
    const data = await fetch("http://127.0.0.1:3000/Filtro1")
    const tpos = await data.json()

    tpos.forEach(element => {
        let option = document.createElement('option')
        select2.appendChild(option)
        option.innerText = element.nombre
    });
}
llenar()

/**
 * Buscamos por id en el HTML
 */
const select2 = document.querySelector('.combo > select')
console.log(select2)



/**
 * Lista los registros
 */
// Función para obtener y listar los datos
async function obtener() {
    try {
        const response = await fetch('http://127.0.0.1:3000/Registro%20entrada');
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        const datos = await response.json();

        // Obtener el elemento tbody donde se mostrarán los registros
        const $tbody = document.querySelector('#table_registros tbody');

        // Limpiar cualquier contenido previo en el tbody
        $tbody.innerHTML = '';

        // Iterar sobre cada registro y crear elementos tr y td
        datos.forEach(registro => {
            const $tr = document.createElement('tr');
            $tr.innerHTML = `
                <td>${registro.codigo}</td>
                <td>${registro.entrada}</td>
                <td>${registro.placa}</td>
                <td>${registro.salida}</td>
                <td>${registro.$fecha}</td>
                <td><button class="boton_eliminar">Eliminar</button></td>
            `;

            // Añadir un event listener al botón de eliminar
            $tr.querySelector('.boton_eliminar').addEventListener('click', () => {
                eliminarUsuario(registro.codigo, $tr);
            });

            $tbody.appendChild($tr);
        });
    } catch (error) {
        console.log('Error al obtener los datos', error);
    }
}

// Función para eliminar un registro
async function eliminarUsuario(codigo, fila) {
    try {
        const response = await fetch(`http://127.0.0.1:3000/vehiculos/${codigo}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            // Eliminar la fila del DOM si la solicitud fue exitosa
            fila.remove();
            console.log(`Usuario con id ${codigo} eliminado exitosamente.`);
        } else {
            console.error("Error al eliminar usuario");
        }
    } catch (error) {
        console.error("Error al eliminar el usuario", error);
    }
}

document.addEventListener('DOMContentLoaded', llenar);

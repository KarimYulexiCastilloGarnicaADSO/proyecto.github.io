/**
 * Lista los usuarios
 */
// Función para obtener y listar los datos
const bodyTable = document.getElementById("bodyTable");
let fragmento = document.createDocumentFragment();

async function obtener() {
    const request = await fetch("http://127.0.0.1:3000/Registro_usuarios_vehiculos");
    let response = await request.json();

    response.forEach((elemento) => {
        let tr = document.createElement("tr");

        let td = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let td5 = document.createElement("td");
        let td6 = document.createElement("td");
        let td7 = document.createElement("td");

        // Botón de modificar
        let btnModify = document.createElement("a");
        btnModify.classList.add('boton_modificar_u');
        btnModify.textContent = "Modificar";
        btnModify.setAttribute("data-id", elemento.id);
        btnModify.setAttribute("id", "btnModificar");
        btnModify.setAttribute("href", "modificar_usuarios.html")

        // Botón de eliminar
        let btnDelete = document.createElement("button");
        btnDelete.classList.add('boton_eliminar');
        btnDelete.textContent = "Eliminar";
        btnDelete.setAttribute("data-id", elemento.id);
        btnDelete.setAttribute("id", "btnEliminar");

        let form = document.createElement("form");
        form.appendChild(btnModify);
        form.appendChild(btnDelete);

        td.textContent = elemento.documento;
        td2.textContent = elemento.nombre;
        td3.textContent = elemento.apellido;
        td4.textContent = elemento.telefono;
        td5.textContent = elemento.tp_usuario;
        td6.textContent = elemento.tp_jornada;
        td7.appendChild(form);

        tr.appendChild(td);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        tr.appendChild(td7);

        fragmento.appendChild(tr);
    });
    bodyTable.appendChild(fragmento);

    // Acción eliminar usuario
    let deleteButtons = document.querySelectorAll("#btnEliminar");
    deleteButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            eliminarvehiculo(btn.getAttribute("data-id"));
        });
    });

    // Acción modificar usuario
    let modifyButtons = document.querySelectorAll("#btnModificar");
    modifyButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            modificarusuario(btn.getAttribute("data-id"), objeto);
        });
    });
}

//ELIMINAR
async function eliminarvehiculo(id) {
    console.log(id);
    const response = await fetch(`http://127.0.0.1:3000/Registro_usuarios_vehiculos/${id}`, {
        method: "DELETE"
    });
    obtener();
}

//MODIFICAR
async function modificarusuario(id) {
    console.log(id);
    const response = await fetch(`http://127.0.0.1:3000/Registro_usuarios_vehiculos/${id}`, {
        method: "PUT",
        body: JSON.stringify({

        })
    });
    obtener();
}

obtener();

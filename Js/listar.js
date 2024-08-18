/**
 * Lista los usuarios
 */
// Función para obtener y listar los datos
let link = 'modificar_vehiculo.html'
let tabla = document.querySelector(".tabla")

tabla.addEventListener("click", function(event) {
    if (event.target.classList.contains("boton_modificar_u")) {
        let fila = event.target.closest("tr")
        let idUsuario = fila.querySelector(".idUsuario").innerText;
        localStorage.setItem("id", idUsuario);
    }

})

const bodyTable = document.getElementById("bodyTable");
let fragmento = document.createDocumentFragment();
async function obtener() {
    const request = await fetch("http://127.0.0.1:3000/vehiculos");
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
        let td8 = document.createElement("td");

        td.classList.add("idUsuario");
    
        // Botón de modificar
        let btnModify = document.createElement("button");
        btnModify.classList.add('boton_modificar_u');
        btnModify.textContent = "Modificar";
        btnModify.setAttribute("data-id", elemento.id);
        btnModify.setAttribute("id", "btnModificar");

        //Boton de eliminar
        let btnDelete = document.createElement("button");
        btnDelete.classList.add('boton_eliminar')
        btnDelete.textContent = "Eliminar"
        btnDelete.setAttribute("data-id", elemento.id);
        btnDelete.setAttribute("id", "btnEliminar");

        let form = document.createElement("form");
        form.appendChild(btnModify);
        form.appendChild(btnDelete);

        td.textContent = elemento.id;
        td2.textContent = elemento.placa;
        td3.textContent = elemento.marca;
        td4.textContent = elemento.modelo;
        td5.textContent = elemento.color;
        td6.textContent = elemento.tipo;
        td7.textContent = elemento.due;
        td8.appendChild(form);

        tr.appendChild(td);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        tr.appendChild(td7);
        tr.appendChild(td8);

        btnModify.addEventListener("click", (event)=>{
            event.preventDefault();
            location.href = link;
        })

        fragmento.appendChild(tr);
    })

    bodyTable.appendChild(fragmento);


    //Accion eliminar vehiculo
    let button = document.querySelectorAll("#btnEliminar");
    button.forEach((btn) => {
        btn.addEventListener("click", () => {
            eliminarvehiculo(btn.getAttribute("data-id"));
        })
    })

    // Acción modificar usuario
    let modifyButtons = document.querySelectorAll("#btnModificar");
    modifyButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            modificarusuario(btn.getAttribute("data-id"), objeto);
        });
    });

}

obtener();

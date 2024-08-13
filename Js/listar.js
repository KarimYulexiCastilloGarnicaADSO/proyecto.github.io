/**
 * Lista los usuarios
 */
// Función para obtener y listar los datos
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

        let btnDelete = document.createElement("button");
        btnDelete.classList.add('boton_eliminar')
        btnDelete.textContent = "Eliminar"
        btnDelete.setAttribute("data-id", elemento.id);
        btnDelete.setAttribute("id", "btnEliminar");

        let form = document.createElement("form");
        form.appendChild(btnDelete);


        let btnModify = document.createElement("button");

        td.textContent = elemento.placa;
        td2.textContent = elemento.marca;
        td3.textContent = elemento.modelo;
        td4.textContent = elemento.color;
        td5.textContent = elemento.$tipo;
        td6.appendChild(form);

        tr.appendChild(td);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);

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
}

obtener();

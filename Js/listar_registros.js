// /**
//  * Lista los registros
//  */
// // Función para obtener y listar los datos
// const bodyTable = document.getElementById("bodyTable");
// let fragmento = document.createDocumentFragment();
// async function obtener() {
//     const request = await fetch("http://127.0.0.1:3000/Registros");
//     let response = await request.json();

//     response.forEach((elemento) => {
//         let tr = document.createElement("tr");

//         let td = document.createElement("td");
//         let td2 = document.createElement("td");
//         let td3 = document.createElement("td");
//         let td4 = document.createElement("td");
//         let td5 = document.createElement("td");

//         let btnDelete = document.createElement("button");
//         btnDelete.classList.add('boton_eliminar')
//         btnDelete.textContent = "Eliminar"
//         btnDelete.setAttribute("data-id", elemento.codigo);
//         btnDelete.setAttribute("codigo", "btnEliminar");

//         let form = document.createElement("form");
//         form.appendChild(btnDelete);


//         let btnModify = document.createElement("button");

//         td.textContent = elemento.codigo;
//         td2.textContent = elemento.entrada;
//         td3.textContent = elemento.placa;
//         td4.textContent = elemento.salida;
//         td5.appendChild(form);

//         tr.appendChild(td);
//         tr.appendChild(td2);
//         tr.appendChild(td3);
//         tr.appendChild(td4);
//         tr.appendChild(td5);

//         fragmento.appendChild(tr);
//     })
//     bodyTable.appendChild(fragmento);


//     let button = document.querySelectorAll("#btnEliminar");
//     button.forEach((btn) => {
//         btn.addEventListener("click", () => {
//             eliminarusuario(btn.getAttribute("data-id"));
//         })
//     })
// }


// async function eliminarusuario(codigo) {
//     console.log(codigo)
//     const ola = await fetch(`http://127.0.0.1:3000/Registros/${codigo}` ,{
//         method: "DELETE"
//     })
//     obtener();
// }
// obtener()



/**
 * Lista los registros
 */
// Función para obtener y listar los datos
const bodyTable = document.getElementById("bodyTable");
let fragmento = document.createDocumentFragment();

async function obtener() {
    const request = await fetch("http://127.0.0.1:3000/Registros");
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
        btnDelete.classList.add('boton_eliminar');
        btnDelete.textContent = "Eliminar";
        btnDelete.setAttribute("data-id", elemento.id);
        btnDelete.setAttribute("codigo", "btnEliminar");

        let form = document.createElement("form");
        form.appendChild(btnDelete);

        let btnModify = document.createElement("button");

        td.textContent = elemento.id;
        td2.textContent = elemento.entrada;
        td3.textContent = elemento.placa;
        td4.textContent = elemento.salida;
        td5.textContent = elemento.acciones;
        td6.appendChild(form);

        tr.appendChild(td);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);

        fragmento.appendChild(tr);
    });
    bodyTable.appendChild(fragmento);

    let buttons = document.querySelectorAll("[codigo='btnEliminar']");
    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
            eliminarusuario(btn.getAttribute("data-id"));
        });
    });
}

async function eliminarusuario(codigo) {
    console.log(codigo);
    const response = await fetch(`http://127.0.0.1:3000/Registros/${codigo}`, {
        method: "DELETE"
    });
    obtener();
}

obtener();

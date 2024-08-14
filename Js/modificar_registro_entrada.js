let id = localStorage.getItem("id");
console.log(id);

const $boton = document.querySelector(".boton");

async function modificarRegistro(id) {
    console.log(id);
    const response = await fetch(`http://127.0.0.1:3000/Registros`, {
        method: "GET",
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((json) =>  {
        id.value = json.id
        entrada.value = json.entrada,
        placa.value = json.placa,
        salida.value = json.salida
    });
}
modificarRegistro(id);

function modificar() {
    const datos = {
        id: id.value,
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
    .then((json) => console.log(json));

    location.href = "registro_entrada.html";
}

$boton.addEventListener("click", modificar);



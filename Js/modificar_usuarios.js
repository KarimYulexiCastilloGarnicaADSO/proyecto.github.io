let id = localStorage.getItem("id");
console.log(id)

const $boton = document.querySelector(".boton")

async function modificarusuario(id) {
    console.log(id);
    const response = await fetch(`http://127.0.0.1:3000/Registro_usuarios_vehiculos/${id}`, {
        method: "GET",
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((json) =>  {
        documento.value = json.documento,
        nombre.value = json.nombre,
        apellido.value = json.apellido,
        telefono.value = json.telefono,
        tp_usuario.value = json.tp_usuario,
        tp_jornada.value = json.tp_jornada,
        placa.value = json.placa
    });
    // obtener();
}
modificarusuario(id);


function Mudicar() {
    
    const datos={
        documento: documento.value,
        nombre: nombre.value ,
        apellido: apellido.value,
        telefono: telefono.value,
        tp_usuario: tp_usuario.value,
        tp_jornada: tp_jornada.value,
        placa: placa.value
    }

    fetch(`http://127.0.0.1:3000/Registro_usuarios_vehiculos/${id}`, {
        method: 'PUT',
        body: JSON.stringify(datos),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
    
    location.href = "registro_usuarios.html"

}
$boton.addEventListener("click", Mudicar)
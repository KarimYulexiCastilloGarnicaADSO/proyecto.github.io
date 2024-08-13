async function enviar(datos) {
    fetch('http://127.0.0.1:3000/Registro_usuarios_vehiculos', {
        method: 'POST',
        body: JSON.stringify(datos),
        headers: {
            'Content-type': 'application/json; charsert=UTF-8',
        },
    })
    .then( (response) => response.json() )
    .then((json) => {
        documento.value = "";
        nombre.value = "";
        apellido.value = "";
        telefono.value = "";
        tp_usuario.value = "";
        tp_jornada.value = "";
    });
}
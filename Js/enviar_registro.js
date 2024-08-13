/**ENVIAR REGISTROS DE ENTRADA */
async function enviar(datos) {
    fetch('http://127.0.0.1:3000/Registros', {
        method: 'POST',
        body: JSON.stringify(datos),
        headers: {
            'Content-type': 'application/json; charsert=UTF-8',
        },
    })
    .then( (response) => response.json() )
    .then((json) => {
        codigo.value = "";
        fecha2.value = "";
        placa2.value = "";
        fecha.value = "";
    });
}
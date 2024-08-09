/**Enviar datos del vehiculo al server */

async function enviar(datos) {
    fetch('http://127.0.0.1:3000/vehiculos', {
        method: 'POST',
        body: JSON.stringify(datos),
        headers: {
            'Content-type': 'application/json; charsert=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((json) => {
        placa.value = "";
        marca.value = "";
        select.value = "";
        modelo.value = "";
        color.value = "";   
    });
}
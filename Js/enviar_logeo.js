async function enviar(datos) {
    fetch('http://127.0.0.1:3000/Usuarios', {
        method: 'POST',
        body: JSON.stringify(datos),
        headers: {
            'Content-type': 'application/json; charsert=UTF-8',
        },
    })
    .then( (response) => response.json() )
    .then((json) => console.log(json))
}
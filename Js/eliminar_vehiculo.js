async function eliminarvehiculo(placa) {
    console.log(placa);
    const ola = await fetch(`http://127.0.0.1:3000/vehiculos/${placa}`, {
        method: "DELETE"
    })
    obtener()
}
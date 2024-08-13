async function eliminarvehiculo(id) {
    console.log(id);
    const response = await fetch(`http://127.0.0.1:3000/Registro_usuarios_vehiculos/${id}`, {
        method: "DELETE"
    });
    obtener();
    alert("Registro exitosamente eliminado")
}
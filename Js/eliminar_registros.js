/**ELIMINAR REGISTROS DE ENTRADA */
async function eliminarusuario(codigo) {
    console.log(codigo);
    const response = await fetch(`http://127.0.0.1:3000/Registros/${codigo}`, {
        method: "DELETE"
    });
    obtener();
    alert("Registro eliminado exitosamente")
}
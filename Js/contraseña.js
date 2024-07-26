const Contraseña = (event, elemento) => {
    
    if (elemento.value.trim() === "") {
        elemento.classList.remove("correcto");
        elemento.classList.add("error");
    } else {
        elemento.classList.remove("error");
        elemento.classList.add("correcto");
    }
}

export default Contraseña;

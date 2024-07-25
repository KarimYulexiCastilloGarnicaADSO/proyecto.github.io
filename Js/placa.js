const Placa = (element, elemento) => {

    if (element.value === "") {
        elemento.classList.add("error");
        elemento.classList.remove("correcto");
    } else {
        elemento.classList.remove("correcto")
        elemento.classList.add("error")
    }
}

export default Placa
const valid = (event, form) => {
    event.preventDefault()
    const busqueda = document.querySelectorAll(form)
    let bandera = true
    busqueda.forEach(element => {
        if (element.value == "") {
            element.classList.add("error")
            bandera = false
        }
    });
    return bandera
}

export default valid
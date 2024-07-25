const Marca =  (event, element) => {

    let regex = /^[A-Za-zAà-ÿ\s]+$/

    if (element.value === "") {
        element.classList.remove("correcto")
        element.classList.add("error")
    }else{
        if (!regex.test(event.key)) {
            event.preventDefault()
            element.classList.remove("correcto")
            element.classList.add("error")
        }
        else{
            element.classList.add("correcto")
            element.classList.remove("error")
        }
    }
}

export default Marca
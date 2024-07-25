const Modelo = (event, element) => {

    let rege = /^[0-9]$/;

    if(element.value.length >= 4){
        event.preventDefault();
    }
    else if (!rege.test(event.key)){
        element.classList.add("error");
        element.classList.remove("correcto");
    }
    else{
        element.classList.add("correcto");
        element.classList.remove("error");
    }
}

export default Modelo
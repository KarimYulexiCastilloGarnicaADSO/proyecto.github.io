const select = document.querySelector('#tipo')
console.log(select)

async function consultar() {
    const data = await fetch("http://127.0.0.1:3000/tipos_vehiculo")
    const tpos = await data.json()

    tpos.forEach(element => {
        let option = document.createElement('option')
        select.appendChild(option)
        option.innerText = element.nombre
    });
}
consultar()
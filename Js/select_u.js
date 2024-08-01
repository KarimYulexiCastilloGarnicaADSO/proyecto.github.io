const select = document.querySelector('#tp_usuario')
console.log(select)

async function consultar() {
    const data = await fetch("http://127.0.0.1:3000/tp_usuario")
    const tpos = await data.json()

    tpos.forEach(element => {
        let option = document.createElement('option')
        select.appendChild(option)
        option.innerText = element.nombre
    });
}
consultar()
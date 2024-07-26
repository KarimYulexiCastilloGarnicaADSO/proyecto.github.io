/**
 * Buscamos por id en el HTML
 */
const select2 = document.querySelector('.combo > select')
console.log(select2)

/**
 * Carga los tipos de vehiculo
 */
async function consultar() {
    const data = await fetch("http://127.0.0.1:3000/Filtro1")
    const tpos = await data.json()

    tpos.forEach(element => {
        let option = document.createElement('option')
        select2.appendChild(option)
        option.innerText = element.nombre
    });
}
consultar()






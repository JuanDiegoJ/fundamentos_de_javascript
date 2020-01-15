const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true}

function obtenerPersonaje(id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    /* El método fail se ejecuta al momento de que se detecte un error */
    $.get(url, opts, callback)
    .fail(() => {
        console.log(`Sucedió un error. 
        No se pudo obtener el personaje ${id}`)
    })
}

obtenerPersonaje(1, function (Personaje) {
    console.log(`Hola, yo soy ${Personaje.name}`)

    obtenerPersonaje(2, function (Personaje){
        console.log(`Hola, yo soy ${Personaje.name}`)

        obtenerPersonaje(3, function (Personaje){
            console.log(`Hola, yo soy ${Personaje.name}`)      
        })       
    })
})
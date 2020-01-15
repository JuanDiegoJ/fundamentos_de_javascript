const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true}

const onPeopleResponse = function (persona) {
    console.log(`Hola, yo soy ${persona.name}`)
}

function obtenerPersonaje(id) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, opts, onPeopleResponse)
}

/* JS no sigue el orden del código, esto es lo que demuestra el asincronismo
   Se sabe que se hace el request pero no se sabe el orden de llegada del request */


obtenerPersonaje(1)
obtenerPersonaje(2)
obtenerPersonaje(3)
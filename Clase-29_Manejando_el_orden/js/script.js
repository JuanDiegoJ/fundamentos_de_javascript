const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true}

function obtenerPersonaje(id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, opts, function (persona) {
        console.log(`Hola, yo soy ${persona.name}`)

        if (callback) {
            callback()
        }
    })
}

/* JS no sigue el orden del código, esto es lo que demuestra el asincronismo
   Se sabe que se hace el request pero no se sabe el orden de llegada del request */

/* Es importante colocar el 2° parametro como función para que este no se ejecute
al momento de ejecutar la primera función

Es importante que la función del segundo parametro sea una función que no
se esté ejecutando

Los request se hacen en serie pero no en paralelo*/
obtenerPersonaje(1, function () {
    obtenerPersonaje(2, function (){
        obtenerPersonaje(3)       
    })
})
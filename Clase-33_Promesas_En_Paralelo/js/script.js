const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true}

function obtenerPersonaje(id) {
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $.get(url, opts, function (data) {
            resolve(data)
        }).fail(() => reject(id))
    })

}
onError = id => console.log(`Sucedió un error`)

function obtenerPersonajes(){
    var ids = [1, 2, 3, 4, 5, 6, 7]
    var promesas = ids.map(id => obtenerPersonaje(id))

    Promise
        .all(promesas)
        .then(personajes => console.log(personajes))
        .catch(onError)
}

obtenerPersonajes
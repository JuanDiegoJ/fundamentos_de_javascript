var juan = {
    nombre: 'Juan',
    apellido: 'Jáuregui',
    edad: 22,
    cantidadDeLibros: 25
}

var lina = {
    nombre: 'Lina',
    apellido: 'Beltrán',
    edad: 28,
    cantidadDeLibros: 210
}

var luis = {
    nombre: 'Luis',
    apellido: 'Martinez',
    edad: 30,    
    cantidadDeLibros: 654

}

var personas = [juan, lina, luis]

/* var acum = 0

for (var i = 0; i<=personas.length-1; i++){
    acum = acum + personas[i].cantidadDeLibros
} */

const reducer = (acum, {cantidadDeLibros}) => acum + cantidadDeLibros

//Necesita tener una función y un acumulador
var totalDeLibros = personas.reduce(reducer, 0)

console.log(`${totalDeLibros}`)
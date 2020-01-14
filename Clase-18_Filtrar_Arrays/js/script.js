var juan = {
    nombre: 'Juan',
    apellido: 'Jáuregui',
    edad: 22
}

var lina = {
    nombre: 'Lina',
    apellido: 'Beltrán',
    edad: 28
}

var luis = {
    nombre: 'Luis',
    apellido: 'Martinez',
    edad: 30
}

const esMayor = ({edad}) => edad > 25
const esMenor = ({edad}) => edad <= 25


var personas = [juan, lina, luis]

var personasMayores = personas.filter(esMayor)
var personasMenores = personas.filter(esMenor)
/* var personasMayores = personas.filter(function (persona){
    return persona.edad > 25
}) */

console.log(personasMayores)
console.log(personasMenores)
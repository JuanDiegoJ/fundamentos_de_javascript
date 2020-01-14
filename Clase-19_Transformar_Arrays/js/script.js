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
/* const pasarEdadSemanas = persona => {
    persona.edad *= 52
    return persona
} */


/* const pasarEdadSemanas = persona => {
    return {
        ... persona,
        edad: persona.edad * 52
    }
} */
const pasarEdadSemanas = persona => ({
        ... persona,
        edad: persona.edad * 52
})

var personas = [juan, lina, luis]

var personasEdad = personas.map(pasarEdadSemanas)

console.log(personasEdad)
const juan = {
    nombre: 'Juan',
    apellido: 'Jáuregui',
    edad: 22
}

const cumpleanos = persona => persona.edad++
const cumpleanosInmutable = persona => ({
    ...persona,
    edad: persona.edad +1
})
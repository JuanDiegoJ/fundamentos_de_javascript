var juan = {
    nombre: 'Juan',
    apellido: 'Jáuregui',
    edad: 22
}

var fer = {
    nombre: 'Fernanda',
    apellido: 'Córdoba',
    edad: 20
}

function cumpleanos(persona) {
    persona.edad += 1 
}

function cumpleanos_2(edad) {
    edad += 1 
}

function cumpleanos_3(persona) {
    /* Retorna un objeto nuevo copiando todos los datos
    del objeto del parametro, se le pueden agregar atributos */
    return{
        ...persona,
        edad: persona.edad + 1
    } 
}

var personaMasVieja = cumpleanos_3(juan)
console.log(personaMasVieja)

console.log(juan)
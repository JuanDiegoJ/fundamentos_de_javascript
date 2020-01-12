
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

//Primera forma de mostrar los datos de un objeto
function imprimirNombre(nombre){
    nombre = nombre.toUpperCase()
    console.log(nombre)
}

imprimirNombre(juan.nombre)
imprimirNombre(fer.nombre)

//Segunda forma de imprimir el nombre
function imprimirNombreEnMinusculas(persona){
    nombre= persona.nombre.toLowerCase()
    console.log(nombre)
}

imprimirNombreEnMinusculas(juan)
imprimirNombreEnMinusculas(fer)

//Tercera forma de definir el método

function imprimirNombreEnMinusculas_2(persona){
    console.log(persona.nombre.toLowerCase())
}

imprimirNombreEnMinusculas_2(juan)
imprimirNombreEnMinusculas_2(fer)

//Cuarta forma de definir el método

function imprimirNombreEnMinusculas_3({ nombre }){
    console.log(nombre.toLowerCase())
}

imprimirNombreEnMinusculas_3(juan)
imprimirNombreEnMinusculas_3(fer)
imprimirNombreEnMinusculas_3({ nombre: 'Pepito'})
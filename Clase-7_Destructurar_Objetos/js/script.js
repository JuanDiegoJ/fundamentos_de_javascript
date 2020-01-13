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

function imprimirNombreEnMinusculas_3(persona){
    //var nombre = persona.nombre
    var { nombre } = persona
    console.log(nombre.toLowerCase())
}

imprimirNombreEnMinusculas_3(juan)
imprimirNombreEnMinusculas_3(fer)


//RETO 2
function imprimirNombreYEdad({nombre, edad}) {
    console.log(`Hola, me llamo ${nombre} y tengo ${edad} años`)
}

imprimirNombreYEdad(juan)
imprimirNombreYEdad(fer)
//Variable Global
var nombre = 'Juan'

function imprimirNombreEnMayusculas (n) {
    //
    n = n.toUpperCase()
    console.log(n)
}
function imprimirNombreEnMayusculas_2 (nombre) {
    //Para referirse a la variable global de nombre
    //Se usa window.nombre
    nombre = nombre.toLowerCase()
    console.log(nombre)
}

imprimirNombreEnMayusculas(nombre)
imprimirNombreEnMayusculas_2(nombre)
console.log(nombre)
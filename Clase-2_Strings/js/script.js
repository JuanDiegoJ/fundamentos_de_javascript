var nombre = 'Juan Diego', apellido = 'Jáuregui'

var nombreEnMayusculas = nombre.toUpperCase();
var apellidoEnMinusculas = apellido.toLowerCase();

var nombreCompleto = `${nombre} ${apellido}`
console.log(nombreCompleto)
var str = nombreCompleto.substr(1, 3)
console.log(str)

/* DESAFIO: Mostrarle al usuario cuál es la última letra del nombre */

var name = prompt('Ingrese el nombre del usuario')
var nameModifiqued = name.charAt(name.length - 1)
console.log (nameModifiqued)
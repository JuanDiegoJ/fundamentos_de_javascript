var x = 4, y = '4'
var comparacion = (x===y)
console.log(comparacion)

var juan = {
    nombre: 'Juan'
}

var otraPersona={
    nombre: 'Juan'
}

console.log(juan == juanito)
console.log(juan === juanito)

var juanito = juan

console.log(juan == juanito)
console.log(juan === juanito)

var otraPersona_2 = {
    ...juan
}

console.log(juan==otraPersona_2)
console.log(juan===otraPersona_2)
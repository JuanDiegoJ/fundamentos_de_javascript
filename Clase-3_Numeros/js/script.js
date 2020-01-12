//Definir variables con números
var edad=27
console.log(edad)

//Tipos de incrementos
edad=edad+1
console.log(edad)
edad += 1
console.log(edad)

//Tipos de decrementos
edad=edad-1
console.log(edad)
edad -= 1
console.log(edad)

//Multiplicación y decimales
var vino = 200.3
total = 200.3 * 3
//Forma de redondear el número
total = 200.3 * 100 * 3 / 100
total = Math.round(200.1251233 * 100 * 3) / 100
//Forma de redondear decimales
var totalStr = total.toFixed(2)
var total2 = parseFloat(totalStr)
console.log(total2)

//División
var pizza = 8
var personas = 2
var totalDePorcionesPorPersona = pizza / personas
console.log(totalDePorcionesPorPersona)
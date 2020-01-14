var juan = {
    nombre: 'Juan',
    apellido: 'Jáuregui',
    edad: 22,
    peso: 53
}

console.log(`Al inicio del año ${juan.nombre} pesa ${juan.peso}Kg`)

const INCREMENTO_PESO = 0.2
const DIAS_DEL_AÑO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazarPeso = persona => persona.peso -= INCREMENTO_PESO
// Parte inicial; Parte de la condición; Parte del incremento
for (var i = 1; i <= DIAS_DEL_AÑO; i++) {
    var random = Math.random()

    if (random < 0.25) {
        aumentarDePeso(juan)
    } else if (random < 0.5){
        adelgazarPeso(juan)
    }
}

console.log(`Al final del años ${juan.nombre} pesa ${juan.peso.toFixed(2)} Kg`)
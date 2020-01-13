var juan = {
    nombre: 'Juan',
    apellido: 'Jáuregui',
    edad: 22,
    peso: 53
}

console.log(`Al inicio del año ${juan.nombre} pesa ${juan.peso}Kg`)

const INCREMENTO_PESO = 0.3
const DIAS_DEL_AÑO = 365
const META = juan.peso - 3
var dias = 0

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazarPeso = persona => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

while ( juan.peso > META ) {
    //debugger
    if (comeMucho()) {
        aumentarDePeso(juan)
    } 
    
    if (realizaDeporte()){
        adelgazarPeso(juan)
    }
    dias += 1
}


console.log(`pasaron ${dias} dias para bajar de peso 3kg ${juan.peso}`)
var juan = {
    nombre: 'Juan',
    apellido: 'Jáuregui',
    edad: 20
}

const MAYORIA_DE_EDAD = 18

//Función anoníma, no tiene un nombre
/* const esMayorDeEdad = function ({edad}){
    return edad >= MAYORIA_DE_EDAD
} */
//Estructura de un ArrowFunction
const esMayorDeEdad = ({edad}) => edad >= MAYORIA_DE_EDAD
const esMenorDeEdad = ({edad}) => edad < MAYORIA_DE_EDAD

function imprimirSiEsMayorDeEdad(persona){
    if (esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`)
    } 
    
    else {
        console.log(`${persona.nombre} no es mayor de edad`)
    } 
}

imprimirSiEsMayorDeEdad(juan)

function permitirAcceso(persona){
    if (!esMayorDeEdad(persona)) {
        console.log('ACCESO DENEGADO')
    }
}

function imprimirSiEsMenorDeEdad(persona){
    if (esMenorDeEdad(persona)){
        console.log(`${persona.nombre} es menor de edad`)
    } 
    
    else {
        console.log(`${persona.nombre} es mayor de edad`)
    } 
}

imprimirSiEsMenorDeEdad(juan)
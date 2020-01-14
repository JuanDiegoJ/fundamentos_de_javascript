var juan = {
    nombre: 'Juan',
    apellido: 'Jáuregui',
    edad: 22,
    ingeniero: false,
    cocinero: false,
    cantante: false,
    dj: false,
    guitarrista: false,
    drone: true
}

function imprimirProfesiones(persona){
    console.log(`${persona.nombre} es:`)
    if (persona.ingeniero === true) {
        console.log('Ingeniero')
    }else{
        console.log('No es ingeniero')
    }
    if (persona.cocinero){
        console.log('Cocinero')
    }
    if (persona.cantante){
        console.log('Cantante')
    }
    if (persona.dj){
        console.log('DJ')
    }
    if (persona.guitarrista){
        console.log('Guitarrista')
    }
    if (persona.drone){
        console.log('Piloto de drone')
    }
}

imprimirProfesiones(juan)

function imprimirSiEsMayorDeEdad({nombre, edad}){
    if (edad >= 18){
        console.log(`${nombre} es mayor de edad`)
    } else {
        console.log(`${nombre} no es mayor de edad`)
    } 
}

imprimirSiEsMayorDeEdad(juan)
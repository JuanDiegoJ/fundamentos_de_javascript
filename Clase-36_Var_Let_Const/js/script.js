var juan = {
    nombre: 'Juan',
    apellido: 'Jáuregui',
    edad: 22
}

function esMayorDeEdad(persona){
    if (persona.edad > 18){
        var mensaje = 'Es mayor de edad'
    }else{
        var mensaje = 'Es menor de edad'
    }
}

esMayorDeEdad(juan)
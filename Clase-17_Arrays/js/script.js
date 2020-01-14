var juan = {
    nombre: 'Juan',
    apellido: 'Jáuregui',
    edad: 22
}

var lina = {
    nombre: 'Lina',
    apellido: 'Beltrán',
    edad: 28
}

var luis = {
    nombre: 'Luis',
    apellido: 'Martinez',
    edad: 30
}

var personas = [juan, lina, luis]

for (i = 0; i<=personas.length-1; i++) {
    console.log(`${personas[i].nombre} -- ${personas[i].edad}`)
}
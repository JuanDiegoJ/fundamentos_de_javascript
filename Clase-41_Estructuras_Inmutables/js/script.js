const juan = {
    nombre: 'Juan',
    apellido: 'Jáuregui',
    edad: 22
}
const fer = {
    nombre: 'Fernanda',
    apellido: 'Córdoba',
    edad: 20
}

function saludar(saludo = 'Hola'){
    console.log(`${saludo}, mi nombre es ${this.nombre}`)
}

/* const saludarAJuan = saludar.bind(juan)
const saludarAFer = saludar.bind(fer)

setTimeout(saludar.bind(sacha, 'Hola che'), 1000)

saludar.call(sacha, 'Hola che') */

saludar.apply(sacha, ['Hola che'])
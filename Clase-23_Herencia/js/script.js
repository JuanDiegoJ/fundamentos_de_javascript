function heredaDe(prototipoHijo, prototipoPadre){
    var fn = function () {}
    fn.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new fn
    prototipoHijo.prototype.constructor = prototipoHijo
}

function Persona(nombre, apellido, altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = function (){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

const ALTURA_MIN = 1.80

//No sirve al ser un Arrow Fuction debido a que el this se lo asigna a la variable global
Persona.prototype.soyAlto = function () {
    return this.altura >= ALTURA_MIN}

function Desarrollador(nombre, apellido) {
    this.nombre = nombre
    this.apellido = apellido
}

heredaDe(Desarrollador, Persona)

Desarrollador.prototype.saludar = function(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
}

/* var juan = new Persona('Juan', 'Jáuregui', 1.74)
var liliana = new Persona('Liliana', ':V', 1.60)
var luis = new Persona('Luis', 'Peña', 1.85) */
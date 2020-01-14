function heredaDe(prototipoHijo, prototipoPadre){
    var fn = function () {}
    fn.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new fn
    prototipoHijo.prototype.constructor = prototipoHijo
}

const ALTURA_MIN = 1.80

class Persona {
    constructor(nombre, apellido, altura){
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    } 

    saludar(){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
    }

    soyAlto(){
        return this.altura > ALTURA_MIN
    }

}

class Desarrollador extends Persona{
    constructor(nombre, apellido, altura) {
        //Se debe llamar al constructor de la clase padre
        super(nombre, apellido,altura)
    }

    saludar(){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
    }
}


/* var juan = new Persona('Juan', 'Jáuregui', 1.74)
var liliana = new Persona('Liliana', ':V', 1.60)
var luis = new Persona('Luis', 'Peña', 1.85) */
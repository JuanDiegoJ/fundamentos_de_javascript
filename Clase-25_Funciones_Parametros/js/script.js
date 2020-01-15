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

    saludar(responderSaludo){
        var { nombre, apellido } = this
        console.log(`Hola, me llamo ${nombre} ${apellido}`)
        if(responderSaludo){
            responderSaludo(nombre, apellido, false)
        }
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

    saludar(fn){
        var { nombre, apellido } = this
        console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarrollador`)
        if(fn){
            fn(nombre, apellido, true)
        }
    }
}

function responderSaludo(nombre, apellido, esDev){
    console.log(`Buen día ${nombre} ${apellido}`)
    if (esDev) {
        console.log(`Ah mirá, no sabía que eras desarrollador/a`)
    }
}

var juan = new Persona('Juan', 'Jáuregui', 1.74)
var liliana = new Persona('Liliana', ':V', 1.60)
var luis = new Desarrollador('Luis', 'Peña', 1.85)

juan.saludar()
liliana.saludar(responderSaludo)
luis.saludar(responderSaludo)

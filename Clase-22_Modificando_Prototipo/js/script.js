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
Persona.prototype.soyAlto = () => this.altura >= ALTURA_MIN

var juan = new Persona('Juan', 'Jáuregui', 1.74)
var liliana = new Persona('Liliana', ':V', 1.60)
var luis = new Persona('Luis', 'Peña', 1.85)
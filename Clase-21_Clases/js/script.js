//Esta es la función que se va a ejecutar cuando se cree
//una nueva Persona, es el constructor de la Clase o Prototipo
function Persona(nombre, apellido, altura){
    /* Para guardar dentro del objeto que se construye en memoria
       se puede hacer referencia de la Keyword 'this(Hace referencia al
       objeto que se acaba de construir)'*/
    //Atributo que se va a crear = Variable que se recibe por parámetro  
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
    /* Implicitamente JS retorna this cuando se llama a la función 
       con la palabra new, si no se usa la palabra new es como realizar:
       var obj = {}
       obj.nombre = nombre
       obj.apellido = apellido
       return obj
       Esto no se hace
       */
}

Persona.prototype.saludar = function (){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

const ALTURA_MIN = 1.80

Persona.prototype.soyAlto = function (){
    if (this.altura >= ALTURA_MIN){
        console.log(`Soy alto`)
    } else
        console.log(`Soy bajo`)
}

//La palabra new hace que se cree un nuevo objeto que se le asigna
//como prototipo el prototipo que se indique después
var juan = new Persona('Juan', 'Jáuregui', 1.74)
var liliana = new Persona('Liliana', ':V', 1.60)
var luis = new Persona('Luis', 'Peña', 1.85)

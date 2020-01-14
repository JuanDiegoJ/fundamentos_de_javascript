var signo = prompt('¿Cuál es tu signo?')


switch (signo){
    case 'acuario':
        console.log('Eres acuario')
        break
    case 'picis':
        console.log('Eres picis')
        break
    case 'cancer':
        console.log('Eres cancer')
        break
    case 'capricornio':
        console.log('Eres capricornio')
        break
    case 'geminis':
    case 'géminis':
        console.log('Eres geminis')
        break
    default:
        console.log(`${signo} no es un signo zodiacal válido`)
}
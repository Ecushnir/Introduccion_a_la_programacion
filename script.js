const nombre= "Magic: The Gathering"
// a "const" no se le puede reasignar
// a let se le puede reasignar
let edad= 29
const saludo= `Me gusta jugar mucho jugar  ${nombre}`
console.log (saludo)

// condicionales para abrir condiciones if () y luego se usan llaves{dejar un parrafo}

// operadores de asignacion (=, *=, +=, -=), aritmeticos mas menos div multip, comparacion (comparacion entre numeros y letras, also mayus y minusc: >, <, >=, <=)

console.log ("1"==1)
console.log ("1"===1)

// Javascript diferencia valores entre tipos, en este ejemplo un uno es un numero pero en el otro es un string
// al usar Number queda forzado el resultado de la expresion que de como resultado a numero

// si quiero definir una lista ej: const.lista [1,"hola,null"]
// los arrays van entre corchetes
// una de las funciones en comune de los array es "length"
// la diferencia entre la lista y la lista.length es el resultado que muestra
// una es el contenido, y la otra la cantidad de items que contiene.

const lista=[1,"Hola Homerin", null].length
console.log(lista)



// una funcion es un bloque de funciones reutilizables
// vamos a declarar un parametro (nombre, idioma, etc)

function saludar(nombre){
console.log(`Hola ${nombre}`)
return`Hola ${nombre}`
}

const miSaludo=saludar(nombre)
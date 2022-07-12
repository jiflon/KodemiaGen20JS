// Ejercicio 1 
// * Función que reciba una palabra
// * Retorna la palabra invertida
// * La reversa del string lo haremos usando métodos de array
// *  hint :  a un string no podemos aplicarle métodos array pero hay métodos de string que nos devuelve un array
// *
// * reverseStr('hola mundo')
// * -> 'odnum aloh'

let usuario = prompt(["Ingreas un nombre o palabra y la devolvere al reves, !quieres intentarlo"]);
let reves = [];

usuario.map(element => {
    reves.push( element[i].reverse() ) 
}

);

console.log(reves)

// Ejercicio 2 
// * Dado el siguiente arreglo de ciudades
// *   ['méXicO', 'PErÚ', 'eSpAña', 'inGlaterrA']
// * Generar una función que capitalize cada elemento del array
// * => Se puede resolver con .forEach() o .map()
let city = ['méXicO', 'PErÚ', 'eSpAña', 'inGlaterrA'];
let capitalize = [];

city.forEach(element => {
    
});

// Ejercicio 3
// * Dado un arreglo con nombres de personas,
// * Función que devuelva un arreglo con los nombres de las personas que empiezan con vocales y además capitalizados
// *
// * onlyNamesVowels( ['jorge','ana','ivan','sergio','oscar' ] )
// * -> ['Ana','Ivan','Oscar']
// *
// * => Se puede resolver con .forEach() o .filter()

let nams = ['jorge','ana','ivan','sergio','oscar' ];
// let vocals = [];

names.filter((element) =>{ 
    //condicion
    if(element ===  "a,e,i,o,u"){
        return element.names[0] == "aeiou"
    }})

    console.log(element)
// let vocals = [];




let name = ['jorge','ana','ivan','sergio','oscar' ];

name.filter((element) =>{ 
    //condicion
    let vocals = name[i];
    if(vocals ==  "a" ||
       vocals == "e" || 
       vocals == "i" ||
       vocals == "o" ||
       vocals == "u"){
        return vocals
    }})

    console.log(name); console.log(vocals)


    // 1. Imprimir solo vocales 

// let text = 'FEEEErdinand'

// for(let i = 0; i < text.length; i++){
//   let char = text[i].toLowerCase()

//   if(
//     char == 'a' ||
//     char == 'e' ||
//     char == 'i' ||
//     char == 'o' ||
//     char == 'u'
//   ){
//     console.log(char)
//   }
// }

// // 2.

// // 3. 
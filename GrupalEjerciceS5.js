//  * Practica grupal 1.1-----
//  * Imprimir todos los números pares que existen entre 1 y ese numero
//  * p.ej. 12 -> 2,4,6,8,10,12
 
// Ciclo for 
const num = parseInt( prompt('Escribe un numero') )
for(i = 1; i <= num; i++){
    if(i % 2 === 0){
        console.log(i)
    }
}
        
// ___________________________________________________

// Practica grupal1.2 // *Pedir al usuario una oración
// *Imprimir un string con todas las vocales
// *Imprimir un string con todas las consonantes
// *p.ej. "Hola mundo"
// *Consonantes -> hlmnd
// *Vocales -> oauo
// *

// Ciclo For 
const oratiOn = prompt('Escribe una frase').toLowerCase()
let vocal = ''
let consonantes = ''
for(let i = 0; i < oration.length; i++ ){

if(oration[i] !== ' ' && oration[i] !== ',' && oration[i] !== '.'){
    if(
        oration[i] == 'a' ||
        oration[i] == 'e' ||
        oration[i] == 'i' ||
        oration[i] == 'o' ||
        oration[i] == 'u' ||
        oration[i] == 'á' ||
        oration[i] == 'é' ||
        oration[i] == 'í' ||
        oration[i] == 'ó' ||
        oration[i] == 'ú'
    ){
        vocal += oration[i]
    } else {
        consonantes += oration[i]
    }
}
}
console.log(vocal)
console.log(consonantes)

// ______________________________________________________

// Practica grupal 1.3 // 
// Pedir el usuario una palabra
// Invertir esa palabra e imprimirla en consola
// p.ej. 'Hola' -> 'aloh'
    
    // Ciclo For 
const user = window.prompt('Escribe una palabra')
let reversed = ''
let finCad = user.length - 1
    
for( let i = finCad; i >= 0; i-- ){
    reversed += user[i]
}
    
console.log(reversed)

///fiN
    
    
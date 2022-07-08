//ciclos --- Loops

//Iteracion -> repetir una cosa una y otra vez (codigo)

//For loops
//Sintaxis

for (elemento1 ; elemento2 ; elemento3){
    //codigo a iterar
    }
    
    // elemento1 -> Base de condicion a evaluar -> variable numerica -> esta se ejecuta q sola vez
    
    // elemento2 -> Evaluacion, esta se ejecuta en cada iteracion
    
    // elemento3 -> Incremento o decremento  -> Se ejecuta con cada iteracion
    
    for(let i = 0 ; i < 3 ; (i++) ){
        console.log("Esto es una iteracion")
    }
    
    // Ciclos  -> Loops 

// Iteracion -> Repetir una cosa una y otra vez (En este caso codigo), esto basado en una condicion 

// For loops
//   Sintaxis 
//   for (elemento1 ; elemento2 ; elemento3) {
//     // Codigo a iterar 
//   }

// elemento1 -> Base de condicion a evaluar -> variable numerica -> Se ejecuta una sola vez 
// elemento2 -> Evaluacion, esta se ejecuta en cada iteracion
// elemento3 -> Incremento o decremento -> Se ejecuta con cada iteracion

// let text = 'Hola Koders!'
// let fin = text.length

// for(let i = 0 ; i < text.length ; i++)  {
//   console.log(text[i]);
// }

// // Multiplicacion en for 
// for(let i = 0 ; i <= 10 ; i++)  {
//   console.log(`5 X ${i} = ${i * 5}`)
// }
// -----------------------------------

// While loop 
// while(elemento1)  {
//   // Codigo a iterar
//   // ?elemento2 incremente o decremeto 
// }

// elemento1 -> Condicion a evaluar -> Se ejecuta con cada iteracion 
// Elemento2 -> incremento o decremente -> opcional pero recomendado para no entrar unm overflow 

// let j = 0 
// // Multiplicacion en while 
// while(j <= 10 )  {
//   console.log(`5 X ${j} = ${j * 5}`)
//   j++
// }

// -------------------------------
// Do while 

// Do{
//   // Codigo a iterar 
//   //? elemento2 incremento o decremnte 
// } while(Elemento1)

// elemento1 -> evalucion booleana -> se ejecuta al final de cada iteracion
// Elemento2 -> incremento o decremente -> opcional pero recomendado para no entrar unm overflow 

// // Multiplicacion en do while 
// let k = 0
// do{
//   console.log(`5 X ${k} = ${k * 5}`)
//   k++
// } 
// while(k <= 10)



// ------------------------
// Practicas en clase 


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
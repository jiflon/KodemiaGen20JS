// * Ejercicio 1
// * Escribir un programa de arroje la suma de los múltiplos de 3, 5 o 7 que hay entre 1 y 100
// * Resolver con For, While y do While

let result = 0;

for(let i = 1; i<= 100; i++)
{
    if (i % 3 == 0|| i % 5 == 0 || i % 7 == 0)
    {
        result += i;
    }
}
console.log(`Suma con for= ${result}`);

/*
* Ejercicio 2
* Pedir el usuario 1 número entre 1 y 100
* sumar todos los números entre el 1 y este número
* Mandar un alert con el  total
* Resolver con For, While y do While
* p.ej. 5
* ->  15
*/

let num = 0;
let sum = 0;

while(num < 1 || num > 100)
{
   num = parseInt(prompt("Ingrese un número del 10 al 100"))
}

for(let i = 1; i <= num; i++)
{
    sum += i;
}
console.log(`Suma con for= ${sum}`);
 
/**
* Ejercicio 3
* pedir una oracion al usuario
* Contar las letras "a" y "e" y espacios,
* Resolver con For, While y do While
*
* p.ej. 'hola kodErs'
* ->  A -> 1
* ->  E -> 1
* ->  Espacios -> 1
*/

let oration = prompt("Favor de escribir una oracion");
let low = oration.toLowerCase();
let a = 0;
let b = 0;
let c = 0;

for(let i = 0; i < low.length; i++){
    if(low[i] === 'a'){ 
        a++ 
    }
    else if(low[i] === 'e'){
         b++ 
    }
    else if(low[i] === ' '){ 
        c++ 
    } 
}
console.log(`Ciclo for \nA -> ${a}\nE -> ${b}\nEspacios -> ${c}`);

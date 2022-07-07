//--------Ejercicio 1 de clase3----------------------------
let numA = prompt("Ingresa un numero A");
let numB = prompt("Ingresa un numero B");
let numC = prompt("Ingresa un numero C");
if (numA > numB && numA > numC){
 console.log("A es mayor que B y c")
}  else if  (numB > numA && numB > numC ){
 console.log("B es mayor que A y C")
} else if ( numC > numA && numC > numB)
{
 console.log("C es mayor que A y B")
}
else{console.error("Numeros iguales")}
//------------------Ejercicio 2 clase3---------------------
// Practica 2
// Identificar el numero mayor de dos
// Condicion - Usar el operador ternary
let N = 5;
let M = 7;
let result = N >= M ? "si" : "no"
console.log(result)
//------------------Ejercicio 3 Clase3-----------------------------------
// Practica 3
// Identificar el numero mayor de tres
// Condicion usando el operador ternary
// Hint: Anidar
let n1 = prompt("Ingresa un numero n1");
let n2 = prompt("Ingresa un numero n2");
let n3 = prompt("Ingresa un numero n3");
let resultado =
n1 > n2 && n1 > n3 ? "Es mayor n1" :
n2 > n1 && n2 > n3 ? " Es mayor n2" :
n3 > n1 && n3 > n2 ? "n3 es mayor" : "numeros son iguales"
console.log(resultado)
// ------------------Practica 4 Clase3 ----------------------------------
// Pedir 2 numeros al usuario
// Si a mayor que  b dividir a entre b
// Si a menor que  b dividir sumar a más b
// Si a  es igual b multiplicar ambos números
// Imprimir el resultado en consola
let valor1 = prompt("ingrese un numero");
let valor2 = prompt("ingrese un numer2");
let res =
valor1 > valor2 ? (valor1 / valor2) :
valor1 < valor2 ? (Number(valor1) + Number(valor2)) : (valor1 * valor2)
console.log(res)
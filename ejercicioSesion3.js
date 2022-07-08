// !Practica 2
// !Identificar el numero mayor de dos
// !Condicion - Usar el operador ternary

let primerNuumero = 3;
let segundoNuumero = 3;

 primerNuumero > segundoNuumero ? console.log('Numero 1 es mayor que numero dos') : console.log('Numero dos es mayor que numero uno');

primerNuumero === segundoNuumero ? console.log('Ambos numeros son iguales') : 
(primerNuumero > segundoNuumero ? console.log('Numero 1 es mayor que numero dos') : 
    console.log('Numero dos es mayor que numero uno'))



// !Practica 3
// !Identificar el numero mayor de tres
// !Condicion usando el operador ternary
// !Hint: Anidar

// let numberOne = prompt("Insert your first number: ");
// let numberTwo = prompt("Insert your first second: ");
// let numberThree = prompt("Insert your first third: ");

let result = numberOne > numberTwo && numberOne > numberThree ? `The first number is the largest: "${numberOne}"` :
    numberTwo > numberOne && numberTwo > numberThree ? `The second number is the largest: "${numberTwo}"`  : 
        numberThree > numberOne && numberThree > numberTwo ? `The third number is the largest: "${numberThree}"` :
            "All numbers are equal"

console.log(result)


// !Practica 4
// !Pedir 2 numeros al usuario
// !Si a mayor que  b dividir a entre b
// !Si a menor que  b  sumar a más b
// !Si a  es igual b multiplicar ambos números
// !Imprimir el resultado en consola

// const numA = parseInt(prompt("Primer numero: "));
// const numB = parseInt(prompt("Segundo numero: "));

if(numA > numB) {
    console.log(`Dividimos ambos numeros: ${numA / numB}`)
} else if(numA < numB) {
    console.log(`Sumamos ambos numeros: ${numA + numB}`)
} else {
    console.log(`Por ser iguales los multiplicamos: ${numA * numB}`)
}
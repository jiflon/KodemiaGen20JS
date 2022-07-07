let firstNumber = parseInt(prompt('Dame un numero', 0))
let secondNumber = parseInt(prompt('Dame un numero', 0))
let thirdNumber = parseInt(prompt('Dame un numero', 0))

if(firstNumber > secondNumber && thirdNumber ) {
    console.log(`El numero 1 ${firstNumber} es el mayor`)

} 
else if(secondNumber > firstNumber && secondNumber >thirdNumber) {
    console.log(`El numero 2 ${secondNumber} es el mayor`)

} 
else if(thirdNumber > firstNumber && thirdNumber > secondNumber) {
    console.log(`El numero  3 ${thirdNumber} es el mayor`)
} 
else {
    console.log('Los 3 numeros son iguales')
}
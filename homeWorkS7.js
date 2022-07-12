// ----------------------------------------------Ejercicio 1 ->

// Función que pida una palabra al usuario
// Invierta la palabra
// y la retorna, almacenamos ese retorno en una variable y al interpolamos en un alert usando template literals
// reversedString('hola') -> 'aloh'
const reverseString = (string) => {
    let strReverse = "";
    for(let i = string.length-1; i >= 0; i--){
        strReverse = strReverse + string[i];
    }
    return strReverse;
}

let str = prompt("Ingrese una oración");
let reversedString = reverseString(str);

alert(`${str} => ${reversedString}`);


// ----------------------------------------------------Ejercicio 2 ->

// Función que pida 3 numeros como parametro
// 2 números obligatorios y 1 opcional con valor de 3
// Arroje la suma de esos 3 números
// Posibles resultados

const number = (num1, num2, num3 = 3) => {
        if(typeof num1 === 'undefined' || typeof num2 === 'undefined'){
            return "Faltan datos"
        }
        return num1 + num2 + num3;
    }
    console.log(number(3,2,9));
    console.log(number(3,6) );
    console.log(number(3) );
    console.log(number() );

// ejercicio 3 ->
// Función que pida al usuario los grados Centigrados en su localidad
// Convertirlos a grados fahrenheit
// Retornar el valor y ese valor usarlo para
// Arrojar un alert con el resultado
// -> convertTemp(25) -> La temperatura es de 77 ºF
// -> convertTemp() -> 'Faltan datos'

let celsius = prompt('Ingresa la temperatura de tu ciudad');

function temp(celsius) {
    if (fahrenheit = parseInt(celsius * 9/5 + 32)) {
        console.log(fahrenheit)
    }
    
}
temp(celsius)

// Ejercicio 4 ->
// Función que reciba una numero e imprima las tablas de ese numero, validamos que ese numero este entre 1 y 10

function operator(num1){
	do{
		if(num1>=1 && num1<=10){
			return num1;
		}
		else{
			num1 = Number(prompt(`Ingresa un numero del 1 al 10`))
		}
    }while(true);
}
function multiplicar(num2){
    for(let i = 1; i<=10; i++){
        console.log(`${i} x ${num2} = ${i*num2}`);
    }
}
let user = Number(prompt('Introduce un número del 1 al 10: '));
multiplicar(operator(user));


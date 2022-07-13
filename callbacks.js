// Callback functions rama 7
// en js funcones son first class citizen - de puede hacer referencia- variable, argumentos, etc

//Case 1
// const a = (msg) => {
//     console.log("este es un mensaje", msg)
// }

// const b = () =>{
//     console.log("ingresa un mensaje")
//     return msg;
// }

// let res = b();

// a(res)

//caso2

const a = (msg) => {
    console.log("este es un mensaje", msg)
}

const b = (Callback) =>{
    msg = ("este un mensaje")
    Callback(msg);
}

b(a)

//metofos funcionales de arrays

//forEach -
//recibe un callback unction -> currentValue, index
//copia array
//no necesitar return
//la logica se ejecuta dentro del bloque del codigo

// let arrayTest = ["julio", "sofy", "crhis", "jose"];

// const callFun = (currentValue, Index, Array) => {
//     console.log("currentValue", currentValue)
//     console.log("index", Index)
//     console.log("array", Array)
// }
// arrayTest.forEach( (value, index, arr) => {
//  console.log.apply(value);
// });

// let ages = [22,25,30.40];

//--------------ejemplo con for

// for (let index = 0; index < ages.length; index++) {
//     ages[i] +=2
// }

let newAges = []
ages.forEach(valaue => {
    value += 4;
    newAge.push(value)
});

console.log(newAges)

///--------------------

let arrayTest = ["julio", "Sofy", "Chris", "Jose"];
let koderMayus = [];

arrayTest.forEach((cv) => {
  koderMayus.push(cv.toUpperCase());
});

console.log(koderMayus);

//Ejercicio en clase-------------------------------

/**
* Escribir una función
* Reciba como parametro un array de ciudades
* Retornar las ciudades capitalizadas
* capitalize(['méxicO','RIo', 'Los AngelEs', 'esTAMBUL])
* -> ['México','Rio', 'Los Angeles','Estambul']
* Usar el metodo de array ForEach
*/
//--------------------------------Pendiente----------------------*******************************************
//******************************************************************************************* */

let ciudad = ["mexicO", "RIo","Los AngelEs", "esTAMBUL"];
let detect = capital.split(" ");
let capital = [];

ciudad.forEach(element => {
capital.push(element.toLowerCase() );    
});

console.log(capital)

capital.forEach(element => {
  capital.push(element.split(" ").toUpperCase())
});

console.log(capital)

// let capitalize = ['méxicO','RIo', 'Los AngelEs', 'esTAMBUL']

// let arr = capitalize.map((cv, index, arr) => {
//     return cv[0].toUpperCase() + cv.slice(1, cv.length).toLowerCase()
// });

//------------------------------------------------------------------
// Metodo Map
// crea un nuevo arreglo
// recibe un callbacks function con los argumentos definidos
// curre value
// indexed
// array objeto

// crea un nuevo arreglo con las modificaciones
// funcion callback debe tener return
// no cambia el arreglo original
// debe usarse si se va a crear un nuevo array

const numbers = [1, 2, 3, 43, 4, 5];

let arr = numbers.map((cv, index, arr) => {
  //   console.log(cv, index, arr);
  return cv + 10;
});

console.log(arr);

//---filter
// crea un nuevo arreglo filtrado
// recibe un callback cuncion con los argumentos
// value
// index
// array
// arrayobjeto
// el filtrado lo hacemos dentro de la funcion 
// crea un nuevo arreglo con las modificaciones
// la funcion callback deber tener return

let newArr = [10, 22, 30, 41];

// -> [10,20,30]

let soloPares = newArr.filter((currentValue, index, copiaArrOriginal) => {
  // Condicion
  if (currentValue % 2 === 0) {
    return currentValue;
  }
});

console.log(soloPares);

// Demo Reduce reducido

//! Demo1  filterCities
let onlycities = [];
onlycities = [1, 2, 4, "México", "Perú", "España", 3].filter((element) => {
  // condicion
  if (typeof element === "string") {
    return element;
  }
});
console.log(onlycities);

// //! filterCitiesReduced
let onlycities2 = [1, 2, 4, "México", "Perú", "España", 3].filter((element) => {
  return typeof element === "string" ? element : null;
});
console.log(onlycities2);

// //! filterCitiesMostReduced
const onlycities3 = [1, 2, 4, "México", "Perú", "España", 3].filter(
  (element) => {
    return typeof element === "string";
  }
);

console.log(onlycities3);

//! Practica Capitalized -> Pendiente

//  * Escribir una función
//  * Reciba como parametro Un array de ciudades
//  * Retornar las ciudades capitalizadas
//  * capitalize(["méxicO", "CaraCas", "Los AngelEs", "estaMbuL"])
//  * -> ['México', 'Caracas', 'Los angeles', 'Estambul']
//  *

// const capitalize = (arr) => {
//   let capCities = [];
//   arr.forEach((city) => {
//     let cityCapitalized = `${city[0].toUpperCase()}${city
//       .slice(1)
//       .toLowerCase()}`;
//     capCities.push(cityCapitalized);
//   });
//   return capCities;
// };

// result = capitalize(["méxicO", "CaraCas", "Los AngelEs", "estaMbuL"]);

// console.log(result);

//
// Ejercicio 2 *Opcional
// Función que reciba como parámetro una array de strings
// y devuelva el primer y último carácter de cada string
// p.ej.
// // -> firstAndLast ( ['hola', 'mundo'] ) -> ['ha', 'mo']
//

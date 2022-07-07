// Tarea para fin de semana------------------------------------------------------------------------------------------------------------
// Compartilos en la rama de la sesion 3, en un archivo aparte (tarea, homework... como quieras llamarle, pero que sea descriptivo...)
// Completar los ejercicios pendientes de la clase
// Ejercicio 1 -  Pedir por el promt un número, y comprobar si es par o impar
// Ejercicio 2 -  Calcula el área de un triángulo - Teniendo la base y la altura (proporcionadas por el usuario)
// Formula para el calcul: base * altura)/ 2

//Ejercicio1-----------------------------------------------------------------

let n = prompt("Ingresa un numero e identificaremos si es par o impar");
let comp = n %2 == 0 ? "Es par" : "Es impar"
console.log(comp)

// Ejercicio 2 -  Calcula el área de un triángulo - Teniendo la base y la altura (proporcionadas por el usuario)

let b = prompt("Ingresa la base del triangulo para calcular el area");
let altura = prompt("Ingresa la altura del triangulo para calcular el area");

let formula =
b <= 0 ? "Error, numero base debe ser mayor a 0" :
altura <= 0 ?  "Error, numero altura debe ser mayor a 0" :
(b * altura /(2));

console.log(formula)
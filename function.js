//! Funciones
// -> Son elementos esenciales del desarrollo y nos ayudan que nos permiten encapsular lineas de codico (statements) en un indentificador al cual podemos hacerle referencia para reutilizar las mismas
//     * Ojo -> funciones anonimas

// ! Para utilizar funciones : ...

// ! 1.  Declara la funcion ->
//! 1.1 Utilizando la palabra "function"
//! 1.2 Identificador de la funcion -> a definir por el desarrolador
//! 1.3 El parametro o la lista de parametros, abrazados entre parentesis -> (param1, param2 ......)
//! 1.4 Bloque de codigo -> {... Codido a ejecutar }
//! 1.5 Opcional -> ? Returno
// *Es recomendado un nombre descripvo
// * Usar camelCase

// !Ejemplo de funcion :

// declarion de funcion para imprimir mensaje
// function inprimeMensaje() {
//   //   console.log("Esto es una funcion");
// }

//! 2. Invocar o llamar la funcion
//! Declarar una funcion no la ejecuta
//! 2.1 Invocarla o llamar de forma tacita
//! 2.2 -> funcionSuma()
//! 2.3 Al invocar la funcion estamos ejucato la lineas de codigo definidas en al declaracion
//! 2.4 En caos tener parametro definidos es necesario pasarle dichos parametros

//! 3.Retorno
// ! 3.1 La funciones retorna pordefecto "undifined"
// console.log(inprimeMensaje());
//! 3.2 Utilizamos la palabra reservada "return"
// function inprimeMensaje() {
//   //   console.log("Esto es una funcion");
//   return "hola";
// }
// // console.log(inprimeMensaje());
// let saludo = inprimeMensaje();
// if(saluddo === 'hola')
// function inprimeMensaje() {
//   console.log("Esto es una funcion");
//   console.log("log 1 ");
//   return "hola";
//   console.log("log 2 ");
//   let r = 3;
//   if (r === 3) {
//     console.log("log1");
//     return;
//     console.log("log3333");
//   } else {
//     console.log("log2");
//   }
//   let resut;
//   return 2 + 3;
// }
//! 3.3 el codigo que sigue al return no se ejecuta!

// function inprimeMensaje() {
//   let resut;
//   return 2 + 3;
// }

// //! >Break y continue -> loops
// for (let i = 0; i <= 5; i++) {
//   if (i === 2) {
//     break;
//   }
//   console.log(i);
// }

// function sumaValores() {
//   let res = 1 + 1;
//   //   return res;
// }

// // console.log(2 + sumaValores()); -> NaN 'Not a Number'
// console.log(2 + sumaValores());

// console.log(inprimeMensaje());

//! parametros
//! Parametros -> Son variables que toma la funcion al momento de su defincion -> son neutros o agnosticos

// function inprimeMensaje(p1, p2 = 20) {
// //   console.log(p1, p2);
// //   let resut;
//   return 2 + 3;
// }

//! argumentos -> son las variables que toma la funcion al momento de ser invocada -> Son conocidos o relativamente conocidos

// inprimeMensaje("hola!!!!!!!!!!!", "koder");

// "hola".substring();
// let test;
// console.log(test);

// function suma(a,b,c ) {
//     if (a === undefined){
//         a = 1
//     }

//   //   console.log(a, b);
//      return a + b;
// }

// console.log(suma(10, 20, 30, 40, 404, 0404, 04));

//! Valores por defecto
// prompt()

// ! mutanbilidad de argumentos
// let b = 10;

// function suma(num1, num2 = 10) {
//   let a = num1 + num2;
//   //   console.log("a en la funcion", a);
//   return a;
// }

// for(let i =0....){
//     consolo(i)
// }

// console.log(i)

// console.log(a);

// console.log(suma(b));

// console.log("a global", a);

// if(true){
//         const
// // }

// // for(...){
//     let
// // }
// lexical scope
// {
//   let testScope = "Block scope";
//   {
//     console.log(testScope);
//   }
// }

// console.log(testScope);

// // Passing by value
// num1 = 1
// suma(num1, ){
//     num1 = 20
//     num -> 20
//     obj.first_name = 'rods'
// }

// num1 -> 1

// // Passing by referece
// {first_name: 'ferdinand'} -> objetos
// [] -> arrays

// console.log(obj.first...._)

// Hoisting

// function t() {
//   //
//   let a = "a";
//   function b() {
//     //
//     console.log("a");
//   }
//   b();
// }

// console.log("a");

// // console.log(t());
// let variabalePrueba;

// console.log(variabalePrueba);

// let variableGlobal = "Global";

// function funcionDemo(str, b = 0) {
//   // console.log(str, b);

//   console.log(variableGlobal);

//   let total = 99999999999;

//   // console.log(total);

//   {
//     // console.log(total);
//   }

//   return "Soy el retorno";
// }

// // let result =
// // console.log(total);

// let resultado = funcionDemo("sdfsdf", 123231);

// console.log(resultado);

// let stringDemo = '  hola'

// function trim(){
//   // lkamsdlkmaslkdmasd
//   lkjasndfasdfkjnsdfg
//   aksjndkasdf
//   lkjsadflksadf

//   return strin_sin espacial
// }
// let var1 = 123123;
// let var2 = 123123;
// let var3 = 123123;
// let var4 = 123123;

// function cardsAnalysis(numCard, typeCard)  {
//   // Logico
//   if (typeCard == debido){
//     ASDsad
//   }else {

//   }
// }

// cardsAnalysis(123123123,)

// Mutbailidad de argumento

// function demoMutabilidadArg(a) {
//   a = a + 20;
//   return a;
// }

// let b = 10;

// console.log("a en global scope -> ", a);

// console.log("a dentro de la funcion", demoMutabilidadArg(b));

// console.log(b);

// Passing by value

// Passing by referece
// Arrays y Objetos

//  index ->   // 0     1
// let primerArray = ["texto", 123];

// let primerObj = { a: "hola" };
// console.log(primerObj);

// function testNoPrimitive(obj) {
//   return (obj.a = "mundo");
// }

// testNoPrimitive(primerObj);
// console.log(primerObj);

// Scope -> alcance

// Las funciones pueden ser invocadas dentro de su scopre
// {
//   functionA.....
// }

// {
//   functionB....
//   functuoinA() -> error
// }

//? llamo a funcion A

//? declaracion funcion A

// funcionAllamadoA;

// console.log(variableModulo);

//

// xx  Funciones recursivas
// function recursiveFunction(i) {
//   //   // code
//   console.log(i);

//   let newNum = i - 1;
//   // base case
//   if (i === 0) {
//     console.log("fin de la ejecución");
//     return;
//   }

//   //   console.log("continua");
//   recursiveFunction(newNum);
// }

// recursiveFunction(5);

// !Funciones como expression
// const functionExpression = function (a) {
//   console.log(a);
// };

// functionExpression("Hola funcion como expresion.....!!!!!");

// functionExpression("otro datooooo");

// //! Rest Operator
// function restFun(a, ...nums) {
//   let total = 0;

//   for (let i = 0; i < nums.length; i++) {
//     total += nums[i];
//   }

//   return total + a;
// }

// console.log(restFun(100, 1, 1, 'c'));
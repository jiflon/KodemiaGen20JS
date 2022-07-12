/**
 * Ejercicio 1
 * Escribir un programa de arroje la suma de los múltiplos de 3, 5 o 7
 * que hay entre 1 y 100
 * Resolver con For, While y do While
 */

 function getMultiples() {
    let addNumbers = 0;
    for (i = 1; i <= 100; i++) {
      if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
        addNumbers += i;
      }
    }
  
    console.log(addNumbers);
  }
  
  /**
   * Ejercicio 2
   * Pedir el usuario 1 numero entre 1 y 100
   * sumar todos los números entre el 1 y este numero
   * Mandar un alert con el  total
   * Resolver con For, While y do While
   * p.ej. 5
   * ->  15
   */
  
  function addLimitNumber() {
    let limit = parseInt(prompt("Dame un numero entre 1 y 100"));
    let addNumbers = 0;
  
    for (i = 1; i <= limit; i++) {
      addNumbers += i;
    }
    console.log(addNumbers);
  }
  
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
  
  function countLetters() {
    let word = prompt("Dame una oracion", "Hola koders").toLowerCase();
    let letterA = 0;
    let letterE = 0;
    let whiteSpace = 0;
  
    for (i = 0; i < word.length; i++) {
      switch (word[i]) {
        case "a":
          letterA++;
          break;
        case "e":
          letterE += 1;
          break;
        case " ":
          whiteSpace++;
          break;
      }
    }
  
    console.log("Letras A -> ", letterA);
    console.log("Letras E -> ", letterE);
    console.log("Espacios -> ", whiteSpace);
  }
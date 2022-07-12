// ! Arrays
// !Coleccion de datos, que puede alvergar otros datos (cualquier tipo)

// let koder1 = "Mariana";
// let koder2 = "Marco";

// const koders = [
//   "Mariana",
//   "Marco",
//   "Chris",
//   ["string", 123, undefined, [1, 2, 3]],
// ];

//! Bracket Notations -> []
// !Indexesas -> 0,1,2,3.....

// console.log(koders[5][3][0], koders[1]);

//! Modificar un array
// ! buena practica, declaralos con "const"
// const koders = [
//   "Mariana",
//   "Marco",
//   "Chris",
//   ["string", 123, undefined, [1, 2, 3]],
// ];

// koders[2] = "Christopher";

// console.log(koders);

//!
// console.log(typeof koders);

//! identificando un array
// const koders = [
//   "Mariana",
//   "Marco",
//   "Chris",
//   ["string", 123, undefined, [1, 2, 3]],
// ];

// console.log(typeof koders); -> objeto
// console.log(Array.isArray(koders));
// console.log(koders instanceof Array);

//! Metodos de Array
// ? Push -> Agrega un elemento al final del array
// const koders = ["Mariana", "Marco"];
// koders.push("Luis");
// console.log(koders);

//? Pop -> Elimina el ultimo elemento de array
// const koders = ["Mariana", "Marco"];
// koders.pop();
// console.log(koders);

// ? Reverse ->
// ? Copywhithing -> Copia un elemnto dentro del mimso array
// const koders = ["Mariana", "Marco", "Chris", "Chris", "Chris", "Chris"];

// console.log(koders.copyWithin(1, 3, 5));

// ! Callback functions
// ! en js las funciones son first class citizen

//? Casa 1 -> Funciones independientes
// const a = (msg) => {
//   console.log("Este es el mensaje: ", msg);
// };

// const b = () => {
//   let msg = prompt("ingresa un mensaje: ");
//   return msg;
// };

// let res = b();

// a(res);

// ? Caso 2 -> callback functions

// const a = (msg,otro) => {
//   console.log("Este es el mensaje: ", msg);
// };

// const b = (funcion) => {
//   msg = "este es el mensaje";

//   funcion();

// };

// b(a, otro);

// ! Metodos funcionales de Arrays

// ! 1 ForEach -
// ! Recibe un callback function  -> currentValue, Index, Copia array
// ! No necesita/hace un return
// ! No modiica el array original
// ! la logica se ejecuta dentro de su bloque de codigo

// let arrayTest = ["julio", "Sofy", "Chris", "Jose"];

// const callFun = (currentValue, index, array) => {
//   console.log("Current Value: ", currentValue);
//   console.log("index: ", index);
//   console.log("array: ", array);
// };

// arrayTest.forEach((cV, index, arr) => {
//     console.log(cV)
// });

// let ages = [22, 25, 30, 35, 40];

// for (let i = 0; i < ages.length; i++) {
//   ages[i] += 2;
// }

// let newAges = [];

// ages.forEach((age, posicion, arr) => {
//   age += 4;
//   newAges.push(age);
// });

// console.log(ages);
// console.log(newAges);

// let arrayTest = ["julio", "Sofy", "Chris", "Jose"];
// let koderMayus = [];

// arrayTest.forEach((cv) => {
//   koderMayus.push(cv.toUpperCase());
// });

// console.log(koderMayus);

// ! Practica forEach
// /**
//  * Escribir una función
//  * Reciba como parametro Un array de ciudades
//  * Retornar las ciudades capitalizadas
//  * capitalize(['méxicO','RIo', 'Los AngelEs'])
//  * -> ['México','Rio', 'Los Angeles']
//  * Usar el metodo de array ForEach
//  */
const capitalize = (arr) => {
    let capCities = [];
  
    arr.forEach((city) => {
      // ! evaluar nombre compuesto
      // if (city.split(' ').lenght > 1){
      //     city.forEach
      // }
  
      let texto = "Ferdinand";
  
      texto.slice();
  
      let cityCapitalized = `${city[0].toUpperCase()}${city
        .slice(1)
        .toLowerCase()}`;
  
      capCities.push(cityCapitalized);
    });
  
    return capCities;
  };
  capitalize(["méxicO", "RIo", "Los AngelEs"]);
  
  //! 2. Map
  // ! 2.1Crea un nuevo array transformado
  // ! 2.2Recibe una callback function con los argumentos definidos
  // ! 2.2.1Current value
  // ! 2.2.2Index
  // ! 2.2.3 Array objetivo
  // ! 2.3Crea un nuevo array con las modificaciones indicadas
  // ! 2.4 La función callback debe tener un return
  // ! 2.5 No cambia el array original
  // ! 2.6 Debe usarse si se va a crear un nuevo array
  
  // const numbers = [1, 2, 3, 43, 4, 5];
  
  // let arr = numbers.map((cv, index, arr) => {
  //   //   console.log(cv, index, arr);
  //   return cv + 10;
  // });
  
  // console.log(arr);
  
  // ! Practica .Map
  // /**
  // * Escribir una función
  // * Reciba como parámetro Un array de ciudades
  // * Retornar las ciudades capitalizadas
  // * capitalize(['méxicO','RIo', 'Los AngelEs'])
  // * -> ['México','Rio', 'Los Angeles']
  // * Usar el método de array Map
  // */
  
  // const capitalizeMap = (arr) => {
  //   let capCities = arr.map((city) => {
  //     return `${city[0].toUpperCase()}${city.slice(1).toLowerCase()}`;
  //   });
  //   return capCities;
  // };
  
  //! 3. Filter
  // ! 3.1Crea un nuevo array filtrado
  // ! 3.2Recibe una callback function con los argumentos definidos
  // ! 3.2.1 Current value
  // ! 3.2.2 Index
  // ! 3.2.3 Array objetivo
  //! 3.4 El filtrado lo hacemos dentro de la función callback
  //! 3.5 Crea un nuevo array con las modificaciones indicadas
  //! 3.6 La función callback debe tener un return
  
  // let newArr = [10, 22, 30, 41];
  
  // // -> [10,20,30]
  
  // let soloPares = newArr.filter((currentValue, index, copiaArrOriginal) => {
  //   // Condicion
  //   if (currentValue % 2 === 0) {
  //     return currentValue;
  //   }
  // });
  
  // console.log(soloPares);
  
  // // Demo Reduce reducido
  
  // //! Demo1  filterCities
  // let onlycities = [];
  // onlycities = [1, 2, 4, "México", "Perú", "España", 3].filter((element) => {
  //   // condicion
  //   if (typeof element === "string") {
  //     return element;
  //   }
  // });
  // console.log(onlycities);
  
  // // //! filterCitiesReduced
  // let onlycities2 = [1, 2, 4, "México", "Perú", "España", 3].filter((element) => {
  //   return typeof element === "string" ? element : null;
  // });
  // console.log(onlycities2);
  
  // // //! filterCitiesMostReduced
  // const onlycities3 = [1, 2, 4, "México", "Perú", "España", 3].filter(
  //   (element) => {
  //     return typeof element === "string";
  //   }
  // );
  
  // console.log(onlycities3);
  
  // ! Practica capitalizar nombres de ciudades (incluyendo nombres compuestos)!
  const capitalizeMap1 = (arr) => {
    let capCities = arr.map((city) => {
      currentCity = city.split(" ");
  
      if (currentCity.length > 1) {
        res = currentCity
          .map((inner) => {
            return `${inner[0].toUpperCase()}${inner.slice(1).toLowerCase()}`;
          })
          .join()
          .replaceAll(",", " ");
  
        return res;
      } else {
        return `${city[0].toUpperCase()}${city.slice(1).toLowerCase()}`;
      }
    });
  
    //   return capCities;
    return capCities;
  };
  
  let result = capitalizeMap1([
    "méxicO",
    "RIo",
    "Los AngelEs",
    "esta ES unA ciuDAD",
  ]);
  
  console.log(result);
  
  // Función que reciba un array de nombre y esta debe devolver un string con las iniciales de los nombre
  
  // getInitial(['Ferdinand','Jose','Maria','Dora']) -> FJMD
  
  const names = ["Ferdinand", "Jose", "Maria", "Dora"];
  
  result = names.reduce((acc, cv) => {
    return (acc += cv[0]);
  }, "");
  
  console.log(result);
  
  function Mentor(nombre, apellido, edad, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.altura = altura;
  }
  
  ferdinand = new Mentor("ferdinand", "Bracho", 30, "1.79");
  
  console.log(ferdinand);
  
  /**
   * Ejercicio 2.
   * Dado un objeto inicial, hacer los siguientes puntos
   *
   * 1. Agregar el lenguaje 'Go' a la lista de lenguajes
   * 2. Cambiar el nivel a 4
   * 3. Eliminar la propiedad avatar
   * 4. Agregar una nueva propiedad de edad y poner el valor de 30
   * 5. Imprimir en consola todos los lenguajes dominados
   * 6. Clonar el objeto en uno nuevo
   * 7. Imprimir en consola el nuevo objeto
   *
   * @hint https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
   */
  
  let koder = {
    languages: ["JavaScript", "Python", "Ruby"],
    isMentor: true,
    level: 3,
    avatar: "https://picsum.photos/200/300",
  };
  
  let a = ["ferdinand", "ana"];
  
  let rest = a
    .filter((c) => {
      if (c[0] === "a") {
        return c;
      }
    })
    .map((c) => {
      return c[0].toUpperCase() + c.slice(1).toLocaleLowerCase();
    });
  
  console.log(rest);
  
  //! filtrar y transformar un array
  // let a = ["ferdinand", "ana"];
  
  // let rest = a
  //   .filter((c) => {
  //     if (c[0] === "a") {
  //       return c;
  //     }
  //   })
  //   .map((c) => {
  //     return c[0].toUpperCase() + c.slice(1).toLocaleLowerCase();
  //   });
  
  // console.log(rest);
  // S;
  
  const student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12,
  };
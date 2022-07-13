//! Metodo reduce 4.--------------------------------------
//! Recibe dos argumentos un callback function y un initialValue
//su callback recibe 4 parametros definidos
//total o previus, value o acumulador,cv, index, copia array

//-----------------------Ejemplo-------------------
let arr = [1,2,3,3,4,5]

    const cbFun = (acumualudar, cv) => {
      acumualudar +=  cv
      return acumualudar
  }

    let result = arr.reduce(cbFun, 1000) 

    console.log(result)

    const koders = ['kelly', 'sebas','Adrian']

    result = koders.reduce((acc, cv) => {
      acc.push(cv[0]);
      return acc;
     }, []);


     result2 = koders.reduce((acc, cv) => {
       acc += `${cv} `;
       return acc;
      }, '');
     

    console.log(result)
    console.log(result2)

//-------------------------------------------------------

// Ejercicio en clase

// Función que reciba un array de nombre y esta debe devolver un string con las iniciales de los nombre
 
// getInitial(['Ferdinand','Jose','Maria','Dora']) -> FJMD

let nombre = ['Ferdinand','Jose','Maria','Dora'];
let newName = [];

nombre.forEach(element => {
    newName.push(element[0].toLowerCase())
});

console.log(newName);

// Tomar un string del usaurio
// imprimir en consola el numero de caracteres que tiene esa cadea
// Imprimir cuantas vocales estan presentes
// Imprimri cada uno de los las palabras que hay ('hola koder') => ['hola', 'koders'}
// Leer la documentacion de metodos de string
// Hacer uno o mas pruebas  con algunos de los metodos leidos (presentar en clase)

let word = prompt ("Ingresa una oracion");
let newWord = word.length;
let countWord = word.match(/[aeiou]/gi).length;
let phrase = word.split(" ");


console.log(`El numero de palabras ingresadas es de ${newWord}, 
El numero de vocales es ${countWord},
Las pabras encotradas con ${phrase} `);
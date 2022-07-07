// Practica 6 -----clase3------------------------

//    1. Estar en la rama de la clase
//    2. Crear archivo "weather.js" y vincularlo
//    3. Pedir al usuario que seleccione como esta el clima de su ciudad (opciones)
//        3.1 Opciones -> a)Soleado b) Lluvioso c)Nevado d)Nublado
//    4. Pedir al usuario temperatura aproximada de su ciudad en grados C (celsius)
//    5. Imprimir en consola una descripción acorde a los datos ingresados
//    Output: En tu ciudad, el dia esta soleado con una temperatura de 100 grados F (fahrenheit)


let time = prompt("ingresa una opcion del clima: soleado, lluvioso, nevado, nublado ");
let grados = prompt("Ingresas temperatura en tu ciudad en grados celsius");

let grade = (grados) * 9/5 + 32;

switch (time){
    case "soleado":
    console.log(`El dia esta soleado con una tempreratura de ${grade}`)
    break;

    case "lluvioso":
        console.log(`El dia esta nublado, usa paraguas la temperatura es de ${grade}`)
        break;
    case "nevado":
        console.log(`El dia estara con nieve, abrigate. La temperatura sera de ${grade}`)    
        break;
    case "nublado":
        console.log(`El dia estara nublado con posibilidad de lluvia usa paraguas, la temperatura sera de... ${grade}`)    
        break;
}





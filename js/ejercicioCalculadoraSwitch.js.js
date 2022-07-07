// Clase 3 ejercicio5 Switch

// Practica
// Realiza una calculadora usando un switch
// Dale la opcion al usuario de seleccionar entre algunas operaciones (suma, resta....)
// Pidele dos numeros y aplica la operacion correspendiente
// Regresa el resultado

// let a = 2
// let dia = ''
// switch(a)   {
//     case 1:
//     case 2:
//         console.log('es uno o es dos ');
//         break
//     case 3:
//         console.log('es tress');
//         break
//     default:
//         console.log('no es ni uno ni dos!')
// }

let a1, a2;

a1 = prompt ("Ingrese un numero");
a3 = prompt("Ingresa un operador para realizar una operacion")
a2 = prompt ("ingrese un segundo numero");

switch (a3) {
    case "+":
        console.log(Number(a1)+ Number (a2));
        break
    case "-":
        if(a1 - a2)
        console.log(a1-a2)
        break
    case "*":
            console.log(a1*a2)
            break   
    case "/":
                if(a1 > a2)
                console.log(a1/a2)
                break    
     
}




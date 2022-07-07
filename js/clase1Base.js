// ! Comentarios en Js
// Esto es un comentario

/*
    Esto es 
    un 
    comentario
    multilinea
    */

// ! Datos en Js
    // Identificador
    // Reglas o buenas practicas
    // Reglas: No deben contener caracteres especial (, ! @) -> let @@@ = 'test'
    // Regla: No incian con digitos
        // let 9varibale = 9; -> Error
    // Reglas: No acepta palabra reservadas 
        // let else = 'else' => Error
    // Buena practica; camelCase 99% - PascalCase -> Clases - CONSTANTE 
    // Buena practica; Naming descriptivo  -> let estudiantesKodemia = 'koders'
    // Consideracion; Sensible a las mayus y minis 


// ! Variables y Constantes 
    // Variables = Mutabilidad 
    // Constantes = No cambia 

    // Variables - palabras reservadas para declarar; var y let 

    // let edadKoder = 25;
    // var alturaKoder = 165

    // var alturaKoder = 185
    // edadKoder =  20


    // let edadKoder = 30

    // palabraReservada -> Identificador ->  operadorAsigancion ->  Valor
    // let test = 1
    // test = 2
    // test = 9
    // console.log(test) 


    // console.log(edadKoder);
    // console.log(alturaKoder);

    // Recomendacion/ Buena practica siempre usar Let 

    // Regla de invocacion 

        // console.log(koder);
        // var koder = 'Mariana';
        // --> // Hoisting 

    // Constantes 
        // URL -> Const
        //  Pi  -> Const
        // PUNTAJEMAXIMO -> const 

        // const URL = 'www.google.com'; 
        
        // URL = 'Test' -> Error 

    // Diversas Formas de Declaracion e incializacion 
        // let primerPuntaje; -> undefined

        // let segundoPuntaje = 100;

        // let tercerPuntaje = segundoPuntaje;

        // let cuartoPuntaje = segundoPuntaje + 1000;

        // let quitaPuntaje = 1 + 2 + 3;

        // const puntajeMaximo = 5000;

        // puntajeMaximo = 10000;

        // console.log(puntajeMaximo);

    // Declarcion o inicializaciones Multiples 

    // let primerKoder, segundoKoder, tercerKoder;

    // primerKoder = 'Sebastian';

    // let cuartoKoder = 'Marco',quintoKoder = 'Sofy';
    
    // console.log(cuartoKoder, primerKoder);

    // septimoKoder = 'Cristopher'; -> var septimoKoder ... 


// ! Tipos de Datos 
    // Primitivos 
        // String -> Una cadena de caracters. Comillas simples o dobles 
            // let academia = 'Kodemia\'s';

            // console.log(academia);

        // Numbers - Numeros 
            // let primerNumero = 20;
            // let segundoNumero = 10.05;

        // Booleans 
            // true | false 

        // Undefined 
            // Representa la usencia de un valor 

        // Null 
            // Hace refencia a un valor nulo 

    // No primitivos -> reference data type 
        // Array -> 
            // Colecciones de datos indexados 
            // let myFirstArray = [1,2,3,4];

            // let myFirstArray = ['a', 2, true, null];

        // Objects -> Objetos 
            // let user = {
            //     firstName: ,
            //     lastName: ,
            //     age:
            // };

            // console.log(user.firstName);

//! typeof Operator

    // let numerico = 11;
    // let text = 'Esto es un texto';

    // console.log(typeof numerico);
    // console.log(typeof text);
    // console.log(typeof console);

//! Concatenacion de strings 
    // Usando el operador de suma +
        // let primerText = 'Soy la primera parte';
        // let segundoTexto = 'y yo la segunda parte';

        // console.log(primerText + segundoTexto)
    
    // Templates Literals 
    // `` -> backtick 
    // Interpolacion -< ${varibale}
    // let firsName = 'Ferdinand';
    // let mitadEdad = 15;
    // console.log(`Esto es template literals ${firsName}`);
    // console.log(`Mi edad es ${15 + mitadEdad}`);
    // `texto ${'placeholder}`
    // `<p> Esto es un saludo para ${user.firstName}</p>`
 
//! Formas de hacer output 
    // console.time('g');
    // console.group('20g');
    // console.log('esto es un log');
    // console.warn('Esto es una abvertencias');
    // console.error('Esto es un error');
    // console.groupEnd('20g');
    // console.timeEnd('g');

    // alert('mesaje');
    
    // Window obj
    // window.console.log('asdasd')
    // window.prompt()

// ! Ingreso de data 
    // let data = prompt('Ingresa tu nombre; ', 'nombressssss');
    // console.log(`Esta es mi data ${data}`);

    // let edad = prompt('Dame tu edad: ');

    // Cast string to numbers 
        // parseInt
        // parseFloat

    // console.log(parseInt(edad) + 1)

    // alert('asdasd')


// ! Operadores 
    //? Aritméticos  - Operaciones aritméticas (numéricas)
    // let x = 5;
    // let y = 3;

    // suma +
    // console.log('x + y = ', x + y);  // 8

    // resta -
    // console.log('x - y = ', x - y);  // 2

    // multiplicacion *
    // console.log('x * y = ', x * y);  // 15

    // division /
    // console.log('x / y = ', x / y);  // 16666666666666667

    // remainder -  modulo
    // console.log('x % y = ', x % y);   // 2

    // increment - incremento
    // console.log('++x = ', ++x); // x is now 6
    // console.log('x++ = ', x++); // prints 5 and then increased to 6
    // console.log('x = ', x);     // 7

    // decrement - decremento
    // console.log('--x = ', --x); // x is now 6
    // console.log('x-- = ', x--); // prints 6 and then decreased to 5
    // console.log('x = ', x);     // 5

    // potencia
    // console.log('x ** y =', x ** y);
    //     The ** operator was introduced in ECMAScript 2016 and some browsers may not support them

    // ? Asignacion 
        // = 
        // let a = 2;

        // +=
        // a += 1;
        // -> a = a  + 1;
        
        // -=
        // a -= 1;
        // -> a = a - 1;
        
        // / *=
        // a *= 2;
        //  -> a = a * 2/
        
        // /= 
        // a /= 2;
        // -> a = a / 2;
        
        // %=
        // a %= 1;
        // -> a = a % 1;
        
        // / **
        // a **= 2;
        // -> a = 2 ** 2;
        
        // console.log(a)

    //? Comparacion 

    // == compracion 
    // let a = 1;
    // let b = '1';
    // console.log(a == b)

    // === comparacion estricta 
    // let a = 1;
    // let b = '1';
    // console.log(a === b)

    // / != not equal
    // let a = 1;
    // let b = 1; 
    // console.log(a != b)

    // / !== not equal stricto
    // let a = 1;
    // let b = 1; 
    // console.log(a !== b)

    // > - Mayor que... 
    // let a = 10;
    // let b = 9; 
    // console.log(a > b)

    // < - Menor que ...
    // let a = 10;
    // let b = 9; 
    // console.log(a < b)

    // >= - Mayor o igual que... 
    // let a = 9;
    // let b = 9; 
    // console.log(a >= b)

    // <= - Menor o igual que ...
    // let a = 10;
    // let b = 9; 
    // console.log(a <= b)

    // ? Logicos 

    // AND -> && 
        // true && true = true 
        // false && true = false 
        // true && false = false 
        // false && false = false 

    // OR -> ||
        // true || true = true 
        // false || true = true 
        // true || flase = true 
        // false || false = false 
        
    // NOT -> !

    // ? Precedencia de los operadores 
    // let x = 10 + 10 * 3;
    // let x = (10 + 10) * 3;
    // console.log(x)




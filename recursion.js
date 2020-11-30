// Probando distintos tipos de recursión, con dos parámetros.

const operaciones = require('./operacionesRecursion');

let operacion = process.argv[2];
let n1 = Number(process.argv[3]);
let n2 = Number(process.argv[4]);

if(operacion == undefined) {
    console.log();
    console.log('Vamos a usar algunos ejemplos de recursión');
    console.log('Primero ingresa "node recursion.js" seguido de la operación que elijas');
    console.log('luego ingresá dos números. Separá cada elemento con espacio');
    console.log('Las operaciones posibles son:');
    console.log('DivisorComunMayor (dcm), de dos números');
    console.log('listaDeNumeros (ldn), entre dos números');
    console.log();
} else if (isNaN(n1) || isNaN(n2)){
    console.log();
    console.log('Alguno de los múmeros no es un número, o te faltó la operación');
    console.log();
} else {
    switch (operacion) {
        case 'dcm':
        case 'DivisorComunMayor':    
            console.log();
            console.log('El divisor común mayor de', n1, 'y', n2, 'es:', operaciones.dcm(n1, n2));
            console.log();
            break
        case 'ldn':
        case 'listaDeNumeros':
            console.log();
            console.log('Lista de números entre', n1, 'y', n2, 'es:')
            array = operaciones.listaDeNumeros(n1, n2)    
            array.forEach(element => {
                console.log(element)
            });
            console.log();
            break
        default:
            console.log();
            console.log('La operación no existe. Vuelve a ingresar los datos');
            console.log();
    }

}

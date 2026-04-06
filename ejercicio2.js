var valores = [true, 5, false, "hola", "adios",
2];

var texto1 = valores[3];
var texto2 = valores[4];

var textoMayor = (texto1.length > texto2.length) ? texto1 : texto2; 
console.log("El texto con mas caracteres es: " + textoMayor);

var bool1 = valores[0];
var bool2 = valores[2];

var resultadoTrue = bool1 || bool2;
var resultadoFalse = bool1 && bool2;
console.log("resultado True: " + resultadoTrue);
console.log("resultado False: " + resultadoFalse);

var num1 = valores[1];
var num2 = valores[5];

console.log("Suma: " + (num1 + num2));
console.log("Resta: " + (num1 - num2));
console.log("Multiplicacion: " + (num1  * num2))
console.log("Division: " + ( num1 / num2))
console.log("Modulo: " + (num1 % num2))

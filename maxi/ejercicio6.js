function determinarParImpar(numero){
    if (numero % 2 === 0){
        return "El numero es par"
    } else {
        return "el numero es impar"
    }
}
let resultado = determinarParImpar(234532432);
console.log(resultado)
function palindromo(texto){
     let textoLimpio = texto.toLowerCase().replace(/ /g, "");

    let textoInvertido = textoLimpio.split("").reverse().join("");

    if(textoLimpio === textoInvertido){
        return "el texto es un palindromo"
    } else {
        return "el texto no es un palindromo"
    }
}
console.log(palindromo("anita lava la tina"))
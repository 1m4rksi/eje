function textoMayus(texto){
 
    if(texto === texto.toUpperCase){
        return "El texto está en mayusculas"
    } else if(texto === texto.tolowercase){
        return "El texto está en minusculas"
    } else{
        return "el texto está en mayusculas y en minusculas"
    }

    }
    console.log(textoMayus("TEXTO MATUSCULA"))
    console.log(textoMayus("TEXTO MINUSCULA"))
    console.log(textoMayus("TEXTO minscula Y mayuscula"))
    
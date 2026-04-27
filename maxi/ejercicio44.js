var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K',
'E', 'T'];

var NumeroDNI = parseInt(prompt("Introduce el numero de DNI: "));
var LetraDNI = prompt("Introduce la letra del DNI: ").toUpperCase();

if(NumeroDNI < 0 || NumeroDNI > 99999999){
alert("el numero proporcionado no es válido");
} else{
    var resto = NumeroDNI % 23
    var letraCalculada = letras[resto];


if(letraCalculada !== LetraDNI){
    alert("La letra que ha indicado no es correcta");
}
else{
    alert("El numero y la letra del DNI son correctos");
}

 }
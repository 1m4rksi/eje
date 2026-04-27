let resultados = new Array(13).fill(0);

for (let i=0; i < 36000; i++) {
    let dado1 = Math.floor(Math.random() * 6) + 1;
    let dado2 = Math.floor(Math.random() * 6) + 1;

    let suma = dado1 + dado2;
    resultados[suma]++;

}

console.log("resultados de las 36,000 sumas:");
for(let s = 2; s <= 12; s++){
    console.log("suma " + s, ": aparecio", resultados[s], " veces")
}
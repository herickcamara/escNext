function geradorDeNumeros(min, max){
    if(min > max) [min, max]=[max,min]

    return new Promise(resolve => {
        const fatore = max -min +1
        const aleatorio = parseInt(Math.random()*fatore) + min
        resolve(aleatorio)
    })
}
geradorDeNumeros(0,5)
    .then(num => num *10)
    .then(numX => `nmero gerado foi ${numX}`)
    .then(console.log)
function geradorDeNumeros(min, max, numerosProibido){
    if(min > max) [min, max]=[max,min]

    return new Promise((resolve,reject) => {
        const fatore = max -min +1
        const aleatorio = parseInt(Math.random()*fatore) + min
        if(numerosProibido.includes(aleatorio)){
            reject('numero repetido')
        }else{
        resolve(aleatorio)

        }
    })
}

geradorDeNumeros(1,5,[1,3,5])
    .then(console.log)
    .catch(console.log)
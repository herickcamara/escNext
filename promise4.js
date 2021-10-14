function geraNumeros(min, max, tempo) {
    if(min > max) [max, min] = [min,max]
   
    return new Promise(resolve =>{
        setTimeout(function() {
            const fator = max - min +1
            const aleatorio = parseInt(Math.random()*fator) + min
            
            resolve(aleatorio)

        
         }, tempo)


    })
}   





function geraAleatorio(){
    return Promise.all([
        geraNumeros(1, 10, 4000),
        geraNumeros(1, 10, 500),
        geraNumeros(1, 10, 600),
        geraNumeros(1, 10, 1000),
        geraNumeros(1, 10, 1500),
    ])
} 

geraAleatorio().then(num => console.log(num))
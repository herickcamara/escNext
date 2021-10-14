function falaDepois(sengundo, frase){
    return new Promise((resolve, rejact)=>{
        setTimeout(()=>{
            resolve(frase)
            rejact(frase.concat('/erro'))//retona o erro
        }, sengundo *1000)
    })
}

falaDepois(2,'ola mundo')
    .then(frase =>{
        console.log(frase)
        return frase.concat('/ hello world')
    })
    .then(outraFrase => console.log(outraFrase))
    .catch(erro => console.log(erro))//pega o erro e mostra
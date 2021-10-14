const fs = require('fs')
const path = require('path')

function lendoArquivo(caminho){
    return new Promise(resolve => {
        fs.readFile(caminho, function(_, co){
             resolve(co.toString())
        })
    })
}
const caminho = path.join(__dirname, 'dade.txt')

lendoArquivo(caminho)
    .then(conteudo => console.log(conteudo))

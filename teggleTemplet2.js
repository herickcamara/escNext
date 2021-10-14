
function real(strings, ...values){
    const resut = new Array
    values.forEach((valor, indice) =>{
        valor = isNaN(valor) ? valor : `R$:${valor.toFixed(2).replace('.',',')}`
        resut.push(strings[indice], valor)
    })
    return resut.join('')
}
const preco = 12.5
const parcela = 3.9
console.log(real `bone ${preco} ou de 3 X ${parcela}`)
//teggleTemṕleti sempara as parter valor e string
function teg(parte, ...values){
    console.log(parte)
    console.log(values)
    return 'outra string'
}

let aluno = 'herick'
let status = 'aprovado'

console.log(teg `${aluno} esta ${status}`)
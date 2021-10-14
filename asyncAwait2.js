
const http  = require('http')


const getTurma =(letra)=>{
 const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json` 
 return new Promise((resolve, rejects)=>{
    http.get(url, res =>{
        let resutado = ''
        
        res.on('data',data =>{
            resutado += data
        })
        res.on('end',()=>{
            try{
                resolve(JSON.parse(resutado))
            }catch(e){
                rejects(e)
            }
        })
    })

 })
   
}
//recurso do es8

const asyncAwait = async()=>{
 const turmaA = await getTurma('A')
 const turmaB = await getTurma('B')
 const turmaC = await getTurma('C')

 return [].concat(turmaA, turmaB, turmaC)
}

asyncAwait()
    .then(alunos => alunos.map(nomes => nomes.nome))
    .then(nomes => console.log(nomes))
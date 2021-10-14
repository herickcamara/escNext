// com promise

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
 /* let nomes = []

 getTurma('A', alunos=>{
     nomes = nomes.concat(alunos.map(a=>`A: ${a.nome}`))
     getTurma('B', alunos=>{
         nomes = nomes.concat(alunos.map(a=>`B: ${a.nome}`))
        getTurma('C', alunos=>{
            nomes = nomes.concat(alunos.map(a=>`C: ${a.nome}`))
             console.log(nomes)

        })
     })
 }) */

 Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then(turmas => [].concat(...turmas))
    .then(x => x.map(nomes => nomes.nome))
    .then(nomes => console.log(nomes))
    .catch(e => console.log(e.message))

    
getTurma('D').catch(e => console.log(e.message))

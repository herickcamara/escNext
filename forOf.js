for(let letra of 'herick'){
    console.log(letra)
}
console.log('===============')
//forIn 
const assuntoEcm = ['map','set','promis']
for(let i in assuntoEcm ){
    console.log(i)
}
// forOf
for(let assunto of assuntoEcm){
    console.log(assunto)
}

console.log('=======forOf no Map========')

//forOf em map

const assuntoMap = new Map([
    ['Map',{abordado: true}],
    ['Set',{abordado: true}],
    ['Promis',{abordado: false}],
])

for(let assunto of assuntoMap){
    console.log(assunto)
}

for(let chave of assuntoMap.keys()){
    console.log(chave)
}
for(let valor of assuntoMap.values()){
    console.log(valor)
}
for(let [cv, vl] of assuntoMap.entries()){
    console.log(cv, vl)
}
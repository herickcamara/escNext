const tecnologia = new Map()
tecnologia.set('react',{fremework: false})
tecnologia.set('angula', {fremework: true})

console.log(tecnologia.react)//errado

console.log(tecnologia.get('react'))
console.log(tecnologia.get('angula'))


const tecnologia1 = new Map([
    [function(){},'funcao'],
    [{}, 'object'],
    [123, 'Number']
])

tecnologia1.forEach((cv, vl)=>{
    console.log(cv, vl)
})
console.log(tecnologia1.has(123))//true
tecnologia1.delete(123)
console.log(tecnologia1.has(123))
console.log(tecnologia1.size)

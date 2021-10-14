//set nao a seita repetiçao/ nao indexada
const times = new Set()
times.add('vasco')
times.add('são Paulo').add('palmeiras').add('corinthias')
times.add('vasco')
console.log(times)
times.delete('vasco')
console.log(times)
console.log(times.has('são Paulo'))

//set com array
const a = ['herick','mariana','anaLiz','mariana']

const name = new Set(a)
console.log(name)


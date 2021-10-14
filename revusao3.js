//ES8: Object.values/Object.entries
const obj = {a:1,b:2,c:3}
console.log(Object.values(obj))
console.log(Object.entries(obj))

//melhoria na a Notaçao Literal
const  name = 'herick'
const pessoa = {
    name,
    ola(){
        return 'Oi Gente'
    }
}
console.log(pessoa.name, pessoa.ola())

//class
class animal {
    falar(){
        return 'au au'
    }
}

class cachora extends animal {
  name() {
      return 'herick'
  }
  
    
}

console.log(new cachora().name(), new cachora().falar())
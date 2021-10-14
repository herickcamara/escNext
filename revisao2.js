// arrow function
const soma = (a,b)=> a+b
console.log(soma(2,3))

//this dentro de uma arrow function(this == exports)
const valueThis =()=> (this === exports)&&(this === module.exports)
console.log(valueThis())

// this dentro de uma function padrao "this == global"
function valueThis2(){
    console.log((this === exports)&&(this === module.exports))//false
    console.log(this === global)//true

}
valueThis2()

//parametro default
function log(text = 'Node'){
    console.log(text)
}
log()//value default
log('exeplo')//value pasado

//operado rest
function total(...rest){
    let total =0 
    rest.forEach(n => total+=n)
    return total
}
console.log(total(1,2,3,4,5))
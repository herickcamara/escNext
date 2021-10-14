// operador rest(ajunta) / spread(espalha)
//use rest como paramedro de uma funçao

//usa spread em um Object
const funcianario = {name:'herick', salario:10000}
const navaEmpresa = {pais:'canada', ...funcianario}
console.log(navaEmpresa)

//usa spread em um arrya
const number1 = [2,34,56,7,4,]
const number2 = [3, 1, 5, ...number1, 9]
console.log(number2.sort())


//usando rest com number
function test(...paremetro){
    let total =0
    paremetro.map(n => total+=n)
    console.log(paremetro)
    console.log(total)

}
test(1,2,3,4,5)

//usando rest com object

function obj(...params){
    console.log(params)

    // const obj = new Object
    params.map(ob =>  obj = new Object(ob))
    return obj
}
console.log(obj(funcianario))
// let e const
{
    var a = 1
    let b = 2
    console.log(b)
}

console.log(a)

// Destructuring
const [l,e, ...tras]= 'herick'
console.log(l,e,tras)

const [x, ,y] = [1,2,3]

console.log(x, y)

const {name, idade:i} = {name:'herick', idade:28}

console.log(name, i)

//templeita string

console.log(`
${name} tem
a
idade ${i}`)
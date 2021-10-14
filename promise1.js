const primeiroElemanto = arrayOuString => arrayOuString[0];


const p = new  Promise(function(callback){
    callback([1,2,3,4,5])
})
    
.then(primeiroElemanto)
.then(valor => console.log(valor))
    

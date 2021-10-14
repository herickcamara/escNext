//callback hall
/* 
setTimeout(function(){
    console.log('Executandor callback')
   
   
    setTimeout(function(){
        console.log('Executandor callback')
    
        setTimeout(function(){
             console.log('Executandor callback') 

        },2000)
    },2000)
},2000) */

function esperaPor(tempo =2000){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
           console.log('Executando promise')
           resolve()
        },tempo)
    })
}

esperaPor()
    .then(() => esperaPor())
    .then(esperaPor)
    
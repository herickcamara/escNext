function esperaPor(tempo = 2000){
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve()
        }, tempo)
    })
}


function retornaValor(){
    return new Promise(resolve =>{
        setTimeout(()=> resolve(10), 5000)
    })
}


async function executa(){
    let n1 = await retornaValor()   
    await esperaPor(1500)
    console.log(`asyncAwait ${n1}`)
    await esperaPor(1500)
    console.log(`asyncAwait ${n1 < 1}`)

    await esperaPor(1500)
    console.log(`asyncAwait ${n1 >2}`)

}

executa()
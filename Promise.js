//Promises 

const aplicardescuento = new Promise ((resolve,reject)=> {
    setTimeout (() => {
        let descuento=true
    
        if(descuento){
            resolve('descuento aplicado!')
        }else{
            reject('No se pudo aplicar el descuento')
        }
    
    },3000);
    
    }) ;
    
    aplicardescuento.then(resultado=>{
        console.log(resultado);
    }).catch(error=>{
        console.log(error);
    })
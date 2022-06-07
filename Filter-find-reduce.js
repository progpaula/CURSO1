//metodos en arreglos 

const personas =[
    {nombre:'Juan',edad:23, aprendiendo:'JavaScript'},
    {nombre:'Pablo',edad:10, aprendiendo:'PHP'},
    {nombre:'Alejandra',edad:21, aprendiendo:'AdobeXD'},
    {nombre:'Caren',edad:30, aprendiendo:'Python'},
    {nombre:'Miguel',edad:35, aprendiendo:'ReactJs'},
]

console.log(personas);

// mayores de 28 años 

const mayores=personas.filter(personas=>{
    return personas.edad > 28;
});

//console.log(mayores);

//que aprende alejandra 

const Alejandra=personas.find(persona=>{
    return personas.nombre=='Alejandra';
});
//console.log('Alejandra esta aprendiendo:'+Alejandra.aprendiendo);

let=total=personas.reduce((edadtotal,persona)=> {
    return edadtotal+persona,edad;
},0);

console.log(total/personas.length);

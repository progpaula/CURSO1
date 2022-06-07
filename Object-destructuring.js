//Destructuring de objetos

const aprendiendoJS={
    version: {
        nueva:'ES6',
        anterior:'ES5',
    },
    franeworks:['React', 'VueJS', 'AngularJS'],
}

//Destructuring es extraer valores de un objeto 
//console.log(aprendiendoJS);
//Version Anterior 
//Let version=apendiendoJS.version.nuevaM;
//Let framework=aprendiendojs.framework[1¨];

//Destructuring forma nueva

let {anterior}=aprendiendoJS.version;
console.log(anterior);
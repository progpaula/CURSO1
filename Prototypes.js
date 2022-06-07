//objetos 


function mostrarinfromacionTarea(nombre,urgencia){
    return `la tarea ${nombre} tiene una prioridad de ${urgencia} `;

}

//object Literal 
const persona= {
    nombre: 'Paula',
    profesion: 'Desarrollador web',
    edad:500}
// console.log(persona);
// const mostrarcliente=mostrarinfromacionTarea(persona.nombre,persona.profesion);
// console.log(mostrarCliente);

//object constructor 
function Tarea (nombre, urgencia){
    this.nombre=nombre;
    this.urgencia=urgencia;
}

//Agrepgar un prototype a tarea 

Tarea.prototype.mostrarinfromacionTarea=function mostrarinfromacionTarea (){
    return `La tarea ${ this.nombre}tiene prioridad de ${this.urgencia }`;

}


//crear una nueva tarea 
const tarea1 = new Tarea('Aprender JavaScript y React','Uregente');
const tarea2 = new Tarea('Pasear al perro ','Media');
console.log(tarea1)
console.log(tarea1.mostrarinfromacionTarea());
console.log(tarea2)
console.log(tarea2.mostrarinfromacionTarea());

//objetos 

//object Literal 
const persona= {
    nombre: 'Paula',
    profesion: 'Desarrollador web',
    edad:500}

//object constructor 
function Tarea (nombre, urgencia){
    this.nombre=nombre;
    this.urgencia=urgencia;
}

//crear una nueva tarea 
const tarea1 = new Tarea('Aprender JavaScript y React','Uregente');
const tarea2 = new Tarea('Preparar cafe ','Uregente');
const tarea3 = new Tarea('Pasear al perro','media');
const tarea4 = new Tarea('Conocer a mis suegros','baja');

console.log(tarea1)
console.log(tarea2)
console.log(tarea3)
console.log(tarea4)



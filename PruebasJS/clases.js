//SOLO en ES6
//Esto es de "menterijillas"

class User {
    constructor (nombre,apellidos,edad,genero){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.genero = genero;
    }
        saludar() {
            console.log(`Hola, soy ${this.nombre} y ya somos muchos`)
        }
}

oUser = new User("Juan", "Lopez", 33, "H");
oUser.saludar();
//console.log(oUser);

class Alumno extends User{
    constructor(nombre,apellidos,edad,genero,curso){
        super(nombre,apellidos,edad,genero);
        this.curso = curso;
    }
    saludar() {
        console.log(`Hola, soy ${this.nombre} y ya somos muchos alumnos y heredo de User`)
    }
}

Alumno1 = new Alumno("Pedro", "Lopez", 33, "H","Angular");
Alumno1.notas = [9,8,10];
console.log(Alumno1);
Alumno1.saludar();
    
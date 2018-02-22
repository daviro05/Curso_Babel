
const oUserLit = {
    nombre: "Pepe",
    apellidos: "Perez",
    edad : 23,
    genero : "H",
    saludar : function(){console.log(`Hola, soy ${this.nombre}`)}
}

const oUserLit2 = {
    nombre: "Julia",
    apellidos: "Perez",
    edad : 23,
    genero : "M",
    saludar : function(){console.log(`Hola, soy ${this.nombre}`)}
}

// Uso de funciones constructoras

function User(nombre,apellidos,edad,genero){
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.edad = edad;
    this.genero = genero;
    ++User.prototype.numUsers;
}

//Al poner las funciones en el prototipo solo hay una copia de esa funcion, mientras que si la metemos en el constructor,
//habria copias de cada vez que se llame a esa funcion.
User.prototype.numUsers = 0;
User.prototype.saludar = function(){console.log(`Hola, soy ${this.nombre} y ya somos ${this.numUsers}`)}

//var mostrarA1 = pData1 => console.log(this);

//Formas de invocacion
//mostrarA1();
//console.log(this);
//new User();
//call/apply


oUserLit.saludar();
oUserLit2.saludar();

oUser = new User("Juan", "Lopez", 33, "H");
//console.log(oUser);
//console.log(typeof oUser);
oUser.saludar();

oUser2 = new User("Raquel", "Lopez", 33, "M");
//console.log(oUserLit);
//console.log(typeof oUserLit);
oUser2.saludar();


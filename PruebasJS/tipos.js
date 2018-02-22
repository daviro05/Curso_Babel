console.log('Hola Mundo');

/*
Tipos de JS son (Tipos elementales)
- string
- number
- boolean

- undefined (null)

- Object (null)
    - Arrays
    - String
    - Number
    - Boolean
    - Funtion // Las funciones en JS son objetos. Podeos pasarla como parámetro, asignarla, etc.
    - Date
    - Math
    - JSON
    - RegExp

    (Funciones constructoras de objeto)
*/

var nombreAlumno = "Pepe";
var edadAlumno = 23;
var isAlumno = true;

var oNombreAlumno = new String("Pepe");
var oEdadAlumno = new Number(23);
var oIsAlumno = new Boolean(true);

console.log(nombreAlumno.toUpperCase()); //Método del objeto envolvente
console.log('');
console.log(typeof nombreAlumno);
console.log(typeof edadAlumno);
console.log(typeof isAlumno);
console.log('');
console.log(typeof oNombreAlumno);
console.log(typeof oEdadAlumno);
console.log(typeof oIsAlumno);
console.log('');
console.log( oNombreAlumno);
console.log( oEdadAlumno);
console.log( oIsAlumno);
console.log('');
console.log(oNombreAlumno.toString());
console.log(oEdadAlumno.valueOf());
console.log(oIsAlumno.valueOf());

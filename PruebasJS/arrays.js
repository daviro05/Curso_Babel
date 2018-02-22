let aDatos = new Array(12,34,56,12);
let aNombres = ["Pepe", "Juan", "Luis",33];

console.log(aDatos);
console.log(aNombres);

console.log(typeof aDatos);
console.log(typeof aNombres);

console.log(aDatos.length);
console.log(aNombres.length);

//aDatos[aDatos.length] = 65; no se usa

aDatos.push(65);
console.log(aDatos);

// Procesamiento imperativo //Bucle
let suma = 0;

/*for (let i = 0; i < aDatos.length; i++) {
    suma += aDatos[i];
}*/

//Funciones declarativas.

aDatos.forEach((item) => {suma += item});
let mapDatos = aDatos.map(item => ++item);
let filterDatos = aDatos.filter(item => {return item > 50});

console.log(suma);
console.log(mapDatos);
console.log(filterDatos);
// Asincronía

// Eventos de usuario
// Datos del servidor
// Temporización

// setTimeOut se ejecuta una sola vez después de que pase el tiempo indicao. Necesita un callback y tiempo.

//function hazesto(){} //ASi es mas claro, pero no se hace

let x = 12;

setTimeout(
    () => {
        console.log("Hola asincrono")           //Primer parametro es la funcion
        x = 2*x;
    },   
    1000);                                    // SEgundo parametro el tiempo

console.log(x);

// En ES6

// resolve: se ha ejecutado correctamente
// reject: ha habido algun problema

// Construcción de la promesa

const consulta = function() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {resolve("Todo OK")}, 3000);
    })
}
// then() cuando todo ha ido bien. 
// catch() cuando algo ha salido mal.

let resultados = 
    consulta().then((res) => {console.log(res)})

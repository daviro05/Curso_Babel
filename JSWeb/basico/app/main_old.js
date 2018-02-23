/* 
    Eventos al cargar la página
    document > DOMContentLoaded
    window > load
*/

//Creamos un clousure para envolver la función para intentar que no haya nada en memoria global.

(function (){
    document.addEventListener("DOMContentLoaded",main,false);
    //window.addEventListener("load",main,false);
})();

// Acceso al DOM

//document.getElementById();
//document.querySelector('input'); //Obtiene el primer resultado encontrado
//document.querySelectorAll('button'); // Obtiene todos los resultados

// Las funciones se elevan, se cargan al principio.

function main(){
    console.log("Documento cargado");
    console.dir(window); //Saca el objeto con su estructura de objeto.
    //console.dir(document.querySelector('input'));
    //console.dir(document.querySelectorAll('button')[0]);

    console.dir(document.querySelector('#btnSaludar'));
    console.dir(document.querySelector('#btnRegistrar'));

    document.querySelector('#btnSaludar').addEventListener("click",saludar,false);
    document.querySelector('#btnRegistrar').addEventListener("click",registrarse,false);
    document.querySelector('#btnGoogle').addEventListener("click",google,false);
}

function saludar(){
    window.alert("Hola a todos");
}

function registrarse(){
    let user;
    user = window.prompt("Dime tu nombre");
}

function google(){
    console.log( window.location.href);
    window.location.href = "http://www.google.es";
    //window.open("http://www.google.es");
}





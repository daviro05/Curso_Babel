class Main{

    // Contructor que ejecuta una función anónima arrow y como en ellas se respeta el this, no hay que hacer bind
    constructor(){
        document.addEventListener("DOMContentLoaded",() => {
        console.log("Documento cargado");
        console.dir(window); //Saca el objeto con su estructura de objeto.
        console.dir(document.querySelector('#btnSaludar'));
        console.dir(document.querySelector('#btnRegistrar'));
        document.querySelector('#btnSaludar').addEventListener("click",this.saludar,false);
        document.querySelector('#btnRegistrar').addEventListener("click",this.registrarse,false);
        document.querySelector('#btnGoogle').addEventListener("click",this.google,false);
        },false);

    }

    saludar(){
        window.alert("Hola a todos");
    }

   registrarse(){
        let user;
        user = window.prompt("Dime tu nombre");
    }

    google(){
        console.log( window.location.href);
        window.location.href = "http://www.google.es";
    }
}
//Creamos un clousure para envolver la función para intentar que no haya nada en memoria global.

(function (){
    let oMain = new Main(); // No hace falta darle un nombre podríamos ponerle new Main()
    /*document.addEventListener("DOMContentLoaded",
    () => { oMain = new Main()},
    false);*/

})();






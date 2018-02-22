function main(mostrar){
    const user = {
        nombre: "Pepe",
        apellidos: "Perez",
        edad : 23
    }
    //Salida usando un template string
    mostrar(`
            El usuario es
            ${user.nombre} ${user.apellidos}`);
}

function enMayusculas(pDato = "No se tu nombre"){
    //typeof pDato === string ? pDato : "No se tu nombre";
    console.log(pDato.toUpperCase());
}
function enMinusculas(pDato = "No se tu nombre"){ //Parámetros por defecto
    console.log(pDato.toLowerCase());
}

//main(enMayusculas); //mostrar es el parámetro que le pasamos la funcion enMayusculas.
//main(enMinusculas);

/*main(function(pDato){
    console.log(pDato.toLowerCase())
});*/

// Con Arrow Function

main(pDato => console.log(pDato.toLowerCase()))
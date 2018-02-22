//Declaración de la función

function mostrar1(pData){
   
    console.log(pData);

    /*if(true)*/{
        var localEdad = 23;
        let localEdad2 = 24;
        const AÑO = 2018;
        //AÑO++ fallaría porque es un constante
    }
    console.log(localEdad);
   // console.log(localEdad2); //Fallaría, ya que está declarada como let
}

// Uso

/* var oDatos1 = new Object();
var oDatos2 = {}; */

var mostrar2 = function(pData1,pData2){
    console.log(pData1,pData2);
   // console.log(localEdad); // Aquí daría error.
}

// ARROW FUNCTION (ES6)

var mostrarA2 = (pData1, pData2) =>{
    console.log(pData1,pData2);
}

var mostrarA1 = (pData1) => console.log(pData1,pData2);



var nombre = "Pepe";
var apellidos = "Perez";
mostrar1(nombre);
mostrar2(nombre, apellidos);

console.log(typeof mostrar1);
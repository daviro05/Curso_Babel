//Objeto literal de tipo Object

const user = {
    nombre: "Pepe",
    apellidos: "Perez",
    edad : 23
}

//user = {}; Daría error

//user.genero = "H";

//Para proteger nuestras funciones le debemos poner const

//Object.assign(user); //Cualquier objeto tiene sus propios metodos estáticos. assign() lo que hace es que al pasarle un objeto lo clona.

const mostrarA1 = (pData1) => {
    pData1.genero = "H"; 
    console.log(pData1); 
}


//mostrarA1 = 92;

mostrarA1(Object.assign({},user)); // Clona el objeto, lo pasa sin modificar el original

//Serializacion y desealrización

mostrarA1(JSON.parse(JSON.stringify(user)))
//JSON.stringify(objeto); // string tipo JSON
//JSON.parse(string_tipo_JSON); //Objeto


console.log(user); // Se muestra lo mismo ya que es una referencia.

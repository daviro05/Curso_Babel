class Main{

    constructor(){
        this.user = {
            nombre: ""
        };
        this.vista = {
            btnRegistrar: document.querySelector("#btnRegistrarse"),
            inNombre: document.querySelector("#nombre"),
            resultado: document.querySelector("#resultado"),
            inTarea: document.querySelector("#tarea"),
            btnAdd: document.querySelector("#btnAdd"),
            tareas: document.querySelector("#tareas") 
        };
        this.tarea = {};
        this.aTareas = [];

        this.vista.btnRegistrar.addEventListener('click',this.registrarse.bind(this),false);
        this.vista.btnAdd.addEventListener('click',this.addtarea.bind(this),false);

    }

   registrarse(){
      //console.log(this.user.nombre);
      this.user.nombre = this.vista.inNombre.value;
      console.log(this.user.nombre);
      this.vista.resultado.innerHTML = `<p>Hola ${this.user.nombre}</p>`;
      //this.vista.resultado.className = "rojo"; //Este no se utiliza ya que no sabemos si jhay mas clases
      this.vista.resultado.classList.toggle("rojo");
    }

    addtarea(){
        let lista;
        this.tarea = this.vista.inTarea.value;
        this.aTareas.push(this.tarea);
        lista = "<ul>";
        this.aTareas.forEach(item =>lista+=`<li>${item}</li>`);
        lista += "</ul>";

        this.vista.tareas.innerHTML = lista;
    }

}

(function (){
    document.addEventListener("DOMContentLoaded",() => new Main(),false)
})();






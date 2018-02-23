class Main{

    constructor(){
        this.user = {
            nombre: localStorage.getItem("nombre")
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
        this.aTareas = JSON.parse(localStorage.getItem("tareas")) ? JSON.parse(localStorage.getItem("tareas")) : [];

        this.vista.btnRegistrar.addEventListener('click',this.registrarse.bind(this),false);
        this.vista.btnAdd.addEventListener('click',this.addtarea.bind(this),false);
        
        this.mostrarNombre();
        this.aTareas.length ? this.mostrarTareas() : null;
    }

      registrarse(oEv){
      //console.log(this.user.nombre);
      this.user.nombre = this.vista.inNombre.value;
      //console.log(this.user.nombre);
      localStorage.setItem("nombre",this.user.nombre);
      this.mostrarNombre();
      console.log(oEv);
    }

    mostrarNombre(){
        if(this.user.nombre){
            //console.log(this.user.nombre);
            this.vista.resultado.innerHTML = `<p>Hola ${this.user.nombre}</p>`;
            this.vista.resultado.classList.toggle("rojo");
        }
    }

    addtarea(){
        this.tarea = this.vista.inTarea.value;
        this.aTareas.push(this.tarea);
        localStorage.setItem("tareas",JSON.stringify(this.aTareas))
        this.mostrarTareas();
    }

    mostrarTareas(){
        let lista;
        lista = "<ul>";
        this.aTareas.forEach(item =>lista+=`<li>${item}</li>`);
        lista += "</ul>";
        this.vista.tareas.innerHTML = lista;
    }

}

(function (){
    document.addEventListener("DOMContentLoaded",() => new Main(),false)
})();






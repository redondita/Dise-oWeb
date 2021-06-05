function guardarDatos() {
    var nombre = document.getElementById("nombre").value;
    var movil = document.getElementById("movil").value;
    localStorage.setItem(nombre, movil);
    document.getElementById("nombre").value="";
    document.getElementById("movil").value="";
    actualizarDatos();

function recuperarDatos() {
    var nombre = document.getElementById("nombre").value;
    localStorage.getItem(nombre);
    document.getElementById("movil").value=localStorage.getItem(nombre);
}
function eliminarDato(){
    var nombre = document.getElementById("nombre").value;
    localStorage.removeItem(nombre);
    actualizarDatos();
    
}

function eliminarTodo(){
    localStorage.clear();
    actualizarDatos();
}

function actualizarDatos(){
    var registro = "";
    if (localStorage.length===0){
        registro += '<li>vacio</li>';
    }else{
        for(var i = 0; i<= localStorage.length -1; i++){
            var key = localStorage.key(i);
            registro += '<li>' + '<span class="nombre">' + key +'</span>' + '<span class="nombre">' + localStorage.getItem(key) + '</span>' + '</li><br>';
        }
    }
    document.getElementById('contactos').innerHTML = registro;
}
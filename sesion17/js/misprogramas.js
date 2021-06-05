$(document).ready(function(){
    $("a").click(function(evento){
        alert("Has pulsado el enlace. Ahora saldras a la pagina de la Usat");
    });
});

//ocultar / mostrar una caja

$("#c1b").click(function(){
    $("#cont1").toggle(1500);
}, function(){
    $("#cont1").toggle(1500);
});
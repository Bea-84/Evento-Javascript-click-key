function tecla(event){

    event.preventdefault();

    alert("Se ha pulsado una tecla");
    alert("Se ha presionado la tecla: "+ event.key);
}

$("body").keydown(tecla);

//Este ejemplo es para probar evento key es decir al pulsar una tecla dentro de body nos dira cual ha sido pulsada
//$ esto se le aplicará a todas etiquetas body


  
// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'My App',
    // App id
    id: 'com.myapp.test',
    // Enable swipe panel
    panel: {
      swipe: 'left',
    },
    // Add default routes
    routes: [
      {path: '/index/', url: 'index.html', },
      {path: '/anotador/', url: 'anotador.html', },

    ]
    // ... other parameters
  });

var mainView = app.views.create('.view-main');

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});

// Option 1. Using one 'page:init' handler for all pages
$$(document).on('page:init', function (e) {
    // Do something here when page loaded and initialized
    //console.log(e);
})

// Option 2. Using live 'page:init' event handlers for each page
$$(document).on('page:init', '.page[data-name="about"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    console.log(e);
    alert('Hello');
})

$$(document).on('page:init', '.page[data-name="index"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    console.log("Inicia index");
    $$("#IrAAnotador").on('click', fnIrAAnotador);
})

$$(document).on('page:init', '.page[data-name="anotador"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    console.log("Inicia anotador");
    $$("#volver").on('click', fnIrAInicio);
    $$('#j1Nombre').html(jugador1);
    $$('#j2Nombre').html(jugador2);
    $$('.popover-open').on('click', function(){posicion=this.id; dado=posicion[2]; fnTitlePopover()});
    $$('.popover-close').on('click', function(){cant=this.id; cant=parseInt(cant[0]); fnCalcular(); fnTotal()});
    $$('#terminar').on('click', fnTerminar);
    $$('#borrar').on('click', fnBorrar);
})
var jugador1 ="";
var jugador2 =""; 
var posicion =0, dado=0, cant=0, acum1=0, acum2=0;

function fnIrAAnotador() {
    jugador1 = $$('#IndexJugador1').val();
    jugador2 = $$('#IndexJugador2').val();
    if (jugador1!="" && jugador2!="") {
        mainView.router.navigate('/anotador/');
        $$('#volverInicio').removeClass('oculto').addClass('visible');
    } else {
        alert("Completa ambos campos!")
    }
    
}

function fnIrAInicio(){
    fnBorrar();
    mainView.router.navigate('/index/');
    $$('#volverInicio').removeClass('visible').addClass('oculto');
}

function fnTitlePopover(){
    if (dado>=1 && dado<=6){$$('#titleNro').html("Dado " + dado);} 
    if (dado == "e"){$$('#titleJuego').html("Juego escalera");}
    if (dado == "f"){$$('#titleJuego').html("Juego full");}
    if (dado == "p"){$$('#titleJuego').html("Juego poker");}
    if (dado == "g"){$$('#titleJuego').html("Juego generala");}
    if (dado == "d"){$$('#titleJuego').html("Juego doble generala");}
}
function fnCalcular(){

    if(dado >= 1 && dado <= 6){
        $$('#'+ posicion).html(cant * dado);
    } 
    if (cant == 6) {
        $$('#'+ posicion).html("X");
    }
    if (dado == "e"){
        if(cant == 7){
            $$('#'+ posicion).html(25);
        } else if(cant == 8){
            $$('#'+ posicion).html(20);
        } else {
            $$('#'+ posicion).html("X");
        }
    }
    if (dado == "f"){
        if(cant == 7){
            $$('#'+ posicion).html(35);
        } else if(cant == 8){
            $$('#'+ posicion).html(30);
        } else {
            $$('#'+ posicion).html("X");
        }
    }
    if (dado == "p"){
        if(cant == 7){
            $$('#'+ posicion).html(45);
        } else if(cant == 8){
            $$('#'+ posicion).html(40);
        } else {
            $$('#'+ posicion).html("X");
        }
    }
    if (dado == "g"){
        if(cant == 7){
            $$('#'+ posicion).html(55);
        } else if(cant == 8){
            $$('#'+ posicion).html(50);
        } else {
            $$('#'+ posicion).html("X");
        }
    }
    if (dado == "d"){
        if(cant == 7){
            $$('#'+ posicion).html(65);
        } else if(cant == 8){
            $$('#'+ posicion).html(60);
        } else {
            $$('#'+ posicion).html("X");
        }
    }
   
}
function fnTotal(){
    // Sumatoria Jugador 1:
    acum1=0;
    for(i=1;i<=6;i++){
        if($$('#p1'+ i).html() == "X" || $$('#p1'+ i).html() == "-" ){
            acum1 += 0; 
        } else {
            acum1 += parseInt(($$('#p1'+ i).html()));
        }
    }

    if($$('#p1e').html()== "X" || $$('#p1e').html()== "-"){
        acum1 += 0;
    } else {
        acum1 += parseInt($$('#p1e').html());
    }

    if($$('#p1f').html()== "X" || $$('#p1f').html()== "-"){
        acum1 += 0;
    } else {
        acum1 += parseInt($$('#p1f').html());
    }

    if($$('#p1p').html()== "X" || $$('#p1p').html()== "-"){
        acum1 += 0;
    } else {
        acum1 += parseInt($$('#p1p').html());
    }

    if($$('#p1g').html()== "X" || $$('#p1g').html()== "-"){
        acum1 += 0;
    } else {
        acum1 += parseInt($$('#p1g').html());
    }

    if($$('#p1d').html()== "X" || $$('#p1d').html()== "-"){
        acum1 += 0;
    } else {
        acum1 += parseInt($$('#p1d').html());
    }

    $$('#totalA').html(acum1);

    //Sumatoria Jugador 2:
    acum2=0;
    for(i=1;i<=6;i++){
        if($$('#p2'+ i).html() == "X" || $$('#p2'+ i).html() == "-" ){
            acum2 += 0; 
        } else {
            acum2 += parseInt(($$('#p2'+ i).html()))
        }
    }

    if($$('#p2e').html()== "X" || $$('#p2e').html()== "-"){
        acum2 += 0;
    } else {
        acum2 += parseInt($$('#p2e').html());
    }

    if($$('#p2f').html()== "X" || $$('#p2f').html()== "-"){
        acum2 += 0;
    } else {
        acum2 += parseInt($$('#p2f').html());
    }

    if($$('#p2p').html()== "X" || $$('#p2p').html()== "-"){
        acum2 += 0;
    } else {
        acum2 += parseInt($$('#p2p').html());
    }

    if($$('#p2g').html()== "X" || $$('#p2g').html()== "-"){
        acum2 += 0;
    } else {
        acum2 += parseInt($$('#p2g').html());
    }

    if($$('#p2d').html()== "X" || $$('#p2d').html()== "-"){
        acum2 += 0;
    } else {
        acum2 += parseInt($$('#p2d').html());
    }

    $$('#totalB').html(acum2);
   
}

function fnTerminar(){
    $$('#j1').html(jugador1+": "+acum1 );
    $$('#j2').html(jugador2+": "+acum2 );
}

function fnBorrar(){
    for(i=1; i<=6; i++){
        $$('#p1'+i).html("-");
    }
    $$('#p1e').html("-");
    $$('#p1f').html("-");
    $$('#p1p').html("-");
    $$('#p1g').html("-");
    $$('#p1d').html("-");
    acum1 = 0
    $$('#totalA').html(acum1);

    for(i=1; i<=6; i++){
        $$('#p2'+i).html("-");
    }
    $$('#p2e').html("-");
    $$('#p2f').html("-");
    $$('#p2p').html("-");
    $$('#p2g').html("-");
    $$('#p2d').html("-");
    acum2 = 0
    $$('#totalB').html(acum2);

}







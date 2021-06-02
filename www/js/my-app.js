  
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
    $$("#volverInicio").on('click', fnIrAInicio);
    $$('#j1Nombre').html(jugador1);
    $$('#j2Nombre').html(jugador2);
    $$('#p11').on('click', fnCalcular1);
    $$('#p12').on('click', fnCalcular1);
    $$('#p13').on('click', fnCalcular1);
    $$('#p14').on('click', fnCalcular1);
    $$('#p15').on('click', fnCalcular1);
    $$('#p16').on('click', fnCalcular1);
    $$('#p17').on('click', fnCalcular1);
    $$('#p18').on('click', fnCalcular1);
    $$('#p19').on('click', fnCalcular1);
    $$('#p20').on('click', fnCalcular1);
    $$('#p21').on('click', fnCalcular1);
    $$('.popover-open').on('click', function(){posicion=this.id; dado=posicion[2]});
    $$('.popover-close').on('click', function(){cant=this.id; cant=parseInt(cant[0]); fnCalcular()});
})
var jugador1 ="";
var jugador2 =""; 
var juegos = [1,2,3,4,5,6, "escalera", "full", "poker", "generala", "doblegenerala"];
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
    mainView.router.navigate('/index/');
    $$('#volverInicio').removeClass('visible').addClass('oculto');
}


function fnCalcular(){
    if(dado>=1 && dado<=6){
        $$('#'+ posicion).html(cant * dado);
    } 
    if (cant == 6) {
        $$('#'+ posicion).html("X");
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
    if (dado == "e"){
        if(cant == 7){
            $$('#'+ posicion).html(25);
        } else if(cant == 8){
            $$('#'+ posicion).html(20);
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




function fnCalcular1(){
    for(i=0; i<=juegos.length; i++){
        $$('#titleNro').html("Dado "+ juegos[i]);
    }
    for(i=6; i<=juegos.length; i++){
        $$('#titleJuego').html("Juego: "+ juegos[i]);
    }
   
} 


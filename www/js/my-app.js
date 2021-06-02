  
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
   
})
var jugador1 ="";
var jugador2 ="";
var uno1=0; dos1=0; tres1=0; cuatro1=0; cinco1=0; seis1=0; escalera1=0; full1=0;poker1=0;generala1=0,doblegenerala1=0;
var uno2=0; dos2=0; tres2=0; cuatro2=0; cinco2=0; seis2=0; escalera2=0; full2=0;poker2=0;generala2=0,doblegenerala2=0; 
var juegos = [1,2,3,4,5,6, "escalera", "full", "poker", "generala", "doblegenerala"];

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

function fnCalcular1(){
    for(i=0; i<=juegos.length; i++){

    }
} 


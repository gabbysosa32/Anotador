  
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
})

var jugador1 ="";
var jugador2 ="";

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
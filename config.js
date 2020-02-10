requirejs.config( {
    baseUrl : "lib",
    paths : {
        jquery : "jquery/jquery",
        ko : "knockout/knockout"
    }
} );


requirejs( ['app/start'] );
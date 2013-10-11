requirejs.config({
    baseUrl: 'js/libs',
    paths: {
        jquery: 'jquery'
    }
});


require( ['jquery'], function( $ ) {
    console.log( $( '.test' ).text() );
} );
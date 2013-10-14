
require( ['d3', 'vega'], function( d3, vg ) {

    require( ['./modules/data'], function( dummyData ) {
        var table = {};
        table.table = dummyData.getData();
        require( ['./modules/bargraphVega'],
            function( spec ) {
                vg.parse.spec( spec, function( chart ) {
                  var view = chart( { el:"#view", data:table } ).update();
                });
            }
         );
    });

} );

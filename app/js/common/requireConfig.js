var require = {
    baseUrl: 'js',
    paths: {
        jquery   : 'libs/jquery',
        d3       : 'libs/d3.min',
        vega     : 'libs/vega',
        bows     : 'libs/bows',
        mediator : 'libs/mediator'
    },
    shim: {
        d3: {
            exports: 'd3'
        },
        vega: {
            exports: 'vg'
        }
    }
};

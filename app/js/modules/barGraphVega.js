/**
 * Module that returns the vega for a bar graph
 * ### TODO : Need to give it parameters for various properties
 *            see this https://github.com/trifacta/vega/wiki
 *
 * @return {Vega Spec}    Returns the specification for a bar graph vega
 */
define( function() {
    var spec = {
        "width"  : 400,
        "height" : 200,
        "padding": {"top": 10, "left": 30, "bottom": 30, "right": 10},
        "data"   : [{"name": "table"}],
        "scales" : [
            {
                "name": "x", "type": "ordinal", "range": "width",
                "domain": {"data": "table", "field": "data.x"}
            },
            {
                "name": "y", "range": "height", "nice": true,
                "domain": {"data": "table", "field": "data.y"}
            }
        ],
        "axes": [
            {"type": "x", "scale": "x"},
            {"type": "y", "scale": "y"}
        ],
        "marks": [
            {
                "type": "rect",
                "from": {"data": "table"},
                "properties": {
                    "enter": {
                        "x": {"scale": "x", "field": "data.x"},
                        "y": {"scale": "y", "field": "data.y"},
                        "y2": {"scale": "y", "value": 0},
                        "width": {"scale": "x", "band": true, "offset": -1}
                    },
                    "update": {
                        "fill": {"value": "steelblue"}
                    },
                    "hover": {
                        "fill": {"value": "red"}
                    }
                }
            },
        ]
    };
    return spec;
});

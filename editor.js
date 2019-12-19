require('jquery')
require('bootstrap')
const jsp = require('jsplumb');

const canvas = document.getElementById("canvas");

let elementCounter = 0;
let hoverSelection = {};
let primarySelected = {};
let selected = [];
let defaultEndpointOptions = {};

jsp.jsPlumb.bind("ready", function(){
    nonPlumbing = jsPlumb.getInstance({
        Endpoint: ["Dot", {radius: 4}],
        Connector: "Straight",
        HoverPaintStyle: {strokeWidth: 3},
        Container: "canvas"
    });
    defaultEndpointOptions = {
        endpoint:"Dot",
        paintStyle:{radius: 4, fill:'#666'},
        isSource:true,
        connectorStyle:{stroke:"#666"},
        isTarget:true
    };
    canvas.addEventListener("click", e => {
        primarySelected = {};
    });
});


require('jquery')
require('bootstrap')
const jsp = require('jsplumb');

const canvas = document.getElementById("canvas");

let elementCounter = 0;
let hoverSelection = {};
let primarySelected = {};
let selected = [];

jsp.jsPlumb.ready(function(){
    instance = jsPlumb.getInstance({
        Endpoint: ["Dot", {radius: 4}],
        Connector: "Straight",
        HoverPaintStyle: {strokeWidth: 3},
        Container: "canvas"
    });
    canvas.addEventListener("click", e => {
        primarySelected = {};
    });
    instance.bind("connection", function(info) {
        console.log("Connection event fired");
    })
});


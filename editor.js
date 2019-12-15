const jsp = require('jsplumb');
let nonPlumbing = {};
let elementCounter = 0;

jsPlumb.bind("ready", function(){
    jsPlumb.setContainer("canvas");
    nonPlumbing = jsPlumb.getInstance();
});

loadFile = () => {
    fetch("http://localhost/test.json")
        .then(response => response.text())
        .then((data) => {
            console.log(data)
        })
}

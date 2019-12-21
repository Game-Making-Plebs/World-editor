const jsp = require('jsplumb');

jsp.jsPlumb.ready(function () {

    elementCounter = 0;
    nodeArray = [];

    instance = window.instance = jsPlumb.getInstance({
        // drag options
        DragOptions: { cursor: "pointer", zIndex: 2000 },
        // default to a gradient stroke from blue to green.
        PaintStyle: {
        },
        Endpoint: ["Dot", { radius: 4 }],
        Connector: "Straight",
        HoverPaintStyle: { strokeWidth: 3 },
        Container: "canvas"
    });

    newNode = ({ left, top }) => {
        console.log("Adding a new bauble at: (" + left + ", " + top + ")");
        const node = document.createElement("div");
        node.id = elementCounter;
        node.className = "bauble";
        canvas.append(node);
        instance.draggable(node);
        node.style = calculateNodePosition(left, top);

        node.append(createConnectionPoint());
        nodeArray.push(node);
        addNodeEvents(node);
        instance.makeSource(node, {
            filter: ".connection-pull-point",
            filterExclude: false,
            anchor: ["Perimeter", { shape: "Circle" }],
            connectionType: "regularArrow",
            connectorStyle: { stroke: "#000", strokeWidth: 1, outlineStroke: "transparent", outlineWidth: 2 }
        })
        instance.makeTarget(node, {
            connectorStyle: { stroke: "#000", strokeWidth: 1, outlineStroke: "transparent", outlineWidth: 2 },
            filter: ".connection-pull-point",
            connectorOverlays: ["Arrow", { location: 0.5 }],
            anchor: ["Perimeter", {
                shape: "Circle"
            }]
        })
        elementCounter++;
        instance.repaint(node);
    }

    const calculateNodePosition = (left, top) => {
        calculateLeft = (left - (70 / 2)) + "px";
        calculateTop = (top - (70 / 2)) + "px";
        return "left:" + calculateLeft + ";top:" + calculateTop + ";";
    }

    const createConnectionPoint = function () {
        const connectionPullPoint = document.createElement("div");
        connectionPullPoint.className = "connection-pull-point";
        return connectionPullPoint;
    }

    const addNodeEvents = node => {
        node.addEventListener("mouseover", e => {
            hoverSelection = node;
        });
        node.addEventListener("mouseout", e => {
            hoverSelection = {};
        });
        node.addEventListener("click", e => {
            e.stopPropagation();
            primarySelected = node;
        });
    }

    // bind to a connection event, just for the purposes of pointing out that it can be done.
    instance.bind("connection", function (i, c) {
        if (typeof console !== "undefined")
            console.log("connection", i.connection);
    });

    // suspend drawing and initialise.
    instance.batch(function () {
    });
});

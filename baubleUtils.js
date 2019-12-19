baubleUtils = {
    baubleArray: [],

    newBauble: ({left, top}) => {
        console.log("Adding a new bauble at: (" + left + ", " + top + ")");
        const baubleE = document.createElement("div");
        baubleE.id = elementCounter;
        baubleE.className = "bauble";
        canvas.append(baubleE);
        nonPlumbing.draggable(baubleE);
        baubleUtils.setBaublePosition(baubleE, left, top);
        baubleUtils.addConnectionPoint(baubleE);
        baubleUtils.baubleArray.push(baubleE);
        baubleUtils.addBaubleEvents(baubleE);
        nonPlumbing.makeSource(baubleE, {
            connectorStyle: {stroke: "#000", strokeWidth: 1, outlineStroke: "transparent", outlineWidth: 2},
            filter: ":not(.connection-pull-point)",
            anchor: "Continuous"
        })
        nonPlumbing.makeTarget(baubleE, {
            connectorStyle: {stroke: "#000", strokeWidth: 1, outlineStroke: "transparent", outlineWidth: 2},
            filter: ".connection-pull-point",
            anchor: "Continuous"
        })
        elementCounter++;
    },

    setBaublePosition: (baubleE, left, top) => {
        calculateLeft = (left - (70/2)) + "px";
        calculateTop = (top - (70/2)) + "px";
        baubleE.style.left = calculateLeft;
        baubleE.style.top = calculateTop;
    },

    addConnectionPoint: baubleE => {
        const connectionPullPoint = document.createElement("div");
        connectionPullPoint.className = "connection-pull-point";
        connectionPullPoint.addEventListener('mousedown', e => baubleUtils.drawConnection(e));
        baubleE.append(connectionPullPoint);
    },

    drawConnection: event => {
        event.stopPropagation();
        console.log("Selected source: " + hoverSelection.id);
        let endpoint = nonPlumbing.addEndpoint(hoverSelection.id, defaultEndpointOptions);
    },

    addBaubleEvents: baubleE => {
        baubleE.addEventListener("mouseover", e => {
            hoverSelection = baubleE;
        });
        baubleE.addEventListener("mouseout", e => {
            hoverSelection = {};
        });
        baubleE.addEventListener("click", e => {
            e.stopPropagation();
            primarySelected = baubleE;
        });
    }


};

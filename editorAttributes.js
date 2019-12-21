let editorAttributes = {
    elementCounter: 0,
    hoverSelection: {},
    primarySelected: {},
    selected: [],

    targetEndpointOptions: {
        connectorStyle: {
            stroke: "#000",
            strokeWidth: 1,
            outlineStroke: "transparent",
            outlineWidth: 2
        },
        filter: ".connection-pull-point",
        connectorOverlays: [[
            "Arrow",
            { location: 0.5 }
        ]],
        anchor: [
            "Perimeter",
            { shape: "Circle" }
        ]
    },

    sourceEndpointOptions: {
        anchor: [
            "Perimeter",
            { shape: "Circle" }
        ],
        connectorStyle: {
            stroke: "#666",
            strokeWidth: 1
        },
        isSource: true
    }
};

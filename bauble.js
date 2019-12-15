bauble = {
    newBauble: ({left, top}) => {
        calculateLeft = left - (30/2);
        calculateTop = top - (30/2);
        console.log("Adding a new bauble at: (" + left + ", " + top + ")");
        const element = document.createElement("div");
        element.id = elementCounter;
        element.className = "bauble";
        canvas.append(element);
        nonPlumbing.draggable(element);
        element.style.left = calculateLeft + "px";
        element.style.top = calculateTop + "px";
        elementCounter++;
    }


};

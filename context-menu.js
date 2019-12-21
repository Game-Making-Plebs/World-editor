const menu = document.querySelector(".menu");
const menuOptions = document.querySelectorAll(".menu-option");

let menuVisible = false;
let canvasClick = false;

const setMenuDisplay = command => {
  if(command) {
      menu.style.display = "block";
      menuVisible = true;
  } else {
      menu.style.display = "none";
      menuVisible = false;
  }
};

const setPosition = ({ top, left }) => {
  menu.style.left = `${left}px`;
  menu.style.top = `${top}px`;
  setMenuDisplay(true);
};

const actionSelector = event => {
    console.log(event);
    switch(event.target.id) {
        case "menu-action-0":
            newNode({left: event.pageX, top: event.pageY});
            break;
        case "menu-action-1":
            break;
        case "menu-action-2":
            break;
        case "menu-action-3":
            break;
        case "menu-action-4":
            break;
        default:
            break;
    }
};

window.addEventListener("click", e => {
  if(menuVisible) setMenuDisplay(false);
});

menuOptions.forEach(menuOption => {
    menuOption.addEventListener("click", e => actionSelector(e));
});

canvas.addEventListener("contextmenu", e => {
    canvasClick = true;
    console.log("Canvas");
  e.preventDefault();
  const origin = {
    left: e.pageX,
    top: e.pageY
  };
  setPosition(origin);
  return false;
});
window.addEventListener("contextmenu", e => {
    console.log("Window");
    if(menuVisible && !canvasClick) setMenuDisplay(false);
    canvasClick = false;
});

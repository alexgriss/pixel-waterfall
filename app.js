window.addEventListener("load", () => {
  const rootElement = document.getElementById("app");
  const inputElement = document.getElementById("input");
  const buttonElement = document.getElementById("button");

  let interval = 0;

  const clear = () => {
    clearInterval(interval);

    while (rootElement.firstChild) {
      rootElement.removeChild(rootElement.firstChild);
    }
  };

  const init = () => {
    clear();

    const GRID_SIDES = inputElement.value;

    for (let i = 0; i < GRID_SIDES; i++) {
      const gridRow = document.createElement("div");
      gridRow.className = "grid-row";
      rootElement.appendChild(gridRow);

      for (let j = 0; j < GRID_SIDES; j++) {
        const gridItem = document.createElement("div");
        gridItem.className = "grid-item";
        gridItem.style.width = `${600 / GRID_SIDES}px`;
        gridItem.style.height = `${600 / GRID_SIDES}px`;
        gridRow.appendChild(gridItem);
      }
    }

    const gridRows = document.querySelectorAll(".grid-row");
    const gridItems = document.querySelectorAll(".grid-item");

    const getColors = () => {
      let colors = [];
      const hue = Math.floor(Math.random() * 360);
      for (let i = 0; i < 10; i++) {
        colors.push(
          `hsl(${hue}, 100%, ${Math.floor(Math.random() * (90 - 20) + 20)}%)`
        );
      }
      return colors;
    };

    const setColors = () => {
      const colors = getColors();

      gridItems.forEach(i => {
        i.style.backgroundColor =
          colors[Math.floor(Math.random() * colors.length)];
      });
    };

    setColors();

    const shiftColors = () => {
      const lastRow = rootElement.lastChild;
      rootElement.prepend(lastRow);
    };

    interval = setInterval(shiftColors, 200);
  };

  init();

  buttonElement.addEventListener("click", init);
});

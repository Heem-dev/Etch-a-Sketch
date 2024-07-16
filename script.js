const contianer = document.querySelector(".squaresContainer");

const square = document.createElement("div");
square.classList.add("square");

drawCanvas(16);
console.log(contianer.children.length);

function drawCanvas(num) {
  contianer.innerHTML = "";
  let squareWidth = contianer.clientWidth / num;
  let squareHeight = contianer.clientHeight / num;
  for (i = 0; i < num * num; i++) {
    const squareClone = square.cloneNode(true);

    squareClone.style.width = `${squareWidth}px`;
    squareClone.style.height = `${squareHeight}px`;
    squareClone.style.opacity = 0.1;
    squareClone.addEventListener("mouseover", (e) => hoverColor(e));
    contianer.appendChild(squareClone);
  }
}

function hoverColor(elm) {
  elm.target.classList.add("hovered");

  elm.target.style.opacity = parseFloat(elm.target.style.opacity) + 0.1;
}

const resetBtn = document.querySelector(".resetBtn");

resetBtn.addEventListener("click", () => {
  const num = prompt("Enter the number of squares per side");
  if (num > 100) {
    drawCanvas(100);
  } else {
    drawCanvas(num);
  }
});

// define variables w/ doc query selectors
const container = document.querySelector(".container");
const reset = document.getElementById("reset-btn");

// addEventListener for buttons/etc.
container.addEventListener("mouseover", (evt) => {
  // console.log("quah");
  evt.target.classList.add("hover");
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  evt.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

// make grid function
function createGrid(size) {
  for (let rows = 0; rows < size; rows++) {
    const rowEm = document.createElement("div");
    rowEm.classList.add("js-row");
    container.appendChild(rowEm);
    for (let cols = 0; cols < size; cols++) {
      const colsEm = document.createElement("div");
      colsEm.classList.add("js-col");
      rowEm.appendChild(colsEm);
    }
  }
}

function getPrompt(promptString) {
  const sizeStr = prompt(promptString);
  return parseInt(sizeStr);
}

const btn = document.getElementById("create");
btn.addEventListener("click", (e) => {
  let choice;
  let isValid;
  let promptStr = "Enter grid size";
  do {
    choice = getPrompt(promptStr);
    const lessThan100 = choice < 101;
    const isANum = !isNaN(choice);
    isValid = lessThan100 && isANum;
    if (!isValid) {
      promptStr = "Enter a number less than 100!";
    }
  } while (!isValid);

  container.innerHTML = "";
  createGrid(choice);
});

const defaultGrid = createGrid(16);

// clear grid function
reset.addEventListener("click", () => {
  container.innerHTML = "";
  createGrid(16);
});

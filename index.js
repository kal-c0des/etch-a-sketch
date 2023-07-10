// define variables w/ doc query selectors
let container = document.querySelector(".container");
let userInput = document.getElementById("user-input");
let submit = document.getElementById("submit");
let copyInput = document.querySelector(".copy-input");
let prompt = document.querySelector(".prompt");

// addEventListener for buttons/etc.
submit.addEventListener("click", makeGrid);

// have a function to make the grid based on user input (also have default size 16x16)

// make a draw function - event listener for hover?

// user input for grid size gets copied for Y (user input = X)

// error message for invalid input (num too large or NaN)

// default 16x16, else userInput

// make grid function

function makeGrid() {
  let num = userInput.value;
  if (num <= 0 || num > 100 || isNaN(num)) {
    prompt.textContent = "Enter a number between 2 and 100!";
  } else {
    prompt.textContent = "";
    copyInput.textContent = "";
    userInput.value = "";
  }
}

// call the draw function... loop?

// function for color change on hover

// clear grid function

// adding event listeners to li

const listElements = document.querySelectorAll("li");
for (const listElement of listElements) {
    listElement.addEventListener("click", boxClicked);
}

// current and previous numbers
// store internally for calculation purposes
let prevNum ="";
let currNum = "";


// setting of operation field tells us which operation occurred
// + , - , * , /
let operation = [0, 0, 0, 0];


// selecting elements to display
const prevInput = document.querySelector(".previous-input");
const currInput = document.querySelector(".curr-input");
function boxClicked(event) {
    
    let key = event.target.textContent;
    
    // reset screen
    if (key === "AC") {
        prevInput.textContent = "";
        currInput.textContent = "";
        currNum = "";
        prevNum = "";
        return;
    }

    else if (currNum.length > 0 && key === "DEL") {
        currNum = currNum.substring(0, currNum.length - 1);
        currInput.textContent = currNum;
    }

    
    else if (key.charCodeAt(0) >= 48 && key.charCodeAt(0) <= 57) {
        currNum += key;
        currInput.textContent = currNum;
    }

    else if (key === ".") {
        currNum += key;
        currInput.textContent = currNum;
    }

    else {

        if (!currNum) {
            // negative number
            if (key === '-') {
                currNum += key;
                currInput.textContent = currNum;
                return;
            }
            alert("Please enter a number");
            return;
        }

        if (key === "=") {
            if(prevNum)
                computeResult();
            else {
                alert("Please enter a number");
            }
            return;
        }

        // both numbers entered and also operation but trying to enter another operation later
        if (prevNum && currNum) {
            alert("Undesired operation");
            return;
        }

        if (key === "+") {
            operation[0] = 1;
        }
        else if (key === "-") {
            operation[1] = 1;
        }
        else if (key === "*") {
            operation[2] = 1;
        }
        else if (key === "/") {
            operation[3] = 1;         
        }
        currNum += key;
        currInput.textContent = currNum;

        // operation done then current number should become the previous number
        prevNum = currNum;
        prevInput.textContent = prevNum;
        
        // so that the final number is composed of only digits and getting rid of the operation 
        // else this will result in NaN during calculations
        prevNum = prevNum.substring(0, currNum.length - 1);


        // current number should be null
        currNum = "";
        currInput.textContent = "";

    }
}


function computeResult() { 

    let num1 = Number(prevNum);
    let num2 = Number(currNum);

    prevInput.textContent = "";
    
    if (operation[0] == 1) {
        currInput.textContent = num1 + num2;
    }

    else if (operation[1] == 1) { 
        currInput.textContent = num1 - num2;
    }

    else if (operation[2] == 1) {
        currInput.textContent = num1 * num2;
    }

    else if (operation[3] == 1) {
        currInput.textContent = num1 / num2;
    }

    currNum = currInput.textContent;

    reset();
}

function reset() { 
    prevNum = "";
    for (let i = 0; i < 4; i++){
        operation[i] = 0;
    }
}


// more features to add
/**
 * 1) Take numbers that flow out of the box
 */
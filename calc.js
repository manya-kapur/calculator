// Function to append value to the display
function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById("display").value = "";
}

// Function to delete the last character
function deleteLast() {
    let display = document.getElementById("display").value;
    document.getElementById("display").value = display.substring(0, display.length - 1);
}

// Function to calculate the result
function calculate() {
    let value = document.getElementById("display").value;
    try {
        // Check if the expression contains "^" for exponentiation
        if (value.includes("^")) {
            let baseAndExponent = value.split("^");
            if (baseAndExponent.length === 2) {
                let base = eval(baseAndExponent[0]);
                let exponent = eval(baseAndExponent[1]);
                let result = Math.pow(base, exponent);
                addToHistory(`${value} = ${result}`);
                document.getElementById("display").value = result;
            } else {
                alert("Invalid Expression for Exponentiation");
            }
        } else {
            // Evaluate regular expressions
            let result = eval(value);
            addToHistory(`${value} = ${result}`);
            document.getElementById("display").value = result;
        }
    } catch (error) {
        alert("Invalid Expression");
    }
}

// Function to add to the history list
function addToHistory(value) {
    let history = document.getElementById("history");
    let historyItem = document.createElement("li");
    historyItem.className = "list-group-item";
    historyItem.innerText = value;
    history.appendChild(historyItem);
}

// Function to calculate square root
function calculateSquareRoot() {
    let value = document.getElementById("display").value;
    let result = Math.sqrt(eval(value));
    addToHistory(`√(${value}) = ${result}`);
    document.getElementById("display").value = result;
}

// Function to calculate factorial
function calculateFactorial() {
    let value = parseInt(document.getElementById("display").value);
    if (value < 0) return alert("Factorial of negative number is not defined.");
    let result = 1;
    for (let i = 1; i <= value; i++) {
        result *= i;
    }
    addToHistory(`${value}! = ${result}`);
    document.getElementById("display").value = result;
}

// Function to calculate trigonometric values
function calculateTrig(func) {
    let value = eval(document.getElementById("display").value);
    let result;
    switch (func) {
        case 'sin':
            result = Math.sin(value * Math.PI / 180);
            break;
        case 'cos':
            result = Math.cos(value * Math.PI / 180);
            break;
        case 'tan':
            result = Math.tan(value * Math.PI / 180);
            break;
    }
    addToHistory(`${func}(${value}) = ${result}`);
    document.getElementById("display").value = result;
}

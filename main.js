let displayValue = "0";
function updateDisplay() {
    document.getElementById('result').textContent = displayValue;
}

function appendToDisplay(val) {
    if (displayValue === "0" && val !== ".") {
        displayValue = val;
    } else {
        displayValue += val;
    }
    updateDisplay();
}

function clearDisplay() {
    displayValue = "0";
    updateDisplay();
}

function calculateResult() {
    try {
        displayValue = eval(displayValue).toString();
        updateDisplay();
    } catch (error) {
        displayValue = "Error";
        updateDisplay();
    }
}
updateDisplay();
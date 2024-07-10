function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    let displayValue = document.getElementById('display').value;
    let result;
    try {
        result = eval(displayValue);
    } catch (e) {
        result = 0;
    }
    document.getElementById('display').value = result;
}

function backspace() {
    let displayValue = document.getElementById('display').value;
    document.getElementById('display').value = displayValue.slice(0, -1);
}

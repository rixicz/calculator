const buttons = document.querySelectorAll("button")
const display = document.querySelector(".display")

function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    if (b != 0) {
        return a / b
    } else {
        return "Division by zero!"
    }
}

function operate(a, b, op) {
    if (op === "+") {
        return add(a, b)
    
    } else if (op === "-") {
        return subtract(a, b)
    
    } else if (op === "*") {
        return multiply(a, b)
    
    } else if (op === "/") {
        return divide(a, b)
    
    } else {
        return "Invalid operand"
    }

}

function clearItAll(a, b, op, nV) {
    display.textContent = 0
    a = ""
    b = ""
    op = ""
    nV = ""
}

function screenWrite(btn) {
    if (display.textContent === "0") {
        display.textContent = btn.textContent
        nV = btn.textContent
    
    } else {
        display.textContent += btn.textContent
        nV += btn.textContent
    }
    return nV
}

let nextVar;
let a;
let b;
let operator

function writeScreen(event) {
    const button = event.currentTarget
    
    if (button.id === "clear") {
        clearItAll(a, b, operator, nextVar)
        return
    }

    if (button.id === "equalto") {
        b = parseInt(nextVar)
        display.textContent = operate(a, b, operator)
        return
    }
    if (button.className === "numbers" || button.className === "operators") {
        nextVar = screenWrite(button)
    }

    if (button.className === "operators") {
        if (a === undefined) {
            a = parseInt(nextVar)
            console.log(a)
        
        } else if (b === undefined) {
            b = parseInt(nextVar)
            console.log(b)
            display.textContent = operate(a, b, operator)
            a = ""
            b = ""
        }

        nextVar = ""
        operator = button.textContent
    }
    console.log(nextVar)
}

buttons.forEach((btn) => {
    btn.addEventListener("click", writeScreen)
})
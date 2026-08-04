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

function clearItAll() {
    display.textContent = 0
    a = ""
    b = ""
    operator = ""
    nextVar = ""
}

function screenWrite(btn) {
    if (display.textContent === "0") {
        display.textContent = btn.textContent
    
    } else {
        display.textContent += btn.textContent
    }
}

let nextVar = ""
let a = ""
let b = ""
let operator = ""

function writeScreen(event) {
    const button = event.currentTarget
    console.log(operator)
    if (button.id === "clear") {
        clearItAll()
        return
    }

    if (button.id === "equalto") {
        b = parseInt(nextVar)
        display.textContent = operate(a, b, operator)
        a = ""
        b = ""
        return
    }
    if (button.className === "numbers" || button.className === "operators") {
        screenWrite(button)

        if (button.className === "numbers") {
            nextVar += button.textContent

        } else if (button.className === "operators") {
            
            operator = button.textContent
            
            if (!a) {
                a = parseInt(nextVar)
            
            } else if (b === null) {
                b = parseInt(nextVar)
                display.textContent = operate(a, b, operator)
                a = ""
                b = ""
            }
            
            nextVar = ""
        }
    }  
}

buttons.forEach((btn) => {
    btn.addEventListener("click", writeScreen)
})
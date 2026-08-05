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
    
    } else if (op === "") {
        return nextVar
    
    } else {
        return "Invalid operand"
    }

}

function clearItAll() {
    display.textContent = 0
    a = ""
    b = ""
    operator = ""
    nextVar = 0
    displayAvailable = true
}

function screenWrite(result) {
    if (display.textContent.length >= 13) {
        return
    }
    
    if (display.textContent === "0" || resultDisplayed) {
        display.textContent = result
        resultDisplayed = false
        operator = ""
        nextVar = result
    
    } else {
        display.textContent += result
    }
}

let resultDisplayed = false
let nextVar = 0
let a = ""
let b = ""
let operator = ""

function buttonClicked(event) {
    const button = event.currentTarget
    
    if (button.id === "clear") {
        clearItAll()
        return
    }
    
    if (button.id === "equalto") {
        b = parseInt(nextVar)
        display.textContent = operate(a, b, operator)
        nextVar = parseInt(display.textContent)
        a = ""
        b = ""
        resultDisplayed = true
        return
    }

    if (display.textContent.length >= 13) {
        return alert("Display limit reached. The maximum digit count for this calculator is 13.")
    }

    if (button.className === "numbers" || button.className === "operators") {

        if (button.className === "numbers") {
            nextVar += button.textContent

        } else if (button.className === "operators") {
            
            if (!a) {
                a = parseInt(nextVar)
                nextVar = ""
            
            } else if (!b) {
                b = parseInt(nextVar)
                display.textContent = operate(a, b, operator)
                a = parseInt(display.textContent)  // watch out it is a bit different than in equalto - here the a variable needs to be set because the operator has already been set
                nextVar = 0
                b = ""
            }
            
            operator = button.textContent
        }

        screenWrite(button.textContent)
    }  
}

buttons.forEach((btn) => {
    btn.addEventListener("click", buttonClicked)
})
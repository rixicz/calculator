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
        
        if (a % b != 0) {
            return Math.round(a / b * 10) / 10
        }

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
        if (result === "") {
            return 0
        
        } else {
            return result
        }       
    
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
    displayAvailable = true
}

function screenWrite(element) {
    if (display.textContent.length >= 13) {
        return
    }
    
    if (display.textContent === "0" || resultDisplayed) {
        
        if (typeof parseInt(element) === "number") {
            display.textContent = element
        }

        resultDisplayed = false
        nextVar = element
        operator = ""
    
    } else {
        display.textContent += element
    }
}

function evaluate() {
    b = parseInt(nextVar)
    display.textContent = operate(a, b, operator)
    b = ""
}

let resultDisplayed = false
let nextVar = ""
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
        evaluate()
        a = ""
        nextVar = parseInt(display.textContent)
        resultDisplayed = true
        return
    }

    if (display.textContent.length >= 13) {
        return alert("Display limit reached. The maximum digit count for this calculator is 13.")
    }

    if (button.className === "numbers") {
        nextVar += button.textContent
        screenWrite(button.textContent)
    }

    if (button.className === "operators" && (a || nextVar)) {
        
        if (!a) {
            a = parseInt(nextVar)
        
        } else if (!b && nextVar) {
            evaluate()
            a = parseInt(display.textContent)
        }
        
        nextVar = ""
        operator = button.textContent
        screenWrite(operator)
    }  
}

buttons.forEach((btn) => {
    btn.addEventListener("click", buttonClicked)
})
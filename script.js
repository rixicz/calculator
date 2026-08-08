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
            return Math.round(a / b * 100) / 100
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
        if (nextVar === "") {
            return 0
        
        } else {
            return nextVar
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
    
    if (element.className === "numbers") {
        
        if (display.textContent === "0" || resultDisplayed) {
            display.textContent = element.textContent
            nextVar = element.textContent
        
        } else {
            display.textContent += element.textContent
        }
    
    } else {
        display.textContent += element.textContent
    }

    resultDisplayed = false
}

function evaluate() {
    b = parseFloat(nextVar)
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
    
    if (button.id === "c") {
        clearItAll()
        return
    }
    
    if (button.id === "equalto") {
        evaluate()
        a = ""
        nextVar = parseFloat(display.textContent)
        resultDisplayed = true
        return
    }

    if (display.textContent.length >= 13) {
        return alert("Display limit reached. The maximum digit count for this calculator is 13.")
    }

    if (button.className === "numbers") {
        nextVar += button.textContent
        screenWrite(button)
    }

    if (button.className === "operators") {
        
        if (!a){
            if (!nextVar){
                nextVar = 0
            }

            a = parseFloat(nextVar)
        
        } else if (!b && nextVar) {
            evaluate()
            a = parseFloat(display.textContent)
        }
        
        nextVar = ""
        operator = button.textContent
        screenWrite(button)
    }  
}

buttons.forEach((btn) => {
    btn.addEventListener("click", buttonClicked)
})

document.addEventListener("keydown", function (event) {
    if (event.key === "=") {
        btn = document.getElementById("equalto")
    
    } else if (event.key === "+") {
        btn = document.getElementById("plus")
    
    } else if (event.key === "-") {
        btn = document.getElementById("minus")
    
    } else if (event.key === "/") {
        btn = document.getElementById("slash")
    
    } else if (event.key === "*") {
        btn = document.getElementById("star")
    
    } else if (event.key === ".") {
        btn = document.getElementById("dot")
        
    } else {
        btn = document.getElementById(event.key)
    }

    btn.click()
})
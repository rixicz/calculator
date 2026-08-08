const buttons = document.querySelectorAll("button")
const display = document.querySelector(".display")

function divide(a, b) {
    if (b != 0) {
        return a / b
    
    } else {
        return "Division by zero!"
    }
}

function operate(a, b, op) {
    if (op === "+") {
        return a + b
    
    } else if (op === "-") {
        return a - b
    
    } else if (op === "*") {
        return a * b
    
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
    nextVar = "0"
    displayAvailable = true
}

function screenWrite(element) {
    if (display.textContent.length >= 13) {
        return
    }

    n = element.textContent
    if (element.className === "numbers") {
        
        if (display.textContent === "0" || resultDisplayed) {
            display.textContent = n
            nextVar = n
        
        } else {
            display.textContent += n
        }
    
    } else {
        display.textContent += n
    }

    resultDisplayed = false
}

function evaluate() {
    b = parseFloat(nextVar)
    display.textContent = Math.round(operate(a, b, operator) * 100) / 100
    b = ""
}

let resultDisplayed = false
let nextVar = "0"
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
            a = parseFloat(nextVar)
        
        } else if (!b && nextVar) {
            evaluate()
            a = parseFloat(display.textContent)
        }
        
        nextVar = ""
        operator = button.textContent
        screenWrite(button)
    }
    
    if (button.id === "dot") {
        if (!(nextVar.includes("."))) {
            nextVar += "."
            screenWrite(button)
        }
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
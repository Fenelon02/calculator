const btn = document.querySelectorAll(".btn button")
const screen = document.getElementById("equation")

btn.forEach(element => element.addEventListener("click", () => addValue(element.value)))

document.addEventListener("keydown", (event) => {
    addValue(event.key)
})

function clean() {
    screen.textContent = ""
}

function calc() {
    try {
        let eq = screen.textContent.trim()
        screen.textContent = math.evaluate(eq)
    } catch (error) {
        screen.textContent = "Calculating Error"
    }
}

function backspace() {
    screen.textContent = screen.textContent.slice(0, -1)
}

function addValue(value) {
    switch (value) {
        case '1':
            screen.textContent += '1'
            break

        case '2':
            screen.textContent += '2'
            break

        case '3':
            screen.textContent += '3'
            break

        case '4':
            screen.textContent += '4'
            break

        case '5':
            screen.textContent += '5'
            break

        case '6':
            screen.textContent += '6'
            break

        case '7':
            screen.textContent += '7'
            break

        case '8':
            screen.textContent += '8'
            break

        case '9':
            screen.textContent += '9'
            break

        case '0':
            screen.textContent += '0'
            break

        case '/':
            screen.textContent += '/'
            break

        case '*':
            screen.textContent += '*'
            break

        case 'x':
            screen.textContent += '*'
            break

        case '+':
            screen.textContent += '+'
            break

        case '-':
            screen.textContent += '-'
            break

        case '.':
            screen.textContent += '.'
            break

        case '=':
            calc()
            break

        case 'Enter':
            calc()
            break

        case 'Delete':
            clean()
            break

        case 'ac':
            clean()
            break

        case 'Backspace':
            backspace()
            break
        
        case '^':
            screen.textContent += '^'
            break
        case ')':
            screen.textContent += ')'
            break
    }
}




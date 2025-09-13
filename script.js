const buttons = document.querySelectorAll(".boxGrid button"); // Pega todos os botões dentro de .buttonsBox
const screen = document.getElementById("equation") // tela para por a conta na tela

buttons.forEach(buttonValue =>{
    if(buttonValue.value !== " " && buttonValue.value !== "="){
        buttonValue.addEventListener("click", addValue => screen.textContent += buttonValue.value)   
    }
})

const clear = document.getElementById("clear").addEventListener("click", clean => {
      screen.textContent = ""
})

const result = document.getElementById("equal").addEventListener("click", calc => {
    try{
        let eq = screen.textContent.trim()
        screen.textContent = math.evaluate(eq) 
    } catch(error){
        screen.textContent = "Calculating Error"
    }
})



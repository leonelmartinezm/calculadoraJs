window.addEventListener("DOMContentLoaded", (e)=>{
    const calculatorDisplay = document.querySelector(".calculator-display")
    const keypadButtons = document.querySelectorAll(".keypad-btn") 
    const keypadButtonsArray = Array.from(keypadButtons);
    keypadButtonsArray.forEach((button)=>{
        button.addEventListener("click", ()=>{
            calculadora(button, calculatorDisplay)
        })
    })

})


//funcciones
function calculadora(button, calculatorDisplay){
    switch (button.innerHTML) {
        case 'C':
            borrar(calculatorDisplay)
            break;
        case '=':
            calcular(calculatorDisplay)
            break;
        default:
            actualizar(button,calculatorDisplay)
            break;
    }
}

function borrar(calculatorDisplay){
    calculatorDisplay.innerHTML = "0";
}

function calcular(calculatorDisplay){
    calculatorDisplay.innerHTML = eval(calculatorDisplay.innerHTML)
}

function actualizar(button,calculatorDisplay){
    if(calculatorDisplay.innerHTML === "0"){
        calculatorDisplay.innerHTML ="";
    }

    calculatorDisplay.innerHTML += button.innerHTML
}

//Theme Button
const $themeBtn = document.querySelector(".light-theme-btn")
const $selectors = document.querySelectorAll("[data-light]")

let moon ="🌙"
let sun ="☀️"


function lightTheme($themeBtn){

const lightMode=()=>{
    $selectors.forEach((el)=>el.classList.add("light-theme"))
    $themeBtn.textContent = moon;
    localStorage.setItem("themeMode", "light")
    console.log("LightMode activado")
}

const darkMode= ()=>{
    $selectors.forEach((el)=>el.classList.remove("light-theme"))
    $themeBtn.textContent = sun;
    localStorage.setItem("themeMode","dark")
    console.log("DarkMode activado")
}



    $themeBtn.addEventListener("click", ()=>{
            if($themeBtn.textContent === sun){
                lightMode();
            }else{
                darkMode();
            }

    })

    document.addEventListener("DOMContentLoaded",e=>{
              
  

    if(localStorage.getItem("themeMode") === null){
        localStorage.setItem("themeMode", "dark")
    }
    if(localStorage.getItem("themeMode")=== "light"){
        lightMode();
    }
    if(localStorage.getItem("themeMode")==="dark"){
        darkMode();
    }
    })





}

lightTheme($themeBtn)





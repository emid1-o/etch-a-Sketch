const container = document.querySelector('.container');
const newGrid = document.querySelector("#newGrid");
const clear = document.querySelector("#clean");
const color = document.querySelector("#color");
const darkenerButton = document.querySelector("#darkener");


let isDarkenerSelected = false;
let isColorSelected = false;
let colorName = "blue";

//select color
color.addEventListener("click", () => {
    isColorSelected = true;
    colorName = prompt("Type the name of the color: ");
    if (colorName === ""){
        isColorSelected = false;
    }

})

//darkener
darkenerButton.addEventListener("click", () => {
    if(isDarkenerSelected === true){
        isDarkenerSelected = false;
    } else {
        isDarkenerSelected = true;
    }
    
})


let gridValue = 2;

let testan = 2;

clear.addEventListener("click", () => {

    container.innerHTML = '';

    values = `
        
            box-sizing: border-box; 
            width: calc(100% / ${testan}); 
            height: calc(100% / ${testan}); 
            border: 1px solid #ccc;  
            background-color: white; 

        `

    for (let i = 0; i < testan * testan; i++) {
            const square = document.createElement('div');
            square.style.cssText = values;
            container.appendChild(square);
        }


        Array.from(container.children).forEach((element) => {
            element.addEventListener("mouseenter", (elemento) => {
                if (!isColorSelected){
                    element.style.backgroundColor = ` ${randomColor()}`
                } else {
                    element.style.backgroundColor = ` ${colorName}`
                }
            })
        })
})


function randomColor() {
    let color = Math.floor(Math.random() * 16777215).toString(16);
    return '#' + color.padStart(6, '0');
}


newGrid.addEventListener("click", () => {
    question = prompt("Square per side: ");
    if(question === ""){
        question = 2;
    }
    if (question > 100) {
        alert("number too long, try a <100 number")
    } else {
        container.innerHTML = ''
        gridValue = parseInt(question);
        testan = gridValue;
        values = `
        
            box-sizing: border-box; 
            width: calc(100% / ${gridValue}); 
            height: calc(100% / ${gridValue}); 
            border: 1px solid #ccc;  
            background-color: white; 
            opacity: 0.1;

        `
        for (let i = 0; i < gridValue * gridValue; i++) {
            const square = document.createElement('div');
            square.style.cssText = values;
            container.appendChild(square);
        }

        
        
        Array.from(container.children).forEach((element) => {

            element.myOpacity = 0.1;

            element.addEventListener("mouseenter", (elemento) => {
                if (!isColorSelected){
                    element.style.backgroundColor = ` ${randomColor()}`
                    if (isDarkenerSelected){
                        element.myOpacity = Math.min(element.myOpacity + 0.1, 1);
                        element.style.opacity = element.myOpacity;
                    }
                } else {
                    element.style.backgroundColor = ` ${colorName}`
                    if (isDarkenerSelected){
                        element.myOpacity = Math.min(element.myOpacity + 0.1, 1);
                        element.style.opacity = element.myOpacity;
                    }
                }
            })
        })

    };
})



function onStart () {
    question = 10
    
    
    
        container.innerHTML = ''
        gridValue = parseInt(question);
        testan = gridValue;
        values = `
        
            box-sizing: border-box; 
            width: calc(100% / ${gridValue}); 
            height: calc(100% / ${gridValue}); 
            border: 1px solid #ccc;  
            background-color: white; 
            opacity: 1.0;

        `
        for (let i = 0; i < gridValue * gridValue; i++) {
            const square = document.createElement('div');
            square.style.cssText = values;
            container.appendChild(square);
        }

        
        
        Array.from(container.children).forEach((element) => {

            element.myOpacity = 0.1;

            element.addEventListener("mouseenter", (elemento) => {
                if (!isColorSelected){
                    element.style.backgroundColor = ` ${randomColor()}`
                    if (isDarkenerSelected){
                        element.myOpacity = Math.min(element.myOpacity + 0.1, 1);
                        element.style.opacity = element.myOpacity;
                    }
                } else {
                    element.style.backgroundColor = ` ${colorName}`
                    if (isDarkenerSelected){
                        element.myOpacity = Math.min(element.myOpacity + 0.1, 1);
                        element.style.opacity = element.myOpacity;
                    }
                }
            })
        })

    };

onStart();









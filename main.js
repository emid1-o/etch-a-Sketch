const container = document.querySelector('.container');
const newGrid = document.querySelector("#newGrid");
const clear = document.querySelector("#clean");

let gridValue = 1;

let testan = 0;

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
                element.style.backgroundColor = ` ${randomColor()}`
            })
        })
})


function randomColor() {
    let color = Math.floor(Math.random() * 16777215).toString(16);
    return '#' + color.padStart(6, '0');
}


newGrid.addEventListener("click", () => {
    question = prompt("Square per side: ");
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

        `
        for (let i = 0; i < gridValue * gridValue; i++) {
            const square = document.createElement('div');
            square.style.cssText = values;
            container.appendChild(square);
        }


        Array.from(container.children).forEach((element) => {
            element.addEventListener("mouseenter", (elemento) => {
                element.style.backgroundColor = ` ${randomColor()}`
            })
        })

    };
})









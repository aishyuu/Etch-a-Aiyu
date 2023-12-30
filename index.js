const etch = document.querySelector(".etch")

const colorWheel = document.querySelector("#etch-color-picker")

const randomColorBtn = document.querySelector(".random-color-btn")
const chooseColorBtn = document.querySelector(".choose-color")
const paintText = document.querySelector(".paint-text")
const randomColorText = document.querySelector(".random-color-text")
const clearBtn = document.querySelector(".clear-btn")

let color = colorWheel.value

let mode = 'color'
let holdColor = false

document.body.addEventListener('mousedown', () => {
    holdColor = true
})

document.body.addEventListener('mouseup', () => {
    holdColor = false
})

colorWheel.addEventListener('change', (event) => {
    color = colorWheel.value
})

randomColorBtn.addEventListener('click', () => {
    if(mode == 'color') {
        paintText.classList.remove('selected')
        randomColorText.classList.add('selected')
        mode = 'random'
    }
})

chooseColorBtn.addEventListener('click', () => {
    if(mode == 'random') {
        randomColorText.classList.remove('selected')
        paintText.classList.add('selected')
        mode = 'color'
    }
})

clearBtn.addEventListener('click', () => {
    let allSquares = document.getElementsByClassName('etch-square')
    for (let index = 0; index < allSquares.length; index++) {
        const square = allSquares[index];
        square.style.backgroundColor = 'white'
    }
})

for (let index = 0; index < 16*16; index++) {
    let square = document.createElement('div')
    square.classList.add('etch-square')
    square.addEventListener('mouseover', () => {
        if(holdColor === true) {
            if (mode === 'color') {
                square.style.backgroundColor = color
            }
            if (mode === 'random') {
                let randomColor = Math.floor(Math.random()*16777215).toString(16)
                square.style.backgroundColor = '#' + randomColor
            }
        }
    })
    etch.appendChild(square)
}
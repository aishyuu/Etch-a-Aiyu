const etch = document.querySelector(".etch")

const colorWheel = document.querySelector("#etch-color-picker")

let color = colorWheel.value

colorWheel.addEventListener('change', (event) => {
    color = colorWheel.value
})

for (let index = 0; index < 16*16; index++) {
    let square = document.createElement('div')
    square.classList.add('etch-square')
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = color
    })
    etch.appendChild(square)
}
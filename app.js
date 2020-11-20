const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click', () => {
    // ger random number between 0 and 3 
    const randomColor = getRandomNumber()
    console.log(randomColor)
    document.body.style.backgroundColor = randomColor
    color.textContent = randomColor
})

const getRandomNumber = () => {
    let randomColor = '#'
    for(let i = 0; i < 6; i++) {
        randomColor += hex[Number.parseInt(Math.random() * hex.length)]
    }
    return randomColor
}
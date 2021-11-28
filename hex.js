const hexCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

const btn = document.querySelector("#btn")
const colorName = document.querySelector(".colorName")

btn.addEventListener("click", function () {
    let number = "#"
    for (let i = 0; i < 6; i++) {
        number += hexCharacters[getRandomNumber()]
    }

    colorName.textContent = number
    document.body.style.backgroundColor = number

})

function getRandomNumber() {
    return Math.floor(Math.random() * hexCharacters.length)
}
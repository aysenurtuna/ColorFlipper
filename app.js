const colors = ["green", "red", "violet", "#039BE5", "#1E88E5", "#00E676", "rgb(106, 27, 154)"]

const btn = document.querySelector("#btn")
const colorName = document.querySelector(".colorName")

btn.addEventListener("click", function () {
    const number = getRandomNumber()
    colorName.textContent = colors[number]
    document.body.style.backgroundColor = colors[number]
   console.log(number)
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length)
}
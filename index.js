const numberEl = document.getElementById("number-el")
const genBtn = document.getElementById("gen-btn")

genBtn.addEventListener("click", function() {
    const min = Number(document.getElementById("min").value)
    const max = Number(document.getElementById("max").value)
    console.log(max + min)

    numberEl.textContent = `${Math.floor(Math.random() * (max - min + 1)) + min}`
})
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent=0
    count=0
}

const incBtn=document.getElementById("increment-btn")
incBtn.addEventListener("click", increment)

const saveBtn=document.getElementById("save-btn")
saveBtn.addEventListener("click", save)
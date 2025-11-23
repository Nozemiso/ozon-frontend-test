import Progress from "./components/progress/progress.js"

const bodyElemenet = document.querySelector(".root")
const valueElement = document.querySelector(".inputs__value-input")
const animateElement = document.querySelector("#animate")
const hideElement = document.querySelector("#hide")

const progress = new Progress(bodyElemenet.querySelector('.progress-container'))

valueElement.addEventListener('change', () => {
    progress.setValue(valueElement.value)
})

animateElement.addEventListener('change', () => {
    progress.setAnimated(animateElement.checked)
})

hideElement.addEventListener('change', () => {
    progress.setHidden(hideElement.checked)
})

progress.setValue(valueElement.value)
animateElement.checked = false;
hideElement.checked = false;
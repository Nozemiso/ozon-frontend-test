export default class Progress {
    htmlContent = `
        <div class="progress"></div>
    `

    value = 0
    rootElement;

    constructor(targetElement) {
        this.rootElement = targetElement;
        targetElement.innerHTML = this.htmlContent;
    }

    setValue(value, min=0, max=100) {
        const baseElement = this.rootElement.querySelector('.progress') 
        const targetDeg = value * 360 / (max - min)  
        baseElement.style = `--angle:${targetDeg}deg`
    }
    
    setHidden(state) {
        const baseElement = this.rootElement.querySelector('.progress') 
        if (state) baseElement.classList.add("progress--hidden")
        else baseElement.classList.remove("progress--hidden")
    }
    
    setAnimated(state) {
        const baseElement = this.rootElement.querySelector('.progress') 
        if (state) baseElement.classList.add("progress--animated")
        else baseElement.classList.remove("progress--animated")
    }
}
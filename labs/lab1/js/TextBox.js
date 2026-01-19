// Text box entity
export class TextBox {
    constructor(textValue, buttonLabel, onRemove) {
        this.box = document.createElement("div")
        this.box.classList.add("text-box")

        this.text = document.createElement("textarea")
        this.text.value = textValue
        this.box.insertAdjacentElement("beforeend", this.text)

        if(buttonLabel && onRemove) {
            this.button = document.createElement("button")
            this.button.insertAdjacentText("beforeend", buttonLabel)
            this.button.onclick = () => {onRemove(this)}
            this.box.insertAdjacentElement("beforeend", this.button)
        }
        
    }

    getValue() {
        return this.text.value
    }

    setValue(value) {
        this.text.value = value
    }

    getElement() {
        return this.box
    }


}
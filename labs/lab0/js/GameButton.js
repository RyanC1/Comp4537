// A button specifically made for this game 
export class GameButton {
    constructor(value, colour, onClick) {
        this.value = value
        this.colour = colour

        this.btn = document.createElement("button")
        this.btn.classList.add("game-button")
        this.btn.style.backgroundColor = colour
        this.btn.onclick = () => { onClick(this) };

        this.disable(true)
        this.displayValue(true)
    }


    displayValue(value) {
        if (value === true) {
            this.btn.innerText = this.value
        }
        else {
            this.btn.innerText = ""
        }
    }

    disable(value) {
        this.btn.disabled = value
    }

    setPos(x, y) {

        console.log(x)
        console.log(y)

        this.btn.style.position = "absolute"
        this.btn.style.left = x + "px"
        this.btn.style.top = y + "px"
    }
}
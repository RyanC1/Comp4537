export class GameButton {
    constructor(value, colour, onClick) {
        this.value = value
        this.colour = colour

        this.btn = document.createElement("button")
        this.btn.classList.add("game-button")
        this.btn.style.backgroundColor = colour
        this.btn.onclick = () => {onClick(this)};

        this.reveal()
    }


    hide() {
        this.btn.disabled = false
        this.btn.innerText = ""
    }

    reveal() {
        this.btn.disabled = true
        this.btn.innerText = this.value
    }
}
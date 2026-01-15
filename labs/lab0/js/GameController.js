import { STRINGS } from "../lang/messages/en/strings.js"
import { GameButton } from "./GameButton.js";

// Controls the buttons and their input
export class GameController {
    constructor(gameArea) {
        this.gameArea = gameArea
        this.buttons = []
        this.nextValue = 1;
        this.colours = ["Gainsboro", "GoldenRod", "GreenYellow", "PaleVioletRed", "PowderBlue", "Plum", "PaleGoldenRod"]
        this.onEnd = null;

        this.setupButtonAreas(gameArea)
    }

    setupButtonAreas(gameArea) {
        this.relativeBox = document.createElement("div")
        this.relativeBox.style.position = "relative"
        gameArea.insertAdjacentElement("afterbegin", this.relativeBox)

        this.flexBox = document.createElement("div")
        this.flexBox.style.display = "flex"
        this.flexBox.style.flexWrap = "wrap"
        this.flexBox.style.gap = "10px"
        this.relativeBox.insertAdjacentElement("afterbegin", this.flexBox)
    }



    start(numButtons, onEnd) {
        this.colours.sort(() => Math.random())
        this.reset()
        this.onEnd = onEnd

        this.setupButtons(numButtons)

        setTimeout(() => {

            this.shuffleButtons();

        }, numButtons * 1000 - 2000)

    }

    setupButtons(numButtons) {
        for (let i = 0; i < numButtons; i++) {
            let button = new GameButton(i + 1, this.colours[i], btn => this.handleClick(btn))
            this.buttons.push(button)
            this.flexBox.insertAdjacentElement("beforeend", button.btn)
        }
    }

    shuffleButtons() {

        let count = 0;
        const numButtons = this.buttons.length
        let interval = setInterval(() => {

            const maxX = this.gameArea.offsetWidth - this.buttons[0].btn.offsetWidth;
            const maxY = this.gameArea.offsetHeight - this.buttons[0].btn.offsetHeight;

            this.buttons.forEach(button => {
                button.setPos(Math.random() * Math.max(0, maxX),
                              Math.random() * Math.max(0, maxY))
            })

            count++

            if (count === numButtons) {
                clearInterval(interval)
                this.enableButtons()
            }
        }, 2000)

    }


    enableButtons() {
        this.buttons.forEach(button => {
            button.displayValue(false);
            button.disable(false)
        })
    }

    handleClick(clickedButton) {
        clickedButton.displayValue(true)
        clickedButton.disable(true)

        if (clickedButton.value !== this.nextValue) {
            this.endGame(STRINGS.LOSS_MSG)
        }
        else if (clickedButton.value === this.buttons.length) {
            this.endGame(STRINGS.WIN_MSG)
        }
        this.nextValue++
    }

    endGame(message) {

        this.buttons.forEach(button => {
            button.displayValue(true)
            button.disable(true)
        })

        alert(message)

        if (this.onEnd !== null) {
            this.onEnd()
            console.log("done")
            this.onEnd = null
        }
    }

    reset() {
        this.buttons = []
        this.nextValue = 1;
        this.flexBox.innerHTML = ""
    }
}
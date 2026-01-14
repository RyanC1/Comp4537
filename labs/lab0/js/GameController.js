import { STRINGS } from "../lang/messages/en/strings.js"
import { GameButton } from "./GameButton.js";

export class GameController {
    constructor(gameArea) {
        this.gameArea = gameArea
        this.buttons = []
        this.nextValue = 1;
        this.colours = ["white", "orange", "green", "red", "blue", "yellow", "purple"]

        this.setupButtonAreas(gameArea)
    }

    setupButtonAreas(gameArea) {
        this.relativeBox = document.createElement("div")
        this.relativeBox.style.position = "relative"
        gameArea.insertAdjacentElement("afterbegin", this.relativeBox)

        this.flexBox = document.createElement("div")
        this.flexBox.style.display = "flex"
        this.relativeBox.insertAdjacentElement("afterbegin", this.flexBox)
    }

    start(numButtons) {
        this.reset()


        for(let i = 0; i <= numButtons; i++) {
            let button = new GameButton(i + 1, this.colours[i], this.handleClick)
            this.buttons.push(button)
            this.gameArea.insertAdjacentElement("beforeend", button.btn)
        }
    }

    handleClick(clickedButton) {
        clickedButton.reveal()
        if(clickedButton.value !== this.nextValue) {
            this.endGame(STRINGS.LOSS_MSG)
        }
        else if (clickedButton.value === this.buttons.length) {
            this.endGame(STRINGS.WIN_MSG)
        }
        this.nextValue++
    }

    endGame(message) {

        this.buttons.forEach(button => { 
            button.reveal()
        })

        alert(message)
    }

    reset() {
        this.buttons = []
        this.nextValue = 1;
    }
}
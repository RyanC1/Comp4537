import { STRINGS } from "../lang/messages/en/strings.js"

// Controls everything above the button area
export class UserInterface {
    constructor(root, gameController) {
        this.root = root
        this.gameController = gameController
        this.setupLabel()
        this.setupInputs()

        
    }

    setupLabel() {
        let label = document.createElement("div")
        label.insertAdjacentText("afterbegin", STRINGS.INPUT_PROMPT)
        this.root.insertAdjacentElement("afterbegin", label)
    }

    setupInputs() {
        let inputArea = document.createElement("div")
        this.root.insertAdjacentElement("beforeend", inputArea)

        this.inputBar = document.createElement("input")
        this.inputBar.type = "text";


        this.inputButton = document.createElement("input")
        this.inputButton.type = "button"
        this.inputButton.value = STRINGS.BTN_LABEL
        this.inputButton.onclick = () => {this.acceptInput(this.inputBar.value)} //todo

        inputArea.insertAdjacentElement("afterbegin", this.inputBar)
        inputArea.insertAdjacentElement("beforeend", this.inputButton)
    }

    acceptInput(value) {
        if(typeof (value) !== "numeric" && value >= 3 && value <= 7) {
            this.gameController.start(value, () => {this.enableInput()})
            this.disableInput()
        }
        else {
            alert(STRINGS.INVALID_INPUT)
        }
    }

    disableInput() {
        this.inputBar.disabled = true
        this.inputButton.disabled = true
    }

    enableInput() {
        this.inputBar.disabled = false
        this.inputButton.disabled = false
    }

    
}
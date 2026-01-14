import { STRINGS } from "../lang/messages/en/strings.js"

export class UserInterface {
    constructor(root, gameController) {
        this.root = root
        this.setupLabel(root)
        this.setupInputs(root, gameController)

        

    }

    setupLabel(root) {
        let label = document.createElement("div")
        label.insertAdjacentText("afterbegin", STRINGS.INPUT_PROMPT)
        root.insertAdjacentElement("afterbegin", label)
    }

    setupInputs(root, gameController) {
        let inputArea = document.createElement("div")
        root.insertAdjacentElement("beforeend", inputArea)

        let inputBar = document.createElement("input")
        inputBar.type = "text";


        let inputButton = document.createElement("input")
        inputButton.type = "button"
        inputButton.value = STRINGS.BTN_LABEL
        inputButton.onclick = () => {gameController.start(inputBar.value)} //todo

        inputArea.insertAdjacentElement("afterbegin", inputBar)
        inputArea.insertAdjacentElement("beforeend", inputButton)
        
    }

    
}
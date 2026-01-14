import { UserInterface } from "./UserInterface.js"
import { GameController } from "./GameController.js"

export class MemoryGame {
    constructor() {
        this.root = document.getElementById("memory-game")
        this.gameController = this.setupGameController(this.root)
        this.userInterface = this.setupUserInterface(this.root, this.gameController)

    }

    setupGameController(root) {
        let gameArea = document.createElement("div")
        gameArea.id = "memory-game-area"
        root.insertAdjacentElement("beforeend", gameArea)
        return new GameController(gameArea)
    }

    setupUserInterface(root, gameController) {
        let interfaceArea = document.createElement("div")
        interfaceArea.id = "memory-game-ui"
        root.insertAdjacentElement("afterbegin", interfaceArea)
        return new UserInterface(interfaceArea, gameController)
    }
}

new MemoryGame()
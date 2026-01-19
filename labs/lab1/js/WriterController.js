import { STRINGS } from "../lang/messages/en/strings.js"
import { ScreenController } from "./ScreenController.js"
import { LocalStorageController } from "./LocalStorageController.js"
import { TextBox } from "./TextBox.js"

// Controls writter screen functions
export class WritterControler extends ScreenController {
    constructor() {
        super(STRINGS.BROWSER_TITLE, STRINGS.WRITER_TITLE)
        this.getStyles("../css/TextBox.css")
        this.getStyles("../css/Writer.css")
        this.LSController = new LocalStorageController()
        this.footer.insertAdjacentElement("beforeend",
            this.createRedirect(STRINGS.BACK, "../index.html"))

        this.timeStamp = document.createElement("h4")
        this.timeStamp.id = "time-stamp"
        this.header.insertAdjacentElement("beforeend", this.timeStamp)

        this.boxes = []
        this.setupBody()
        this.update()



        setInterval(() => {
            this.update()
        }, 2000);
    }

    setupBody() {
        const topBar = document.createElement("div")
        topBar.id = "top-bar"
        this.body.insertAdjacentElement("afterbegin", topBar)

        const addButton = document.createElement("button")
        addButton.id = "add-button"
        addButton.insertAdjacentText("afterbegin", STRINGS.ADD_BUTTON)
        addButton.onclick = () => { this.addNewBox("") }

        topBar.insertAdjacentElement("afterbegin", addButton)


        const storedText = JSON.parse(this.LSController.get())
        storedText.forEach(note => {
            this.addNewBox(note)
        });

    }

    addNewBox(value) {
        const box = new TextBox(value, STRINGS.REMOVE_BUTTON, b => {this.removeBox(b)})
        this.boxes.push(box)
        this.body.insertAdjacentElement("beforeend", box.getElement())
    }

    update() {
        const notes = []
        this.boxes.forEach(box => {
            notes.push(box.getValue())
        })
        this.LSController.set(notes)

        this.timeStamp.innerText = STRINGS.UPDATED + new Date().toLocaleTimeString();
    }

    removeBox(box) {
        document.querySelectorAll(".text-box")
            .forEach(b => {
                if (b == box.getElement()) {
                    b.remove()
                }
            })

        this.boxes = this.boxes.filter(b => b.getElement() !== box.getElement())
    }

}

new WritterControler()
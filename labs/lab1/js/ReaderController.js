import { STRINGS } from "../lang/messages/en/strings.js"
import { ScreenController } from "./ScreenController.js"
import { LocalStorageController } from "./LocalStorageController.js"
import { TextBox } from "./TextBox.js"

// Controls reader screen functions
export class ReaderControler extends ScreenController {
    constructor() {
        super(STRINGS.BROWSER_TITLE, STRINGS.READER_TITLE)
        this.getStyles("./css/TextBox.css")
        this.getStyles("./css/Reader.css")
        this.LSController = new LocalStorageController()
        this.footer.insertAdjacentElement("beforeend",
            this.createRedirect(STRINGS.BACK, "./index.html"))

        this.timeStamp = document.createElement("h4")
        this.timeStamp.id = "time-stamp"
        this.header.insertAdjacentElement("beforeend", this.timeStamp)

        this.boxes = []
        this.update()


        setInterval(() => {
            this.update()
        }, 2000);
    }


    addNewBox(value) {
        const box = new TextBox(value)
        this.boxes.push(box)
        this.body.insertAdjacentElement("beforeend", box.getElement())
    }

    update() {

        const storedText = JSON.parse(this.LSController.get())

        document.querySelectorAll(".text-box").forEach(b => {b.remove()})

        storedText.forEach((note) => {
            this.addNewBox(note)
        });

        this.timeStamp.innerText = STRINGS.UPDATED + new Date().toLocaleTimeString();
    }

}

new ReaderControler()
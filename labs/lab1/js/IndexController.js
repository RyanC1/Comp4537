import { STRINGS } from "../lang/messages/en/strings.js"
import { ScreenController } from "./ScreenController.js"

export class IndexController extends ScreenController {
    constructor() {
        super(STRINGS.BROWSER_TITLE, STRINGS.INDEX_TITLE)
        const name = document.createElement("h2")
        name.innerHTML = STRINGS.AUTHOR
        this.header.insertAdjacentElement("beforeend", name)
        this.body.insertAdjacentElement("beforeend",
            this.createRedirect(STRINGS.READER_TITLE, "./reader.html"))
        this.body.insertAdjacentElement("beforeend",
            this.createRedirect(STRINGS.WRITER_TITLE, "./writer.html"))
    }


}

new IndexController()
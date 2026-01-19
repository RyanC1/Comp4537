//Creates basic page layout
export class ScreenController {
    constructor(browserTitle, pageTitle) {
        this.header = document.createElement("header")
        this.body = document.createElement("div")
        this.footer = document.createElement("footer")

        this.header.id = "header-content"
        this.body.id = "main-content"
        this.footer.id = "footer-content"

        document.body.insertAdjacentElement("beforeend", this.header)
        document.body.insertAdjacentElement("beforeend", this.body)
        document.body.insertAdjacentElement("beforeend", this.footer)


        this.getStyles("./css/ScreenController.css")
        this.setBrowserTitle(browserTitle)
        this.setPageTitle(pageTitle)
    }

    getStyles(href) {
        if (!document.querySelector(`link[rel="stylesheet"][href="${href}"]`)) {
            const link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = href;
            document.head.insertAdjacentElement("beforeend", link);
        }
    }

    
    setBrowserTitle(browserTitle) {
            const title = document.createElement("title");
            title.insertAdjacentText("beforeend", browserTitle)
            document.head.insertAdjacentElement("beforeend", title);
    }

    setPageTitle(pageTitle) {
            const title = document.createElement("h1");
            title.insertAdjacentText("beforeend", pageTitle)
            this.header.insertAdjacentElement("beforeend", title);
    }

    createRedirect(text, href) {
            const link = document.createElement("a");
            link.href = href;
            link.insertAdjacentText("beforeend", text)
            return link
    }

}
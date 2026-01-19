export class LocalStorageController {
    constructor() {
        this.key = "notes"

        if (localStorage.getItem(this.key) == null) {
            this.set([])
        }
    }

    get() {
        return localStorage.getItem(this.key)
    }

    set(textArray) {
        localStorage.setItem(this.key, JSON.stringify(textArray))
    }

}
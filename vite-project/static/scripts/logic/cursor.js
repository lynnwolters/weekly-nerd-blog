export class Cursor {
    constructor() {
        this.cursor = document.querySelector(".cursor")
        if (!this.cursor) {
            return false
        }
        this.init()
    }

    init = () => {
        this.bindEvents()
    }

    bindEvents = () => {
        document.addEventListener("mousemove", this.animateCursor)
    }

    animateCursor = ({clientX, clientY}) => {
        this.cursor.style.transform = `translate3d(calc(${clientX}px - 50%), calc(${clientY}px - 50%), 0)`
    }
}



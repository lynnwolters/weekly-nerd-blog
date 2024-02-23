import { app } from "/index.js" 
import { TransitionOverlay } from "./logic/transitionOverlay.js"

export class Page { 
    constructor () {
        this.title = document.title 
        this.init()
    }

    init = () => {
        this.getPageTitle()
        app.initCarousel()
        this.transitionOverlay = new TransitionOverlay(app.carousel)
    }

    getPageTitle = () => {
        console.log("Page title", this.title) 
    }

    destroy = () => { 
        console.log("Destroy page", this.title) 
    }
}
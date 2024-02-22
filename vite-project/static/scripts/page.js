import { app } from "/index.js" 

export class Page { 
    constructor () {
        this.title = document.title 
        this.init()
    }

    init = () => {
        this.getPageTitle()
        app.initCarousel()
    }

    getPageTitle = () => {
        console.log("Page title", this.title) 
    }

    destroy = () => { 
        console.log("Destroy page", this.title) 
    }
}
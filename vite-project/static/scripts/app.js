import { Page } from "./page.js" 
import { Router } from "./router.js" 
import { Carousel } from "./logic/carousel.js"
import { Cursor} from "./logic/cursor.js"

export class App { 
    constructor() {
        this.init() 
    }
    
    init = () => {
        this.router = new Router()
        this.initCarousel()
        this.cursor = new Cursor()
    }
    
    handleContentReplaced = () => { 
        this.createPage()
    }
    
    createPage = () => {
        if (this.page) {
            this.page.destroy()
        }
        this.page = new Page()
    }

    initCarousel = () => {
        this.carousel = new Carousel()
    }
}
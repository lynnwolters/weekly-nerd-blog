import { Page } from "./page.js" 
import { Router } from "./router.js" 

export class App { 
    constructor () {
        this.init() 
    }
    
    init = () => {
        this.router = new Router()
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
}
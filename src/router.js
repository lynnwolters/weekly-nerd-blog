import Swup from 'https://unpkg.com/swup@4?module';
import { app } from "../index.js"

export class Router {
    constructor() {
        this.swup = new Swup({}) 
        this.init()
    }
    
    init = () => { 
        this.bindEvents() 
    }

    bindEvents = () => { 
        this.swup.hooks.on("content:replace", this.contentReplaced) 
    }

    contentReplaced = () => { 
        app.handleContentReplaced()
    }
}
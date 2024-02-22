import { App } from "./static/scripts/app.js" 

export let app = null 

function initApp() { 
    app = new App() 
}

document.addEventListener("DOMContentLoaded", () => { 
    initApp()
})
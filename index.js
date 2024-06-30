import { App } from "./src/app.js"

export let app = null

function initApp() { 
    app = new App()
}

document.addEventListener("DOMContentLoaded", () => { 
    initApp()
})
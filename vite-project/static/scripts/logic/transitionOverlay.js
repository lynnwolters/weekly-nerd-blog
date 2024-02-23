export class TransitionOverlay {
    constructor(carousel) {
        this.transitionOverlay = document.querySelector(".transition-overlay")
        if (!this.transitionOverlay) {
            return false
        } 
        this.carousel = carousel
        this.init()
    }

    init = () => {
        this.bindEvents()
        this.animateTransitionOverlay()
    }

    bindEvents = () => {}

    animateTransitionOverlay = () => {
        const cards = this.carousel.cards
        cards.forEach((index, card) => {
            console.log("Cards", card)
        })
    }
}



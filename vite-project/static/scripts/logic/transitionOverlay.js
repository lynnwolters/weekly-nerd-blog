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
        console.log("Cards", this.carousel.cards)
    }
}



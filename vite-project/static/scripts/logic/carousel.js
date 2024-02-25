export class Carousel {
    constructor() {
        this.carousel = document.querySelector(".carousel")
        this.transitionOverlay = document.querySelector(".transition-overlay")
        if (!this.carousel || !this.transitionOverlay) {
            return false
        }
        this.cards = document.querySelectorAll(".cards")
        this.colors = ["#DAFF96", "#ACACE8", "#FBDDF5"]
        this.init()
    }

    init = () => {
        this.bindEvents()
        this.cardColors()
        this.animateCards()
    }

    bindEvents = () => {
        this.carousel.addEventListener("scroll", this.animateCards)
        this.cards.forEach((card) => {
            card.addEventListener("click", () => {
                const transitionOverlayColor = card.style.backgroundColor
                this.setTransitionOverlayColor(transitionOverlayColor)
            })
        })
    }

    setTransitionOverlayColor = (transitionOverlayColor) => {
        this.transitionOverlay.style.backgroundColor = transitionOverlayColor
    }

    cardColors = () => {
        this.cards.forEach((card, index) => {
            const colorIndex = index % this.colors.length
            card.style.backgroundColor = this.colors[colorIndex]
        })
    }

    animateCards = () => {
        this.cards.forEach((card) => {
            const rect = card.getBoundingClientRect()
            const containerRect = this.carousel.getBoundingClientRect()
            const cardCenter = rect.left + rect.width / 2
            const containerCenter = containerRect.left + containerRect.width / 2

            if (Math.abs(cardCenter - containerCenter) < 10) {
                card.classList.add("animate-cards")
            } else {
                card.classList.remove("animate-cards")
            }
        })
    }
}

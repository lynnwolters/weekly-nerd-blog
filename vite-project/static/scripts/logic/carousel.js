export class Carousel {
    constructor() {
        this.carousel = document.querySelector("main ul")
        if (!this.carousel) {
            return false
        }
        this.cards = document.querySelectorAll("main ul li a")
        this.init()
    }

    init = () => {
        this.bindEvents()
        this.animateCards()
    }

    bindEvents = () => {
        this.carousel.addEventListener("scroll", this.animateCards)
    }

    animateCards = () => {
        this.cards.forEach(card => {
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

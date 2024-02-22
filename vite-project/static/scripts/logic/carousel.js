export class Carousel {
    constructor() {
        this.carousel = document.querySelector("main ul")
        if (!this.carousel) {
            return false
        }
        this.cards = document.querySelectorAll("main ul li button")
        this.init()
    }

    init = () => {
        this.bindEvents()
    }

    bindEvents = () => {
        this.carousel.addEventListener("scroll", () => {
            this.cards.forEach(card => {
                this.animateCarousel(card)
            })
        })
    }

    animateCarousel = (card) => {
        const rect = card.getBoundingClientRect()
        const containerRect = this.carousel.getBoundingClientRect()
        const cardCenter = rect.left + rect.width / 2
        const containerCenter = containerRect.left + containerRect.width / 2

        if (Math.abs(cardCenter - containerCenter) < 10) { 
            card.classList.add("animate-carousel")
        } else {
            card.classList.remove("animate-carousel")
        }
    }   
}

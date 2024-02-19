const carousel = document.querySelector("main ul")
const cards = document.querySelectorAll("main ul li button")

carousel.addEventListener("scroll", () => {
    cards.forEach(card => {
        const rect = card.getBoundingClientRect()
        const containerRect = carousel.getBoundingClientRect()
        const cardCenter = rect.left + rect.width / 2
        const containerCenter = containerRect.left + containerRect.width / 2

        if (Math.abs(cardCenter - containerCenter) < 10) { 
            card.classList.add("animate-carousel")
        } else {
            card.classList.remove("animate-carousel")
        }
    })
})

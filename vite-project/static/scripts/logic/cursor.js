let cursor = document.querySelector(".cursor")

document.addEventListener("mousemove", ({ clientX, clientY }) => {
    cursor.style.transform = `translate3d(calc(${clientX}px - 50%), calc(${clientY}px - 50%), 0)`
})


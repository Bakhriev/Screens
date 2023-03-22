const privacyIcons = document.querySelectorAll(".privacy-icon")
const backIcon = document.querySelector(".privacy__back")
const privacy = document.querySelector(".privacy")
const cards = document.querySelectorAll(".card")

const order = document.querySelector(".order")
const orderBack = document.querySelector(".order__back")

privacyIcons.forEach(icon => {
	icon.addEventListener("click", () => {
		privacy.classList.add("active")
	})
})

backIcon.addEventListener("click", () => {
	privacy.classList.remove("active")
})

cards.forEach(card => {
	card.addEventListener("click", () => {
		order.classList.add("active")
	})
})

orderBack.addEventListener("click", () => {
	order.classList.remove("active")
})

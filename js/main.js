const privacyIcon = document.querySelector(".privacy-icon")
const backIcon = document.querySelector(".privacy__back")

const privacy = document.querySelector(".privacy")

privacyIcon.addEventListener("click", () => {
	privacy.classList.add("active")
})

backIcon.addEventListener("click", () => {
	privacy.classList.remove("active")
})

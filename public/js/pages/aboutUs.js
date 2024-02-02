import data from './../../json/dataMolengeek.json' assert {type: "json"}

let socialLinks = data.reseauxSociaux
let footerIcons = document.querySelectorAll(".footerLink")

let count3 = 0
for (let key in socialLinks) {
    if (Object.hasOwnProperty.call(socialLinks, key)) {
        let element = socialLinks[key];
        footerIcons[count3].href = element
        count3 += 1
    }
}


//!BURGER MENU TOGGLE
let burgerMenuButton = document.querySelector(".burgerMenu")
let burgerMenu = document.querySelector(".actualBurgerMenu")
burgerMenuButton.addEventListener("click", () => {
    burgerMenu.classList.toggle("toggleDisplay")
})

let burgerCancel = document.querySelector(".burgerCancel")

burgerCancel.addEventListener("click", () => {
    burgerCancel.parentElement.classList.toggle("toggleDisplay")
})
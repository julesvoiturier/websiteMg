import data from './../../json/dataMolengeek.json' assert {type: "json"}


let jobCard = document.querySelector(".jobCard")
let jobCardContainer = document.querySelector(".jobsSectionContainer")
let jobData = data.jobs

for (let key in jobData) {
 if (Object.hasOwnProperty.call(jobData, key)) {
    let element = jobData[key];
    let newJobCard = jobCard.cloneNode(true)
    jobCardContainer.appendChild(newJobCard)
    newJobCard.firstElementChild.nextElementSibling.firstElementChild.innerText = element.poste
    newJobCard.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.innerText = element.description
 }
}

jobCard.style.display = "none"


let socialLinks = data.reseauxSociaux
let footerIcons = document.querySelectorAll(".footerLink")

let count = 0
for (let key in socialLinks) {
    if (Object.hasOwnProperty.call(socialLinks, key)) {
        let element = socialLinks[key];
        footerIcons[count].href = element
        count += 1
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
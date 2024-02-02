import data from '../../json/dataMolengeek.json' assert {type: "json"}


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

//! CONTACT INFOS
export let molengeekContact = data.molengeekInfo
export let  contactText = document.querySelector(".contactText")

molengeekContact.name = "<b>MOLENGEEK</b>"

for (const key in molengeekContact) {
    if (Object.hasOwnProperty.call(molengeekContact, key)) {
        let element = molengeekContact[key];
        contactText.innerHTML += element
        contactText.innerHTML += "<br></br>"
    }
}



//! CAROUSEL PARTNERS
export let sect4Home = document.querySelector(".s4page1")
export let carousel = document.querySelector(".carousel")
export let logos = data.partenaires

for (const key in logos) {
    if (Object.hasOwnProperty.call(logos, key)) {
        const element = logos[key];
        let img = document.createElement("img")
        img.src = element.logo
        img.style.width = "200px"
        img.style.marginRight = "100px"
        img.style.mixBlendMode = "multiply"
        carousel.appendChild(img)
    }
}

let carouselClone = carousel.cloneNode(true)
sect4Home.appendChild(carouselClone)



//! FOOTER LINKS

export let socialLinks = data.reseauxSociaux
export let footerIcons = document.querySelectorAll(".footerLink")

 export let socialLinksAdd = () => {
    let count = 0
    for (let key in socialLinks) {
        if (Object.hasOwnProperty.call(socialLinks, key)) {
            let element = socialLinks[key];
            footerIcons[count].href = element
            count += 1
        }
    }
}





//! EVENTS TO COME (SEANCES INFO)

export let events = data.formations.seancesInfos
export let eventDate = document.querySelectorAll(".eventToCome .date")
export let eventTitle = document.querySelectorAll(".eventToCome .eventName")

let count2 = 0
for (let key in events) {
    if (Object.hasOwnProperty.call(events, key)) {
        let element = events[key];
        eventDate[count2].innerText = element.date
        eventTitle[count2].innerText = element.nom
        count2 += 1
    }
}


// export let logo = data.molengeekLogo
// let footerLogo = document.querySelectorAll('.footerLogo');

// for (let i = 0; i < footerLogo.length; ++i) {
//     footerLogo[i].style.backgroundImage = `url(${logo})`
// }

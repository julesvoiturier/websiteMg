import data from './../../json/dataMolengeek.json' assert {type: "json"}

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

//!SOCIAL LINKS
export let socialLinks = data.reseauxSociaux
export let footerIcons = document.querySelectorAll(".footerLink")

let count3 = 0
for (let key in socialLinks) {
    if (Object.hasOwnProperty.call(socialLinks, key)) {
        let element = socialLinks[key];
        footerIcons[count3].href = element
        count3 += 1
    }
}



//!LONG OR SHORT ------------------------------------------

let courtes = document.querySelector(".shortFormations")
let longues = document.querySelector(".longFormations")
let longButton = document.querySelector(".long")
let shortButton = document.querySelector(".short")

longButton.addEventListener("click", () => {
    longButton.classList.add("chosenButton")
    shortButton.classList.remove("chosenButton")
    courtes.classList.add("disappear")
    longues.classList.remove("disappear")
    
})

shortButton.addEventListener("click", () => {
  longButton.classList.remove("chosenButton")
  shortButton.classList.add("chosenButton")
  courtes.classList.remove("disappear")
  longues.classList.add("disappear")
  
})

longButton.click()


//!FORMATIONS

let formation = document.querySelector(".formationBox")

let longFormation = data.formations.formationsLongues

for (let key in longFormation) {
  if (Object.hasOwnProperty.call(longFormation, key)) {
    let element = longFormation[key];
    let newFormation = formation.cloneNode(true)
    longues.appendChild(newFormation)

    let lastIndex = element.duree.lastIndexOf(" ")
    let day = element.duree.substring(0, lastIndex)

    console.log(day);
    newFormation.firstElementChild.innerHTML = `<span>${day}</span> mois`

    if (element.condition.ageMax == null) {
      newFormation.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.innerText = `${element.condition.situation}`
    } else {
      newFormation.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.innerText = `-${element.condition.ageMax} | ${element.condition.situation}`

    }

    newFormation.firstElementChild.nextElementSibling.firstElementChild.innerText = element.nom
    newFormation.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.innerText = element.descriptif
    newFormation.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.innerText = `${element.condition.prix} | ${element.condition.horaire}`    
    
    
  }
}

let formationCourte = document.querySelector(".shortFormationBox")
let shortFormation = data.formations.formationsCourtes
console.log(shortFormation);

for (let key in shortFormation) {
  if (Object.hasOwnProperty.call(shortFormation, key)) {
    let element = shortFormation[key];
    let newShortFormation = formationCourte.cloneNode(true)
    courtes.appendChild(newShortFormation)
    newShortFormation.firstElementChild.innerText = element.nom
    newShortFormation.firstElementChild.nextElementSibling.innerText = element.pack
    
    
  }
}

formation.style.display = "none"
formationCourte.style.display = "none"


//! ACCORDION --------------------------------------------------

let accContainer = document.querySelector(".s5page2Content")
let faq = data.FAQ
let question = document.querySelector(".question")
let answer = document.querySelector(".answer")

let count2 = 1
for (const key in faq) {
  if (Object.hasOwnProperty.call(faq, key)) {

    let element = faq[key];

    if (count2 == 1) {
      question.innerText = element
      let questionClone = question.cloneNode(true)
      accContainer.appendChild(questionClone)
    } else if (count2 == 2) {
      answer.firstElementChild.innerText = element
      let answerClone = answer.cloneNode(true)
      accContainer.appendChild(answerClone)
    }

  }
  if (count2 == 1) {
    count2 = 2
  } else if (count2 ==2) {
    count2 = 1
  }
}

let accButton = document.getElementsByClassName("question");
var i;

for (i = 0; i < accButton.length; i++) {
  accButton[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let answer = this.nextElementSibling;
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
}



//! TESTIMONIALS

let video1 = document.querySelector(".video1")
let video2 = document.querySelector(".video2")

let video1Content = data.videosTemoignage
let video2Content = data.videosTemoignage.videoII

video1.src = video1Content
video2.src = video2Content








// let events = data.formations.seancesInfos
// let eventDate = document.querySelectorAll(".eventToCome .date")
// let eventTitle = document.querySelectorAll(".eventToCome .eventName")

// let count2 = 0
// for (let key in events) {
//     if (Object.hasOwnProperty.call(events, key)) {
//         let element = events[key];
//         eventDate[count2].innerText = element.date
//         eventTitle[count2].innerText = element.nom
//         count2 += 1
//     }
// }



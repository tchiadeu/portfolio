import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="smartphone"
export default class extends Controller {
  static targets = [ "smartphoneOptions", "navbarName", "navbarBurger", "navbarCross",
                   "background", "content", "about", "projects", "contact" ]

  pageCategories = [this.contentTarget, this.aboutTarget, this.projectsTarget, this.contactTarget]

  navbarOptions() {
    this.pageCategories.forEach((category) => {
      category.style.display = "none"
    })
    this.backgroundTarget.style.background = "black";
    this.navbarNameTarget.style.color = "white";
    this.smartphoneOptionsTarget.style.display = "block";
    this.navbarCrossTarget.style.display = "block";
  }

  closeOptions() {
    this.pageCategories.forEach((category) => {
      category.style.display = "block"
    })
    this.backgroundTarget.style.background = "white";
    this.navbarNameTarget.style.color = "black";
    this.smartphoneOptionsTarget.style.display = "none";
    this.navbarCrossTarget.style.display = "none";
  }

  scrollTo(event) {
    const categoryTarget = event.currentTarget.getAttribute("data-category")
    this.pageCategories.forEach((category) => {
      category.style.display = "block"
    })
    this.backgroundTarget.style.background = "white"
    this.navbarNameTarget.style.color = "black"
    this.smartphoneOptionsTarget.style.display = "none"
    this[`${categoryTarget}Target`].scrollIntoView({ behavior: 'smooth', block: 'start' })
    this.navbarCrossTarget.style.display = "none"
  }
}

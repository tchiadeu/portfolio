import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="smartphone"
export default class extends Controller {
  static targets = [ "smartphoneOptions", "navbarName", "navbarBurger", "navbarCross",
                   "background", "content", "about", "projects", "contact" ]
  connect() {
  }

  navbarOptions() {
    this.contentTarget.style.display = "none";
    this.aboutTarget.style.display = "none";
    this.projectsTarget.style.display = "none";
    this.contactTarget.style.display = "none";
    this.backgroundTarget.style.background = "black";
    this.navbarNameTarget.style.color = "white";
    this.smartphoneOptionsTarget.style.display = "block";
    this.navbarCrossTarget.style.display = "block";
  }

  closeOptions() {
    this.contentTarget.style.display = "block";
    this.aboutTarget.style.display = "block";
    this.projectsTarget.style.display = "block";
    this.contactTarget.style.display = "block";
    this.backgroundTarget.style.background = "white";
    this.navbarNameTarget.style.color = "black";
    this.smartphoneOptionsTarget.style.display = "none";
    this.navbarCrossTarget.style.display = "none";
  }

  scrollToAbout() {
    this.contentTarget.style.display = "block";
    this.aboutTarget.style.display = "block";
    this.projectsTarget.style.display = "block";
    this.contactTarget.style.display = "block";
    this.backgroundTarget.style.background = "white";
    this.navbarNameTarget.style.color = "black";
    this.smartphoneOptionsTarget.style.display = "none";
    this.aboutTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
    this.navbarCrossTarget.style.display = "none";
  }

  scrollToProjects() {
    this.contentTarget.style.display = "block";
    this.aboutTarget.style.display = "block";
    this.projectsTarget.style.display = "block";
    this.contactTarget.style.display = "block";
    this.backgroundTarget.style.background = "white";
    this.navbarNameTarget.style.color = "black";
    this.smartphoneOptionsTarget.style.display = "none";
    this.projectsTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
    this.navbarCrossTarget.style.display = "none";
  }

  scrollToContact() {
    this.contentTarget.style.display = "block";
    this.aboutTarget.style.display = "block";
    this.projectsTarget.style.display = "block";
    this.contactTarget.style.display = "block";
    this.backgroundTarget.style.background = "white";
    this.navbarNameTarget.style.color = "black";
    this.smartphoneOptionsTarget.style.display = "none";
    this.contactTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
    this.navbarCrossTarget.style.display = "none";
  }
}

import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="smartphone"
export default class extends Controller {
  static targets = [ "navbarName", "navbarBurger", "navbarOptions", "about", "projects", "contact" ]
  connect() {
  }

  navbarOptions() {
    this.aboutTarget.style.display = "none";
    this.projectsTarget.style.display = "none";
    this.contactTarget.style.display = "none";
  }
}

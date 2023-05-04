import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="scroll"
export default class extends Controller {
  static targets = [ "about", "projects", "contact" ]

  connect() {
  }

  scrollToAbout() {
    this.aboutTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  scrollToProjects() {
    this.projectsTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  scrollToContact() {
    this.contactTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

}

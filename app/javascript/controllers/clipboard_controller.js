import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="clipboard"
export default class extends Controller {
  static targets = [ "mail", "text" ]

  connect() {
  }

  copy() {
    const mail = this.mailTarget.innerText.toLowerCase();
    const element = document.createElement("textarea");
    document.body.appendChild(element);
    element.value = mail;
    element.select();
    document.execCommand("copy");
    document.body.removeChild(element);
    this.textTarget.innerText = "Copié";
  }

  resetText() {
    this.textTarget.innerText = "Copier";
  }
}

import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="clipboard"
export default class extends Controller {
  static targets = [ "mail", "text", "button" ]

  connect() {
  }

  copy() {
    const mail = this.mailTarget.textContent.toLowerCase();
    const element = document.createElement("textarea");
    document.body.appendChild(element);
    element.value = mail;
    element.select();
    document.execCommand("copy");
    document.body.removeChild(element);
    this.textTarget.innerText = "Copié";
    this.buttonTarget.style.border = 'solid 1px #999999';
  }

  resetText() {
    this.textTarget.innerText = "Copier";
  }
}

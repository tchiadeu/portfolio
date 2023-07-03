import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="items"
export default class extends Controller {
  static targets = [ "items" ]
  itemCount = -1

  connect() {
    this.itemsTargets.forEach((item) => {
      item.style.display = "none"
    })
  }

  addItem(event) {
    event.preventDefault()
    this.itemCount++
    this.itemsTargets[this.itemCount].style.display = "block"
  }
}

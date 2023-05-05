import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="appear"
export default class extends Controller {
  static targets = [ "leftAppear", "bottomAppear" ]

  connect() {
    console.log(this.leftAppearTargets)
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.addAnimation()
        }
      })
    })
    Array.from(this.targets).forEach((target) => {
      this.observer.observe(target)
    })
  }

  addAnimation() {
    this.leftAppearTargets.forEach((target) => {
      target.classList.add("slide-in-left")
    })
    this.bottomAppearTargets.forEach((target) => {
      target.classList.add("slide-in-bottom")
    })
  }

  disconnect() {
    this.observer.disconnect()
  }
}

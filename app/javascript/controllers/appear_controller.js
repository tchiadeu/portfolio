import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="appear"
export default class extends Controller {
  static targets = [ "appear" ]

  connect() {
    const ratio = 0.5
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: ratio
    }

    const handleIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > ratio) {
          entry.target.classList.add("reveal")
          observer.unobserve(entry.target)
        }
      })
    }
    const observer = new IntersectionObserver(handleIntersect, options)
    this.appearTargets.forEach(target => {
      observer.observe(target)
    })
  }
}

import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="filter"
export default class extends Controller {
  static targets = [ "black", "white" ]

  targets = [this.blackTarget, this.whiteTarget]

  connect() {
    const ratio = 0.2
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: ratio
    }

    const handleIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > ratio) {
          const color = entry.target.getAttribute("data-filter-target")
          entry.target.classList.add(`change-to-${color}`)
          observer.unobserve(entry.target)
        }
      })
    }
    const observer = new IntersectionObserver(handleIntersect, options)
    this.targets.forEach(target => {
      observer.observe(target)
    })
  }
}

import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="appear"
export default class extends Controller {
  static targets = [ "appear" ]

  connect() {
    const ratio = 0.3
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: ratio
    }

    const handleIntersect = (entries, observer) => {
      entries.forEach((entry, index) => {
        if (entry.intersectionRatio > ratio) {
          if (index < 2 || index === 11) {
            setTimeout(() => {
              entry.target.classList.add("reveal")
            }, 1000);
          } else {
            entry.target.classList.add("reveal")
          }
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

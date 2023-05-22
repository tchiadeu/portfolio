import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="filter"
export default class extends Controller {
  static targets = [ "category" ]

  connect() {
    const ratio = 0.1
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: ratio
    }

    const body = document.body

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > ratio) {
          if (body.classList.contains("change-to-black")) {
            body.classList.remove("change-to-black")
            body.classList.add("change-to-white")
          } else if (body.classList.contains("change-to-white")) {
            body.classList.remove("change-to-white")
            body.classList.add("change-to-black")
          } else if (! entry.target.classList.contains("container-full-height")){
            body.classList.add("change-to-black")
          }
        }
      })
    }
    const observer = new IntersectionObserver(handleIntersect, options)
    this.categoryTargets.forEach(target => {
      observer.observe(target)
    })
  }
}

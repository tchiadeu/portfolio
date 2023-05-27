import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="filter"
export default class extends Controller {
  static targets = [ "category" ]

  connect() {
    const ratio = 0.2
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: ratio
    }

    const body = document.body

    let firstCategoryAppear = true

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        const targetIndex = this.categoryTargets.findIndex((target) => target == entry.target)
        if (entry.intersectionRatio > ratio && targetIndex !== -1) {
          if (firstCategoryAppear) {
            firstCategoryAppear = false
          } else {
            if (targetIndex % 2 === 0) {
              body.classList.remove("change-to-black")
              body.classList.add("change-to-white")
            } else {
              body.classList.add("change-to-black")
              body.classList.remove("change-to-white")
            }
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

import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="appear"
export default class extends Controller {
  static targets = [ "aboutAppear", "contactAppear", "projectAppear", "content" ]

  connect() {
    const body = document.body
    let firstTime = true

    const ratio = 0.3
    const projectRatio = 0.1

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: ratio
    }

    const contentHandleIntersect = (entries) => {
      entries.forEach((entry) => {
        const targetIndex = this.contentTargets.findIndex((target) => target == entry.target)
        if (entry.intersectionRatio > ratio
            && firstTime === false
            && (targetIndex === this.contentTargets.length - 1
            || targetIndex === this.contentTargets.length - 2)) {
          body.classList.remove("change-to-black")
          body.classList.add("change-to-white")
          setTimeout(() => {
            entry.target.classList.remove("unreveal")
            if (entry.target.classList.contains("arrow-down")) {
              entry.target.style.animation = "rebound 1000ms cubic-bezier(0.4, 0, 1, 1) infinite"
            } else {
              entry.target.style.animation = "image-appear 1000ms ease-in-out forwards"
            }
          }, 200)
        } else if (body.classList.contains("change-to-white")
                  && entry.intersectionRatio > ratio) {
          entry.target.classList.remove("unreveal")
          entry.target.classList.add("reveal")
        } else if (body.classList.contains("change-to-black")) {
          firstTime = false
          entry.target.classList.add("unreveal")
          setTimeout(() => {
            entry.target.classList.remove("image-reveal")
            entry.target.classList.remove("slide-in-arrow")
            entry.target.classList.remove("slide-in-navbar")
            entry.target.classList.remove("slide-in-title")
            entry.target.classList.remove("slide-in-description")
            entry.target.classList.remove("slide-in-button")
            entry.target.classList.remove("reveal")
          }, 500)
        }
      })
    }

    const aboutHandleIntersect = (entries) => {
      entries.forEach((entry) => {
        const targetIndex = this.aboutAppearTargets.findIndex((target) => target == entry.target)
        if ((targetIndex === 0
            || targetIndex === this.aboutAppearTargets.length - 1)
            && entry.intersectionRatio > ratio) {
          body.classList.remove("change-to-white")
          body.classList.add("change-to-black")
          setTimeout(() => {
            entry.target.classList.remove("unreveal")
            entry.target.classList.add("reveal")
          }, 200)
        } else if (body.classList.contains("change-to-black") && entry.intersectionRatio > ratio) {
          entry.target.classList.remove("unreveal")
          entry.target.classList.add("reveal")
        } else if (body.classList.contains("change-to-white")) {
          entry.target.classList.add("unreveal")
          setTimeout(() => {
            entry.target.classList.remove("reveal")
          }, 500)
        }
      })
    }

    const projectHandleIntersect = (entries) => {
      entries.forEach((entry) => {
        const targetIndex = this.projectAppearTargets.findIndex((target) => target == entry.target)
        if ((targetIndex === 0
            || targetIndex === this.projectAppearTargets.length - 1
            || targetIndex === this.projectAppearTargets.length - 2)
            && entry.intersectionRatio > ratio) {
          body.classList.remove("change-to-black")
          body.classList.add("change-to-white")
          setTimeout(() => {
            entry.target.classList.remove("unreveal")
            entry.target.classList.add("reveal")
          }, 200)
        } else if (body.classList.contains("change-to-white") && entry.intersectionRatio > projectRatio) {
          entry.target.classList.remove("unreveal")
          entry.target.classList.add("reveal")
        } else if (body.classList.contains("change-to-black")) {
          entry.target.classList.add("unreveal")
          setTimeout(() => {
            entry.target.classList.remove("reveal")
          }, 500)
        }
      })
    }

    const contactHandleIntersect = (entries) => {
      entries.forEach((entry) => {
        const targetIndex = this.contactAppearTargets.findIndex((target) => target == entry.target)
        if ((targetIndex === 0
            || targetIndex === this.contactAppearTargets.length - 1)
            && entry.intersectionRatio > ratio) {
          body.classList.remove("change-to-white")
          body.classList.add("change-to-black")
          setTimeout(() => {
            entry.target.classList.remove("unreveal")
            entry.target.classList.add("reveal")
          }, 200)
        } else if (body.classList.contains("change-to-black") && entry.intersectionRatio > ratio) {
          entry.target.classList.remove("unreveal")
          entry.target.classList.add("reveal")
        } else if (body.classList.contains("change-to-white")) {
          entry.target.classList.add("unreveal")
          setTimeout(() => {
            entry.target.classList.remove("reveal")
          }, 500)
        }
      })
    }

    const contentObserver = new IntersectionObserver(contentHandleIntersect, options)
    this.contentTargets.forEach(target => {
      contentObserver.observe(target)
    })

    const aboutObserver = new IntersectionObserver(aboutHandleIntersect, options)
    this.aboutAppearTargets.forEach(target => {
      aboutObserver.observe(target)
    })

    const projectObserver = new IntersectionObserver(projectHandleIntersect, options)
    this.projectAppearTargets.forEach(target => {
      projectObserver.observe(target)
    })

    const contactObserver = new IntersectionObserver(contactHandleIntersect, options)
    this.contactAppearTargets.forEach(target => {
      contactObserver.observe(target)
    })
  }
}

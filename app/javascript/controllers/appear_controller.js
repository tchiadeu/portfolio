import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [
    "about", "contact", "project",
    "contentContainer", "aboutContainer", "projectContainer"
   ]

  connect() {
    const body = document.body

    const ratio = 0.3
    const projectRatio = 0.05

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: ratio
    }
    const projectOptions = {
      root: null,
      rootMargin: "0px",
      threshold: projectRatio
    }

    const aboutHandleIntersect = (entries) => {
      entries.forEach((entry) => {
        const targetIndex = this.aboutTargets.findIndex((target) => target == entry.target)
        if (targetIndex === 0 && entry.intersectionRatio > ratio) {
          body.classList.remove("change-to-white")
          body.classList.add("change-to-black")
          this.contentContainerTarget.style.visibility = "hidden"
          setTimeout(() => {
            entry.target.classList.remove("unreveal")
            entry.target.classList.add("reveal")
            aboutObserver.unobserve(entry.target)
          }, 200)
          setTimeout(() => {
          this.contentContainerTarget.style.visibility = "visible"
          this.contentContainerTarget.classList.add("change-to-white")
        }, 3000)
        } else if (entry.intersectionRatio > ratio) {
          entry.target.classList.remove("unreveal")
          entry.target.classList.add("reveal")
          aboutObserver.unobserve(entry.target)
        }
      })
    }

    const aboutObserver = new IntersectionObserver(aboutHandleIntersect, options)
    this.aboutTargets.forEach((target) => {
      aboutObserver.observe(target)
    })

    const projectHandleIntersect = (entries) => {
      entries.forEach((entry) => {
        const targetIndex = this.projectTargets.findIndex((target) => target == entry.target)
        if (targetIndex === 0 && entry.intersectionRatio > projectRatio) {
          body.classList.remove("change-to-black")
          body.classList.add("change-to-white")
          this.aboutContainerTarget.style.visibility = "hidden"
          setTimeout(() => {
            entry.target.classList.remove("unreveal")
            entry.target.classList.add("reveal")
            projectObserver.unobserve(entry.target)
          }, 200)
          setTimeout(() => {
            this.aboutContainerTarget.style.visibility = "visible"
            this.aboutContainerTarget.classList.add("change-to-black")
          }, 3000)
        } else if (entry.intersectionRatio > projectRatio) {
          entry.target.classList.remove("unreveal")
          entry.target.classList.add("reveal")
          projectObserver.unobserve(entry.target)
        }
      })
    }

    const projectObserver = new IntersectionObserver(projectHandleIntersect, projectOptions)
    this.projectTargets.forEach((target) => {
      projectObserver.observe(target)
    })

    const contactHandleIntersect = (entries) => {
      entries.forEach((entry) => {
        const targetIndex = this.contactTargets.findIndex((target) => target == entry.target)
        if (targetIndex === 0 && entry.intersectionRatio > ratio) {
          body.classList.remove("change-to-white")
          body.classList.add("change-to-black")
          this.projectContainerTarget.style.visibility = "hidden"
          setTimeout(() => {
            entry.target.classList.remove("unreveal")
            entry.target.classList.add("reveal")
            contactObserver.unobserve(entry.target)
          }, 200);
          setTimeout(() => {
            this.projectContainerTarget.style.visibility = "visible"
            this.projectContainerTarget.classList.add("change-to-white")
          }, 3000)
        } else if (entry.intersectionRatio > ratio) {
          entry.target.classList.remove("unreveal")
          entry.target.classList.add("reveal")
          contactObserver.unobserve(entry.target)
        }
      })
    }

    const contactObserver = new IntersectionObserver(contactHandleIntersect, options)
    this.contactTargets.forEach((target) => {
      contactObserver.observe(target)
    })
  }
}

import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [
    "about", "contact", "project",
    "contentContainer", "aboutContainer", "projectContainer", "contactContainer",
    "aboutContainerTrigger", "projectContainerTrigger"
  ]

  connect() {
    console.log(this.aboutContainerTriggerTargets)

    const body = document.body

    const ratio = 0.3
    const projectRatio = 0.05
    const containerRatio = 0.5

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
    const containerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: containerRatio
    }

    const aboutHandleIntersect = (entries) => {
      entries.forEach((entry) => {
        const targetIndex = this.aboutTargets.findIndex((target) => target == entry.target)
        if (targetIndex === 0 && entry.intersectionRatio > ratio) {
          body.classList.remove("change-to-white")
          body.classList.add("change-to-black")
          this.contentContainerTarget.classList.add("unreveal")
          this.contentContainerTarget.dataset.disappear = "true"
          setTimeout(() => {
            entry.target.classList.remove("unreveal")
            entry.target.classList.add("reveal")
            aboutObserver.unobserve(entry.target)
          }, 200)
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
          this.aboutContainerTarget.classList.add("unreveal")
          this.aboutContainerTriggerTargets.forEach((target) => {
            target.dataset.disappear = "true"
          })
          setTimeout(() => {
            entry.target.classList.remove("unreveal")
            entry.target.classList.add("reveal")
            projectObserver.unobserve(entry.target)
          }, 200)
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
          this.projectContainerTarget.classList.add("unreveal")
          this.projectContainerTriggerTargets.forEach((target) => {
            target.dataset.disappear = "true"
          })
          setTimeout(() => {
            entry.target.classList.remove("unreveal")
            entry.target.classList.add("reveal")
            contactObserver.unobserve(entry.target)
          }, 500);
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

    const containerHandleIntersect = (entries) => {
      entries.forEach((entry) => {
        const containerDisappeared = entry.target.getAttribute("data-disappear")
        const categoryTarget = entry.target.getAttribute("data-category")
        if (
          containerDisappeared === "true" &&
          entry.intersectionRatio > containerRatio &&
          categoryTarget === "content"
        ) {
          body.classList.remove("change-to-black")
          this.contentContainerTarget.classList.remove("unreveal")
          this.contactContainerTarget.classList.remove("reveal")
          this.aboutContainerTarget.classList.remove("reveal")
          this.projectContainerTarget.classList.remove("reveal")
          this.contactContainerTarget.classList.add("unreveal")
          this.aboutContainerTarget.classList.add("unreveal")
          this.projectContainerTarget.classList.add("unreveal")
          body.classList.add("change-to-white")
          setTimeout(() => {
            this.contentContainerTarget.classList.add("reveal")
          }, 700);
        } else if (
          containerDisappeared === "true" &&
          entry.intersectionRatio > containerRatio &&
          categoryTarget === "project"
        ) {
          body.classList.remove("change-to-black")
          this.projectContainerTarget.classList.remove("unreveal")
          this.contactContainerTarget.classList.remove("reveal")
          this.aboutContainerTarget.classList.remove("reveal")
          this.contentContainerTarget.classList.remove("reveal")
          this.contactContainerTarget.classList.add("unreveal")
          this.aboutContainerTarget.classList.add("unreveal")
          this.contentContainerTarget.classList.add("unreveal")
          this.contactContainerTarget.dataset.disappear = "true"
          body.classList.add("change-to-white")
          setTimeout(() => {
            this.projectContainerTarget.classList.add("reveal")
          }, 700);
        } else if (
          containerDisappeared === "true" &&
          entry.intersectionRatio > containerRatio &&
          categoryTarget === "about"
        ) {
          body.classList.remove("change-to-white")
          this.aboutContainerTarget.classList.remove("unreveal")
          this.contactContainerTarget.classList.remove("reveal")
          this.contentContainerTarget.classList.remove("reveal")
          this.projectContainerTarget.classList.remove("reveal")
          this.contactContainerTarget.classList.add("unreveal")
          this.contentContainerTarget.classList.add("unreveal")
          this.projectContainerTarget.classList.add("unreveal")
          body.classList.add("change-to-black")
          setTimeout(() => {
            this.aboutContainerTarget.classList.add("reveal")
          }, 700);
        } else if (
          containerDisappeared === "true" &&
          entry.intersectionRatio > containerRatio &&
          categoryTarget === "contact"
        ) {
          body.classList.remove("change-to-white")
          this.contactContainerTarget.classList.remove("unreveal")
          this.contentContainerTarget.classList.remove("reveal")
          this.aboutContainerTarget.classList.remove("reveal")
          this.projectContainerTarget.classList.remove("reveal")
          this.contentContainerTarget.classList.add("unreveal")
          this.aboutContainerTarget.classList.add("unreveal")
          this.projectContainerTarget.classList.add("unreveal")
          body.classList.add("change-to-black")
          setTimeout(() => {
            this.contactContainerTarget.classList.add("reveal")
          }, 700);
        }
      })
    }

    const containerObserver = new IntersectionObserver(containerHandleIntersect, containerOptions)
    containerObserver.observe(this.contentContainerTarget)
    this.aboutContainerTriggerTargets.forEach((target) => {
      containerObserver.observe(target)
    })
    this.projectContainerTriggerTargets.forEach((target) => {
      containerObserver.observe(target)
    })
    containerObserver.observe(this.contactContainerTarget)
  }
}

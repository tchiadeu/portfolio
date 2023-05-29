import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="appear"
export default class extends Controller {
  static targets = [ "blackAppear", "aboutAppear", "contactAppear", "projectAppear", "project", "category" ]

  connect() {
    const body = document.body
    let firstCategoryAppear = true

    const ratio = 0.3
    const projectRatio = 0.1
    const bodyRatio = 0.2

    const options = {
      root: document.querySelector("#scrollArea"),
      rootMargin: "100px 0px",
      threshold: ratio
    }
    const projectOptions = {
      root: document.querySelector("#scrollArea"),
      rootMargin: "185px 0px",
      threshold: projectRatio
    }
    const bodyOptions = {
      root: null,
      rootMargin: "0px",
      threshold: bodyRatio
    }

    const blackHandleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (body.classList.contains("change-to-white") && entry.intersectionRatio > ratio) {
          entry.target.classList.remove("unreveal")
          entry.target.classList.add("reveal")
        } else {
          entry.target.classList.remove("reveal")
        }
      })
    }
    const whiteHandleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (body.classList.contains("change-to-black") && entry.intersectionRatio > ratio) {
          entry.target.classList.remove("unreveal")
          entry.target.classList.add("reveal")
        } else {
          entry.target.classList.remove("reveal")
        }
      })
    }
    const projectHandleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (body.classList.contains("change-to-white") && entry.intersectionRatio > projectRatio ) {
          entry.target.classList.remove("unreveal")
          entry.target.classList.add("reveal")
        } else {
          entry.target.classList.remove("reveal")
        }
      })
    }
    const bodyHandleIntersect = (entries) => {
      entries.forEach((entry) => {
        const targetIndex = this.categoryTargets.findIndex((target) => target == entry.target)
        if (entry.intersectionRatio > bodyRatio && targetIndex !== -1) {
          if (firstCategoryAppear) {
            firstCategoryAppear = false
          } else {
            if (targetIndex === 0) {
              body.classList.remove("change-to-black")
              body.classList.add("change-to-white")
              this.aboutAppearTargets.forEach(target => {
                target.classList.add("unreveal")
              })
              this.contactAppearTargets.forEach(target => {
                target.classList.add("unreveal")
              })
              this.projectAppearTargets.forEach(target => {
                target.classList.add("unreveal")
              })
              this.projectTargets.forEach(target => {
                target.classList.add("unreveal")
              })
            } else if (targetIndex === 1) {
              body.classList.add("change-to-black")
              body.classList.remove("change-to-white")
              this.projectAppearTargets.forEach(target => {
                target.classList.add("unreveal")
              })
              this.projectTargets.forEach(target => {
                target.classList.add("unreveal")
              })
              this.contactAppearTargets.forEach(target => {
                target.classList.add("unreveal")
              })
              setTimeout(() => {
                this.aboutAppearTargets[0].classList.remove("unreveal")
                this.aboutAppearTargets[1].classList.remove("unreveal")
                this.aboutAppearTargets[0].classList.add("reveal")
                this.aboutAppearTargets[1].classList.add("reveal")
              }, 200);
            } else if (targetIndex === 2) {
              body.classList.remove("change-to-black")
              body.classList.add("change-to-white")
              this.aboutAppearTargets.forEach(target => {
                target.classList.add("unreveal")
              })
              this.contactAppearTargets.forEach(target => {
                target.classList.add("unreveal")
              })
              this.projectAppearTargets[0].classList.remove("unreveal")
              this.projectAppearTargets[0].classList.add("reveal")
            } else if (targetIndex === 3) {
              body.classList.add("change-to-black")
              body.classList.remove("change-to-white")
              this.aboutAppearTargets.forEach(target => {
                target.classList.add("unreveal")
              })
              this.projectAppearTargets.forEach(target => {
                target.classList.add("unreveal")
              })
              this.projectTargets.forEach(target => {
                target.classList.add("unreveal")
              })
              setTimeout(() => {
                this.contactAppearTargets[0].classList.remove("unreveal")
                this.contactAppearTargets[0].classList.add("reveal")
              }, 200);
            }
          }
        }
      })
    }

    const blackObserver = new IntersectionObserver(blackHandleIntersect, options)
    this.projectAppearTargets.forEach(target => {
      blackObserver.observe(target)
    })

    const whiteObserver = new IntersectionObserver(whiteHandleIntersect, options)
    this.aboutAppearTargets.forEach((target, index) => {
      if (index !== 1) {
        whiteObserver.observe(target)
      }
    })
    this.contactAppearTargets.forEach(target => {
      whiteObserver.observe(target)
    })

    const projectObserver = new IntersectionObserver(projectHandleIntersect, projectOptions)
    this.projectTargets.forEach(target => {
      projectObserver.observe(target)
    })
    projectObserver.observe(this.aboutAppearTargets[1])

    const bodyObserver = new IntersectionObserver(bodyHandleIntersect, bodyOptions)
    this.categoryTargets.forEach(target => {
      bodyObserver.observe(target)
    })
  }
}

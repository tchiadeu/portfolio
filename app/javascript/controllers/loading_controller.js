import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ 'counter', 'bar', 'name', 'loadingPage', 'landing' ]

  connect() {
    let count = 0;
    let height = 0;
    const interval = setInterval(() => {
      count++;
      height++;
      this.counterTarget.textContent = count;
      this.barTarget.style.height = `${height}%`;
      if (count == 100) {
        clearInterval(interval);
      }
    }, 20);

    setTimeout(() => {
      let opacity = 100;
      setInterval(() => {
        opacity--;
        this.counterTarget.style.opacity = `${opacity}%`;
        this.barTarget.style.opacity = `${opacity}%`;
        this.nameTarget.style.opacity = `${opacity}%`;
      }, 1);
    }, 3000);

    setTimeout(() => {
      this.loadingPageTarget.classList.add("slide-out")
    }, 4500);

    setTimeout(() => {
      this.loadingPageTarget.style.display = "none";
      this.landingTarget.style.display = "block";
    }, 5500);
  }
}

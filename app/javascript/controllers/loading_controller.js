import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ 'counter', 'bar' ]

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
    }, 30);
  }
}

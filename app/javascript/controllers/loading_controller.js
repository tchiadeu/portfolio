import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ 'counter' ]

  connect() {
    let count = 0;
    const interval = setInterval(() => {
      count++;
      this.counterTarget.textContent = count;
      if (count == 100) {
        clearInterval(interval);
      }
    }, 30);
  }
}

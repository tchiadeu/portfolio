import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    const url = "https://raw.githubusercontent.com/tchiadeu/portfolio/refs/heads/master/projects.json"
    fetch(url)
      .then(response => response.json())
      .then((data) => {
        console.log(data)
      })
  }
}
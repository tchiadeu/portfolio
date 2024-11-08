import { Application } from "@hotwired/stimulus";

import ImportProjectsController from "./controllers/import_projects_controller.js";

window.Stimulus = Application.start();
window.Stimulus.register("import-projects", ImportProjectsController);

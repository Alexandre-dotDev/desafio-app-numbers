import "./css/layout.css";
import { drawerCalc } from "./js/drawer";
import { resetStorage } from "./js/utils/reset-storage";
const fieldsetResults = document.querySelector(".resultsID");

document.addEventListener("DOMContentLoaded", () => {
  fieldsetResults.classList.add("disabled");
  resetStorage();
  drawerCalc();
});

import { isValidWithRepeat } from "./is-valid-with-repeat";
import { isValidWithoutRepeat } from "./is-valid-without-repeat";

const form = document.querySelector("form");
const inputFrom = document.querySelector(".number-from");
const inputTo = document.querySelector(".number-to");
const toggle = document.querySelector("#toggle");

export function drawerCalc() {
  if (!form || !inputFrom || !inputTo || !toggle) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    let min = Number(inputFrom.value);
    let max = Number(inputTo.value);

    if (!min || !max) {
      alert("É preciso digitar 2 números para sortear.");
      return;
    }

    if (max < min) {
      [min, max] = [max, min];
    }

    if (toggle.checked) {
      isValidWithoutRepeat(min, max);
    } else {
      isValidWithRepeat(min, max);
    }
  });
}

//Modelo errado
// import { isValidWithRepeat } from "./is-valid-with-repeat";
// import { isValidWithoutRepeat } from "./is-valid-without-repeat-";

// let hasRunInitial = false;

// export function drawerCalc() {
//   const toggle = document.querySelector("#toggle");
//   if (!toggle || hasRunInitial) return;

//   hasRunInitial = true;

//   if (toggle.checked) {
//     isValidWithoutRepeat();
//   } else {
//     isValidWithRepeat();
//   }

//   toggle.addEventListener("change", (event) => {
//     const isChecked = event.target.checked;

//     if (isChecked) {
//       isValidWithoutRepeat();
//     } else {
//       isValidWithRepeat();
//     }
//   });
// }

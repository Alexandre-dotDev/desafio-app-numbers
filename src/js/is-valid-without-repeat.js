import { resetInterface } from "./utils/resset-interface";
import { squareAnimation } from "./utils/square-animation";
import { withoutRepeated } from "./utils/without-repeated";

const form = document.querySelector("form");
const fieldsetInputs = document.querySelector(".inputsID");
const fieldsetResults = document.querySelector(".resultsID");
const values = document.querySelector(".values");
const inputFrom = document.querySelector(".number-from");

export function isValidWithoutRepeat(min, max) {
  const isOk = withoutRepeated(min, max);

  if (isOk === null) {
    const ok = confirm(
      "Todos os números já foram sorteados. Deseja reiniciar o sorteador?"
    );

    if (!ok) {
      values.innerHTML = "";
      return;
    }

    resetInterface({
      form,
      inputFrom,
      fieldsetInputs,
      fieldsetResults,
      values,
    });

    return;
  }

  squareAnimation(isOk);
  fieldsetInputs.classList.add("disabled");
  fieldsetResults.classList.remove("disabled");
}

//Modelo errado
// import { squareAnimation } from "./square-animation";
// import { withoutRepeated } from "./without-repeated";

// const form = document.querySelector("form");
// const fieldsetInputs = document.querySelector(".inputsID");
// const fieldsetResults = document.querySelector(".resultsID");
// const inputFrom = document.querySelector(".number-from");
// const inputTo = document.querySelector(".number-to");
// const values = document.querySelector(".values");

// export function isValidWithoutRepeat() {
//   console.log(">> isValidWithoutRepeat executada 1");
//   form.addEventListener("submit", (event) => {
//     event.preventDefault();

//     let min = Number(inputFrom.value);
//     let max = Number(inputTo.value);
//     try {
//       if (!min || !max) {
//         alert("É preciso digitar 2 números sortear.");
//         return;
//       }

//       if (max < min) {
//         [min, max] = [max, min];
//       }

//       const isOk = withoutRepeated(min, max);

//       if (isOk === null) {
//         const ok = confirm(
//           "Todos os números já foram sorteados. Deseja reiniciar o sorteador?"
//         );

//         if (!ok) {
//           values.innerHTML = "";
//           return;
//         }

//         values.innerHTML = "";
//         form.reset();
//         fieldsetResults.classList.add("disabled");
//         fieldsetInputs.classList.remove("disabled");
//         inputFrom.focus();

//         return;
//       }
//       squareAnimation(isOk);

//       fieldsetInputs.classList.add("disabled");
//       fieldsetResults.classList.remove("disabled");
//     } catch (error) {
//       console.log(error);
//     }
//   });
// }

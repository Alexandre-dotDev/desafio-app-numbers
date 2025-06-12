export function squareAnimation(number) {
  const valuesWrapper = document.querySelector(".values");
  const animationWrapper = document.createElement("div");
  const value = document.createElement("div");
  const numberOne = document.createElement("p");
  const numberTwo = document.createElement("p");

  animationWrapper.classList.add("animation");
  value.classList.add("value");
  numberOne.classList.add("number-1");
  numberTwo.classList.add("number-2");
  numberOne.textContent = number;
  numberTwo.textContent = number;

  animationWrapper.append(value, numberOne, numberTwo);

  valuesWrapper.append(animationWrapper);
}

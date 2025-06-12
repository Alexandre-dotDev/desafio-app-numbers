const counter = document.querySelector(".counter");

export function withRepeated(min, max) {
  const stored = JSON.parse(localStorage.getItem("myNumbersRepeat")) || [];

  let size = stored.length;
  counter.textContent = size + 1;

  // Verifica se já atingiu o limite de 10 execuções
  if (stored.length >= 10) {
    localStorage.removeItem("myNumbersRepeat");

    return null; // Ou você pode lançar um erro ou mostrar um alerta, se preferir
  }

  const candidate = Math.floor(Math.random() * (max - min + 1)) + min;

  stored.push(candidate);

  localStorage.setItem("myNumbersRepeat", JSON.stringify(stored));

  return candidate;
}

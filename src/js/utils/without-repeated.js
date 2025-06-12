const counter = document.querySelector(".counter");

export function withoutRepeated(min, max) {
  const stored = JSON.parse(localStorage.getItem("myNumbers")) || [];

  let size = stored.length;
  counter.textContent = size + 1;

  if (stored.length > 0) {
    localStorage.removeItem("myNumbers");
  }

  const set = new Set(stored);

  if (set.size >= max) {
    localStorage.removeItem("myNumbers");
    return null;
  }

  let candidate;

  do {
    candidate = Math.floor(Math.random() * max) + min;
  } while (set.has(candidate));

  set.add(candidate);
  localStorage.setItem("myNumbers", JSON.stringify([...set]));

  return candidate;
}

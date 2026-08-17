const facts = [
  "Honey never spoils — archaeologists have found 3,000-year-old honey that's still edible.",
  "Octopuses have three hearts and blue blood.",
  "A day on Venus is longer than a year on Venus.",
  "Bananas are berries, but strawberries aren't.",
  "The Eiffel Tower can grow taller in summer due to thermal expansion.",
  "Wombat poop is cube-shaped.",
  "There are more stars in the universe than grains of sand on all of Earth's beaches.",
  "Sharks existed before trees.",
  "A group of flamingos is called a 'flamboyance'.",
  "Sea otters hold hands while sleeping so they don't drift apart.",
];

const factEl = document.getElementById("fact");
const btn = document.getElementById("btn");
const countEl = document.getElementById("count");
const themeToggle = document.getElementById("theme-toggle");
let count = 0;
let lastIndex = -1;

function pickFact() {
  let index;
  do {
    index = Math.floor(Math.random() * facts.length);
  } while (index === lastIndex && facts.length > 1);
  lastIndex = index;
  return facts[index];
}

btn.addEventListener("click", () => {
  factEl.classList.add("fading");
  setTimeout(() => {
    factEl.textContent = pickFact();
    factEl.classList.remove("fading");
    count += 1;
    countEl.textContent = count;
  }, 150);
});

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  themeToggle.textContent = theme === "dark" ? "☀️" : "🌙";
  localStorage.setItem("theme", theme);
}

const savedTheme =
  localStorage.getItem("theme") ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
applyTheme(savedTheme);

themeToggle.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  applyTheme(current === "dark" ? "light" : "dark");
});

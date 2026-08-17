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

const FACT_API_URL = "https://uselessfacts.jsph.pl/api/v2/facts/random?language=en";

const factEl = document.getElementById("fact");
const btn = document.getElementById("btn");
const countEl = document.getElementById("count");
const themeToggle = document.getElementById("theme-toggle");
let count = 0;
let lastIndex = -1;
let lastFact = null;

function pickLocalFact() {
  let index;
  do {
    index = Math.floor(Math.random() * facts.length);
  } while (index === lastIndex && facts.length > 1);
  lastIndex = index;
  return facts[index];
}

async function fetchFact() {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 4000);
  try {
    const res = await fetch(FACT_API_URL, { signal: controller.signal });
    if (!res.ok) throw new Error(`Request failed: ${res.status}`);
    const data = await res.json();
    if (!data.text) throw new Error("Malformed response");
    return data.text;
  } finally {
    clearTimeout(timeout);
  }
}

async function nextFact() {
  try {
    let fact = await fetchFact();
    if (fact === lastFact) fact = await fetchFact();
    lastFact = fact;
    return fact;
  } catch {
    const fact = pickLocalFact();
    lastFact = fact;
    return fact;
  }
}

btn.addEventListener("click", async () => {
  factEl.classList.add("fading");
  btn.disabled = true;
  const fact = await nextFact();
  factEl.textContent = fact;
  factEl.classList.remove("fading");
  count += 1;
  countEl.textContent = count;
  btn.disabled = false;
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

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
let count = 0;

btn.addEventListener("click", () => {
  const randomFact = facts[Math.floor(Math.random() * facts.length)];
  factEl.textContent = randomFact;
  count += 1;
  countEl.textContent = count;
});

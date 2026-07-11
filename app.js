const categories = {
  disney: {
    label: "Disney & Pixar",
    items: [
      "Mickey Mouse",
      "Minnie Mouse",
      "Donald Duck",
      "Goofy",
      "Elsa",
      "Anna",
      "Olaf",
      "Simba",
      "Mulan",
      "Arielle",
      "Aladdin",
      "Jasmin",
      "Vaiana",
      "Rapunzel",
      "Merida",
      "Buzz Lightyear",
      "Woody",
      "Dorie",
      "Lightning McQueen",
      "Stitch"
    ]
  },
  singers: {
    label: "Sängerinnen & Sänger",
    items: [
      "Taylor Swift",
      "Beyonce",
      "Adele",
      "Rihanna",
      "Billie Eilish",
      "Harry Styles",
      "Ed Sheeran",
      "The Weeknd",
      "Dua Lipa",
      "Lady Gaga",
      "Bruno Mars",
      "Ariana Grande",
      "Shakira",
      "Justin Bieber",
      "Freddie Mercury",
      "Michael Jackson",
      "Madonna",
      "Elton John"
    ]
  },
  actors: {
    label: "Schauspiel",
    items: [
      "Zendaya",
      "Tom Holland",
      "Dwayne Johnson",
      "Emma Watson",
      "Ryan Reynolds",
      "Jennifer Lawrence",
      "Leonardo DiCaprio",
      "Margot Robbie",
      "Will Smith",
      "Keanu Reeves",
      "Sandra Bullock",
      "Johnny Depp",
      "Meryl Streep",
      "Chris Hemsworth",
      "Scarlett Johansson",
      "Daniel Radcliffe"
    ]
  },
  heroes: {
    label: "Superhelden",
    items: [
      "Spider-Man",
      "Iron Man",
      "Black Panther",
      "Wonder Woman",
      "Batman",
      "Superman",
      "Captain Marvel",
      "Thor",
      "Hulk",
      "Black Widow",
      "Deadpool",
      "Wolverine",
      "Doctor Strange",
      "Aquaman"
    ]
  },
  gaming: {
    label: "Gaming",
    items: [
      "Mario",
      "Luigi",
      "Peach",
      "Link",
      "Zelda",
      "Sonic",
      "Pikachu",
      "Kirby",
      "Lara Croft",
      "Steve",
      "Master Chief",
      "Kratos",
      "Geralt von Riva",
      "Donkey Kong"
    ]
  },
  sports: {
    label: "Sport",
    items: [
      "Lionel Messi",
      "Cristiano Ronaldo",
      "Serena Williams",
      "LeBron James",
      "Michael Jordan",
      "Usain Bolt",
      "Simone Biles",
      "Roger Federer",
      "Rafael Nadal",
      "Dirk Nowitzki",
      "Lewis Hamilton",
      "Marta",
      "Alex Morgan",
      "Shaquille O'Neal"
    ]
  },
  internet: {
    label: "Internet & TV",
    items: [
      "MrBeast",
      "PewDiePie",
      "BibisBeautyPalace",
      "Julien Bam",
      "Rezo",
      "Dagi Bee",
      "Gronkh",
      "MontanaBlack",
      "Stefan Raab",
      "Günther Jauch",
      "Thomas Gottschalk",
      "Elyas M'Barek"
    ]
  },
  history: {
    label: "Geschichte & Wissen",
    items: [
      "Albert Einstein",
      "Marie Curie",
      "Leonardo da Vinci",
      "Cleopatra",
      "Nelson Mandela",
      "Martin Luther King Jr.",
      "Frida Kahlo",
      "Mozart",
      "Beethoven",
      "Amelia Earhart",
      "Galileo Galilei",
      "Anne Frank"
    ]
  }
};

const customStorageKey = "wer-bin-ich-custom";
const themeStorageKey = "wer-bin-ich-theme";

const categorySelect = document.querySelector("#categorySelect");
const identityDisplay = document.querySelector("#identityDisplay");
const statusLabel = document.querySelector("#statusLabel");
const identityName = document.querySelector("#identityName");
const identityHint = document.querySelector("#identityHint");
const randomButton = document.querySelector("#randomButton");
const hideButton = document.querySelector("#hideButton");
const chooser = document.querySelector("#chooser");
const customForm = document.querySelector("#customForm");
const customName = document.querySelector("#customName");
const personSearch = document.querySelector("#personSearch");
const personGrid = document.querySelector("#personGrid");
const customGrid = document.querySelector("#customGrid");
const themeToggle = document.querySelector("#themeToggle");
const modeButtons = Array.from(document.querySelectorAll(".segment"));

let mode = "random";
let activeName = "";
let hidden = false;
let customItems = loadCustomItems();

function loadCustomItems() {
  try {
    return JSON.parse(localStorage.getItem(customStorageKey)) || [];
  } catch {
    return [];
  }
}

function saveCustomItems() {
  localStorage.setItem(customStorageKey, JSON.stringify(customItems));
}

function init() {
  Object.entries(categories).forEach(([key, category]) => {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = category.label;
    categorySelect.append(option);
  });

  const savedTheme = localStorage.getItem(themeStorageKey);
  if (savedTheme === "light") {
    document.documentElement.classList.add("light");
  }

  renderPeople();
  renderCustom();
  wireEvents();

  if ("serviceWorker" in navigator && location.protocol !== "file:") {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {});
  }
}

function wireEvents() {
  randomButton.addEventListener("click", pickRandom);
  hideButton.addEventListener("click", toggleHidden);
  categorySelect.addEventListener("change", renderPeople);
  personSearch.addEventListener("input", renderPeople);
  themeToggle.addEventListener("click", toggleTheme);

  modeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      mode = button.dataset.mode;
      modeButtons.forEach((item) => item.classList.toggle("active", item === button));
      chooser.classList.toggle("hidden", mode !== "choose");
      customForm.classList.toggle("hidden", mode !== "custom");
      categorySelect.disabled = mode === "custom";
      identityHint.textContent = mode === "custom" ? "Eigene Namen bleiben auf diesem Gerät." : "Zufall starten oder eine Figur auswählen.";
    });
  });

  customForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = customName.value.trim();
    if (!name) return;
    if (!customItems.some((item) => item.toLowerCase() === name.toLowerCase())) {
      customItems.push(name);
      customItems.sort((a, b) => a.localeCompare(b, "de"));
      saveCustomItems();
      renderCustom();
    }
    customName.value = "";
    setIdentity(name, "Eigene Figur");
  });
}

function getCurrentItems() {
  if (mode === "custom") return customItems;
  return categories[categorySelect.value].items;
}

function pickRandom() {
  const items = getCurrentItems();
  if (!items.length) {
    setIdentity("Noch leer", "Eigene Figur");
    identityHint.textContent = "Füge zuerst einen Namen hinzu.";
    return;
  }

  const next = items[Math.floor(Math.random() * items.length)];
  const categoryLabel = mode === "custom" ? "Eigene Figur" : categories[categorySelect.value].label;
  setIdentity(next, categoryLabel);
}

function setIdentity(name, categoryLabel) {
  activeName = name;
  hidden = false;
  identityDisplay.classList.remove("hidden-name");
  statusLabel.textContent = categoryLabel;
  identityName.textContent = name;
  identityHint.textContent = "Jetzt raten lassen.";
  hideButton.lastChild.textContent = " Verdecken";
}

function toggleHidden() {
  if (!activeName) return;
  hidden = !hidden;
  identityDisplay.classList.toggle("hidden-name", hidden);
  identityHint.textContent = hidden ? "Name ist verdeckt." : "Jetzt raten lassen.";
  hideButton.lastChild.textContent = hidden ? " Anzeigen" : " Verdecken";
}

function renderPeople() {
  const query = personSearch.value.trim().toLowerCase();
  const people = categories[categorySelect.value].items.filter((person) => person.toLowerCase().includes(query));
  personGrid.replaceChildren(...people.map((person) => createPersonButton(person, categories[categorySelect.value].label)));
}

function renderCustom() {
  customGrid.replaceChildren(...customItems.map((person) => createPersonButton(person, "Eigene Figur")));
}

function createPersonButton(person, label) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "person-button";
  button.textContent = person;
  button.addEventListener("click", () => setIdentity(person, label));
  return button;
}

function toggleTheme() {
  document.documentElement.classList.toggle("light");
  localStorage.setItem(themeStorageKey, document.documentElement.classList.contains("light") ? "light" : "dark");
}

init();

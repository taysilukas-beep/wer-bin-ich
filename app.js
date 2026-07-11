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

const categoryAdditions = {
  disney: [
    "Pluto", "Daisy Duck", "Scrooge McDuck", "Huey", "Dewey", "Louie", "Chip", "Dale", "Bambi",
    "Thumper", "Flower", "Dumbo", "Timothy Mouse", "Peter Pan", "Tinker Bell", "Wendy Darling",
    "Captain Hook", "Smee", "Alice", "Mad Hatter", "Cheshire Cat", "Queen of Hearts", "Pinocchio",
    "Jiminy Cricket", "Geppetto", "Snow White", "Grumpy", "Dopey", "Bashful", "Sleepy", "Sneezy",
    "Happy", "Doc", "Cinderella", "Prince Charming", "Fairy Godmother", "Lady Tremaine", "Anastasia",
    "Drizella", "Aurora", "Maleficent", "Phillip", "Flora", "Fauna", "Merryweather", "Baloo",
    "Bagheera", "Mowgli", "Shere Khan", "Kaa", "King Louie", "Robin Hood", "Little John",
    "Maid Marian", "Prince John", "Winnie Puuh", "Tigger", "Piglet", "Eeyore", "Rabbit", "Kanga",
    "Roo", "Belle", "Biest", "Gaston", "Lumiere", "Cogsworth", "Mrs. Potts", "Chip Potts",
    "Pocahontas", "Meeko", "Hades", "Hercules", "Megara", "Phil", "Tarzan", "Jane Porter",
    "Kuzco", "Kronk", "Yzma", "Tiana", "Naveen", "Dr. Facilier", "Maui", "Mirabel", "Bruno",
    "Isabela Madrigal", "Luisa Madrigal", "Miguel Rivera", "Hector Rivera", "Riley Andersen",
    "Joy", "Sadness", "Anger", "Fear", "Disgust", "Nemo", "Marlin", "Mike Wazowski", "Sulley"
  ],
  singers: [
    "Miley Cyrus", "Selena Gomez", "Katy Perry", "Olivia Rodrigo", "Sabrina Carpenter",
    "Lana Del Rey", "SZA", "Doja Cat", "Nicki Minaj", "Cardi B", "Post Malone", "Drake",
    "Kendrick Lamar", "Eminem", "Jay-Z", "Kanye West", "Travis Scott", "Bad Bunny", "Rosalia",
    "Karol G", "J Balvin", "Maluma", "Enrique Iglesias", "Jennifer Lopez", "Christina Aguilera",
    "Britney Spears", "Whitney Houston", "Mariah Carey", "Celine Dion", "Cher", "Prince",
    "David Bowie", "George Michael", "Stevie Wonder", "Bob Marley", "Tina Turner", "Aretha Franklin",
    "Dolly Parton", "Johnny Cash", "Frank Sinatra", "Elvis Presley", "Kurt Cobain", "Amy Winehouse",
    "Avril Lavigne", "Pink", "Gwen Stefani", "Pharrell Williams", "Alicia Keys", "John Legend",
    "Sam Smith", "Lewis Capaldi", "Shawn Mendes", "Camila Cabello", "Charlie Puth", "Jason Derulo",
    "Kesha", "Lorde", "Halsey", "Anitta", "Nelly Furtado", "Robbie Williams", "Sting", "Bono",
    "Chris Martin", "Dave Grohl", "Hayley Williams", "Bill Kaulitz", "Nena", "Herbert Groenemeyer",
    "Udo Lindenberg", "Peter Maffay", "Helene Fischer", "Sarah Connor", "Mark Forster",
    "Wincent Weiss", "Lea", "Clueso", "Cro", "Apache 207", "Sido", "Marteria", "Nina Chuba",
    "Peter Fox", "Shirin David"
  ],
  actors: [
    "Robert Downey Jr.", "Chris Evans", "Tom Hiddleston", "Benedict Cumberbatch", "Mark Ruffalo",
    "Jeremy Renner", "Elizabeth Olsen", "Paul Rudd", "Brie Larson", "Florence Pugh", "Harrison Ford",
    "Mark Hamill", "Carrie Fisher", "Adam Driver", "Natalie Portman", "Ewan McGregor", "Pedro Pascal",
    "Oscar Isaac", "Daisy Ridley", "John Boyega", "Millie Bobby Brown", "Finn Wolfhard",
    "Sadie Sink", "Winona Ryder", "David Harbour", "Jenna Ortega", "Emma Stone", "Ryan Gosling",
    "Brad Pitt", "Angelina Jolie", "Julia Roberts", "George Clooney", "Matt Damon", "Ben Affleck",
    "Tom Cruise", "Morgan Freeman", "Samuel L. Jackson", "Denzel Washington", "Viola Davis",
    "Anne Hathaway", "Natalie Dormer", "Cate Blanchett", "Nicole Kidman", "Hugh Jackman",
    "Christian Bale", "Heath Ledger", "Joaquin Phoenix", "Robert Pattinson", "Timothee Chalamet",
    "Austin Butler", "Anya Taylor-Joy", "Gal Gadot", "Jason Momoa", "Henry Cavill", "Millie Bobby Brown",
    "Pedro Alonso", "Alvaro Morte", "Ester Exposito", "Úrsula Corberó", "Kit Harington",
    "Emilia Clarke", "Maisie Williams", "Sophie Turner", "Peter Dinklage", "Bryan Cranston",
    "Aaron Paul", "Bob Odenkirk", "Steve Carell", "Jennifer Aniston", "Courteney Cox",
    "Matthew Perry", "Lisa Kudrow", "Matt LeBlanc", "David Schwimmer", "Kaley Cuoco",
    "Jim Parsons", "Macaulay Culkin", "Jack Black", "Adam Sandler", "Eddie Murphy", "Whoopi Goldberg",
    "Til Schweiger", "Matthias Schweighoefer", "Jella Haase", "Karoline Herfurth", "Florian David Fitz"
  ],
  heroes: [
    "Captain America", "Hawkeye", "Ant-Man", "Wasp", "Scarlet Witch", "Vision", "Falcon",
    "Winter Soldier", "Star-Lord", "Gamora", "Rocket Raccoon", "Groot", "Drax", "Loki",
    "Moon Knight", "She-Hulk", "Ms. Marvel", "Kate Bishop", "Shang-Chi", "Daredevil",
    "Punisher", "Jessica Jones", "Luke Cage", "Iron Fist", "Professor X", "Magneto", "Storm",
    "Cyclops", "Jean Grey", "Rogue", "Gambit", "Nightcrawler", "Mystique", "Beast", "Iceman",
    "Green Lantern", "Flash", "Cyborg", "Green Arrow", "Shazam", "Supergirl", "Batgirl",
    "Robin", "Nightwing", "Catwoman", "Harley Quinn", "Joker", "Riddler", "Penguin", "Two-Face",
    "Poison Ivy", "Bane", "Lex Luthor", "Lois Lane", "Alfred Pennyworth", "Commissioner Gordon",
    "Martian Manhunter", "Raven", "Starfire", "Beast Boy", "Blue Beetle", "Hawkman", "Hawkgirl",
    "Spawn", "Hellboy", "Invincible", "Omni-Man", "Atom Eve", "The Tick", "A-Train", "Homelander",
    "Starlight", "Queen Maeve", "Kimiko", "Mumen Rider", "Saitama", "Genos", "All Might",
    "Deku", "Bakugo", "Ochaco Uraraka", "Shoto Todoroki", "Sailor Moon", "Zorro",
    "Static Shock", "Moon Girl", "Devil Dinosaur", "Miles Morales"
  ],
  gaming: [
    "Yoshi", "Bowser", "Toad", "Wario", "Waluigi", "Daisy", "Rosalina", "Bowser Jr.", "King Boo",
    "Samus Aran", "Fox McCloud", "Captain Falcon", "Ness", "Marth", "Ike", "Inkling", "Isabelle",
    "Tom Nook", "K.K. Slider", "Villager", "Ganondorf", "Midna", "Daruk", "Mipha", "Revali",
    "Urbosa", "Impa", "Epona", "Ryu", "Ken", "Chun-Li", "M. Bison", "Sub-Zero", "Scorpion",
    "Raiden", "Liu Kang", "Jill Valentine", "Chris Redfield", "Leon S. Kennedy", "Claire Redfield",
    "Albert Wesker", "Ada Wong", "Solid Snake", "Big Boss", "Cloud Strife", "Sephiroth", "Tifa",
    "Aerith", "Sora", "Riku", "Kairi", "Crash Bandicoot", "Spyro", "Ratchet", "Clank", "Jak",
    "Daxter", "Nathan Drake", "Ellie", "Joel", "Aloy", "Ezio Auditore", "Altair", "Bayek",
    "Eivor", "Agent 47", "Doom Slayer", "Kiryu Kazuma", "Arthur Morgan", "John Marston",
    "Trevor Philips", "Michael De Santa", "Franklin Clinton", "CJ", "Pac-Man", "Mega Man",
    "Ryu Hayabusa", "Shovel Knight", "Sans", "Cuphead", "Tracer", "Mercy", "D.Va", "Jinx",
    "Vi", "Zed"
  ],
  sports: [
    "Kylian Mbappe", "Neymar", "Erling Haaland", "Luka Modric", "Toni Kroos", "Manuel Neuer",
    "Thomas Mueller", "Harry Kane", "Jude Bellingham", "Kevin De Bruyne", "Sergio Ramos",
    "Zinedine Zidane", "Ronaldinho", "Ronaldo Nazario", "Marta", "Megan Rapinoe", "Mia Hamm",
    "Alexia Putellas", "Aitana Bonmati", "Nadine Angerer", "Lena Oberdorf", "Giulia Gwinn",
    "Stephen Curry", "Kobe Bryant", "Magic Johnson", "Larry Bird", "Kareem Abdul-Jabbar",
    "Giannis Antetokounmpo", "Nikola Jokic", "Luka Doncic", "Kevin Durant", "Shaquille O'Neal",
    "Tiger Woods", "Michael Phelps", "Katie Ledecky", "Naomi Osaka", "Coco Gauff", "Steffi Graf",
    "Boris Becker", "Novak Djokovic", "Andy Murray", "Iga Swiatek", "Carlos Alcaraz",
    "Max Verstappen", "Sebastian Vettel", "Michael Schumacher", "Fernando Alonso", "Charles Leclerc",
    "Valentino Rossi", "Marc Marquez", "Tom Brady", "Patrick Mahomes", "Aaron Rodgers",
    "Peyton Manning", "Odell Beckham Jr.", "Conor McGregor", "Khabib Nurmagomedov", "Ronda Rousey",
    "Muhammad Ali", "Mike Tyson", "Floyd Mayweather", "Manny Pacquiao", "Tony Hawk",
    "Shaun White", "Kelly Slater", "Mikaela Shiffrin", "Lindsey Vonn", "Felix Neureuther",
    "Laura Dahlmeier", "Magdalena Neuner", "Timo Boll", "Jan Frodeno", "Eliud Kipchoge",
    "Gesa Krause", "Haile Gebrselassie", "Niki Lauda", "Nico Rosberg", "Franz Beckenbauer",
    "Miroslav Klose", "Philipp Lahm", "Bastian Schweinsteiger", "Birgit Prinz", "Nia Kuenzer",
    "Nico Huelkenberg", "Ilkay Guendogan", "Jamal Musiala", "Florian Wirtz", "Alexander Zverev",
    "Dennis Schroeder"
  ],
  internet: [
    "IShowSpeed", "KSI", "Logan Paul", "Jake Paul", "Markiplier", "Jacksepticeye", "Dream",
    "TommyInnit", "DanTDM", "Ninja", "Pokimane", "Valkyrae", "Ludwig", "xQc", "Kai Cenat",
    "Charli D'Amelio", "Addison Rae", "Khaby Lame", "Bella Poarch", "Zach King", "Emma Chamberlain",
    "Liza Koshy", "Lilly Singh", "James Charles", "NikkieTutorials", "Marques Brownlee",
    "Linus Sebastian", "Casey Neistat", "David Dobrik", "Ryan Trahan", "Airrack", "UnsympathischTV",
    "Trymacs", "Papaplatte", "Knossi", "HandOfBlood", "Paluten", "GermanLetsPlay", "PietSmiet",
    "Rocket Beans TV", "Inscope21", "Concrafter", "Laserluca", "Freshtorge", "Kelly MissesVlog",
    "Sophia Thiel", "Pamela Reif", "Tanzverbot", "ApoRed", "Arazhul", "Chaosflo44", "Maudado",
    "Reved", "HoneyPuu", "Nihachu", "Gnu", "Mai Thi Nguyen-Kim", "Doktor Whatson", "MrWissen2go",
    "Kurzgesagt", "Coldmirror", "Sallys Welt", "Tijen Onaran", "Joko Winterscheidt", "Klaas Heufer-Umlauf",
    "Barbara Schoeneberger", "Jan Boehmermann", "Luke Mockridge", "Torsten Sträter", "Anke Engelke",
    "Bastian Pastewka", "Palina Rojinski", "Kurt Kroemer", "Hazel Brugger", "Carolin Kebekus",
    "Felix Lobrecht", "Tommi Schmitt", "Aurel Mertz", "El Hotzo", "Dner", "Unge", "Sarazar",
    "iBlali", "Space Frogs", "MrTrashpack", "Simon Desue", "Taddl", "TJ_beastboy"
  ],
  history: [
    "Isaac Newton", "Charles Darwin", "Nikola Tesla", "Ada Lovelace", "Alan Turing", "Stephen Hawking",
    "Jane Goodall", "Rosalind Franklin", "Katherine Johnson", "Neil Armstrong", "Buzz Aldrin",
    "Yuri Gagarin", "Sally Ride", "Malala Yousafzai", "Mahatma Gandhi", "Rosa Parks", "Harriet Tubman",
    "Abraham Lincoln", "George Washington", "Winston Churchill", "Queen Elizabeth II", "Napoleon Bonaparte",
    "Julius Caesar", "Alexander der Große", "Sokrates", "Platon", "Aristoteles", "Konfuzius",
    "Buddha", "Jeanne d'Arc", "Florence Nightingale", "Mother Teresa", "Mikhail Gorbatschow",
    "Angela Merkel", "Barack Obama", "John F. Kennedy", "Michelle Obama", "Greta Thunberg",
    "Wangari Maathai", "Simone de Beauvoir", "Virginia Woolf", "William Shakespeare", "Johann Wolfgang von Goethe",
    "Friedrich Schiller", "Astrid Lindgren", "J. K. Rowling", "Agatha Christie", "Mark Twain",
    "Ernest Hemingway", "Pablo Picasso", "Vincent van Gogh", "Claude Monet", "Salvador Dali",
    "Andy Warhol", "Banksy", "Coco Chanel", "Karl Lagerfeld", "Steve Jobs", "Bill Gates",
    "Elon Musk", "Jeff Bezos", "Walt Disney", "Henry Ford", "Gutenberg", "Martin Luther",
    "Hildegard von Bingen", "Wolfgang Amadeus Mozart", "Johann Sebastian Bach", "Ludwig van Beethoven",
    "Clara Schumann", "Franz Schubert", "Richard Wagner", "Pyotr Tchaikovsky", "Nelson Mandela",
    "Desmond Tutu", "Dalai Lama", "Che Guevara", "Frida Kahlo", "Diego Rivera", "Amelia Earhart",
    "Grace Hopper", "Rachel Carson", "Dian Fossey", "Jacques Cousteau", "David Attenborough",
    "Carl Sagan", "Niels Bohr", "Enrico Fermi", "Max Planck", "Lise Meitner", "Emmy Noether",
    "Alexander von Humboldt", "Hannah Arendt"
  ]
};

Object.entries(categoryAdditions).forEach(([key, additions]) => {
  const existing = new Set(categories[key].items.map((item) => item.toLowerCase()));
  additions.forEach((item) => {
    if (!existing.has(item.toLowerCase()) && categories[key].items.length < 100) {
      categories[key].items.push(item);
      existing.add(item.toLowerCase());
    }
  });
});

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

let currentStep = 0; // 0 - name input, 1 - class selection
let charName = "";
let charClass = ""

function createCharacter(charName, charClass) {
    character.name = charName;

    const classChoice = charClass.toLowerCase();
    switch (classChoice) {
        case "warrior":
            character.class = "Warrior";
            character.stats = warrior.stats;
            equipWeapon(character, warrior.equipment.weapon);
            equipArmor(character, warrior.equipment.armor);
            break;
        case "mage":
            character.class = "Mage";
            character.stats = mage.stats;
            equipWeapon(character, mage.equipment.weapon);
            equipArmor(character, mage.equipment.armor);
            break;
        case "rogue":
            character.class = "Rogue";
            character.stats = rogue.stats;
            equipWeapon(character, rogue.equipment.weapon);
            equipArmor(character, rogue.equipment.armor);
            break;
        default:
            console.log("Invalid choice. Please try again.");
            return;
    }
}

function getClassDescription(className) {
    switch(className) {
        case "Warrior":
            return warrior.description;
        case "Mage":
            return mage.description;
        case "Rogue":
            return rogue.description;
        default:
            return "Select a class to learn more."
    }
}

function renderNameInput() {
    currentStep = 0;

    const dialogBox = document.getElementById("dialog-box");
    dialogBox.innerHTML = `
        <span>
            Hark, noble traveler! A quest most grand awaits thee. But first, thy name must be known to the realms! 
            Enter thy title with pride, for it shall echo through the ages! A warrior, a mage, or perhaps a rogue? 
            Choose wisely, for each path hath its own fortune... or folly! May the winds of destiny guide thy choice. 
            Let the character creation begin!
        </span>
        `;
    const creationArea = document.getElementById("creation-area");
    creationArea.innerHTML = "";

    const instruction = createElement("h1", {
        attributes: { id: "title" },
        properties: { textContent: "Enter Your Name" }
    });

    const nameInput = createElement("input", {
        attributes: { id: "name-input" },
        properties: { type: "text", placeholder: "Enter your character's name" }
    });

    const saveNameButton = createElement("button", {
        attributes: { id: "save-button" },
        properties: { textContent: "Save Name" },
        events: { click: () =>  {
            const nameValue = nameInput.value;
        if(nameValue) {
            charName = nameValue;
            renderClassSelection();
        } else {
            dialogBox.textContent = "Please enter a valid name!";
        }
        }}
    });

    creationArea.append(instruction, nameInput, saveNameButton);

    if(currentStep > 0) {
        const backButton = createElement("button", {
            attributes: { id: "back-button" },
            properties: { textContent: "Back" },
            events: { click: () => goBack() }
        })
        creationArea.appendChild(backButton);
    }
}

function renderClassSelection() {
    currentStep = 1;

    const dialogBox = document.getElementById("dialog-box");
    dialogBox.innerHTML = `
        <span>
            Hark, noble traveler! A quest most grand awaits thee. But first, thy name must be known to the realms! 
            Enter thy title with pride, for it shall echo through the ages! A warrior, a mage, or perhaps a rogue? 
            Choose wisely, for each path hath its own fortune... or folly! May the winds of destiny guide thy choice. 
            Let the character creation begin!
        </span>
        `;
    const creationArea = document.getElementById("creation-area");
    creationArea.innerHTML = "";

    const instruction = createElement("h1", {
        attributes: { id: "title" },
        properties: { textContent: "Choose Your Class" }
    });
    creationArea.appendChild(instruction);

    const classes = ["Warrior", "Mage", "Rogue"];
    classes.forEach((className) => {
        const classButton = createElement("button", {
            attributes: { id: className.toLowerCase() },
            properties: { textContent: className },
            events: { click: () => {
                charClass = className;
                const description = getClassDescription(className);
                dialogBox.textContent = description;
            }}
        })
        creationArea.appendChild(classButton);
    });

    const saveClassButton = createElement("button", {
        attributes: { id: "save-button" },
        properties: { textContent: "Save Class" },
        events: { click: () => {
            if (charClass) {
                createCharacter(charName, charClass); // final step
                renderBaseZone();
            } else {
                dialogBox.textContent = "Please select a class!";
            }
        }}
    })
    creationArea.appendChild(saveClassButton);

    const backButton = createElement("button", {
        attributes: { id: "back-button" },
        properties: { textContent: "Back" },
        events: { click: () => goBack() }
    })
    creationArea.appendChild(backButton);
}

function renderBaseZone() {
    const gameEl = document.getElementById("game");
    const dialogBox = document.getElementById("dialog-box");
    dialogBox.innerHTML = `
        <span>
            Welcome, traveler!
        </span>
        `;
    const creationArea = document.getElementById("creation-area");
    creationArea.innerHTML = "";

    const characterInfo = createElement("div", { 
        properties: { textContent: JSON.stringify(character, null, 2) } });

    const campfireGif = createElement("img", {
        attributes: { id: "campfire-gif" },
        properties: { src: "assets/animations/winterCamp.gif" }
    });

    creationArea.remove();
    gameEl.insertBefore(characterInfo, dialogBox);
    gameEl.insertBefore(campfireGif, dialogBox);
    // add an animated pixelated bonfire (possibly in dark souls style)
    // render basic stats as a top bar: name, class, hp, lvl, exp, settings button (save game, load game, main menu)
    // add buttons: (1) view detailed stats, (2) inventory
};

function goBack() {
    if(currentStep === 1) {
        renderNameInput();
    }
}

function startNewGame() {
    const dialogBox = document.getElementById("dialog-box");
    const gameEl = document.getElementById("game");
    const controls = document.getElementById("controls");

    controls.remove();
    dialogBox.innerHTML = `
        <span>
            Hark, noble traveler! A quest most grand awaits thee. But first, thy name must be known to the realms! 
            Enter thy title with pride, for it shall echo through the ages! A warrior, a mage, or perhaps a rogue? 
            Choose wisely, for each path hath its own fortune... or folly! May the winds of destiny guide thy choice. 
            Let the character creation begin!
        </span>
    `;

    const creationArea = createElement("div", { attributes: { id: "creation-area" } });

    gameEl.insertBefore(creationArea, dialogBox);

    renderNameInput(); // start with the name input
}

document.querySelector("#new-game").addEventListener("click", startNewGame);
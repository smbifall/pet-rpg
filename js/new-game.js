let charName = "";
let charClass = "";

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

function renderNameInput() {
    const creationArea = document.getElementById("creation-area");
    creationArea.innerHTML = "";

    const instruction = document.createElement("h1");
    instruction.id = "title";
    instruction.textContent = "Enter Your Name";

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.placeholder = "Enter your character's name";
    nameInput.id = "name-input";

    const saveNameButton = document.createElement("button");
    saveNameButton.textContent = "Save Name";
    saveNameButton.id = "save-button";
    saveNameButton.onclick = () => {
        const nameValue = nameInput.value;
        if(nameValue) {
            charName = nameValue;
            renderClassSelection();
        } else {
            alert("Please enter a valid name.");
        }
    }

    creationArea.appendChild(instruction);
    creationArea.appendChild(nameInput);
    creationArea.appendChild(saveNameButton);
}

function renderClassSelection() {
    const creationArea = document.getElementById("creation-area");
    creationArea.innerHTML = "";

    const instruction = document.createElement("h1");
    instruction.id = "title";
    instruction.textContent = "Choose Your Class";
    creationArea.appendChild(instruction);

    const classes = ["Warrior", "Mage", "Rogue"];
    classes.forEach((className) => {
        const classButton = document.createElement("button");
        classButton.id = className.toLowerCase();
        classButton.textContent = className;

        classButton.onclick = () => {
            charClass = className;
        };
        creationArea.appendChild(classButton);
    });
    const saveClassButton = document.createElement("button");
    saveClassButton.id = "save-button";
    saveClassButton.textContent = "Save Class";
    saveClassButton.onclick = () => {
        if (charClass) {
            createCharacter(charName, charClass); // final step
            renderBaseZone();
        } else {
            alert("Please select a class.");
        }
    };
    creationArea.appendChild(saveClassButton);
}

function renderBaseZone() {
    const dialogBox = document.getElementById("dialog-box");
    const gameEl = document.getElementById("game");
    const creationArea = document.getElementById("creation-area");
    creationArea.innerHTML = "";

    const characterInfo = document.createElement("div");
    characterInfo.textContent = JSON.stringify(character, null, 2);
    gameEl.insertBefore(characterInfo, dialogBox);
    // add an animated pixelated bonfire (possibly in dark souls style)
    // render basic stats as a top bar: name, class, hp, lvl, exp, settings button (save game, load game, main menu)
    // add buttons: (1) view detailed stats, (2) inventory
};

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

    const creationArea = document.createElement("div");
    creationArea.id = "creation-area";
    gameEl.insertBefore(creationArea, dialogBox);

    renderNameInput(); // start with the name input
}

document.querySelector("#new-game").onclick = startNewGame;
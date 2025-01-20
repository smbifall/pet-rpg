import { createElement, updateDialogBox, updateInstructions } from './utility.js';
import { character, warrior, mage, rogue } from './character.js';
import { MainMenu } from './main-menu.js';

const SharedElements = {
    gameContainer: document.getElementById("game-container"),
    dialogBox: document.getElementById("dialog-box"),
    creationArea: createElement("div", { 
        attributes: { id: "creation-area" } }),
    instructions: createElement("h1", {
        attributes: { id: "instructions" },
        properties: { textContent: "" } }),
    nameInput: createElement("input", { 
        attributes: { id: "name-input" },
        properties: { type: "text", placeholder: "Enter your character's name" } }),
    saveNameButton: createElement("button", {
        attributes: { id: "save-button" },
        properties: { textContent: "Save Name" },
        events: { click: () => {
            if (SharedElements.nameInput.value) {
                NewGame.charName = SharedElements.nameInput.value;
                NewGame.nameSelectionStep.destroy();
                NewGame.classSelectionStep.render();
            } else {
                updateDialogBox("Name cannot be empty!");
            }
        }} }),
    saveClassButton: createElement("button", {
        attributes: { id: "save-button" },
        properties: { textContent: "Save Class" },
        events: { click: () => {
            if (NewGame.charClass) {
                NewGame.createCharacter(NewGame.charName, NewGame.charClass);
                console.log(character);
                // BaseZone.render();
            } else {
                updateDialogBox("Please select a class!");
            }
        }}
    }),
    backButton: createElement("button", {
        attributes: { id: "back-button" },
        properties: { textContent: "Back" },
        events: { click: () => NewGame.goBack() } })
}

export const NewGame = {
    currentStep: 0,
    charName: "",
    charClass: "",
    nameSelectionStep: {
        render() {
            NewGame.currentStep = 1;
            updateDialogBox(`
                Hark, noble traveler! A quest most grand awaits thee. But first, thy name must be known to the realms! 
                Enter thy title with pride, for it shall echo through the ages! 
                Let the character creation begin!`);
            updateInstructions("Enter Your Name");

            const { gameContainer, dialogBox, creationArea, backButton, nameInput, saveNameButton } = SharedElements;
            gameContainer.append(creationArea, dialogBox);
            creationArea.append(nameInput, saveNameButton, backButton);
        },
        destroy() {
            SharedElements.creationArea.innerHTML = "";
        }
    },
    classSelectionStep: {
        classes: ["Warrior", "Mage", "Rogue"],
        render() {
            NewGame.currentStep = 2;
            updateDialogBox(`
                A warrior, a mage, or perhaps a rogue? 
                Choose wisely, for each path hath its own fortune... or folly! 
                May the winds of destiny guide thy choice!`);
            updateInstructions("Choose Your Class");

            const { gameContainer, dialogBox, creationArea, backButton, saveClassButton } = SharedElements;
            gameContainer.insertBefore(creationArea, dialogBox);
            creationArea.append( saveClassButton, backButton);

            this.classes.forEach((className) => {
                const classButton = createElement("button", {
                    attributes: { id: className.toLowerCase() },
                    properties: { textContent: className },
                    events: { click: () => {
                        NewGame.charClass = className;
                        const description = getClassDescription(className);
                        updateDialogBox(description);
                    }}
                })
                creationArea.insertBefore(classButton, saveClassButton);
            });
        },
        destroy() {
            SharedElements.creationArea.innerHTML = "";
        },
    },
    goBack() {
        if(this.currentStep === 1) {
            this.nameSelectionStep.destroy();
            SharedElements.creationArea.remove();
            MainMenu.render();
        }
        if(this.currentStep === 2) {
            this.classSelectionStep.destroy();
            this.charClass = "";
            this.nameSelectionStep.render();
        }
    },
    createCharacter(charName, charClass) {
        character.name = charName;
    
        const classChoice = charClass.toLowerCase();
        switch (classChoice) {
            case "warrior":
                character.class = "Warrior";
                character.stats = warrior.stats;
                character.equipWeapon(warrior.equipment.weapon);
                character.equipArmor(warrior.equipment.armor);
                break;
            case "mage":
                character.class = "Mage";
                character.stats = mage.stats;
                character.equipWeapon(mage.equipment.weapon);
                character.equipArmor(mage.equipment.armor);
                break;
            case "rogue":
                character.class = "Rogue";
                character.stats = rogue.stats;
                character.equipWeapon(rogue.equipment.weapon);
                character.equipArmor(rogue.equipment.armor);
                break;
            default:
                console.log("Invalid choice. Please try again.");
                return;
        }
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

/*
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
*/
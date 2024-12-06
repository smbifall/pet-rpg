const character = {
    name: "",
    class: "",
    inventory: [],
    stats: {
        health: null,
        attack: null,
        critChance: null,
        defense: null,
        evasion: null
    },
    equipment: {
        weapon: null,
        armor: null
    }
}


// EQUIP
const weapons = {
    ironSword: {
        name: "Iron Sword",
        attack: 10,
        critChance: 1
    },
    dagger: {
        name: "Dagger",
        attack: 7,
        critChance: 1.5
    },
    woodenStaff: {
        name: "Wooden Staff",
        attack: 15,
        critChance: 1.1
    }
}

const armours = {
    chainmail: {
        name: "Chainmail",
        defense: 8,
        evasion: 0.5
    },
    robe: {
        name: "Robe",
        defense: 1,
        evasion: 5
    },
    leatherArmor: {
        name: "Leather Armor",
        defense: 3,
        evasion: 5
    }
}


// CLASSES
const warrior = {
    stats: { 
        health: 50,
        attack: 10,
        defense: 20
    },
    equipment: { 
        weapon: weapons.ironSword,
        armor: armours.chainmail
    },
};
const mage = {
    stats: { 
        health: 20,
        attack: 25,
        defense: 10
    },
    equipment: { 
        weapon: weapons.woodenStaff,
        armor: armours.robe
    }
};
const rogue = {
    stats: { 
        health: 30,
        attack: 15,
        defense: 10
    },
    equipment: { 
        weapon: weapons.dagger,
        armor: armours.leatherArmor
    }
};

// assign character name through the window prompt
function enterCharacterName() {
    character.name = prompt("Enter your character's name:");
    console.log(`Hi, ${character.name}! Let's create your character.`);
}

// select class for the character through the window promt
function selectCharacterClass() {
    const classChoice = prompt(
        "Type:\n'1' to choose Warrior \n'2' to choose Mage \n'3'to choose Rogue"
    );
    switch (classChoice) {
        case "1":
            character.class = "Warrior";
            character.stats = warrior.stats;
            character.equipment = warrior.equipment;
            break;
        case "2":
            character.class = "Mage";
            character.stats = mage.stats;
            character.equipment = mage.equipment;
            break;
        case "3":
            character.class = "Rogue";
            character.stats = rogue.stats;
            character.equipment = rogue.equipment;
            break;
        default:
            console.log("Invalid choice. Please try again.");
            selectCharacterClass();
            return;
    }
    console.log(`You chose ${character.class}!`);
    console.log(`Your stats:`, character.stats);
    console.log(`Your equipment:`, character.equipment);
}

function gameOver() {
    if(character.stats.health <= 0){
        window.alert("GAME OVER!");
    }
}
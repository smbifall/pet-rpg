const character = {
    name: "",
    class: "",
    level: 1,
    inventory: [],
    stats: {
        health: null,
        mana: null,
        damage: null,
        critChance: null,
        defense: null,
        evasion: null
    },
    equipment: {
        weapon: null,
        armor: null
    }
}


// EQUIPMENT
const weapons = {
    ironSword: {
        name: "Iron Sword",
        damage: 10,
        critChance: 1
    },
    dagger: {
        name: "Dagger",
        damage: 7,
        critChance: 1.5
    },
    woodenStaff: {
        name: "Wooden Staff",
        damage: 15,
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

function equipWeapon(character, weapon) {
    // if (character.equipment.weapon) {
    //     // Add logic to unequip(swap) current weapon (by subtracting its stats, adding it to the inventory, etc.)
    // }
    character.equipment.weapon = weapon;
    character.stats.damage += weapon.damage;
    character.stats.critChance = weapon.critChance;
}

// Function to equip armor
function equipArmor(character, armor) {
    // if (character.equipment.armor) {
    //     // Add logic to unequip(swap) current armor (by subtracting its stats, adding it to the inventory, etc.)
    // }
    character.equipment.armor = armor;
    character.stats.defense += armor.defense;
    character.stats.evasion += armor.evasion;
}


// CLASSES
const warrior = {
    stats: { 
        health: 100,
        mana: 100,
        damage: 10,
        critChance: 1,
        defense: 20,
        evasion: 5
    },
    equipment: { 
        weapon: weapons.ironSword,
        armor: armours.chainmail
    },
};
const mage = {
    stats: { 
        health: 50,
        mana: 100,
        damage: 25,
        critChance: 1,
        defense: 10,
        evasion: 10
    },
    equipment: { 
        weapon: weapons.woodenStaff,
        armor: armours.robe
    }
};
const rogue = {
    stats: { 
        health: 70,
        mana: 100,
        damage: 15,
        critChance: 1.2,
        defense: 10,
        evasion: 15
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
            equipWeapon(character, warrior.equipment.weapon);
            equipArmor(character, warrior.equipment.armor);
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
        //  
    }
}


// LEVEL
const MAX_LEVEL = 10;

function isNotMaxLevel(characterLevel, maxLevel) {
    if (characterLevel >= 1 && characterLevel < maxLevel) {
        return true
    } else {
        console.log(`Current lvl: ${character.level}`)
        return false;
    }
}

function isMaxLevel(characterLevel) {
    if (characterLevel === 10) {
        return true
    } else {
        console.log(`Current lvl: ${character.level}`)
        return false;
    }
}
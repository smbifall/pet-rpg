export const character = {
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
    },
    equipWeapon(weapon) {
        // if (character.equipment.weapon) {
        //     // Add logic to unequip(swap) current weapon (by subtracting its stats, adding it to the inventory, etc.)
        // }
        this.equipment.weapon = weapon;
        this.stats.damage += weapon.damage;
        this.stats.critChance = weapon.critChance;
    },
    equipArmor(armor) {
        // if (character.equipment.armor) {
        //     // Add logic to unequip(swap) current armor (by subtracting its stats, adding it to the inventory, etc.)
        // }
        this.equipment.armor = armor;
        this.stats.defense += armor.defense;
        this.stats.evasion += armor.evasion;
    }
}

// EQUIPMENT
export const weapons = {
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

export const armours = {
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
export const warrior = {
    description: "The Warrior, a stalwart defender and fierce combatant. With sword in hand and armor shining bright, you shall face any foe without fear. Strong of arm and resolute of heart, thou art a protector of the realm. Will thy might carve a path to glory, or shall the weight of battle prove too heavy? Choose wisely, for the Warrior’s path is one of valor, but also of sacrifice.",
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
export const mage = {
    description: "Ah, the Mage! Wielder of ancient magics, seeker of hidden knowledge. With a flick of thy wrist and words of power, you shall command the elements themselves. The power of fire, ice, and lightning bow to your will, but beware—the cost of such power is great. Shall you master the arcane, or shall the magic consume thee? A path of intellect and mystery awaits.",
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
export const rogue = {
    description: "The Rogue, a shadow in the night, swift of foot and cunning of mind. With dagger drawn and secrets at thy side, thou art the unseen hand that moves in the dark. Silent and deadly, your stealth shall lead thee to treasure... or treachery. But remember, the Rogue’s path is fraught with peril, for even the cleverest of thieves may one day meet their match. Choose wisely, for your path is one of subtlety, but danger lurks around every corner.",
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

function isCharacterDead(charHealth) {
    if(charHealth <= 0){
        window.alert("GAME OVER!");
        return true;
    }
}

// LEVEL
const MAX_LEVEL = 10;
const MIN_LEVEL = 1;

function isNotMaxLevel(characterLevel, minLevel, maxLevel) {
    if (characterLevel >= minLevel && characterLevel < maxLevel) {
        return true;
    } else {
        console.log(`Current lvl: ${character.level}`);
        return false;
    }
}

function isMaxLevel(characterLevel, maxLevel) {
    if (characterLevel === maxLevel) {
        return true;
    } else {
        console.log(`Current lvl: ${character.level}`);
        return false;
    }
}
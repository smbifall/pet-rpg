import { warrior, mage, rogue } from "./char.js";

export function createElement(tag, { attributes = {}, properties = {}, events = {} } = {}) {
    const element = document.createElement(tag);

    Object.entries(attributes).forEach(([key, value]) => {
        element.setAttribute(key, value);
    });

    Object.entries(properties).forEach(([key, value]) => {
        element[key] = value;
    });

    Object.entries(events).forEach(([event, handler]) => {
        element.addEventListener(event, handler);
    });

    return element;
}

export function updateDialogBox(content) {
    const dialogBox = document.getElementById("dialog-box");
    dialogBox.textContent = content;
}
export function updateInstructions(content) {
    const instructions = document.getElementById("instructions");
    instructions.textContent = content;
}
export function getClassDescription(className) {
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
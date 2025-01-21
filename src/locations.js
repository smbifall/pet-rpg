import { createElement, updateDialogBox, updateInstructions } from "./utility.js";
import { character } from "./char.js";

export const BaseZone = {
    elements: {
        gameContainer: document.getElementById("game-container"),
        dialogBox: document.getElementById("dialog-box"),
        characterInfo: createElement("div", { 
            properties: { textContent: "" } }),
        campfireGif: createElement("img", {
            attributes: { id: "campfire-gif" },
            properties: { src: "assets/animations/winterCamp.gif" }})
    },
    render() {
        const { gameContainer, dialogBox, characterInfo, campfireGif } = this.elements;

        characterInfo.textContent = JSON.stringify(character, null, 2);
        gameContainer.insertBefore(characterInfo, dialogBox);
        gameContainer.insertBefore(campfireGif, dialogBox);
        updateInstructions("Base Zone")
        updateDialogBox("Welcome, traveler!");
    }
}
import { updateDialogBox } from "./utility";
import { character } from "./char";

export const BaseZone = {
    elements: {
        gameContainer: document.getElementById("game-container"),
        dialogBox: document.getElementById("dialog-box"),
        instructions: document.getElementById("instructions"),
        characterInfo: createElement("div", { 
            properties: { textContent: JSON.stringify(character, null, 2) } }),
        campfireGif: createElement("img", {
            attributes: { id: "campfire-gif" },
            properties: { src: "assets/animations/winterCamp.gif" }})
    },
    render() {
        const { gameContainer, dialogBox, creationArea, characterInfo, campfireGif } = this.elements;

        updateDialogBox("Welcome, traveler!");
        gameContainer.insertBefore(characterInfo, dialogBox);
        gameContainer.insertBefore(campfireGif, dialogBox);
        // add an animated pixelated bonfire (possibly in dark souls style)
        // render basic stats as a top bar: name, class, hp, lvl, exp, settings button (save game, load game, main menu)
        // add buttons: (1) view detailed stats, (2) inventory
    }
}
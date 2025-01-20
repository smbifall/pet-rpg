import { NewGame } from './new-game.js';
import { createElement, updateDialogBox, updateInstructions } from './utility.js';

export const MainMenu = {
    elements: {
        dialogBox: document.getElementById("dialog-box"),
        gameContainer: document.getElementById("game-container"),
        instructions: document.getElementById("instructions"),
        controls: createElement("div", { 
            attributes: { id: "controls" } }),
        newGameButton: createElement("button", {
            attributes: { id: "new-game" },
            properties: { textContent: "New Game" },
            events: { click: () => { MainMenu.startNewGame() } }
        }),
        loadGameButton: createElement("button", {
            attributes: { id: "save-game" },
            properties: { textContent: "Save Game" },
            events: { click: () => console.log("Work in progress") }
        })
    },
    render() {
        updateDialogBox("2025. All rights reserved.");
        updateInstructions("Menu");
        
        const { gameContainer, dialogBox, controls, creationArea, newGameButton, loadGameButton } = this.elements;
        gameContainer.insertBefore(controls, dialogBox);
        controls.append(newGameButton, loadGameButton);
    },
    destroy() {
        this.elements.controls.remove();
    },
    startNewGame() {
        this.destroy();
        NewGame.nameSelectionStep.render();
        // clear storage ?
    }
}

MainMenu.render();
import { NewGame } from './new-game.js';
import { createElement, updateDialogBox, updateInstructions } from './utility.js';

export const MainMenu = {
    elements: {
        gameContainer: document.getElementById("game-container"),
        dialogBox: document.getElementById("dialog-box"),
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
        
        const { gameContainer, dialogBox, controls, newGameButton, loadGameButton } = this.elements;
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
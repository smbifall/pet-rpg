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
function createElement(tag, { attributes = {}, properties = {}, events = {} } = {}) {
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
export const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

export const removeChilds = (node) => {
    if (node !== null) {
        while (node.firstChild) {
            node.removeChild(node.lastChild);
        }
    }
};

export const addClasses = (node, ...classes) => {
    for (let curClass of classes) {
        node.classList.add(curClass);
    }
}

export const setAttributes = (e, atrs) => {
    for (let atr of atrs) {
        e.setAttribute(atr.name, atr.val);
    }
}

export const appendChilds = (node, ...childs) => {
    for (let child of childs) {
        node.appendChild(child);
    }
}
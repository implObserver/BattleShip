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

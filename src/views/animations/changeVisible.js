export const setHidden = (node) => {
    node.classList.add('hidden');
};

export const removeHidden = (node) => {
    node.classList.remove('hidden');
};

export const setLowOpacity = (node) => {
    node.classList.add('low-opacity');
}

export const setNormalOpacity = (node) => {
    node.classList.remove('low-opacity');
}
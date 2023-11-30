export const setHidden = (node) => {
    node.classList.add('hidden');
};

export const removeHidden = (node) => {
    node.classList.remove('hidden');
};

export const setLowOpacity = (node) => {
    node.classList.add('low-opacity');
};

export const setNormalOpacity = (node) => {
    node.classList.remove('low-opacity');
};

export const removeNullOpacity = (node) => {
    node.classList.remove('null-opacity');
};

export const setNullOpacity = (node) => {
    node.classList.add('null-opacity');
};

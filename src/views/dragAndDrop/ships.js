import { setDraggable } from './setDraggable';

export const setDraggableForShips = () => {
    forFregats();
};

const forFregats = () => {
    const dock = document.querySelector('.fregats');
    const fregats = Array.from(dock.children);

    fregats.forEach((child) => {
        setDraggable(child);
    });
};

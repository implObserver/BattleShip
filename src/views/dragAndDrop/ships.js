import { setDraggable } from './setDraggable';

export const setDraggableForShips = () => {
    forFregats();
    forCaravels();
    forDrakkars();
    forBoats();
};

const forFregats = () => {
    const dock = document.querySelector('.fregats');
    const fregats = Array.from(dock.children);

    fregats.forEach((fregat) => {
        setDraggable(fregat);
    });
};

const forCaravels = () => {
    const dock = document.querySelector('.caravels');
    const caravels = Array.from(dock.children);

    caravels.forEach((caravel) => {
        setDraggable(caravel);
    });
};

const forDrakkars = () => {
    const dock = document.querySelector('.drakkars');
    const drakkars = Array.from(dock.children);

    drakkars.forEach((drakkar) => {
        setDraggable(drakkar);
    });
};

const forBoats = () => {
    const dock = document.querySelector('.boats');
    const boats = Array.from(dock.children);

    boats.forEach((boat) => {
        setDraggable(boat);
    });
};
import { Config } from '../../models/gameConfig';
import { setDraggable } from './setDraggable';

export const setDraggableForShips = () => {
    Config.Elements.shipTypes.forEach((type) => {
        forType(type);
    });
};

const forType = (type) => {
    const dock = document.querySelector(`.${type}`);
    const ships = Array.from(dock.children);

    ships.forEach((ship) => {
        setDraggable(ship);
    });
};

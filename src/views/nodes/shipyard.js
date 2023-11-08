import { player1 } from '../..';
import { Config } from '../../models/gameConfig';
import { setDraggableForShips } from '../dragAndDrop/ships';

export const viewShipyard = () => {
    fillShipyardNode();
    setDraggableForShips();
};

const fillShipyardNode = () => {
    Config.Elements.shipTypes.forEach((type) => {
        addType(type);
    });
};

const addType = (type) => {
    const dock = document.querySelector(`.${type}`);
    const ships = player1.getShipyard().getShipsOfType(type);
    ships.forEach((ship) => {
        dock.appendChild(ship.getContainer());
    });
};

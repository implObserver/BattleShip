import { game } from '../..';
import { Config } from '../../models/gameConfig';
import { setDraggableForShips } from '../dragAndDrop/ships';

export const viewShipyard = (shipyard) => {
    fillShipyardNode(shipyard);
    setDraggableForShips();
};

const fillShipyardNode = (shipyard) => {
    Config.Elements.shipTypes.forEach((type) => {
        addType(type, shipyard);
    });
};

const addType = (type, shipyard) => {
    const dock = shipyard.getNode().querySelector(`.${type}`);
    const ships = shipyard.getShipsOfType(type);
    ships.forEach((ship) => {
        dock.appendChild(ship.getContainer());
    });
};

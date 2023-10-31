import { Config } from '../../models/gameConfig';
import { Boat, Caravel, Drakkar, Fregat } from '../../models/ship';
import { Shipyard, playerShipyardModel } from '../../models/shipyard';
import { setDraggableForShips } from '../dragAndDrop/ships';

export const viewShipyard = () => {
    fillShipyardNode();
    setDraggableForShips();
};

const fillShipyardNode = () => {
    addFregates();
    addCaravels();
    addDrakkars();
    addBoats();
};

const addFregates = () => {
    const dockNode = document.querySelector('.fregats');
    const ships = playerShipyardModel.getDockWithFregats().getShips();
    for (let i = 0; i < ships.length; i++) {
        dockNode.appendChild(ships[i].getContainer());
    }
};

const addCaravels = () => {
    const dockNode = document.querySelector('.caravels');
    const ships = playerShipyardModel.getDockWithCaravels().getShips();
    for (let i = 0; i < ships.length; i++) {
        dockNode.appendChild(ships[i].getContainer());
    }
};

const addDrakkars = () => {
    const dockNode = document.querySelector('.drakkars');
    const ships = playerShipyardModel.getDockWithDrakkars().getShips();
    for (let i = 0; i < ships.length; i++) {
        dockNode.appendChild(ships[i].getContainer());
    }
};

const addBoats = () => {
    const dockNode = document.querySelector('.boats');
    const ships = playerShipyardModel.getDockWithBoats().getShips();
    for (let i = 0; i < ships.length; i++) {
        dockNode.appendChild(ships[i].getContainer());
    }
};

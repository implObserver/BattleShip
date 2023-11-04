import { setDraggableForShips } from '../dragAndDrop/ships';

export const viewShipyard = (shipyard) => {
    fillShipyardNode(shipyard);
    setDraggableForShips();
};

const fillShipyardNode = (shipyard) => {
    addFregates(shipyard);
    addCaravels(shipyard);
    addDrakkars(shipyard);
    addBoats(shipyard);
};

const addFregates = (shipyard) => {
    const dockNode = document.querySelector('.fregats');
    const ships = shipyard.getDockWithFregats().getShips();
    for (let i = 0; i < ships.length; i++) {
        dockNode.appendChild(ships[i].getContainer());
    }
};

const addCaravels = (shipyard) => {
    const dockNode = document.querySelector('.caravels');
    const ships = shipyard.getDockWithCaravels().getShips();
    for (let i = 0; i < ships.length; i++) {
        dockNode.appendChild(ships[i].getContainer());
    }
};

const addDrakkars = (shipyard) => {
    const dockNode = document.querySelector('.drakkars');
    const ships = shipyard.getDockWithDrakkars().getShips();
    for (let i = 0; i < ships.length; i++) {
        dockNode.appendChild(ships[i].getContainer());
    }
};

const addBoats = (shipyard) => {
    const dockNode = document.querySelector('.boats');
    const ships = shipyard.getDockWithBoats().getShips();
    for (let i = 0; i < ships.length; i++) {
        dockNode.appendChild(ships[i].getContainer());
    }
};

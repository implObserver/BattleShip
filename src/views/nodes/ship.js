import { ai, player1 } from '../..';
import { randomIntFromInterval } from '../../helper/helper';
import { removeHidden, setHidden } from '../animations/changeVisible';

export const viewShip = (ship, head) => {
    let isView = ship.launchShipOnWater(head);
    if (isView) {
        ship.setHead(head);
        head.getCellNode().appendChild(ship.getContainer());
        checkShipyard();
    }
    return isView;
};

const checkShipyard = () => {
    if (player1.getShipyard().isEmpty()) {
        setTimeout(() => {
            closeManualMenu();
        }, 500);
    }
};

const closeManualMenu = () => {
    const shipyard = document.querySelector('.shipyard');
    removeHidden(ai.getGameboard().getNode());
    setHidden(shipyard);
};

export const viewShipOnRandomCell = (ship, cells) => {
    let cell = getRandomCell(cells);
    let isView = viewShip(ship, cell);
    return isView ? true : viewShipOnRandomCell(ship, cells);
};

const getRandomCell = (cells) => {
    let index = randomIntFromInterval(0, cells.length - 1);
    return cells.splice(index, 1)[0];
};

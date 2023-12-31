import { game } from '../..';
import { randomIntFromInterval } from '../../helper/helper';
import { Coordinates } from '../../models/game';
import { Session } from '../../models/session';
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
    if (Session.manualMode) {
        if (game.player.getShipyard().isEmpty()) {
            setTimeout(() => {
                closeManualMenu();
            }, 500);
        }
    }
};

const closeManualMenu = () => {
    const shipyard = document.querySelector('.shipyard');
    removeHidden(game.ai.getGameboard().getNode());
    setHidden(shipyard);
};

export const viewShipOnRandomCell = (ship, cells) => {
    let cell = getRandomCell(cells);
    let isView = viewShip(ship, cell);
    return isView ? true : viewShipOnRandomCell(ship, cells);
};

export const getRandomCell = (cells) => {
    let index = randomIntFromInterval(0, cells.length - 1);
    return cells.splice(index, 1)[0];
};

export const setStandartHorizontalShipDesign = (container, length) => {
    container.classList.remove('vertical');
    container.classList.add('horizontal');
    container.style.width = `min(${length * 5}vh,${length * 2}vw)`;
    container.style.height = `min(5vh,2vw)`;
    container.style.minHeight = `2vh`;
    container.style.minWidth = `${length * 2}vh`;
};

export const setStandartVerticalShipDesign = (container, length) => {
    container.classList.remove('horizontal');
    container.classList.add('vertical');
    container.style.height = `min(${length * 5}vh,${length * 2}vw)`;
    container.style.width = `min(5vh,2vw)`;
    container.style.minHeight = `${length * 2}vh`;
    container.style.minWidth = `2vh`;
};

export const resetShipStyle = (container) => {
    container.style.opacity = '1';
    container.style.border = 'min(0.1vh, 0.1vw) rgba(0, 0, 255, 1) solid';
};

export const setDeathStyleOnShip = (container) => {
    container.style.opacity = '0.3';
    container.style.border = 'min(0.1vh, 0.1vw) rgba(255, 0, 0, 1) solid';
};


export const viewDragShipForMobile = (cursorX, cursorY, container) => {
    let x = cursorX - Coordinates.getXY().x;
    let y = cursorY - Coordinates.getXY().y;
    container.style.setProperty('--y', `${y}px`);
    container.style.setProperty('--x', `${x}px`);
}
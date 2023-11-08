import { randomIntFromInterval } from '../helper/helper';
import { getNode } from '../views/nodes/factory';
import { viewShip } from '../views/nodes/ship';
import { Deck } from './cell';
import { isFitOnGameboardAxis } from './gameBoard';
import { Config } from './gameConfig';
import { Session } from './session';
import { ShipWaterAreas } from './waterAreas';

export const Ship = (length, player) => {
    const container = getNode('ship', 'horizontal');
    let body = [];
    let live = true;
    let horizontal = true;
    let head = null;
    let shipWaterAreas = ShipWaterAreas(player, container);

    const fillContainer = () => {
        for (let i = 0; i < length; i++) {
            let deck = Deck(i);
            body.push(deck);
            container.appendChild(deck.getCellNode());
        }
    };

    const setOrientation = () => {
        if (container.classList.contains('horizontal')) {
            setVertical();
        } else if (container.classList.contains('vertical')) {
            setHorizontal();
        }
    };

    const takeDownWaterAreas = () => {
        shipWaterAreas.clearAreas();
    };

    const launchShipOnWater = (nHead) => {
        try {
            let waterAreas = getWaterArea(nHead);
            let acessibility = waterAreas.checkArea();
            if (acessibility) {
                takeDownWaterAreas();
                shipWaterAreas = waterAreas;
                shipWaterAreas.occupyAreas();
            }

            return acessibility;
        } catch (error) {
            return false;
        }
    };

    const getWaterArea = (head) => {
        let board = getBoard().getStructedContainer();
        let areas = ShipWaterAreas(player, container);
        let x = head.getXY().x;
        let y = head.getXY().y;
        let necessarySectors = [];
        for (let i = 0; i < length; i++) {
            necessarySectors.push(board[y][x]);
            if (horizontal) {
                x++;
            } else {
                y++;
            }
        }
        areas.setAreas(necessarySectors);
        return areas;
    };

    const isLive = () => {
        live = false;

        body.forEach((deck) => {
            if (!deck.isHit()) {
                live = true;
            }
        });

        return live;
    };

    const getBody = () => {
        return body;
    };

    const getContainer = () => {
        return container;
    };

    const getHead = () => {
        return head;
    };

    const setHead = (nHead) => {
        head = nHead;
    };

    const isHorizontal = () => {
        return horizontal;
    };

    const orientationSwitch = () => {
        horizontal = !horizontal;
    };

    const setVertical = () => {
        container.classList.remove('horizontal');
        container.classList.add('vertical');
        container.style.height = `${length * 5}vh`;
        container.style.width = `5vh`;
        horizontal = false;
    };

    const setHorizontal = () => {
        container.classList.remove('vertical');
        container.classList.add('horizontal');
        container.style.width = `${length * 5}vh`;
        container.style.height = `5vh`;
        horizontal = true;
    };

    const setRandomOrientation = () => {
        randomIntFromInterval(0, 1) === 1 ? setHorizontal() : setVertical();
    };

    const getBoard = () => {
        return player.getGameboard();
    };

    const reset = () => {
        setHorizontal();
        if (head !== null) {
            head.getCellNode().removeChild(container);
            head = null;
        }
        shipWaterAreas.clearAreas();
        shipWaterAreas = ShipWaterAreas(player, container);
    };

    fillContainer();

    return {
        setRandomOrientation,
        reset,
        setHorizontal,
        setVertical,
        getBoard,
        takeDownWaterAreas,
        launchShipOnWater,
        orientationSwitch,
        setOrientation,
        isLive,
        getBody,
        getContainer,
        getHead,
        setHead,
        isHorizontal,
    };
};

export const Fregat = (marker) => {
    const prototype = Ship(4, marker);
    return Object.assign(prototype, marker);
};

export const Caravel = (marker) => {
    const prototype = Ship(3, marker);
    return Object.assign(prototype);
};

export const Drakkar = (marker) => {
    const prototype = Ship(2, marker);
    return Object.assign(prototype);
};

export const Boat = (marker) => {
    const prototype = Ship(1, marker);
    return Object.assign(prototype);
};

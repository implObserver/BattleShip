import { randomIntFromInterval } from '../helper/helper';
import { setLowOpacity } from '../views/animations/changeVisible';
import { getNode } from '../views/nodes/factory';
import {
    resetShipStyle,
    setDeathStyleOnShip,
    setStandartHorizontalShipDesign,
    setStandartVerticalShipDesign,
} from '../views/nodes/ship';
import { Deck } from './cell';
import { ShipWaterAreas } from './waterAreas';

export const Ship = (length, player, type) => {
    const container = getNode('ship', 'horizontal');
    let body = [];
    let live = true;
    let horizontal = true;
    let head = null;
    let ship = {};
    let shipWaterAreas = ShipWaterAreas(player, ship);

    const setYourself = (thisShip) => {
        ship = thisShip;
    };

    const getYourself = () => {
        return ship;
    };

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
                linkShipWithField();
                shipWaterAreas.occupyAreas();
            }
            return acessibility;
        } catch (error) {
            return false;
        }
    };

    const linkShipWithField = () => {
        let area = shipWaterAreas.getAreaUnderTheShip();
        for (let i = 0; i < length; i++) {
            const xy = area[i].getXY();
            body[i].setXY(xy.x, xy.y);
            area[i].setLinkedDeck(body[i]);
        }
    };

    const getWaterArea = (head) => {
        let board = getBoard().getStructedContainer();
        let areas = ShipWaterAreas(player, ship);
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
        setStandartVerticalShipDesign(container, length);
        horizontal = false;
    };

    const setHorizontal = () => {
        setStandartHorizontalShipDesign(container, length);
        horizontal = true;
    };

    const setRandomOrientation = () => {
        randomIntFromInterval(0, 1) === 1 ? setHorizontal() : setVertical();
    };

    const getBoard = () => {
        return player.getGameboard();
    };

    const reset = () => {
        head = null;
        if (!container.classList.contains('mini-ship')) {
            setHorizontal();
        }
        resetBody();
        shipWaterAreas.clearAreas();
        shipWaterAreas = ShipWaterAreas(player, ship);
    };

    const resetBody = () => {
        resetShipStyle(container);
        body.forEach((deck) => {
            deck.reset();
        });
    };

    const getType = () => {
        return type;
    };

    const kill = () => {
        body.forEach((deck) => {
            setLowOpacity(deck.getCellNode());
            deck.setTheHit();
        });
        setDeathStyleOnShip(container);
        live = false;
    };

    const getWaterAreas = () => {
        return shipWaterAreas;
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
        setYourself,
        getYourself,
        getType,
        kill,
        getWaterAreas,
    };
};

export const Fregat = (marker) => {
    const prototype = Ship(4, marker, 'fregats');
    return Object.assign(prototype, marker);
};

export const Caravel = (marker) => {
    const prototype = Ship(3, marker, 'caravels');
    return Object.assign(prototype);
};

export const Drakkar = (marker) => {
    const prototype = Ship(2, marker, 'drakkars');
    return Object.assign(prototype);
};

export const Boat = (marker) => {
    const prototype = Ship(1, marker, 'boats');
    return Object.assign(prototype);
};

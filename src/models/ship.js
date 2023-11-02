import { getNode } from '../views/nodes/factory';
import { viewShip } from '../views/nodes/ship';
import { Cell, Deck } from './cell';
import { Gameboard, isFitOnGameboardAxis, playerGameboard } from './gameBoard';
import { Config } from './gameConfig';
import { Session } from './session';
import { ShipWaterAreas } from './waterAreas';

export const Ship = (numberOfDecks) => {
    const container = getNode('ship', 'horizontal');
    let length = numberOfDecks;
    let body = [];
    let live = true;
    let horizontal = true;
    let head = null;
    let legal = true;
    let shipWaterAreas = ShipWaterAreas();
    let occupiedMarineSectors = [];

    const fillContainer = () => {
        for (let i = 0; i < length; i++) {
            let deck = Deck(i);
            body.push(deck);
            container.appendChild(deck.getCellNode());
        }
    };

    const setOrientation = () => {
        if (container.classList.contains('horizontal')) {
            container.classList.remove('horizontal')
            container.classList.add('vertical')
            horizontal = false;
        } else if (container.classList.contains('vertical')) {
            container.classList.remove('vertical')
            container.classList.add('horizontal')
            horizontal = true
        }
    }

    const takeDownWaterAreas = () => {
        shipWaterAreas.clearAreas();
    }

    const launchShipOnWater = (nHead) => {
        try {
            let waterAreas = getWaterArea(nHead);
            let acessibility = waterAreas.checkArea();
            if (acessibility) {
                takeDownWaterAreas();
                shipWaterAreas = waterAreas;
                shipWaterAreas.occupyArea(shipWaterAreas.getAreaUnderTheShip(), container);
                shipWaterAreas.occupyArea(shipWaterAreas.getAreaUnderTheShip(), container);
            }

            return acessibility;
        } catch (error) {
            console.log(error)
            return false;
        }
    }

    const getWaterArea = (head, board) => {
        let areas = ShipWaterAreas();
        let x = head.getXY().x;
        let y = head.getXY().y;
        let necessarySectors = [];
        for (let i = 0; i < length; i++) {
            necessarySectors.push(playerGameboard.getStructedContainer()[y][x]);
            if (horizontal) {
                x++;
            } else {
                y++;
            }
        }
        areas.setAreas(necessarySectors);
        return areas;
    }

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
    }

    const setHead = (nHead) => {
        head = nHead;
    }

    const isHorizontal = () => {
        return horizontal;
    }

    const isLegal = () => {
        return legal;
    }

    const setLegal = () => {
        legal = true;
    }

    const orientationSwitch = () => {
        horizontal = !horizontal;
    }

    const getSectors = () => {
        return occupiedMarineSectors;
    }

    fillContainer();

    return { getSectors, takeDownWaterAreas, launchShipOnWater, orientationSwitch, setOrientation, isLive, getBody, getContainer, getHead, setHead, isHorizontal, isLegal, setLegal };
};

export const Fregat = () => {
    const prototype = Ship(4);
    return Object.assign(prototype);
};

export const Caravel = () => {
    const prototype = Ship(3);
    return Object.assign(prototype);
};

export const Drakkar = () => {
    const prototype = Ship(2);
    return Object.assign(prototype);
};

export const Boat = () => {
    const prototype = Ship(1);
    return Object.assign(prototype);
};

export const shipDragEnd = () => {
    let isMoveable = false;
    let isAlterMovable = false;
    let body = Session.activeShip.getBody();

    if (Session.currentElement !== undefined) {
        isMoveable = Session.currentElement.classList.contains(`marine-sector`);
        isAlterMovable = Session.currentElement.classList.contains(`deck`);
    }

    if (!isMoveable && !isAlterMovable) {
        return;
    }

    if (isMoveable) {
        for (let i = 0; i < Config.Gameboard.height; i++) {
            for (let j = 0; j < Config.Gameboard.width; j++) {
                if (Session.playerGameBoardCells[j][i].getCellNode() === Session.currentElement) {
                    addShipOnBoard(Session.index, j, i, body.length);
                }
            }
        }
    } else if (isAlterMovable) {
        for (let i = 0; i < body.length; i++) {
            if (body[i].getCellNode() === Session.currentElement) {
                Session.doubleIndex = Session.index - i;
            }
        }
        if (Session.doubleIndex !== 'ship') {
            let head = Session.activeShip.getHead().getCellNode();
            for (let i = 0; i < Config.Gameboard.height; i++) {
                for (let j = 0; j < Config.Gameboard.width; j++) {
                    if (Session.playerGameBoardCells[j][i].getCellNode() === head) {
                        addShipOnBoard(Session.doubleIndex, j, i, body.length)
                    }
                }
            }
        } else {
            return;
        }
    }
}

const addShipOnBoard = (index, y, x, shipLenght) => {
    let data = getData(index, y, x);
    viewShipOnBoard(data.coordinate, data.x, data.y, shipLenght, data.axeLenght)
}

const getData = (index, x, y) => {
    return Session.activeShip.isHorizontal()
        ? { coordinate: y - index, x: x, y: y - index, axeLenght: Config.Gameboard.width }
        : { coordinate: x - index, x: x - index, y: y, axeLenght: Config.Gameboard.height }
}

const viewShipOnBoard = (coordinate, x, y, shipLenght, axeLenght) => {
    console.log(`${coordinate} ${shipLenght} ${axeLenght}`)
    if (isFitOnGameboardAxis(coordinate, shipLenght, axeLenght)) {
        return;
    } else {
        if (Session.playerGameBoardCells[x][y].getParent() === 'free'
            || Session.playerGameBoardCells[x][y].getParent() == Session.activeShip.getContainer()
        ) {
            viewShip(Session.activeShip, Session.playerGameBoardCells[x][y]);
        }
    }
}

export const shipTravers = (func, ship, head) => {

}

export const removeChilds = (node) => {
    if (node !== null) {
        while (node.firstChild) {
            node.removeChild(node.lastChild);
        }
    }
}

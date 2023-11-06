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
    let legal = true;
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
            setVertical()
        } else if (container.classList.contains('vertical')) {
            setHorizontal()
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
                shipWaterAreas.occupyAreas();
            }

            return acessibility;
        } catch (error) {
            console.log(error)
            return false;
        }
    }

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

    const setVertical = () => {
        container.classList.remove('horizontal')
        container.classList.add('vertical')
        container.style.height = `${length * 5}vh`;
        container.style.width = `5vh`;
        horizontal = false;
    }

    const setHorizontal = () => {
        container.classList.remove('vertical')
        container.classList.add('horizontal')
        container.style.width = `${length * 5}vh`;
        container.style.height = `5vh`;
        horizontal = true
    }

    const getBoard = () => {
        return player.getGameboard();
    }

    const reset = () => {
        setHorizontal();
        if (head !== null) {
            head.getCellNode().removeChild(container);
            head = null;
        }
        shipWaterAreas.clearAreas();
        shipWaterAreas = ShipWaterAreas(player, container)
    }

    fillContainer();

    return { reset, setHorizontal, setVertical, getBoard, takeDownWaterAreas, launchShipOnWater, orientationSwitch, setOrientation, isLive, getBody, getContainer, getHead, setHead, isHorizontal, isLegal, setLegal };
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

export const shipDragEnd = () => {
    let isMoveable = false;
    let isAlterMovable = false;
    let body = Session.activeShip.getBody();
    if (Session.currentElement !== null) {
        isMoveable = Session.currentElement.classList.contains(`marine-sector`);
        isAlterMovable = Session.currentElement.classList.contains(`deck`);
    }

    if (!isMoveable && !isAlterMovable) {
        console.log('what')
        return false;
    }

    if (isMoveable) {
        for (let i = 0; i < Config.Gameboard.height; i++) {
            for (let j = 0; j < Config.Gameboard.width; j++) {
                if (Session.activeShip.getBoard().getStructedContainer()[j][i].getCellNode() === Session.currentElement) {
                    return addShipOnBoard(Session.index, j, i, body.length);
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
                    if (Session.activeShip.getBoard().getStructedContainer()[j][i].getCellNode() === head) {
                        return addShipOnBoard(Session.doubleIndex, j, i, body.length)
                    }
                }
            }
        } else {
            console.log('WHAT')
            return false;
        }
    }
}

const addShipOnBoard = (index, y, x, shipLenght) => {
    let data = getData(index, y, x);
    return viewShipOnBoard(data.coordinate, data.x, data.y, shipLenght, data.axeLenght)
}

const getData = (index, x, y) => {
    return Session.activeShip.isHorizontal()
        ? { coordinate: y - index, x: x, y: y - index, axeLenght: Config.Gameboard.width }
        : { coordinate: x - index, x: x - index, y: y, axeLenght: Config.Gameboard.height }
}

const viewShipOnBoard = (coordinate, x, y, shipLenght, axeLenght) => {
    if (isFitOnGameboardAxis(coordinate, shipLenght, axeLenght)) {
        console.log('whaaaaat')
        return false;
    } else {
        return viewShip(Session.activeShip, Session.activeShip.getBoard().getStructedContainer()[x][y]);
    }
}

export const removeChilds = (node) => {
    if (node !== null) {
        while (node.firstChild) {
            node.removeChild(node.lastChild);
        }
    }
}

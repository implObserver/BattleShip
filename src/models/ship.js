import { getNode } from '../views/nodes/factory';
import { viewShip } from '../views/nodes/ship';
import { Cell, Deck } from './cell';
import { Gameboard, isFitOnGameboardAxe, playerGameboard } from './gameBoard';
import { Config } from './gameConfig';
import { Session } from './session';

export const Ship = (numberOfDecks) => {
    const container = getNode('ship', 'horizontal');
    let length = numberOfDecks;
    let body = [];
    let live = true;
    let horizontal = true;
    let parent = null;
    let legal = true;

    const setDefaultContainer = () => {
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
            container.classList.add('horizontal')
            container.classList.remove('vertical')
            horizontal = true
        }
    }

    const setCoordinates = (i, x, y) => {
        body[i].setXY(x, y);
    }

    const occupyCells = (i, x, y) => {
        playerGameboard.getStructedContainer()[y][x].setParent(container);
    }

    const clearCells = (i, x, y) => {
        playerGameboard.getStructedContainer()[y][x].setParent('free');
    }

    const checkCells = (i, x, y) => {
        console.log(playerGameboard.getStructedContainer()[y][x].getParent())
        let isLegal = playerGameboard.getStructedContainer()[y][x].getParent() === 'free';
        if (!isLegal) {
            legal = false;
        }
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

    const getParent = () => {
        return parent;
    }

    const setParent = (nParent) => {
        parent = nParent;
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

    const setVertical = () => {
        horizontal = false;
    }

    const setHorizontal = () => {
        horizontal = true;
    }

    setDefaultContainer();

    return { setVertical, setHorizontal, setOrientation, isLive, getBody, getContainer, getParent, setParent, isHorizontal, setCoordinates, occupyCells, clearCells, checkCells, isLegal, setLegal };
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

export const dragEnd = () => {
    let isMoveable = false;
    let isAlterMovable = false;
    let body = Session.activeShip.getBody();

    if (Session.currentElement !== undefined) {
        isMoveable = Session.currentElement.classList.contains(`cell`);
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
            let head = Session.activeShip.getParent().getCellNode();
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
    if (isFitOnGameboardAxe(coordinate, shipLenght, axeLenght)) {
        return;
    } else {
        console.log(Session.playerGameBoardCells[x][y].getParent())
        if (Session.playerGameBoardCells[x][y].getParent() === 'free'
        ) {
            viewShip(Session.activeShip, Session.playerGameBoardCells[x][y]);
        }
    }
}

export const shipTravers = (func, ship, head) => {
    ship.setLegal();
    if (head !== null) {
        let x = head.getXY().x;
        let y = head.getXY().y;
        let length = ship.getBody().length;

        for (let i = 0; i < length; i++) {
            func(i, x, y);
            if ((ship.isHorizontal())) {
                x++;
            } else {
                y++;
            }
        }
    }
}

export const removeChilds = (node) => {
    if (node !== null) {
        while (node.firstChild) {
            node.removeChild(node.lastChild);
        }
    }
}

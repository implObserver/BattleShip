import { player1 } from '..';
import { MarineSector } from './cell';
import { Config } from './gameConfig';
import { Session, resetSession } from './session';
import { shipDragEnd } from './ship';

export const Gameboard = (name, player) => {
    const width = Config.Gameboard.width;
    const height = Config.Gameboard.height;
    const containers = fillBoard(width, height);
    const node = document.querySelector(`.${name}`);

    const getStructedContainer = () => {
        return containers.getStructed();
    };

    const getUnstructedContainer = () => {
        return containers.getUnstructed();
    };

    const getSize = () => {
        return { width, height };
    };

    const getNode = () => {
        return node;
    };

    const getPlayer = () => {
        return player;
    }

    const isEmpty = () => {
        let launchedShips = node.querySelectorAll('.ship');
        return launchedShips.length === 10;
    }

    const reset = () => {
        containers.getUnstructed().forEach(sector => {
            sector.clear();
        })
        player.getShipyard().reset();
    }

    const addRandomShips = () => {
        player1.getGameboard().reset();
        randomFillingGameboardOfShips(containers);
    }

    return { addRandomShips, reset, isEmpty, getPlayer, getStructedContainer, getUnstructedContainer, getSize, getNode };
};

const fillBoard = (width, height) => {
    let structed = [];
    let unstructed = [];

    for (let i = 0; i < height; i++) {
        let line = [];
        for (let j = 0; j < width; j++) {
            const cell = MarineSector(j, i);
            line[j] = cell;
            unstructed.push(cell);
        }
        structed[i] = line;
    }

    const getStructed = () => {
        return structed;
    }

    const getUnstructed = () => {
        return unstructed;
    }

    return { getStructed, getUnstructed };
};

export const isFitOnGameboardAxis = (coordinate, objLenght, axeLenght) => {
    return coordinate + objLenght > axeLenght
        || coordinate < 0;
}

export const randomFillingGameboardOfShips = (container) => {
    let ships = player1.getShipyard().getAllShips();

    let cells = [...container.getUnstructed()];

    ships.forEach(ship => {
        let isHorizontal = randomIntFromInterval(0, 1) === 1;
        if (isHorizontal) {
            ship.setHorizontal()
        } else {
            ship.setVertical()
        }
        viewRandomShips(ship, cells, container);
        resetSession();
    })
}

const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const viewRandomShips = (ship, cells, container) => {
    let index = randomIntFromInterval(0, cells.length - 1);
    let cell = cells.splice(index, 1)[0];
    let coordinates = cell.getXY();
    Session.activeShip = ship;
    Session.currentElement = container.getStructed()[coordinates.y][coordinates.x].getCellNode();
    let res = shipDragEnd();
    return res ? true : viewRandomShips(ship, cells, container);
}
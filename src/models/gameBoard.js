import { setNullOpacity } from '../views/animations/changeVisible';
import { viewShipOnRandomCell } from '../views/nodes/ship';
import { MarineSector } from './cell';
import { Config } from './gameConfig';

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
    };

    const reset = () => {
        containers.getUnstructed().forEach((sector) => {
            sector.clear();
        });
        player.getShipyard().reset();
    };

    const randomFillingOfShips = () => {
        reset();
        let ships = player.getShipyard().getAllShips();

        ships.forEach((ship) => {
            ship.setRandomOrientation();
            viewShipOnRandomCell(ship, [...getUnstructedContainer()]);
        });
    };

    const blockShips = () => {
        node.querySelectorAll('.ship').forEach((ship) => {
            ship.classList.add('block');
        });
    };

    const unblockShips = () => {
        node.querySelectorAll('.ship').forEach((ship) => {
            ship.classList.remove('block');
        });
    };

    const hiddenShips = () => {
        const board = node.querySelector('.board');
        board.querySelectorAll('.ship').forEach((ship) => {
            ship.style.border = '0px blue solid';
        });
        board.querySelectorAll('.deck').forEach((deck) => {
            setNullOpacity(deck);
        });
    };

    const block = () => {
        node.querySelector('.board').classList.add('block');
    };

    const unblock = () => {
        node.querySelector('.board').classList.remove('block');
    };

    return {
        randomFillingOfShips,
        reset,
        getPlayer,
        getStructedContainer,
        getUnstructedContainer,
        getSize,
        getNode,
        blockShips,
        unblockShips,
        hiddenShips,
        block,
        unblock,
    };
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
    };

    const getUnstructed = () => {
        return unstructed;
    };

    return { getStructed, getUnstructed };
};

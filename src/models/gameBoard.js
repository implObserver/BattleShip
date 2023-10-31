import { Cell } from './cell';
import { Config } from './gameConfig';

export const Gameboard = (name) => {
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

    return { getStructedContainer, getUnstructedContainer, getSize, getNode };
};

const fillBoard = (width, height) => {
    let structed = [];
    let unstructed = [];

    for (let i = 0; i < height; i++) {
        let line = [];
        for (let j = 0; j < width; j++) {
            const cell = Cell(j, i);
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

export const isFitOnGameboardAxe = (coordinate, objLenght, axeLenght) => {
    return coordinate + objLenght > axeLenght
        || coordinate < 0;
}

export const playerGameboard = Gameboard('player-board');
export const aiGameboard = Gameboard('ai-board');

import { Cell } from './cell';
import { Config } from './gameConfig';

export const Gameboard = (name) => {
    const width = Config.Gameboard.width;
    const height = Config.Gameboard.height;
    const containers = fillBoard(width, height);
    const node = document.querySelector(`.${name}`);

    const getStructedContainer = () => {
        return containers.structed;
    };

    const getUnstructedContainer = () => {
        return containers.unstructed;
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
            const cell = Cell(i, j);
            line[j] = cell;
            unstructed.push(cell);
        }
        structed[i] = line;
    }

    return { structed: structed, unstructed: unstructed };
};

export const playerGameboard = Gameboard('player-board');
export const aiGameboard = Gameboard('ai-board');

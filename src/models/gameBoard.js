import { Cell, MarineSector } from './cell';
import { Config } from './gameConfig';
import { Marker } from './player';

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

    return { getPlayer, getStructedContainer, getUnstructedContainer, getSize, getNode };
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

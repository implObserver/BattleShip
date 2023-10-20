import { Cell } from './cell';

export const Gameboard = (w = 10, h = 10) => {
    const width = w;
    const height = h;
    const container = fillBoard(width, height);

    const getContainer = () => {
        return container;
    };

    const getSize = () => {
        return { width, height };
    };

    return { getContainer, getSize };
};

const fillBoard = (width, height) => {
    let container = [];

    for (let i = 0; i < height; i++) {
        let line = [];
        for (let j = 0; j < width; j++) {
            line[j] = Cell(i, j);
        }
        container[i] = line;
    }

    return container;
};

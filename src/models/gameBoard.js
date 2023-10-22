import { Cell } from './cell';
import { Config } from './gameConfig';

export const Gameboard = () => {
    const width = Config.Gameboard.width;
    const height = Config.Gameboard.height;
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

export const playerGameboard = Gameboard();
export const aiGameboard = Gameboard();

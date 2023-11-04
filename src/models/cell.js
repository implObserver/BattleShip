import { getNode } from '../views/nodes/factory';

export const Cell = (x = -1, y = -1, name = 'cell') => {
    let hit = false;
    let parent = 'free';
    let node = getNode(name, 'cell');

    const setTheHit = () => {
        hit = true;
    };

    const isHit = () => {
        return hit;
    };

    const setParent = (nParent) => {
        parent = nParent;
    };

    const getParent = () => {
        return parent;
    };

    const getCellNode = () => {
        return node;
    };

    const getXY = () => {
        return { x, y };
    };

    const setXY = (nx, ny) => {
        x = nx;
        y = ny;
    }

    return { setTheHit, isHit, setParent, getParent, getCellNode, getXY, setXY };
};

export const Deck = (number) => {
    const prototype = Cell(-1, -1, 'deck');

    const getNumber = () => {
        return number;
    }

    return Object.assign(prototype, { getNumber });
}

export const MarineSector = (y, x) => {
    const prototype = Cell(y, x, 'marine-sector');
    let occupant = 'free';

    const occupy = (nOccupant) => {
        occupant = nOccupant;
    }

    const clear = () => {
        occupant = 'free';
    }

    const isFree = () => {
        return occupant === 'free';
    }

    const getOccupant = () => {
        return occupant;
    }

    return Object.assign(prototype, { isFree, clear, occupy, getOccupant });
}
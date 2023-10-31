import { getNode } from '../views/nodes/factory';

export const Cell = (cx = -1, cy = -1, name = 'cell') => {
    let hit = false;
    let parent;
    let node = getNode(name);
    let x = cx;
    let y = cy;

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

    const setXY = (cx, cy) => {
        x = cx;
        y = cy;
    }

    return { setTheHit, isHit, setParent, getParent, getCellNode, getXY, setXY };
};

export const Deck = (num) => {
    const prototype = Cell(-1, -1, 'deck');
    const number = num;

    const getNumber = () => {
        return number;
    }

    return Object.assign(prototype, { getNumber });
}
import { getNode } from '../views/nodes/factory';

export const Cell = (cx = -1, cy = -1) => {
    let hit = false;
    let parent;
    let node = getNode('cell');
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

    return { setTheHit, isHit, setParent, getParent, getCellNode };
};

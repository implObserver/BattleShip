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

    return { setTheHit, isHit, setParent, getParent, getCellNode, getXY };
};

export const Cell = () => {
    let hit = false;
    let parent;
    let node;
    let x;
    let y;

    const setTheHit = () => {
        hit = true;
    }

    const isHit = () => {
        return hit;
    }

    const setParent = (nParent) => {
        parent = nParent;
    }

    const getParent = () => {
        return parent;
    }

    return { setTheHit, isHit, setParent, getParent }
}
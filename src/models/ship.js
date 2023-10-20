import { getNode } from '../views/nodes/factory';
import { Cell } from './cell';

export const Ship = (l) => {
    const container = getNode('ship');
    let length = l;
    let body = [];
    let live = true;
    let orientation = 'horizontal';

    for (let i = 0; i < length; i++) {
        let cell = Cell();
        body.push(cell);
        container.appendChild(cell.getCellNode());
    }

    const isLive = () => {
        live = false;

        body.forEach((cell) => {
            if (!cell.isHit()) {
                live = true;
            }
        });

        return live;
    };

    const getBody = () => {
        return body;
    };

    return { isLive, getBody };
};

export const Fregat = () => {
    const prototype = Ship(4);
    return Object.assign(prototype);
};

export const Caravel = () => {
    const prototype = Ship(3);
    return Object.assign(prototype);
};

export const Drakkar = () => {
    const prototype = Ship(2);
    return Object.assign(prototype);
};

export const Boat = () => {
    const prototype = Ship(1);
    return Object.assign(prototype);
};

import { getNode } from '../views/nodes/factory';
import { Cell } from './cell';
import { playerGameboard } from './gameBoard';

export const Ship = (l) => {
    const container = getNode('ship');
    let length = l;
    let body = [];
    let live = true;
    let orientation = 'horizontal';

    const setDefaultContainer = () => {
        for (let i = 0; i < length; i++) {
            let cell = Cell(-1, -1, 'ship-cell');
            body.push(cell);
            container.appendChild(cell.getCellNode());
        }
    };

    const fillContainer = (head) => {
        let x = head.getXY().x;
        let y = head.getXY().y;

        for (let i = 0; i < length; i++) {
            let cell = playerGameboard.getStructedContainer[x][y].getCellNode();
            cell.classList.add('ship-cell')
            container[i] = cell;

            if (orientation = 'horizontal') {
                x++;
            } else {
                y++;
            }
        }
    }

    const removeContainer = () => {
        setDefaultContainer();
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

    const getContainer = () => {
        return container;
    }

    setDefaultContainer();

    return { isLive, getBody, getContainer };
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

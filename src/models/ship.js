import { getNode } from '../views/nodes/factory';
import { Cell, Deck } from './cell';
import { playerGameboard } from './gameBoard';

export const Ship = (numberOfDecks) => {
    const container = getNode('ship');
    let length = numberOfDecks;
    let body = [];
    let live = true;
    let orientation = true;
    let parent = null;

    const setDefaultContainer = () => {
        for (let i = 0; i < length; i++) {
            let deck = Deck(i);
            body.push(deck);
            container.appendChild(deck.getCellNode());
        }
    };

    const fillContainer = (head) => {
        if (parent !== null) {
            removeChilds(parent.getCellNode());
        }
        parent = head;
        let x = head.getXY().x;
        let y = head.getXY().y;
        parent.getCellNode().appendChild(container)

        for (let i = 0; i < length; i++) {
            body[i].setXY(x, y);
            if ((orientation)) {
                x++;
            } else {
                y++;
            }
        }
    };

    const removeContainer = () => {
        setDefaultContainer();
    };

    const isLive = () => {
        live = false;

        body.forEach((deck) => {
            if (!deck.isHit()) {
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
    };

    const getParent = () => {
        return parent;
    }

    const getOrientation = () => {
        return orientation;
    }

    setDefaultContainer();

    return { isLive, getBody, getContainer, fillContainer, getParent, getOrientation };
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


export const removeChilds = (node) => {
    if (node !== null) {
        while (node.firstChild) {
            node.removeChild(node.lastChild);
        }
    }
}

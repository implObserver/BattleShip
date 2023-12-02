import { Config } from '../models/gameConfig';
import { Session } from '../models/session';
import { viewShip } from '../views/nodes/ship';

export const shipDragEnd = () => {
    let isMoveable = false;
    let isAlterMovable = false;
    let body = Session.activeShip.getBody();
    
    if (Session.currentElement !== null) {
        isMoveable = Session.currentElement.classList.contains(`marine-sector`);
        isAlterMovable = Session.currentElement.classList.contains(`deck`);
    }

    if (!isMoveable && !isAlterMovable) {
        return false;
    }

    if (isMoveable) {
        for (let i = 0; i < Config.Gameboard.height; i++) {
            for (let j = 0; j < Config.Gameboard.width; j++) {
                if (
                    Session.activeShip
                        .getBoard()
                        .getStructedContainer()
                        [j][i].getCellNode() === Session.currentElement
                ) {
                    return addShipOnBoard(Session.index, j, i);
                }
            }
        }
    } else if (isAlterMovable) {
        for (let i = 0; i < body.length; i++) {
            if (body[i].getCellNode() === Session.currentElement) {
                Session.doubleIndex = Session.index - i;
            }
        }
        if (Session.doubleIndex !== 'ship') {
            let head = Session.activeShip.getHead().getCellNode();
            for (let i = 0; i < Config.Gameboard.height; i++) {
                for (let j = 0; j < Config.Gameboard.width; j++) {
                    if (
                        Session.activeShip
                            .getBoard()
                            .getStructedContainer()
                            [j][i].getCellNode() === head
                    ) {
                        return addShipOnBoard(Session.doubleIndex, j, i);
                    }
                }
            }
        } else {
            return false;
        }
    }
};

const addShipOnBoard = (index, y, x) => {
    console.log('bbbcxvxcxcx')
    let data = getData(index, y, x);
    return viewShipOnBoard(data);
};

const getData = (index, x, y) => {
    return Session.activeShip.isHorizontal()
        ? { x: x, y: y - index }
        : { x: x - index, y: y };
};

const viewShipOnBoard = (data) => {
    return viewShip(
        Session.activeShip,
        Session.activeShip.getBoard().getStructedContainer()[data.x][data.y],
    );
};
